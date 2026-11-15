// Christmas break plan – data snapshot taken from Google Calendar.
// Google Calendar is the source of truth: change events there, then refresh this file.
//
// Slots: morning (before 12:00), lunch (12:00–14:00), afternoon (14:00–17:00), dinner (17:00 on).
// kind:
//   "family"  – something the family / kids are doing (shown prominently)
//   "away"    – a child is away / looked after by someone else (shown prominently)
//   "routine" – recurring diary entries for other people / the household (shown muted)
// flag: optional short call-to-action shown as a warning badge (e.g. "Needs booking").
// slots: every slot the event overlaps; the first one gets the full card, later ones a "continues" marker.

window.XMAS = {
  syncedAt: "2026-11-15",
  calendarUrl: "https://calendar.google.com/calendar/r/week/2026/12/19",
  family: "Debbie, Charlie, Jasper & Mina",
  breakStart: "2026-12-19",
  breakEnd: "2027-01-04",
  backToSchool: { date: "2027-01-05", label: "Back to school – Tuesday 5 January" },
  slots: [
    { id: "morning", label: "Morning", hint: "until 12:00" },
    { id: "lunch", label: "Lunch", hint: "12:00–14:00" },
    { id: "afternoon", label: "Afternoon", hint: "14:00–17:00" },
    { id: "dinner", label: "Dinner", hint: "from 17:00" }
  ],
  notes: [
    "Kids break up for Christmas on Saturday 19 December. Monday 4 January is an inset day (Thameside and Newbridge), so they go back on Tuesday 5 January.",
    "“Mina at Newbridge” repeats every weekday in the calendar. It’s probably not running over the holidays (Mina is booked for swimming on 21 Dec), so it’s shown greyed out here. Worth checking."
  ],
  days: [
    { date: "2026-12-19", tags: ["First day of the holidays"], events: [] },
    {
      date: "2026-12-20", tags: [],
      events: [
        {
          title: "Windsor Great Park – SEN session",
          who: "Debbie, Charlie, Jasper & Mina",
          start: "10:00", end: "13:00",
          kind: "family", flag: "Needs booking",
          slots: ["morning", "lunch"],
          link: "https://www.google.com/calendar/event?eid=M2h1ZGhlMHEwZjVkNGJmNWZrYjlybG51NGMgY2hhcmxlc2pvaG5iZWFyZEBt&ctz=Europe/London"
        }
      ]
    },
    {
      date: "2026-12-21", tags: [],
      events: [
        {
          title: "Family swim – Park House Spa (private hire)",
          who: "Charlie, Debbie, Jasper & Mina",
          start: "10:30", end: "11:30",
          detail: "Leave home 10:10, back around 12:30. Booked and paid. Honey End Lane, Reading.",
          kind: "family", flag: null,
          slots: ["morning", "lunch"],
          link: "https://www.google.com/calendar/event?eid=cDhtdHNldGFldHBnaW92ajdyNWIwbTRudGsgY2hhcmxlc2pvaG5iZWFyZEBt&ctz=Europe/London"
        },
        { title: "Matthew – hedge laying at Earth Trust", start: "08:30", end: "15:00", kind: "routine", slots: ["morning", "lunch", "afternoon"], link: "https://www.google.com/calendar/event?eid=MG5odmw1ZmwyNDZobW84ajA0a2F1djN1bWZfMjAyNjEyMjFUMDgzMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Mina at Newbridge", start: "09:00", end: "12:00", kind: "routine", detail: "Probably not running in the holidays", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=YmgyOXJiNWIzOG9hczV1Ym9zc2UxOGRodThfMjAyNjEyMjFUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Dom – pilates", start: "10:00", end: "11:00", kind: "routine", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=bTQ0bDhpbzRranJmcDNuYzI5c3J2YmU0NjhfMjAyNjEyMjFUMTAwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Laura – pilates (Benson)", start: "12:30", end: "14:15", kind: "routine", slots: ["lunch", "afternoon"], link: "https://www.google.com/calendar/event?eid=OXVqcm8yaGdxNm5sajdxdjNhMG05Mm81MTBfMjAyNjEyMjFUMTIzMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" }
      ]
    },
    {
      date: "2026-12-22", tags: [],
      events: [
        { title: "Cleaners", start: "09:00", end: "10:00", kind: "routine", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=c3VwM205a2FjbG1xaWMxaGxncDVpcmo0ZzRfMjAyNjEyMjJUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Mina at Newbridge", start: "09:00", end: "12:00", kind: "routine", detail: "Probably not running in the holidays", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=amdzZTlsZXBob2R1ZnA2NnY4dHV2a2M1dG9fMjAyNjEyMjJUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" }
      ]
    },
    {
      date: "2026-12-23", tags: [],
      events: [
        { title: "Laura – Slimming World", start: "09:00", end: "11:45", kind: "routine", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=MTh0Z2NsZmh2MTYzcWVpM2QzMnNrcGtpM25fMjAyNjEyMjNUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Mina at Newbridge", start: "09:00", end: "12:00", kind: "routine", detail: "Probably not running in the holidays", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=bTk5cG8zbDY0ZDM2MHFjZHZpdWhuOTIxOThfMjAyNjEyMjNUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" }
      ]
    },
    { date: "2026-12-24", tags: ["Christmas Eve"], events: [] },
    { date: "2026-12-25", tags: ["Christmas Day", "Bank holiday"], highlight: true, events: [] },
    {
      date: "2026-12-26", tags: ["Boxing Day"],
      events: [
        {
          title: "At Matthew & Laura’s",
          who: "Debbie, Charlie, Jasper & Mina",
          start: "10:00", end: "14:00",
          detail: "Exact time to be confirmed",
          kind: "family", flag: "Time TBC",
          slots: ["morning", "lunch"],
          link: "https://www.google.com/calendar/event?eid=cTBzMDRqbDhqZXBqcjQ1dXZuc2RyMjZoNjAgY2hhcmxlc2pvaG5iZWFyZEBt&ctz=Europe/London"
        }
      ]
    },
    { date: "2026-12-27", tags: [], events: [] },
    {
      date: "2026-12-28", tags: ["Bank holiday (Boxing Day substitute)"],
      events: [
        { title: "Matthew – hedge laying at Earth Trust", start: "08:30", end: "15:00", kind: "routine", slots: ["morning", "lunch", "afternoon"], link: "https://www.google.com/calendar/event?eid=MG5odmw1ZmwyNDZobW84ajA0a2F1djN1bWZfMjAyNjEyMjhUMDgzMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Mina at Newbridge", start: "09:00", end: "12:00", kind: "routine", detail: "Probably not running in the holidays", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=YmgyOXJiNWIzOG9hczV1Ym9zc2UxOGRodThfMjAyNjEyMjhUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Dom – pilates", start: "10:00", end: "11:00", kind: "routine", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=bTQ0bDhpbzRranJmcDNuYzI5c3J2YmU0NjhfMjAyNjEyMjhUMTAwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Laura – pilates (Benson)", start: "12:30", end: "14:15", kind: "routine", slots: ["lunch", "afternoon"], link: "https://www.google.com/calendar/event?eid=OXVqcm8yaGdxNm5sajdxdjNhMG05Mm81MTBfMjAyNjEyMjhUMTIzMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" }
      ]
    },
    {
      date: "2026-12-29", tags: [],
      events: [
        { title: "Cleaners", start: "09:00", end: "10:00", kind: "routine", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=c3VwM205a2FjbG1xaWMxaGxncDVpcmo0ZzRfMjAyNjEyMjlUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Mina at Newbridge", start: "09:00", end: "12:00", kind: "routine", detail: "Probably not running in the holidays", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=amdzZTlsZXBob2R1ZnA2NnY4dHV2a2M1dG9fMjAyNjEyMjlUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Dom – therapy", start: "10:00", end: "11:00", kind: "routine", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=cGNjNXRob2NhcnI5YmE2dThlcnU2MDZtaThfMjAyNjEyMjlUMTAwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" }
      ]
    },
    {
      date: "2026-12-30", tags: [],
      events: [
        { title: "Laura – Slimming World", start: "09:00", end: "11:45", kind: "routine", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=MTh0Z2NsZmh2MTYzcWVpM2QzMnNrcGtpM25fMjAyNjEyMzBUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Mina at Newbridge", start: "09:00", end: "12:00", kind: "routine", detail: "Probably not running in the holidays", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=bTk5cG8zbDY0ZDM2MHFjZHZpdWhuOTIxOThfMjAyNjEyMzBUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" }
      ]
    },
    {
      date: "2026-12-31", tags: ["New Year’s Eve"],
      events: [
        { title: "L @ Family Centre", start: "09:00", end: "12:00", kind: "routine", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=anFycWc2a2dkZjV1aGRpczc4ZW9tcG91NzhfMjAyNjEyMzFUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Mina at Newbridge", start: "09:00", end: "12:00", kind: "routine", detail: "Probably not running in the holidays", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=OXFhYWl1am02c2V2dDFobzB1bGo0OXJkbW9fMjAyNjEyMzFUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" }
      ]
    },
    {
      date: "2027-01-01", tags: ["New Year’s Day", "Bank holiday"],
      events: [
        { title: "Mina at Newbridge", start: "09:00", end: "12:00", kind: "routine", detail: "Probably not running (bank holiday)", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=MzE4cTlzY3JtNWhpcGliN3VsYTNwMGllbWNfMjAyNzAxMDFUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" }
      ]
    },
    { date: "2027-01-02", tags: [], events: [] },
    {
      date: "2027-01-03", tags: [],
      events: [
        {
          title: "Jasper with Matthew & Laura",
          who: "Jasper",
          start: "10:00", end: "15:00",
          detail: "Monthly visit",
          kind: "away", flag: null,
          slots: ["morning", "lunch", "afternoon"],
          link: "https://www.google.com/calendar/event?eid=cGhyNzRmcml0MjBua2hhc3IycGMwODZkM3NfMjAyNzAxMDNUMTAwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London"
        }
      ]
    },
    {
      date: "2027-01-04", tags: ["Inset day: Thameside & Newbridge"],
      events: [
        { title: "Matthew – hedge laying at Earth Trust", start: "08:30", end: "15:00", kind: "routine", slots: ["morning", "lunch", "afternoon"], link: "https://www.google.com/calendar/event?eid=MG5odmw1ZmwyNDZobW84ajA0a2F1djN1bWZfMjAyNzAxMDRUMDgzMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Mina at Newbridge", start: "09:00", end: "12:00", kind: "routine", detail: "Inset day, so Newbridge is closed", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=YmgyOXJiNWIzOG9hczV1Ym9zc2UxOGRodThfMjAyNzAxMDRUMDkwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Dom – pilates", start: "10:00", end: "11:00", kind: "routine", slots: ["morning"], link: "https://www.google.com/calendar/event?eid=bTQ0bDhpbzRranJmcDNuYzI5c3J2YmU0NjhfMjAyNzAxMDRUMTAwMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" },
        { title: "Laura – pilates (Benson)", start: "12:30", end: "14:15", kind: "routine", slots: ["lunch", "afternoon"], link: "https://www.google.com/calendar/event?eid=OXVqcm8yaGdxNm5sajdxdjNhMG05Mm81MTBfMjAyNzAxMDRUMTIzMDAwWiBjaGFybGVzam9obmJlYXJkQG0&ctz=Europe/London" }
      ]
    }
  ]
};
