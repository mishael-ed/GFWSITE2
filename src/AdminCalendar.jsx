import { useEffect, useState } from 'react'
import { adminApi } from './adminApi'
import { defaultEvents } from './calendarDefaults'
import { AdminButton, Message, ui } from './adminUi'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let nextKey = 0
const withKey = (event) => ({ ...event, key: `event-${nextKey++}` })

function AdminCalendar({ onLogout }) {
  const [events, setEvents] = useState(null)
  const [dirty, setDirty] = useState(false)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    adminApi.getCalendar()
      .then((data) => setEvents((data.events ?? defaultEvents).map(withKey)))
      .catch(() => setEvents(defaultEvents.map(withKey)))
  }, [])

  useEffect(() => {
    if (!dirty) return undefined
    const warn = (event) => { event.preventDefault() }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  if (!events) return <p style={ui.hint}>Loading the calendar…</p>

  const change = (key, patch) => {
    setEvents((list) => list.map((event) => (event.key === key ? { ...event, ...patch } : event)))
    setDirty(true)
    setSaved('')
  }

  const add = () => {
    setEvents((list) => [...list, withKey({ month: new Date().getMonth(), day: null, title: '' })])
    setDirty(true)
    setSaved('')
  }

  const remove = (key) => {
    setEvents((list) => list.filter((event) => event.key !== key))
    setDirty(true)
    setSaved('')
  }

  const save = async () => {
    setError('')
    setSaved('')

    const missing = events.findIndex((event) => !event.title.trim())
    if (missing !== -1) return setError(`Event ${missing + 1} needs a title. Fill it in or delete the row.`)

    const sorted = [...events]
      .map(({ month, day, title }) => ({ month: Number(month), day: day === '' || day === null ? null : Number(day), title: title.trim() }))
      .sort((a, b) => a.month - b.month || (a.day ?? 0) - (b.day ?? 0))

    setBusy(true)
    try {
      const data = await adminApi.saveCalendar(sorted)
      setEvents(data.events.map(withKey))
      setDirty(false)
      setSaved('Saved. The public calendar is updated.')
    } catch (err) {
      if (err.status === 401) return onLogout()
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section>
      <h2 style={{ ...ui.heading, color: '#F69524', fontSize: '38px', marginBottom: '10px' }}>2026 EVENTS CALENDAR</h2>
      <p style={{ ...ui.hint, fontSize: '15px', marginBottom: '22px' }}>
        Add, change or remove events. Leave the day empty for "Date to be announced". Nothing goes live until you press Save.
      </p>

      <div style={{ display: 'grid', gap: '14px' }}>
        {events.map((event, index) => (
          <div key={event.key} style={{ ...ui.card, boxShadow: 'none', padding: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', alignItems: 'end' }}>
            <div>
              <label style={ui.label} htmlFor={`month-${event.key}`}>Month</label>
              <select id={`month-${event.key}`} style={ui.input} value={event.month} onChange={(e) => change(event.key, { month: Number(e.target.value) })}>
                {monthNames.map((name, i) => <option key={name} value={i}>{name}</option>)}
              </select>
            </div>
            <div>
              <label style={ui.label} htmlFor={`day-${event.key}`}>Day</label>
              <input id={`day-${event.key}`} style={ui.input} type="number" min="1" max="31" placeholder="TBA" value={event.day ?? ''} onChange={(e) => change(event.key, { day: e.target.value === '' ? null : e.target.value })} />
            </div>
            <div style={{ gridColumn: 'span 2', minWidth: '200px' }}>
              <label style={ui.label} htmlFor={`title-${event.key}`}>Event {index + 1}</label>
              <input id={`title-${event.key}`} style={ui.input} type="text" maxLength={160} placeholder="Event name" value={event.title} onChange={(e) => change(event.key, { title: e.target.value })} />
            </div>
            <AdminButton small variant="danger" onClick={() => remove(event.key)} aria-label={`Delete event ${index + 1}`}>Delete</AdminButton>
          </div>
        ))}
      </div>

      {!events.length && <p style={ui.hint}>No events. The public calendar will show "No scheduled events" for every month.</p>}

      <Message>{error}</Message>
      <Message kind="ok">{saved}</Message>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '22px' }}>
        <AdminButton onClick={add}>+ Add event</AdminButton>
        <AdminButton variant="primary" onClick={save} disabled={busy || !dirty}>{busy ? 'Saving…' : 'Save changes'}</AdminButton>
      </div>
    </section>
  )
}

export default AdminCalendar
