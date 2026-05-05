/* =============================================
   PROFIL — lit le localStorage (branché sur la page login du collègue)
   Contrat : localStorage.setItem('profil', 'alternance' | 'initial')
             localStorage.setItem('user_nom', 'Prénom Nom')
   ============================================= */
const profil   = localStorage.getItem('profil')   || 'alternance';
const userNom  = localStorage.getItem('user_nom')  || 'Étudiant·e';
let modeAlt    = profil === 'alternance';

/* =============================================
   CONFIG
   ============================================= */
const DEBUT_FORMATION = new Date('2026-03-09');

const MODULES = [
  { nom: 'Linux',             duree: 1, groupe: 'tous' },
  { nom: 'Python',            duree: 2, groupe: 'tous' },
  { nom: 'Vue.js',            duree: 1, groupe: 'tous' },
  { nom: 'React',             duree: 1, groupe: 'tous' },
  { nom: 'Angular',           duree: 1, groupe: 'tous' },
  { nom: 'UX/UI',             duree: 2, groupe: 'tous' },
  { nom: 'Docker',            duree: 1, groupe: 'tous' },
  { nom: 'Spé. Dev',          duree: null, groupe: 'dev' },
  { nom: 'Spé. Réseau',       duree: null, groupe: 'reseau' },
];

const JOURS = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi'];
const SLOTS_INITIAL = [9,10,11,12,13,14,15,16];

/* =============================================
   UTILS DATE
   ============================================= */
function getLundi(offset = 0) {
  const today = new Date();
  const diff  = today.getDay() === 0 ? -6 : 1 - today.getDay();
  const d     = new Date(today);
  d.setDate(today.getDate() + diff + offset * 7);
  d.setHours(0,0,0,0);
  return d;
}

function formatDate(d) {
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
}

function formatDateLong(d) {
  return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
}

function isToday(d) {
  return d.toDateString() === new Date().toDateString();
}

function addDays(d, n) {
  const r = new Date(d);
  r.setDate(d.getDate() + n);
  return r;
}

/* =============================================
   MODULE EN COURS
   ============================================= */
function getModuleActuel(lundi) {
  const ms      = 7 * 24 * 3600 * 1000;
  const semOff  = Math.floor((lundi - DEBUT_FORMATION) / ms);
  let cumul     = 0;
  for (let i = 0; i < MODULES.length; i++) {
    const duree = MODULES[i].duree || 999;
    if (semOff >= cumul && semOff < cumul + duree) {
      return { module: MODULES[i], index: i, semaineInModule: semOff - cumul };
    }
    cumul += duree;
  }
  return { module: MODULES[MODULES.length - 1], index: MODULES.length - 1, semaineInModule: 0 };
}

