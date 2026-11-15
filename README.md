# Christmas holidays 2026

A one-page overview of the kids' Christmas break: Saturday 19 December 2026 to Monday 4 January 2027. Back to school is Tuesday 5 January.

Each day is split into Morning, Lunch, Afternoon and Dinner, so you can see at a glance what is on and when.

Google Calendar is the source of truth. This page is a read-only snapshot of it and does not change the calendar.

## How to view it

Open `index.html` in a browser. There is no build step. The page is set up to print on landscape A4.

## Files

- `index.html` - the page itself.
- `styles.css` - layout and styling (referenced by `index.html`).
- `app.js` - renders the day grid from `data.js` (referenced by `index.html`).
- `data.js` - snapshot of the calendar events, loaded as `window.XMAS`.

## How to update

1. Change the event in Google Calendar first.
2. Update `data.js` by hand, or ask Claude to re-sync it from the calendar.

Each event in `data.js` has these fields:

- `title` - event name.
- `who` - who is involved (optional).
- `start` / `end` - times in 24-hour format, UK time.
- `detail` - extra note shown on the card (optional).
- `kind` - `family` (shown prominently), `away` (a child is looked after elsewhere, shown prominently) or `routine` (other people's diary entries, shown muted).
- `flag` - short call to action such as "Needs booking", or `null`.
- `slots` - every slot the event overlaps (`morning`, `lunch`, `afternoon`, `dinner`).
- `link` - the Google Calendar link for the event.

Slot boundaries: morning is before 12:00, lunch is 12:00 to 14:00, afternoon is 14:00 to 17:00, dinner is 17:00 on.
