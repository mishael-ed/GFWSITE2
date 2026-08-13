import { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`${form.get('reason')} inquiry from ${form.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nPhone: ${form.get('phone') || 'Not provided'}\nReason: ${form.get('reason')}\n\nMessage:\n${form.get('message')}`
    )

    setSubmitted(true)
    window.location.href = `mailto:info@greenfingerswi.org?subject=${subject}&body=${body}`
  }

  return (
    <div className="contact-page">
      <Nav />

      <main className="contact-layout">
        <section className="contact-form-panel">
          <div className="contact-form-heading">
            <span>Send a message</span>
            <h2>HOW CAN WE HELP?</h2>
            <p>Complete the form and your email app will prepare the message for you.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label>
                <span>Your name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Your email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>

            <div className="contact-form-row">
              <label>
                <span>Phone number <small>(optional)</small></span>
                <input type="tel" name="phone" autoComplete="tel" />
              </label>
              <label>
                <span>What is this about?</span>
                <select name="reason" defaultValue="Book a visit">
                  <option>Book a visit</option>
                  <option>Volunteer</option>
                  <option>Wildlife rescue</option>
                  <option>Partnership</option>
                  <option>Education programme</option>
                  <option>General inquiry</option>
                </select>
              </label>
            </div>

            <label>
              <span>Your message</span>
              <textarea name="message" rows="6" required />
            </label>

            <button className="contact-submit" type="submit">Send message</button>
            {submitted && <p className="contact-form-note" role="status">Your email app is opening with the message ready to send.</p>}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
