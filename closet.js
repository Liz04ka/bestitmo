// V7: Шкаф мерча — генерация толстовок и модалка

const GARMENTS = [
  { id: 'volunteer', type: 'hoodie', color: '#ff6b3d', textColor: '#fff', label: 'ITMO', meta: '2019 · волонтёр',
    title: 'Первая толстовка', roleTag: 'ВОЛОНТЁР · 2019', count: '×3',
    body: '<p>С неё всё началось. Первый Open Day, первая бригада волонтёров, первая «своя» вещь от университета. До сих пор лежит в комоде — донашиваю дома.</p>',
    tags: ['ДОДы', 'первый сезон'], stats: [['×3','штуки'],['2019','год'],['❤','любимая']], photos: ['🎤 на сцене ДОД','✋ команда волонтёров'] },

  { id: 'kronbars', type: 'hoodie', color: '#1a1a1a', textColor: '#ffd23a', label: 'KRONBARS', meta: '2019—21 · сборная',
    title: 'Чёрная KRONBARS', roleTag: 'СБОРНАЯ · 2019—2021', count: '×2',
    body: '<p>Толстовка сборной по горнолыжке. Тёплая, серьёзная, командная — и совершенно убитая после двух сезонов тренировок и выездов.</p><p>На рукаве — нашивка с барсом.</p>',
    tags: ['горные лыжи','сборная','выезды'], stats: [['×2','штуки'],['2','сезона'],['🐆','нашивка']], photos: ['🎿 на склоне','🏔 база'] },

  { id: 'piikt', type: 'hoodie', color: '#ffd23a', textColor: '#1a1a1a', label: 'ПИиКТ', meta: '2020 → · приёмка',
    title: 'Любимая жёлтая · ПИиКТ', roleTag: 'ПРИЁМКА · 5 ЛЕТ', count: '×5',
    body: '<p>5 принтов за 5 лет работы в приёмной комиссии факультета ПИиКТ. Менялись слоганы, менялся крой, не менялась любовь.</p><p>В этой я провела половину рабочих часов жизни.</p>',
    tags: ['менеджер ПИиКТ','5 принтов','каждый год'], stats: [['×5','принтов'],['5','лет'],['ПИиКТ','♡']], photos: ['💛 ДОД-2023','📋 будни приёмки'] },

  { id: 'hackathon', type: 'tshirt', color: '#4f7cff', textColor: '#fff', label: 'HACK 48', meta: '2020+ · хакатоны',
    title: 'Hackathon × 7', roleTag: 'КОД · 2020 →', count: '×7',
    body: '<p>За каждый хакатон — своя футболка. Иногда хорошая, иногда «лишь бы была». Все в шкафу, ни одной не выкинула.</p>',
    tags: ['48 часов','команда','код'], stats: [['×7','штук'],['?','призов'],['∞','кофе']], photos: ['💻 ночь','🎯 защита'] },

  { id: 'yagodnoe', type: 'hoodie', color: '#3fa66a', textColor: '#fff', label: 'ЯГОДНОЕ', meta: '×10 выездов',
    title: 'Ягодное-флис', roleTag: 'СМЕНЫ · 2019—24', count: '×2',
    body: '<p>Тёплый флис, потому что в Ягодном даже летом вечером бывает зябко. Пахнет костром.</p><p>В этой я была там столько раз, что счёт потеряла. ×10 — это скромная оценка.</p>',
    tags: ['смены','выезды','костёр'], stats: [['×10+','выездов'],['×2','флиски'],['🔥','костровая']], photos: ['🌿 у озера','🔥 вечерний круг'] },

  { id: 'profi', type: 'tshirt', color: '#b454ff', textColor: '#fff', label: 'PROFI', meta: '2022—23 · олимпиада',
    title: 'Финал Я.Профессионала', roleTag: 'ОЛИМПИАДА · ФИНАЛ', count: '×2',
    body: '<p>За форум финалистов. Простая футболка, но в ней — нетворкинг с лучшими ребятами со всей России.</p>',
    tags: ['финалист','форум','знакомства'], stats: [['×2','штуки'],['неск.','сезонов'],['🚀','финал']], photos: ['🚀 форум','🤝 нетворкинг'] },

  { id: 'ambassador', type: 'tshirt', color: '#ffd23a', textColor: '#1a1a1a', label: 'Y.AMB', meta: '2022—23 · Яндекс',
    title: 'Yandex Ambassador', roleTag: 'АМБАССАДОР · 2022', count: '×1',
    body: '<p>Жёлтая, узнаваемая, выдают только своим. Носить — значит представлять Яндекс в кампусе.</p>',
    tags: ['Яндекс','амбассадор'], stats: [['×1','штука'],['1','год'],['👾','эксклюзив']], photos: ['👾 на лекции','🟡 рядом с лого'] },

  { id: 'mentor', type: 'longsleeve', color: '#efe8d4', textColor: '#1a1a1a', label: 'MENTOR', meta: '2021 · веб',
    title: 'Кофта ментора', roleTag: 'МЕНТОР · ВЕБ', count: '×1',
    body: '<p>Простой лонгслив с подписью «mentor» — выдавали тем, кто помогал лектору. В этой провела два семестра у доски.</p>',
    tags: ['веб-прог.','2 семестра','1—2 курс'], stats: [['×1','штука'],['2','семестра'],['👩‍🏫','роль']], photos: ['👩‍🏫 у доски','💻 практика'] },

  { id: 'china', type: 'hoodie', color: '#e63946', textColor: '#ffd23a', label: '老师', meta: '2024 · Китай',
    title: 'Толстовка из Китая', roleTag: 'TEACHER · 中国 · 2024', count: '×1',
    body: '<p>Самая необычная вещь в шкафу. Красная, с китайскими иероглифами «老师» (учитель). Привезла из поездки — теперь это самый ценный экспонат.</p>',
    tags: ['обмен','преподавание','中国'], stats: [['×1','шт.'],['1','поездка'],['🇨🇳','эксклюзив']], photos: ['🏯 кампус','🥟 после пары'] },

  { id: 'organizer', type: 'tshirt', color: '#ff6b3d', textColor: '#fff', label: 'ORG', meta: '2022+ · события',
    title: 'Команда организаторов', roleTag: 'ORG-CREW', count: '×3',
    body: '<p>Футболка организаторов. Носишь — значит ты не зритель, ты делаешь. Олимпиады, ДОДы, митапы — за каждым ивентом своя.</p>',
    tags: ['олимпиады','ДОДы','митапы'], stats: [['×3','штуки'],['?','событий'],['🎤','команда']], photos: ['🎤 со сцены','📋 за кулисами'] },

  { id: 'itmo-classic', type: 'hoodie', color: '#f0eadb', textColor: '#1a1a1a', label: 'ITMO', meta: 'базовая',
    title: 'Базовая ИТМО', roleTag: 'ITMO · CLASSIC', count: '×2',
    body: '<p>Классическая универовская — серая, спокойная, с логотипом на груди. Та самая, в которой проходишь все экзамены и сдаёшь курсовые.</p>',
    tags: ['классика','каждый день'], stats: [['×2','штуки'],['∞','часов носки']], photos: ['🎓 в коридоре','📚 за конспектом'] },

  { id: 'graduation', type: 'tshirt', color: '#1a1a1a', textColor: '#b8941f', label: '? · 2026', meta: 'скоро',
    title: 'Выпускная (pending)', roleTag: 'GRADUATION · 06.2026', count: '×0',
    body: '<p>Пока её нет в шкафу. Но место уже забронировано. Закроет всю коллекцию.</p>',
    tags: ['скоро','TBC'], stats: [['×0','пока'],['→ 2026','ждём']], photos: ['🎓 будущее','?'] }
];

