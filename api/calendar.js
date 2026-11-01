import { fail, readJson, route, send } from './_lib/http.js'
import { readJson as readData, writeJson } from './_lib/store.js'

function cleanEvents(input) {
  if (!Array.isArray(input) || input.length > 300) throw fail(400, 'Events must be a list of up to 300 items.')

  return input.map((event, index) => {
    const title = typeof event?.title === 'string' ? event.title.trim() : ''
    const month = Number(event?.month)
    const day = event?.day === null || event?.day === '' || event?.day === undefined ? null : Number(event.day)

    if (!title || title.length > 160) throw fail(400, `Event ${index + 1} needs a title (up to 160 characters).`)
    if (!Number.isInteger(month) || month < 0 || month > 11) throw fail(400, `Event "${title}" has an invalid month.`)
    if (day !== null && (!Number.isInteger(day) || day < 1 || day > 31)) throw fail(400, `Event "${title}" has an invalid day.`)

    return { month, day, title }
  })
}

export default route(
  {
    // null means nothing has been saved yet, so the site shows its built-in list.
    async GET(req, res) {
      send(res, 200, { events: await readData('calendar', null) })
    },

    async PUT(req, res) {
      const { events } = await readJson(req)
      const cleaned = cleanEvents(events)
      await writeJson('calendar', cleaned)
      send(res, 200, { events: cleaned })
    },
  },
  { adminMethods: ['PUT'] },
)
