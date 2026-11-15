(function () {
  var X = window.XMAS;
  if (!X) { document.getElementById('grid').textContent = 'data.js did not load.'; return; }

  function parse(s) { var p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function fmt(d, o) { return d.toLocaleDateString('en-GB', o); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function link(ev, cls) {
    var a = el('a', cls);
    if (ev.link) { a.href = ev.link; a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  }
  function range(ev) { return ev.start + '–' + ev.end; }

  var start = parse(X.breakStart), end = parse(X.breakEnd);
  var dm = { day: 'numeric', month: 'short' };
  document.getElementById('range').textContent =
    fmt(start, { weekday: 'short', day: 'numeric', month: 'long' }) + ' to ' +
    fmt(end, { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '');
  document.getElementById('back').textContent = X.backToSchool.label.replace(' – ', ': ');

  var sync = document.getElementById('sync');
  sync.appendChild(document.createTextNode('Snapshot from Google Calendar, ' +
    fmt(parse(X.syncedAt), { day: 'numeric', month: 'short', year: 'numeric' }) +
    ' · Google Calendar is the source of truth · '));
  var cal = el('a', null, 'Open Google Calendar');
  cal.href = X.calendarUrl; cal.target = '_blank'; cal.rel = 'noopener noreferrer';
  sync.appendChild(cal);

  var notes = document.getElementById('notes');
  (X.notes || []).forEach(function (n) { notes.appendChild(el('p', null, n)); });
  if (!(X.notes || []).length) notes.hidden = true;

  // Things to sort
  var flagged = [];
  X.days.forEach(function (d) {
    d.events.forEach(function (e) { if (e.flag) flagged.push({ d: d, e: e }); });
  });
  if (flagged.length) {
    var ul = document.getElementById('todo-list');
    flagged.forEach(function (f) {
      var li = el('li');
      li.appendChild(el('span', 'todo-date', fmt(parse(f.d.date), { weekday: 'short', day: 'numeric', month: 'short' })));
      var a = link(f.e, 'todo-title'); a.textContent = f.e.title; li.appendChild(a);
      li.appendChild(el('span', 'badge', f.e.flag));
      ul.appendChild(li);
    });
    document.getElementById('todo').hidden = false;
  }

  // Grid
  var grid = document.getElementById('grid');
  var head = el('div', 'row head');
  head.setAttribute('role', 'row');
  var h0 = el('div', 'cell daycell', 'Day'); h0.setAttribute('role', 'columnheader'); head.appendChild(h0);
  X.slots.forEach(function (s) {
    var h = el('div', 'cell', s.label);
    h.setAttribute('role', 'columnheader');
    h.appendChild(el('span', 'hint', s.hint));
    head.appendChild(h);
  });
  grid.appendChild(head);

  function weekStart(d) {
    var w = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    w.setDate(w.getDate() - ((w.getDay() + 6) % 7));
    return w;
  }
  function weekLabel(n, days) {
    var a = parse(days[0].date), b = parse(days[days.length - 1].date);
    var s = a.getTime() === b.getTime() ? fmt(a, dm)
      : (a.getMonth() === b.getMonth() ? a.getDate() + '–' + fmt(b, dm) : fmt(a, dm) + ' – ' + fmt(b, dm));
    return 'Week ' + n + ' · ' + s;
  }

  var weeks = [], wkMap = {};
  X.days.forEach(function (d) {
    var k = weekStart(parse(d.date)).getTime();
    if (!wkMap[k]) { wkMap[k] = []; weeks.push(wkMap[k]); }
    wkMap[k].push(d);
  });

  weeks.forEach(function (days, i) {
    var wh = el('div', 'weekhead', weekLabel(i + 1, days));
    wh.setAttribute('role', 'presentation');
    grid.appendChild(wh);
    days.forEach(function (d) { grid.appendChild(dayRow(d)); });
  });

  function dayRow(d) {
    var date = parse(d.date), dow = date.getDay();
    var row = el('div', 'row day' + (dow === 0 || dow === 6 ? ' weekend' : '') + (d.highlight ? ' xmas' : ''));
    row.setAttribute('role', 'row');
    var lc = el('div', 'cell daycell');
    lc.setAttribute('role', 'rowheader');
    lc.appendChild(el('span', 'dayname', fmt(date, { weekday: 'short', day: 'numeric', month: 'short' })));
    if (d.tags && d.tags.length) {
      var t = el('span', 'tags');
      d.tags.forEach(function (x) { t.appendChild(el('span', 'tag', x)); });
      lc.appendChild(t);
    }
    row.appendChild(lc);

    X.slots.forEach(function (s) {
      var c = el('div', 'cell slot');
      c.setAttribute('role', 'cell');
      c.appendChild(el('span', 'slotlabel', s.label));
      var body = el('div', 'slotbody');
      var any = false;
      var routines = [];
      d.events.forEach(function (e) {
        var idx = e.slots.indexOf(s.id);
        if (idx < 0) return;
        if (e.kind === 'routine') { if (idx === 0) routines.push(e); return; }
        any = true;
        body.appendChild(idx === 0 ? card(e) : cont(e));
      });
      routines.forEach(function (e) { any = true; body.appendChild(routine(e)); });
      if (!any) { body.appendChild(el('span', 'free', 'Free')); c.classList.add('empty'); }
      c.appendChild(body);
      row.appendChild(c);
    });
    return row;
  }

  function card(e) {
    var a = link(e, 'card ' + e.kind);
    var top = el('div', 'card-top');
    if (e.kind === 'away') top.appendChild(el('span', 'kindlabel', 'Away'));
    top.appendChild(el('span', 'time', range(e)));
    if (e.flag) top.appendChild(el('span', 'badge', e.flag));
    a.appendChild(top);
    a.appendChild(el('div', 'ctitle', e.title));
    if (e.who) a.appendChild(el('div', 'who', e.who));
    if (e.detail) a.appendChild(el('div', 'cdetail', e.detail));
    return a;
  }
  function cont(e) {
    var a = link(e, 'cont ' + e.kind);
    a.textContent = '↳ continues: ' + e.title + ' (until ' + e.end + ')';
    return a;
  }
  function routine(e) {
    var a = link(e, 'routine');
    a.appendChild(el('span', 'time', e.start));
    a.appendChild(document.createTextNode(' ' + e.title));
    if (e.detail) a.appendChild(el('em', null, e.detail));
    return a;
  }
})();