// SVG TEMPLATES
function hoodieSVG(color, textColor, label) {
  const darker = color === '#1a1a1a' ? '#000' : `color-mix(in srgb, ${color} 75%, #1a1a1a)`;
  return `
<svg viewBox="0 0 200 295" xmlns="http://www.w3.org/2000/svg">
  <path d="M 95 8 Q 95 0 100 0 Q 105 0 105 8 L 105 18" stroke="#1a1a1a" stroke-width="2" fill="none"/>
  <path d="M 32 50 L 100 18 L 168 50" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linejoin="miter"/>
  <path d="M 32 50 Q 50 56 60 60 L 70 40 Q 100 70 130 40 L 140 60 Q 150 56 168 50 L 188 130 L 152 142 L 152 275 L 48 275 L 48 142 L 12 130 Z"
        fill="${color}" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 70 40 Q 100 80 130 40 Q 128 68 100 76 Q 72 68 70 40 Z" fill="${darker}" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="93" y1="60" x2="93" y2="105" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="107" y1="60" x2="107" y2="105" stroke="#1a1a1a" stroke-width="1.5"/>
  <circle cx="93" cy="107" r="3" fill="#1a1a1a"/>
  <circle cx="107" cy="107" r="3" fill="#1a1a1a"/>
  <path d="M 60 185 L 60 230 L 140 230 L 140 185 M 78 184 L 78 215 M 122 184 L 122 215" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="1.4"/>
  <text x="100" y="148" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="15" font-weight="800" fill="${textColor}" letter-spacing="0.8">${label}</text>
  <rect x="46" y="260" width="108" height="15" fill="${darker}" opacity="0.4"/>
  <rect x="18" y="120" width="32" height="15" fill="${darker}" opacity="0.4"/>
  <rect x="150" y="120" width="32" height="15" fill="${darker}" opacity="0.4"/>
</svg>`;
}

