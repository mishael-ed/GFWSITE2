import { useEffect, useRef, useState } from 'react'
import { adminApi, uploadImage } from './adminApi'
import { AdminButton, Message, ui } from './adminUi'

let nextKey = 0
const newKey = () => `block-${nextKey++}`
const newBlock = (type) => ({ key: newKey(), type, text: '', src: '', caption: '' })

function PhotoPicker({ src, onChange, onError, label, height = 180 }) {
  const input = useRef(null)
  const [busy, setBusy] = useState(false)
  const [over, setOver] = useState(false)

  const pick = async (file) => {
    if (!file) return
    setBusy(true)
    onError('')
    try {
      onChange(await uploadImage(file))
    } catch (err) {
      onError(err.message, err.status)
    } finally {
      setBusy(false)
      if (input.current) input.current.value = ''
    }
  }

  return (
    <div
      onDragOver={(event) => { event.preventDefault(); setOver(true) }}
      onDragLeave={() => setOver(false)}
      onDrop={(event) => { event.preventDefault(); setOver(false); pick(event.dataTransfer.files[0]) }}
      style={{ border: `2px dashed ${over ? '#009a2e' : '#1C1C1C'}`, borderRadius: '4px 8px 3px 7px', padding: '10px', background: over ? '#eef7d4' : '#fafafa', textAlign: 'center' }}
    >
      {src ? (
        <img src={src} alt="" data-no-lightbox style={{ display: 'block', maxWidth: '100%', maxHeight: '320px', margin: '0 auto 10px', borderRadius: '4px' }} />
      ) : (
        <div style={{ minHeight: height, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Modern Sans', fontWeight: 'bold', color: '#555555', fontSize: '15px' }}>
          {busy ? 'Uploading…' : 'Drop a photo here, or choose one'}
        </div>
      )}
      <input ref={input} type="file" accept="image/*" hidden onChange={(event) => pick(event.target.files[0])} />
      <AdminButton small disabled={busy} onClick={() => input.current?.click()}>
        {busy ? 'Uploading…' : src ? `Replace ${label}` : `Choose ${label}`}
      </AdminButton>
    </div>
  )
}

function InsertBar({ onAdd }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', justifyContent: 'center', padding: '10px 0' }}>
      <span style={{ ...ui.hint, margin: 0 }}>Add here:</span>
      <AdminButton small onClick={() => onAdd('text')}>+ Text</AdminButton>
      <AdminButton small onClick={() => onAdd('heading')}>+ Heading</AdminButton>
      <AdminButton small onClick={() => onAdd('image')}>+ Photo</AdminButton>
    </div>
  )
}

function Editor({ initial, onClose, onLogout }) {
  const [id, setId] = useState(initial?.id ?? null)
  const [title, setTitle] = useState(initial?.title ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')
  const [cover, setCover] = useState(initial?.cover ?? '')
  const [blocks, setBlocks] = useState(() => (initial?.blocks?.length ? initial.blocks.map((block) => ({ ...newBlock(block.type), ...block })) : [newBlock('text')]))
  const [dirty, setDirty] = useState(false)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!dirty) return undefined
    const warn = (event) => { event.preventDefault() }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  const touch = () => { setDirty(true); setSaved(null) }

  const handleUploadError = (message, status) => {
    if (status === 401) return onLogout()
    setError(message)
  }

  const updateBlock = (key, patch) => { setBlocks((list) => list.map((block) => (block.key === key ? { ...block, ...patch } : block))); touch() }
  const insertAt = (index, type) => { setBlocks((list) => [...list.slice(0, index), newBlock(type), ...list.slice(index)]); touch() }
  const removeBlock = (key) => { setBlocks((list) => list.filter((block) => block.key !== key)); touch() }
  const move = (index, direction) => {
    setBlocks((list) => {
      const target = index + direction
      if (target < 0 || target >= list.length) return list
      const copy = [...list]
      ;[copy[index], copy[target]] = [copy[target], copy[index]]
      return copy
    })
    touch()
  }

  const save = async () => {
    setError('')
    if (!title.trim()) return setError('Please add a title.')
    if (!description.trim()) return setError('Please add a short description for the blog card.')
    if (!cover) return setError('A cover photo is required for the blog card.')
    const emptyPhoto = blocks.findIndex((block) => block.type === 'image' && !block.src)
    if (emptyPhoto !== -1) return setError(`Section ${emptyPhoto + 1} is a photo section with no photo. Choose a photo or delete it.`)

    const body = blocks
      .map((block) => (block.type === 'image' ? { type: 'image', src: block.src, caption: block.caption } : { type: block.type, text: block.text }))
    if (!body.some((block) => block.type === 'image' || block.text.trim())) return setError('Please write something in the blog first.')

    setBusy(true)
    try {
      const { blog } = await adminApi.saveBlog({ id, title, description, cover, blocks: body })
      setSaved(blog)
      setId(blog.id)
      setDirty(false)
    } catch (err) {
      if (err.status === 401) return onLogout()
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const leave = () => {
    if (!dirty || window.confirm('You have unsaved changes. Leave without saving?')) onClose()
  }

  return (
    <section>
      <AdminButton small onClick={leave}>← All blogs</AdminButton>
      <h2 style={{ ...ui.heading, color: '#F69524', fontSize: '38px', margin: '18px 0 20px' }}>{id ? 'EDIT BLOG' : 'NEW BLOG'}</h2>

      <div style={{ ...ui.card, display: 'grid', gap: '18px' }}>
        <div>
          <label style={ui.label} htmlFor="blog-title">Title</label>
          <input id="blog-title" style={ui.input} type="text" maxLength={120} value={title} onChange={(event) => { setTitle(event.target.value); touch() }} />
        </div>
        <div>
          <label style={ui.label} htmlFor="blog-description">Short description (shown on the blog card)</label>
          <input id="blog-description" style={ui.input} type="text" maxLength={300} value={description} onChange={(event) => { setDescription(event.target.value); touch() }} />
        </div>
        <div>
          <span style={ui.label}>Cover photo (required, shown on the blog card)</span>
          <PhotoPicker src={cover} label="cover photo" onChange={(url) => { setCover(url); touch() }} onError={handleUploadError} />
        </div>
      </div>

      <h3 style={{ ...ui.heading, color: '#009a2e', fontSize: '30px', margin: '34px 0 6px' }}>THE BLOG</h3>
      <p style={ui.hint}>Build the blog section by section. Add text, headings or photos anywhere, and use the arrows to reorder.</p>

      <InsertBar onAdd={(type) => insertAt(0, type)} />
      {blocks.map((block, index) => (
        <div key={block.key}>
          <div style={{ ...ui.card, boxShadow: 'none', padding: '14px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong style={{ fontFamily: 'Modern Sans', fontSize: '14px' }}>
                {index + 1}. {{ text: 'Text', heading: 'Heading', image: 'Photo' }[block.type]}
              </strong>
              <div style={{ display: 'flex', gap: '6px' }}>
                <AdminButton small disabled={index === 0} onClick={() => move(index, -1)} aria-label="Move up">↑</AdminButton>
                <AdminButton small disabled={index === blocks.length - 1} onClick={() => move(index, 1)} aria-label="Move down">↓</AdminButton>
                <AdminButton small variant="danger" onClick={() => removeBlock(block.key)}>Delete</AdminButton>
              </div>
            </div>

            {block.type === 'heading' && (
              <input style={ui.input} type="text" maxLength={160} placeholder="Heading" aria-label="Heading" value={block.text} onChange={(event) => updateBlock(block.key, { text: event.target.value })} />
            )}
            {block.type === 'text' && (
              <textarea style={{ ...ui.input, minHeight: '130px', resize: 'vertical', fontWeight: 'normal', lineHeight: 1.5 }} placeholder="Write here. Leave a blank line between paragraphs." aria-label="Text" value={block.text} onChange={(event) => updateBlock(block.key, { text: event.target.value })} />
            )}
            {block.type === 'image' && (
              <div style={{ display: 'grid', gap: '10px' }}>
                <PhotoPicker src={block.src} label="photo" onChange={(url) => updateBlock(block.key, { src: url })} onError={handleUploadError} />
                <input style={ui.input} type="text" maxLength={240} placeholder="Caption (optional)" aria-label="Photo caption" value={block.caption} onChange={(event) => updateBlock(block.key, { caption: event.target.value })} />
              </div>
            )}
          </div>
          <InsertBar onAdd={(type) => insertAt(index + 1, type)} />
        </div>
      ))}

      <Message>{error}</Message>
      {saved && (
        <Message kind="ok">
          Saved. <a href={`/blogs/${saved.slug}`} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>View the live blog</a>
        </Message>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '14px' }}>
        <AdminButton variant="primary" onClick={save} disabled={busy}>{busy ? 'Saving…' : id || saved ? 'Save changes' : 'Publish blog'}</AdminButton>
      </div>
    </section>
  )
}

function AdminBlogs({ onLogout }) {
  const [blogs, setBlogs] = useState(null)
  const [editing, setEditing] = useState(undefined) // undefined = list, null = new, object = existing
  const [error, setError] = useState('')

  const load = () =>
    adminApi.getBlogs()
      .then((data) => setBlogs(data.blogs))
      .catch((err) => { setBlogs([]); setError(err.message) })

  useEffect(() => { load() }, [])

  const edit = async (summary) => {
    setError('')
    try {
      const { blog } = await adminApi.getBlog(summary.slug)
      setEditing(blog)
    } catch (err) {
      setError(err.message)
    }
  }

  const remove = async (blog) => {
    if (!window.confirm(`Delete "${blog.title}"? This cannot be undone.`)) return
    try {
      await adminApi.deleteBlog(blog.id)
      load()
    } catch (err) {
      if (err.status === 401) return onLogout()
      setError(err.message)
    }
  }

  if (editing !== undefined) {
    return <Editor key={editing?.id ?? 'new'} initial={editing} onLogout={onLogout} onClose={() => { setEditing(undefined); load() }} />
  }

  return (
    <section>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <h2 style={{ ...ui.heading, color: '#F69524', fontSize: '38px' }}>BLOGS</h2>
        <AdminButton variant="primary" onClick={() => setEditing(null)}>+ New blog</AdminButton>
      </div>
      <p style={{ ...ui.hint, fontSize: '15px', marginBottom: '20px' }}>
        Blogs you publish here appear on the Blogs page after the built-in ones.
      </p>

      <Message>{error}</Message>
      {!blogs && <p style={ui.hint}>Loading…</p>}
      {blogs && !blogs.length && !error && <p style={ui.hint}>No blogs published from here yet. Press "New blog" to write the first one.</p>}

      <div style={{ display: 'grid', gap: '14px' }}>
        {blogs?.map((blog) => (
          <div key={blog.id} style={{ ...ui.card, boxShadow: 'none', padding: '12px', display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <img src={blog.cover} alt="" data-no-lightbox style={{ width: '110px', height: '74px', objectFit: 'cover', borderRadius: '4px' }} />
            <div style={{ flex: 1, minWidth: '180px' }}>
              <strong style={{ fontFamily: 'Modern Sans', fontSize: '17px' }}>{blog.title}</strong>
              <p style={ui.hint}>{new Date(blog.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href={`/blogs/${blog.slug}`} target="_blank" rel="noreferrer" style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '13px', color: '#000000', alignSelf: 'center' }}>View</a>
              <AdminButton small onClick={() => edit(blog)}>Edit</AdminButton>
              <AdminButton small variant="danger" onClick={() => remove(blog)}>Delete</AdminButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminBlogs
