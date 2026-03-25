// ============================================================
// RECORDS — Tabla de participantes (localStorage)
// Sprint 5: local. Sprint 6: PostgreSQL backend
// ============================================================

const STORAGE_KEY = 'campana_nacional_records';

export const MEDALS = [
  { id: 'gran_cruz',    icon: '🏆', name: 'Gran Cruz Nacional',   desc: 'Alcanzaste 15+ puntos de excelencia',   threshold: 15, type: 'points' },
  { id: 'orden_patria', icon: '🥇', name: 'Orden de la Patria',   desc: 'Alcanzaste 10+ puntos de excelencia',   threshold: 10, type: 'points' },
  { id: 'estrella',     icon: '🥈', name: 'Estrella de Valor',    desc: 'Alcanzaste 6+ puntos de excelencia',    threshold: 6,  type: 'points' },
  { id: 'cruz_campana', icon: '🥉', name: 'Cruz de Campaña',      desc: 'Alcanzaste 3+ puntos de excelencia',    threshold: 3,  type: 'points' },
  { id: 'rayo',         icon: '⚡', name: 'Rayo de Batalla',      desc: 'Respondiste 3 preguntas en menos de 5s', threshold: 3,  type: 'fast' },
  { id: 'escudo',       icon: '🛡️', name: 'Escudo Impecable',     desc: 'Ganaste sin ninguna respuesta incorrecta', threshold: 0, type: 'perfect' },
  { id: 'historiador',  icon: '📜', name: 'Historiador',          desc: 'Respondiste 5+ preguntas de historia',  threshold: 5,  type: 'category', cat: 'historia' },
  { id: 'estratega',    icon: '⚔️', name: 'Estratega',            desc: 'Respondiste 3+ preguntas de táctica',   threshold: 3,  type: 'category', cat: 'tactica' },
];

export function calcMedals(stats) {
  // stats: { points, fastAnswers, wrongAnswers, categoryCount: {historia, tactica, ...} }
  const earned = [];
  for (const medal of MEDALS) {
    if (medal.type === 'points'   && stats.points       >= medal.threshold) earned.push(medal);
    if (medal.type === 'fast'     && stats.fastAnswers  >= medal.threshold) earned.push(medal);
    if (medal.type === 'perfect'  && stats.wrongAnswers === 0)              earned.push(medal);
    if (medal.type === 'category' && (stats.categoryCount?.[medal.cat] || 0) >= medal.threshold) earned.push(medal);
  }
  return earned;
}

export function saveRecord(record) {
  // record: { name, level, timeMs, points, medals[], date }
  const records = getRecords();
  records.push({
    ...record,
    date: new Date().toLocaleDateString('es'),
    medals: record.medals.map(m => m.icon).join(''),
  });
  // Ordenar por puntos desc, luego tiempo asc
  records.sort((a, b) => b.points - a.points || a.timeMs - b.timeMs);
  // Mantener top 50
  if (records.length > 50) records.splice(50);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  return records;
}

export function getRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch { return []; }
}

export function clearRecords() {
  localStorage.removeItem(STORAGE_KEY);
}