function tshirtSVG(color, textColor, label) {
  const darker = color === '#1a1a1a' ? '#000' : `color-mix(in srgb, ${color} 75%, #1a1a1a)`;
  return `
<svg viewBox="0 0 200 265" xmlns="http://www.w3.org/2000/svg">
  <path d="M 95 8 Q 95 0 100 0 Q 105 0 105 8 L 105 18" stroke="#1a1a1a" stroke-width="2" fill="none"/>
  <path d="M 35 55 L 100 18 L 165 55" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linejoin="miter"/>
  <path d="M 35 55 L 75 48 Q 100 75 125 48 L 165 55 L 188 115 L 160 130 L 160 250 L 40 250 L 40 130 L 12 115 Z"
        fill="${color}" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 75 48 Q 100 75 125 48 Q 115 60 100 60 Q 85 60 75 48 Z" fill="${darker}" stroke="#1a1a1a" stroke-width="2"/>
  <text x="100" y="148" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="16" font-weight="800" fill="${textColor}" letter-spacing="0.8">${label}</text>
  <rect x="18" y="110" width="28" height="12" fill="${darker}" opacity="0.4"/>
  <rect x="154" y="110" width="28" height="12" fill="${darker}" opacity="0.4"/>
  <rect x="38" y="240" width="124" height="10" fill="${darker}" opacity="0.4"/>
</svg>`;
}

function longsleeveSVG(color, textColor, label) {
  const darker = color === '#1a1a1a' ? '#000' : `color-mix(in srgb, ${color} 75%, #1a1a1a)`;
  return `
<svg viewBox="0 0 200 290" xmlns="http://www.w3.org/2000/svg">
  <path d="M 95 8 Q 95 0 100 0 Q 105 0 105 8 L 105 18" stroke="#1a1a1a" stroke-width="2" fill="none"/>
  <path d="M 32 50 L 100 18 L 168 50" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linejoin="miter"/>
  <path d="M 32 50 L 75 44 Q 100 70 125 44 L 168 50 L 188 130 L 152 142 L 152 270 L 48 270 L 48 142 L 12 130 Z"
        fill="${color}" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 75 44 Q 100 70 125 44 Q 115 56 100 56 Q 85 56 75 44 Z" fill="${darker}" stroke="#1a1a1a" stroke-width="2"/>
  <text x="100" y="148" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="14" font-weight="800" fill="${textColor}" letter-spacing="0.8">${label}</text>
  <rect x="46" y="255" width="108" height="15" fill="${darker}" opacity="0.4"/>
  <rect x="18" y="120" width="32" height="15" fill="${darker}" opacity="0.4"/>
  <rect x="150" y="120" width="32" height="15" fill="${darker}" opacity="0.4"/>
</svg>`;
}