function renderModuleBanner(lundi) {
  const { module, index, semaineInModule } = getModuleActuel(lundi);
  document.getElementById('module-name').textContent = module.nom;
  const semText = module.duree > 1
    ? `Semaine ${semaineInModule + 1}/${module.duree}`
    : 'Semaine unique';
  document.getElementById('module-meta').textContent =
    `${semText} · ${module.groupe === 'tous' ? 'Tout le monde' : module.groupe}`;

  const container = document.getElementById('modules-progress');
  container.innerHTML = '';

  MODULES.forEach((m, i) => {
    if (i > 0) {
      const conn = document.createElement('div');
      conn.className = 'module-connector' + (i <= index ? ' done' : '');
      container.appendChild(conn);
    }
    const dot = document.createElement('div');
    const etat = i < index ? 'done' : i === index ? 'current' : 'upcoming';
    dot.className = `module-dot ${etat}`;
    dot.innerHTML = `<div class="module-dot-circle"></div><div class="module-dot-label">${m.nom}</div>`;
    container.appendChild(dot);
  });

  // Scroll automatique vers le module actuel
  setTimeout(() => {
    const dots = container.querySelectorAll('.module-dot');
    if (dots[index]) dots[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, 100);
}

// Scroll manuel
document.getElementById('scroll-left').addEventListener('click', () => {
  document.getElementById('modules-progress').scrollBy({ left: -80, behavior: 'smooth' });
});
document.getElementById('scroll-right').addEventListener('click', () => {
  document.getElementById('modules-progress').scrollBy({ left: 80, behavior: 'smooth' });
});

/* =============================================
   ÉVÉNEMENTS PERSO (localStorage)
   ============================================= */
function getEventsPerso() {
  try { return JSON.parse(localStorage.getItem('events_perso') || '[]'); }
  catch { return []; }
}

function saveEventsPerso(events) {
  localStorage.setItem('events_perso', JSON.stringify(events));
}

/* =============================================
   VUE ALTERNANCE
   ============================================= */
function renderAlt(lundi) {
  const eventsPerso = getEventsPerso();
  let html = `<div class="planning-grid-alt"><div class="grid-header-row">`;

  JOURS.forEach((nom, i) => {
    const d = addDays(lundi, i);
    html += `<div class="grid-header-cell${isToday(d) ? ' today' : ''}">
      ${nom}<div class="day-date">${formatDate(d)}</div></div>`;
  });

  html += `</div><div class="grid-body">`;

  JOURS.forEach((_, jourIdx) => {
    const d       = addDays(lundi, jourIdx);
    const dateStr = d.toISOString().split('T')[0];
    html += `<div class="day-col${isToday(d) ? ' today-col' : ''}">`;

    if (jourIdx === 0) {
      html += `<div class="event-block type-soutenance">
        <div class="event-title">🎤 Soutenance</div>
        <div class="event-meta">Projet weekend</div>
        <div class="event-time">9h00 – 11h00</div></div>`;
    }

    if (jourIdx === 4) {
      html += `<div class="event-block type-projet">
        <div class="event-title">📦 Projet weekend</div>
        <div class="event-time">16h30 – 17h00</div></div>`;
    }

    const nb = jourIdx === 4 ? '~15' : '20';
    html += `<div class="activites-counter">
      <div class="count">${nb}</div>
      <div class="label">activités du jour</div></div>`;

    // Événements perso
    eventsPerso.filter(e => e.date === dateStr).forEach(e => {
      const invitesTxt = e.invites && e.invites.length
        ? `<div class="event-invites">👥 ${e.invites.join(', ')}</div>` : '';
      html += `<div class="event-block type-${e.type}">
        <div class="event-title">${e.titre}</div>
        ${e.heure ? `<div class="event-time">${e.heure}</div>` : ''}
        ${e.note  ? `<div class="event-meta">${e.note}</div>` : ''}
        ${invitesTxt}</div>`;
    });

    html += `<button class="btn-add-event" onclick="openModal('${dateStr}')">+ Ajouter</button></div>`;
  });

  html += `</div></div>`;
  document.getElementById('planning-container').innerHTML = html;
}

/* =============================================
   VUE INITIAL
   ============================================= */
const EVENTS_INITIAL = [
  { jour: 0, debut: 9,  duree: 2, titre: 'Soutenance',  type: 'soutenance' },
  { jour: 1, debut: 10, duree: 2, titre: 'Atelier',      type: 'atelier' },
  { jour: 2, debut: 14, duree: 2, titre: 'Conférence',   type: 'conference' },
  { jour: 3, debut: 9,  duree: 3, titre: 'Atelier CV',   type: 'atelier' },
  { jour: 4, debut: 9,  duree: 6, titre: 'Activités',    type: 'activite' },
];

function renderInitial(lundi) {
  let html = `<div class="planning-grid-initial"><div class="grid-header-initial">
    <div class="grid-header-cell" style="font-size:0.68rem"></div>`;

  JOURS.forEach((nom, i) => {
    const d = addDays(lundi, i);
    html += `<div class="grid-header-cell${isToday(d) ? ' today' : ''}">
      ${nom}<div class="day-date">${formatDate(d)}</div></div>`;
  });
  html += `</div>`;

  SLOTS_INITIAL.forEach(h => {
    html += `<div class="grid-row-initial"><div class="time-cell">${h}h</div>`;
    JOURS.forEach((_, j) => {
      const d   = addDays(lundi, j);
      const ev  = EVENTS_INITIAL.find(e => e.jour === j && e.debut === h);
      const px  = ev ? ev.duree * 60 - 6 : 0;
      html += `<div class="day-cell-initial${isToday(d) ? ' today-col' : ''}" style="position:relative">
        ${ev ? `<div class="event-block type-${ev.type}" style="position:absolute;top:3px;left:3px;right:3px;height:${px}px">
          <div class="event-title">${ev.titre}</div></div>` : ''}</div>`;
    });
    html += `</div>`;
  });

  html += `</div>`;
  document.getElementById('planning-container').innerHTML = html;
}

/* =============================================
   SIDEBAR
   ============================================= */
function getRendus() {
  return [
    { titre: 'Projet UX/UI – Wireframes', deadline: getLundi(0), urgence: 'urgent' },
    { titre: 'Rapport Angular',           deadline: getLundi(1), urgence: 'soon' },
    { titre: 'Portfolio personnel',        deadline: getLundi(3), urgence: 'ok' },
  ];
}

function getFuturs() {
  return [
    { jour: addDays(getLundi(2), 1), titre: 'Conférence Cybersécurité', meta: 'Amphi principal' },
    { jour: addDays(getLundi(3), 2), titre: 'Atelier CV & Pitch',       meta: 'Salle A101' },
    { jour: addDays(getLundi(4), 0), titre: 'Talk to Alumni',           meta: 'En ligne' },
  ];
}

function renderRendus() {
  document.getElementById('rendus-list').innerHTML = getRendus().map(r => `
    <div class="rendu-item rendu-${r.urgence}">
      <div class="rendu-dot"></div>
      <div>
        <div class="rendu-title">${r.titre}</div>
        <div class="rendu-deadline">📅 ${formatDateLong(r.deadline)}</div>
      </div>
    </div>`).join('');
}

function renderFuturs() {
  document.getElementById('futurs-list').innerHTML = getFuturs().map(f => {
    const mois = f.jour.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase();
    return `<div class="future-item">
      <div class="future-date-box">
        <div class="future-date-day">${f.jour.getDate()}</div>
        <div class="future-date-month">${mois}</div>
      </div>
      <div class="future-info">
        <div class="future-title">${f.titre}</div>
        <div class="future-meta">${f.meta}</div>
      </div>
    </div>`;
  }).join('');
}

/* =============================================
   NOTIFICATIONS
   ============================================= */
let notifications = [
  { titre: 'Soutenance lundi',  corps: 'Présentation du projet weekend à 9h00.',  heure: 'Il y a 10 min', lu: false },
  { titre: 'Projet weekend',    corps: 'Le sujet du projet weekend est en ligne.', heure: 'Il y a 1h',     lu: false },
  { titre: 'Atelier CV',        corps: 'Atelier CV confirmé la semaine prochaine.',heure: 'Hier',           lu: false },
  { titre: 'Module suivant',    corps: 'Docker démarre dans 2 semaines.',          heure: '2 jours',       lu: true  },
];

function addNotification(titre, corps) {
  notifications.unshift({ titre, corps, heure: "À l'instant", lu: false });
  renderNotifPanel();
  updateBadge();
}

function renderNotifPanel() {
  document.getElementById('notif-list').innerHTML = notifications.map((n, i) => `
    <div class="notif-item ${n.lu ? 'read' : 'unread'}" onclick="markRead(${i})">
      <div class="notif-item-title">${n.titre}</div>
      <div class="notif-item-body">${n.corps}</div>
      <div class="notif-item-time">${n.heure}</div>
    </div>`).join('');
}

function markRead(i) {
  notifications[i].lu = true;
  renderNotifPanel();
  updateBadge();
}

function updateBadge() {
  const n = notifications.filter(x => !x.lu).length;
  const badge = document.getElementById('notif-badge');
  badge.textContent = n;
  badge.style.display = n > 0 ? 'flex' : 'none';
}

// Ouvrir/fermer panneau
document.getElementById('btn-notif').addEventListener('click', () => {
  document.getElementById('notif-panel').classList.toggle('open');
});

document.getElementById('notif-close').addEventListener('click', () => {
  document.getElementById('notif-panel').classList.remove('open');
  notifications.forEach(n => n.lu = true);
  renderNotifPanel();
  updateBadge();
});

document.getElementById('mark-all-read').addEventListener('click', () => {
  notifications.forEach(n => n.lu = true);
  renderNotifPanel();
  updateBadge();
});

function requestNotifPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

function sendBrowserNotif(titre, corps) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(titre, { body: corps });
  }
}

/* =============================================
   MODAL — INVITÉS
   ============================================= */
let invites = [];
let modalDate = null;

function openModal(dateStr) {
  modalDate = dateStr;
  invites   = [];
  document.getElementById('form-date').value    = dateStr;
  document.getElementById('form-titre').value   = '';
  document.getElementById('form-note').value    = '';
  document.getElementById('form-invite-input').value = '';
  renderInvitesTags();
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function renderInvitesTags() {
  document.getElementById('invites-tags').innerHTML = invites.map((inv, i) => `
    <div class="invite-tag">
      ${inv}
      <span class="invite-tag-remove" onclick="removeInvite(${i})">✕</span>
    </div>`).join('');
}

function removeInvite(i) {
  invites.splice(i, 1);
  renderInvitesTags();
}

function addInvite() {
  const input = document.getElementById('form-invite-input');
  const val   = input.value.trim();
  if (val && !invites.includes(val)) {
    invites.push(val);
    renderInvitesTags();
  }
  input.value = '';
  input.focus();
}

document.getElementById('btn-add-invite').addEventListener('click', addInvite);
document.getElementById('form-invite-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); addInvite(); }
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

document.getElementById('form-submit').addEventListener('click', () => {
  const titre = document.getElementById('form-titre').value.trim();
  const type  = document.getElementById('form-type').value;
  const date  = document.getElementById('form-date').value;
  const heure = document.getElementById('form-heure').value;
  const note  = document.getElementById('form-note').value.trim();

  if (!titre || !date) return;

  const events = getEventsPerso();
  events.push({ titre, type, date, heure, note, invites: [...invites] });
  saveEventsPerso(events);

  // Notif dans le panneau + browser
  const invitesTxt = invites.length ? ` · ${invites.length} invité(s)` : '';
  addNotification(`📅 Événement ajouté`, `${titre} le ${date} à ${heure}${invitesTxt}`);
  sendBrowserNotif('Événement ajouté', `${titre} – ${date} à ${heure}`);

  closeModal();
  renderAll();
});

/* =============================================
   SWITCH CURSUS (démo)
   ============================================= */
document.getElementById('btn-alternance').addEventListener('click', () => {
  modeAlt = true;
  document.getElementById('btn-alternance').classList.add('active');
  document.getElementById('btn-initial').classList.remove('active');
  renderAll();
});

document.getElementById('btn-initial').addEventListener('click', () => {
  modeAlt = false;
  document.getElementById('btn-initial').classList.add('active');
  document.getElementById('btn-alternance').classList.remove('active');
  renderAll();
});

/* =============================================
   NAVIGATION SEMAINE
   ============================================= */
let offsetSemaine = 0;

document.getElementById('prev-week').addEventListener('click', () => { offsetSemaine--; renderAll(); });
document.getElementById('next-week').addEventListener('click', () => { offsetSemaine++; renderAll(); });
document.getElementById('go-today').addEventListener('click',  () => { offsetSemaine = 0; renderAll(); });

/* =============================================
   RENDER GLOBAL
   ============================================= */
function renderAll() {
  const lundi    = getLundi(offsetSemaine);
  const vendredi = addDays(lundi, 4);
  document.getElementById('week-label').textContent =
    `Semaine du ${formatDate(lundi)} au ${formatDate(vendredi)}`;

  renderModuleBanner(lundi);
  modeAlt ? renderAlt(lundi) : renderInitial(lundi);
  renderRendus();
  renderFuturs();
  renderNotifPanel();
  updateBadge();
}

/* =============================================
   INIT
   ============================================= */
requestNotifPermission();
renderAll();

// Rappel dimanche soir
if (new Date().getDay() === 0) {
  setTimeout(() => sendBrowserNotif('⚡ Rappel ETNA', 'Soutenance demain à 9h00 !'), 3000);
}