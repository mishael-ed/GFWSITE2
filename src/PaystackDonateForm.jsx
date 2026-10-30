import { useState } from 'react'

const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY
const PAYSTACK_SCRIPT = 'https://js.paystack.co/v1/inline.js'
const MIN_AMOUNT = 100

const labelStyle = {
  display: 'block',
  fontFamily: 'Modern Sans',
  fontWeight: 'bold',
  fontSize: '15px',
  color: '#000000',
  marginBottom: '8px',
}

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '13px 14px',
  fontFamily: 'Modern Sans',
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#000000',
  backgroundColor: '#ffffff',
  border: '3px solid #000000',
  borderRadius: '4px 8px 3px 7px',
}

function loadPaystack() {
  if (window.PaystackPop) return Promise.resolve()

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = PAYSTACK_SCRIPT
    script.onload = resolve
    script.onerror = () => reject(new Error('Could not load Paystack'))
    document.head.appendChild(script)
  })
}

function formatNaira(value) {
  return `₦${value.toLocaleString('en-NG')}`
}

function PaystackDonateForm() {
  const [amountInput, setAmountInput] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const amount = Math.round(Number(amountInput))

    setStatus('loading')
    try {
      await loadPaystack()
      const handler = window.PaystackPop.setup({
        key: PAYSTACK_KEY,
        email: form.get('email'),
        amount: amount * 100,
        currency: 'NGN',
        ref: `GFW-${Date.now()}`,
        metadata: {
          custom_fields: [{ display_name: 'Donor name', variable_name: 'donor_name', value: form.get('name') }],
        },
        callback: () => setStatus('success'),
        onClose: () => setStatus((current) => (current === 'success' ? current : 'idle')),
      })
      handler.openIframe()
    } catch {
      setStatus('error')
    }
  }

  const amount = Math.round(Number(amountInput)) || 0
  const validAmount = amount >= MIN_AMOUNT

  if (!PAYSTACK_KEY) {
    return (
      <p style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '16px', color: '#b00020', marginTop: '30px' }}>
        Online donations aren’t switched on yet. Please contact us to donate.
      </p>
    )
  }

  if (status === 'success') {
    return (
      <div role="status" style={{ marginTop: '34px', padding: '28px 30px', backgroundColor: '#1C1C1C', color: '#ffffff', borderRadius: '4px 8px 3px 7px', boxShadow: '8px 8px 0 #B2D235' }}>
        <h3 style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', fontWeight: 'normal', fontSize: '40px', lineHeight: 1, margin: '0 0 12px', color: '#B2D235' }}>THANK YOU!</h3>
        <p style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
          Your gift of {formatNaira(amount)} will help care for rescued wildlife.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '34px' }}>
      <label style={{ display: 'block', marginBottom: '28px' }}>
        <span style={labelStyle}>Enter your donation amount (₦)</span>
        <div style={{ position: 'relative', maxWidth: '320px' }}>
          <span aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '20px' }}>₦</span>
          <input
            style={{ ...inputStyle, paddingLeft: '40px', fontSize: '20px' }}
            type="number"
            name="amount"
            inputMode="numeric"
            min={MIN_AMOUNT}
            step="1"
            placeholder="0"
            value={amountInput}
            onChange={(event) => setAmountInput(event.target.value)}
            required
          />
        </div>
        <small style={{ display: 'block', marginTop: '8px', fontFamily: 'Modern Sans', fontSize: '13px', color: '#333333' }}>
          Minimum {formatNaira(MIN_AMOUNT)}
        </small>
      </label>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '8px' }}>
        <label>
          <span style={labelStyle}>Your name</span>
          <input style={inputStyle} type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          <span style={labelStyle}>Your email</span>
          <input style={inputStyle} type="email" name="email" autoComplete="email" required />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || !validAmount}
        style={{
          margin: '26px 0 8px',
          padding: '16px 36px',
          fontFamily: 'Modern Sans',
          fontWeight: 'bold',
          fontSize: '17px',
          color: '#000000',
          backgroundColor: '#B2D235',
          border: '3px solid #000000',
          borderRadius: '4px 8px 3px 7px',
          boxShadow: '5px 5px 0 #000000',
          cursor: status === 'loading' ? 'wait' : validAmount ? 'pointer' : 'not-allowed',
          opacity: validAmount ? 1 : 0.55,
        }}
      >
        {status === 'loading' ? 'Opening secure payment…' : validAmount ? `Donate ${formatNaira(amount)}` : 'Donate'}
      </button>

      <p style={{ fontFamily: 'Modern Sans', fontSize: '14px', margin: '10px 0 0', color: '#333333' }}>
        Payments are processed securely by Paystack.
      </p>

      {status === 'error' && (
        <p role="alert" style={{ fontFamily: 'Modern Sans', fontWeight: 'bold', fontSize: '15px', color: '#b00020', margin: '12px 0 0' }}>
          We couldn’t open the payment window. Please check your connection and try again.
        </p>
      )}
    </form>
  )
}

export default PaystackDonateForm