const SVG_BUILDERS = { hoodie: hoodieSVG, tshirt: tshirtSVG, longsleeve: longsleeveSVG };

function buildClosetGarments() {
  const top = document.getElementById('hangersTop');
  const bottom = document.getElementById('hangersBottom');
  if (!top || !bottom) return;

  const half = Math.ceil(GARMENTS.length / 2);

  GARMENTS.forEach((g, i) => {
    const div = document.createElement('div');
    div.className = 'garment ' + g.type;
    div.dataset.merch = g.id;
    const builder = SVG_BUILDERS[g.type] || hoodieSVG;
    div.innerHTML = builder(g.color, g.textColor, g.label) +
      `<span class="g-meta">${g.meta}</span>`;
    div.addEventListener('click', () => openMerch(g.id));
    (i < half ? top : bottom).appendChild(div);
  });
}

// MODAL
let currentMerchIndex = 0;
const MERCH_ORDER = GARMENTS.map(g => g.id);

function fillMerchModal(id) {
  const d = GARMENTS.find(g => g.id === id);
  if (!d) return;
  const head = document.getElementById('mmHead');
  head.style.background = d.color;
  head.style.color = (d.color === '#1a1a1a' || d.color === '#4f7cff' || d.color === '#e63946' || d.color === '#b454ff' || d.color === '#3fa66a') ? 'var(--paper)' : 'var(--ink)';

  document.getElementById('mmRoleTag').textContent = d.roleTag;
  document.getElementById('mmTitle').textContent = d.title;
  document.getElementById('mmReg').textContent = d.count;
  document.getElementById('mmBody').innerHTML = d.body;

  document.getElementById('mmTags').innerHTML = d.tags.map(t => '<span class="tag">' + t + '</span>').join('');
  document.getElementById('mmStats').innerHTML = d.stats.map(s =>
    '<div class="badge-modal-stat"><div class="v">' + s[0] + '</div><div class="l">' + s[1] + '</div></div>').join('');
  document.getElementById('mmPhotos').innerHTML = d.photos.map(p =>
    '<div class="ph-img"><span class="ico">' + (p.split(' ')[0] || '📷') + '</span>' + p.split(' ').slice(1).join(' ') + '</div>').join('');

  currentMerchIndex = MERCH_ORDER.indexOf(id);
  document.getElementById('mmNavInfo').textContent = (currentMerchIndex + 1) + ' / ' + MERCH_ORDER.length;
}

function openMerch(id) {
  fillMerchModal(id);
  document.getElementById('merchModalBack').classList.add('active');
}
function closeMerch() {
  document.getElementById('merchModalBack').classList.remove('active');
}
function navMerch(dir) {
  const next = (currentMerchIndex + dir + MERCH_ORDER.length) % MERCH_ORDER.length;
  fillMerchModal(MERCH_ORDER[next]);
}

window.openMerch = openMerch;
window.closeMerch = closeMerch;
window.navMerch = navMerch;

document.addEventListener('keydown', e => {
  const back = document.getElementById('merchModalBack');
  if (!back || !back.classList.contains('active')) return;
  if (e.key === 'Escape') closeMerch();
  if (e.key === 'ArrowRight') navMerch(1);
  if (e.key === 'ArrowLeft') navMerch(-1);
});

document.addEventListener('DOMContentLoaded', buildClosetGarments);
if (document.readyState !== 'loading') buildClosetGarments();
