import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import FreeformButton from './FreeformButton'
import { defaultEvents } from './calendarDefaults'

const year = 2026
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function EventsCalendarPage() {
  const [activeMonth, setActiveMonth] = useState(8)
  const [events, setEvents] = useState(defaultEvents)

  useEffect(() => {
    fetch('/api/calendar')
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => { if (Array.isArray(data?.events)) setEvents(data.events) })
      .catch(() => {})
  }, [])
  const firstWeekday = new Date(year, activeMonth, 1).getDay()
  const daysInMonth = new Date(year, activeMonth + 1, 0).getDate()
  const monthEvents = events.filter((event) => event.month === activeMonth)
  const undatedEvents = monthEvents.filter((event) => event.day === null)
  const cells = [
    ...Array.from({ length: firstWeekday }, (_, index) => ({ key: `empty-start-${index}` })),
    ...Array.from({ length: daysInMonth }, (_, index) => ({ key: `day-${index + 1}`, day: index + 1 })),
  ]

  while (cells.length % 7 !== 0) cells.push({ key: `empty-end-${cells.length}` })

  return (
    <div className="events-calendar-page">
      <Nav />

      <main className="calendar-page-content content-page">
        <Link to="/events" className="calendar-back-link">← Back to Events</Link>

        <header className="calendar-heading">
          <p>Save the dates</p>
          <h1>2026 EVENTS CALENDAR</h1>
          <span>Explore Greenfingers events month by month.</span>
        </header>

        <section className="calendar-shell" aria-label="2026 events calendar">
          <div className="calendar-controls">
            <button type="button" onClick={() => setActiveMonth((month) => Math.max(0, month - 1))} disabled={activeMonth === 0} aria-label="Previous month">←</button>
            <div className="calendar-month-select">
              <label htmlFor="calendar-month">Month</label>
              <select id="calendar-month" value={activeMonth} onChange={(event) => setActiveMonth(Number(event.target.value))}>
                {monthNames.map((month, index) => <option key={month} value={index}>{month}</option>)}
              </select>
            </div>
            <button type="button" onClick={() => setActiveMonth((month) => Math.min(11, month + 1))} disabled={activeMonth === 11} aria-label="Next month">→</button>
          </div>

          <h2 aria-live="polite">{monthNames[activeMonth]} {year}</h2>

          {undatedEvents.map((event) => (
            <div className="calendar-undated-event" key={`${event.title}-${event.month}`}>
              <strong>{event.title}</strong>
              <span>Date to be announced</span>
            </div>
          ))}

          <div className="calendar-grid calendar-weekdays" aria-hidden="true">
            {weekDays.map((day) => <div key={day}>{day}</div>)}
          </div>

          <div className="calendar-grid calendar-days">
            {cells.map((cell) => {
              const dayEvents = cell.day ? monthEvents.filter((event) => event.day === cell.day) : []
              return (
                <div className={`calendar-day${cell.day ? '' : ' calendar-day-empty'}${dayEvents.length ? ' calendar-day-has-event' : ''}`} key={cell.key}>
                  {cell.day && <span className="calendar-date">{cell.day}</span>}
                  {dayEvents.map((event, index) => (
                    <span className="calendar-event-label" key={`${event.title}-${index}`}>{event.title}</span>
                  ))}
                </div>
              )
            })}
          </div>

          <div className="calendar-month-events">
            <h3>Events this month</h3>
            {monthEvents.length ? (
              <ul>
                {monthEvents.map((event, index) => (
                  <li key={`${event.title}-${index}`}>
                    <span>{event.day ? `${monthNames[activeMonth]} ${event.day}` : 'Date to be announced'}</span>
                    <strong>{event.title}</strong>
                  </li>
                ))}
              </ul>
            ) : <p>No scheduled events for this month.</p>}
          </div>
        </section>

        <div className="calendar-contact-cta">
          <p>Want to attend, volunteer, or learn more about an event?</p>
          <FreeformButton color="#B2D235" to="/contact">Contact Greenfingers</FreeformButton>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default EventsCalendarPage
