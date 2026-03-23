// ============================================================
// MAPA HEXAGONAL — Campaña Nacional 1856-1857
// Sistema de coordenadas: offset (col, row), "pointy-top"
// Terrenos: jungle, mountain, river, coast, city, port, plains, lake
// ============================================================

export const TERRAIN_COLORS = {
  jungle:   { base: 0x2d5a1b, border: 0x1a3a0a, label: 'Selva',       moveCost: 3, color: '#2d5a1b' },
  mountain: { base: 0x6b5a3e, border: 0x4a3a22, label: 'Montaña',     moveCost: 4, color: '#6b5a3e' },
  river:    { base: 0x1a4a7a, border: 0x0a2a5a, label: 'Río',         moveCost: 2, color: '#1a4a7a' },
  coast:    { base: 0x3a7a9a, border: 0x1a5a7a, label: 'Costa',       moveCost: 2, color: '#3a7a9a' },
  city:     { base: 0x8a6a30, border: 0x5a4010, label: 'Ciudad',      moveCost: 1, color: '#8a6a30' },
  port:     { base: 0x2a5a8a, border: 0x0a3a6a, label: 'Puerto',      moveCost: 1, color: '#2a5a8a' },
  plains:   { base: 0x7a8a3a, border: 0x5a6a1a, label: 'Llanura',     moveCost: 1, color: '#7a8a3a' },
  lake:     { base: 0x1a6a9a, border: 0x0a4a7a, label: 'Lago',        moveCost: 3, color: '#1a6a9a' },
  sea:      { base: 0x0a3060, border: 0x061830, label: 'Mar',          moveCost: 99, color: '#0a3060' },
  swamp:    { base: 0x3a5a2a, border: 0x1a3a10, label: 'Pantano',     moveCost: 4, color: '#3a5a2a' },
};

// Puntos históricos clave con notas
export const LOCATIONS = {
  'rivas':          { name: 'Rivas',              note: 'Escenario de múltiples batallas',    republic: 'nicaragua' },
  'granada':        { name: 'Granada',            note: 'Ciudad ocupada por Walker',          republic: 'nicaragua' },
  'san_juan_sur':   { name: 'San Juan del Sur',   note: 'Puerto estratégico del Pacífico',    republic: 'nicaragua' },
  'la_virgen':      { name: 'La Virgen',          note: 'Batalla crucial — oct 1856',         republic: 'nicaragua' },
  'san_jorge':      { name: 'San Jorge',          note: 'Acceso al Lago Nicaragua',           republic: 'nicaragua' },
  'managua':        { name: 'Managua',            note: 'Capital nicaragüense',               republic: 'nicaragua' },
  'leon':           { name: 'León',               note: 'Ciudad liberal, aliada inicial Walker', republic: 'nicaragua' },
  'san_juan_norte': { name: 'San Juan del Norte', note: 'Greytown — desembarco filibustero',  republic: 'nicaragua' },
  'san_jose':       { name: 'San José',           note: 'Capital costarricense',              republic: 'costa_rica' },
  'liberia':        { name: 'Liberia',            note: 'Guanacaste — frontera norte CR',     republic: 'costa_rica' },
  'punta_arenas':   { name: 'Puntarenas',         note: 'Puerto del Pacífico costarricense',  republic: 'costa_rica' },
  'santa_rosa':     { name: 'Santa Rosa',         note: 'Primera batalla — 20 mar 1856',      republic: 'costa_rica' },
  'rio_san_juan':   { name: 'Río San Juan',       note: 'Ruta del Tránsito — clave estratégica', republic: 'nicaragua' },
  'lago_nicaragua': { name: 'Lago Nicaragua',     note: 'Ruta de tránsito interoceánica',     republic: 'nicaragua' },
  'tegucigalpa':    { name: 'Tegucigalpa',        note: 'Capital hondureña',                  republic: 'honduras' },
  'comayagua':      { name: 'Comayagua',          note: 'Ciudad militar hondureña',           republic: 'honduras' },
  'san_salvador':   { name: 'San Salvador',       note: 'Capital salvadoreña',                republic: 'el_salvador' },
  'santa_ana':      { name: 'Santa Ana',          note: 'Ciudad occidental salvadoreña',      republic: 'el_salvador' },
  'guatemala_city': { name: 'Guatemala',          note: 'Capital guatemalteca',               republic: 'guatemala' },
  'quetzaltenango': { name: 'Quetzaltenango',     note: 'Ciudad del altiplano guatemalteco',  republic: 'guatemala' },
};

// ============================================================
// DEFINICIÓN DEL MAPA HEX
// Grid 24 cols × 18 rows (aprox Centroamérica)
// [col, row, terrain, locationKey | null]
// ============================================================

export const HEX_MAP_DATA = [
  // ---- MAR CARIBE (arriba) ----
  [0,0,'sea',null],[1,0,'sea',null],[2,0,'sea',null],[3,0,'sea',null],[4,0,'sea',null],
  [5,0,'sea',null],[6,0,'sea',null],[7,0,'sea',null],[8,0,'sea',null],[9,0,'sea',null],
  [10,0,'sea',null],[11,0,'sea',null],[12,0,'sea',null],[13,0,'sea',null],[14,0,'sea',null],
  [15,0,'sea',null],[16,0,'sea',null],[17,0,'sea',null],[18,0,'sea',null],[19,0,'sea',null],
  [20,0,'sea',null],[21,0,'sea',null],[22,0,'sea',null],[23,0,'sea',null],

  // ---- FILA 1 ----
  [0,1,'sea',null],[1,1,'sea',null],[2,1,'sea',null],
  [3,1,'coast',null],[4,1,'coast',null],  // Costa Atlántica Guatemala
  [5,1,'coast',null],[6,1,'coast',null],  // Honduras Atlántico
  [7,1,'coast',null],[8,1,'coast',null],
  [9,1,'coast','san_juan_norte'], // Greytown
  [10,1,'sea',null],[11,1,'sea',null],[12,1,'sea',null],
  [13,1,'sea',null],[14,1,'sea',null],[15,1,'sea',null],
  [16,1,'sea',null],[17,1,'sea',null],[18,1,'sea',null],
  [19,1,'sea',null],[20,1,'sea',null],[21,1,'sea',null],[22,1,'sea',null],[23,1,'sea',null],

  // ---- FILA 2 — Norte de Centroamérica ----
  [0,2,'sea',null],[1,2,'sea',null],
  [2,2,'coast',null],[3,2,'jungle',null],
  [4,2,'city','guatemala_city'],
  [5,2,'mountain',null],[6,2,'mountain',null],
  [7,2,'jungle',null],[8,2,'coast',null],
  [9,2,'jungle',null],[10,2,'coast',null],
  [11,2,'sea',null],[12,2,'sea',null],
  [13,2,'sea',null],[14,2,'sea',null],[15,2,'sea',null],
  [16,2,'sea',null],[17,2,'sea',null],[18,2,'sea',null],
  [19,2,'sea',null],[20,2,'sea',null],[21,2,'sea',null],[22,2,'sea',null],[23,2,'sea',null],

  // ---- FILA 3 — Guatemala / Honduras occidental ----
  [0,3,'sea',null],[1,3,'sea',null],
  [2,3,'coast',null],
  [3,3,'mountain',null],[4,3,'mountain',null],
  [5,3,'city','quetzaltenango'],
  [6,3,'mountain',null],[7,3,'mountain',null],
  [8,3,'jungle',null],[9,3,'jungle',null],
  [10,3,'coast',null],[11,3,'sea',null],
  [12,3,'sea',null],[13,3,'sea',null],[14,3,'sea',null],
  [15,3,'sea',null],[16,3,'sea',null],[17,3,'sea',null],
  [18,3,'sea',null],[19,3,'sea',null],[20,3,'sea',null],[21,3,'sea',null],[22,3,'sea',null],[23,3,'sea',null],

  // ---- FILA 4 — El Salvador / Honduras ----
  [0,4,'sea',null],
  [1,4,'coast',null],
  [2,4,'plains',null],[3,4,'plains',null],
  [4,4,'city','santa_ana'],
  [5,4,'plains',null],
  [6,4,'city','san_salvador'],
  [7,4,'plains',null],[8,4,'plains',null],
  [9,4,'city','comayagua'],
  [10,4,'mountain',null],[11,4,'mountain',null],
  [12,4,'jungle',null],[13,4,'jungle',null],
  [14,4,'coast',null],[15,4,'sea',null],
  [16,4,'sea',null],[17,4,'sea',null],[18,4,'sea',null],
  [19,4,'sea',null],[20,4,'sea',null],[21,4,'sea',null],[22,4,'sea',null],[23,4,'sea',null],

  // ---- FILA 5 — Honduras central / Nicaragua norte ----
  [0,5,'sea',null],
  [1,5,'coast',null],[2,5,'coast',null],
  [3,5,'plains',null],[4,5,'plains',null],
  [5,5,'mountain',null],[6,5,'mountain',null],
  [7,5,'city','tegucigalpa'],
  [8,5,'mountain',null],[9,5,'mountain',null],
  [10,5,'jungle',null],[11,5,'jungle',null],
  [12,5,'jungle',null],[13,5,'coast',null],
  [14,5,'sea',null],[15,5,'sea',null],
  [16,5,'sea',null],[17,5,'sea',null],[18,5,'sea',null],
  [19,5,'sea',null],[20,5,'sea',null],[21,5,'sea',null],[22,5,'sea',null],[23,5,'sea',null],

  // ---- FILA 6 — Nicaragua norte ----
  [0,6,'sea',null],
  [1,6,'coast',null],[2,6,'coast',null],
  [3,6,'plains',null],[4,6,'plains',null],[5,6,'plains',null],
  [6,6,'city','leon'],
  [7,6,'plains',null],[8,6,'plains',null],
  [9,6,'city','managua'],
  [10,6,'plains',null],[11,6,'plains',null],
  [12,6,'jungle',null],[13,6,'jungle',null],
  [14,6,'coast',null],[15,6,'sea',null],
  [16,6,'sea',null],[17,6,'sea',null],[18,6,'sea',null],
  [19,6,'sea',null],[20,6,'sea',null],[21,6,'sea',null],[22,6,'sea',null],[23,6,'sea',null],

  // ---- FILA 7 — Nicaragua central / Lago ----
  [0,7,'sea',null],[1,7,'sea',null],
  [2,7,'coast',null],
  [3,7,'plains',null],[4,7,'plains',null],[5,7,'plains',null],
  [6,7,'plains',null],
  [7,7,'city','granada'],
  [8,7,'lake',null],[9,7,'lake','lago_nicaragua'],
  [10,7,'lake',null],[11,7,'lake',null],
  [12,7,'jungle',null],[13,7,'jungle',null],
  [14,7,'coast',null],[15,7,'sea',null],
  [16,7,'sea',null],[17,7,'sea',null],[18,7,'sea',null],
  [19,7,'sea',null],[20,7,'sea',null],[21,7,'sea',null],[22,7,'sea',null],[23,7,'sea',null],

  // ---- FILA 8 — Rivas / San Juan del Sur ----
  [0,8,'sea',null],[1,8,'sea',null],
  [2,8,'coast','san_juan_sur'],
  [3,8,'plains',null],
  [4,8,'city','rivas'],
  [5,8,'plains',null],
  [6,8,'city','san_jorge'],
  [7,8,'lake',null],[8,8,'lake',null],[9,8,'lake',null],
  [10,8,'lake',null],[11,8,'lake',null],
  [12,8,'river','rio_san_juan'],
  [13,8,'jungle',null],[14,8,'coast',null],
  [15,8,'sea',null],[16,8,'sea',null],[17,8,'sea',null],[18,8,'sea',null],
  [19,8,'sea',null],[20,8,'sea',null],[21,8,'sea',null],[22,8,'sea',null],[23,8,'sea',null],

  // ---- FILA 9 — La Virgen / Río San Juan ----
  [0,9,'sea',null],[1,9,'sea',null],[2,9,'sea',null],
  [3,9,'coast',null],
  [4,9,'city','la_virgen'],
  [5,9,'jungle',null],[6,9,'jungle',null],
  [7,9,'jungle',null],[8,9,'jungle',null],
  [9,9,'river',null],[10,9,'river',null],
  [11,9,'river',null],[12,9,'river',null],
  [13,9,'coast','san_juan_norte'],
  [14,9,'sea',null],[15,9,'sea',null],[16,9,'sea',null],
  [17,9,'sea',null],[18,9,'sea',null],[19,9,'sea',null],
  [20,9,'sea',null],[21,9,'sea',null],[22,9,'sea',null],[23,9,'sea',null],

  // ---- FILA 10 — Frontera CR-Nicaragua ----
  [0,10,'sea',null],[1,10,'sea',null],[2,10,'sea',null],
  [3,10,'coast',null],[4,10,'jungle',null],
  [5,10,'jungle',null],[6,10,'jungle',null],[7,10,'jungle',null],
  [8,10,'swamp',null],[9,10,'swamp',null],[10,10,'jungle',null],
  [11,10,'jungle',null],[12,10,'jungle',null],[13,10,'coast',null],
  [14,10,'sea',null],[15,10,'sea',null],[16,10,'sea',null],
  [17,10,'sea',null],[18,10,'sea',null],[19,10,'sea',null],
  [20,10,'sea',null],[21,10,'sea',null],[22,10,'sea',null],[23,10,'sea',null],

  // ---- FILA 11 — Guanacaste / Costa Rica norte ----
  [0,11,'sea',null],[1,11,'sea',null],[2,11,'sea',null],
  [3,11,'coast',null],
  [4,11,'city','liberia'],
  [5,11,'plains',null],[6,11,'plains',null],[7,11,'plains',null],
  [8,11,'mountain',null],[9,11,'mountain',null],[10,11,'mountain',null],
  [11,11,'jungle',null],[12,11,'jungle',null],[13,11,'coast',null],
  [14,11,'sea',null],[15,11,'sea',null],[16,11,'sea',null],
  [17,11,'sea',null],[18,11,'sea',null],[19,11,'sea',null],
  [20,11,'sea',null],[21,11,'sea',null],[22,11,'sea',null],[23,11,'sea',null],

  // ---- FILA 12 — Santa Rosa / Costa Rica central ----
  [0,12,'sea',null],[1,12,'sea',null],[2,12,'sea',null],
  [3,12,'coast',null],
  [4,12,'city','santa_rosa'],
  [5,12,'plains',null],[6,12,'plains',null],
  [7,12,'mountain',null],[8,12,'mountain',null],[9,12,'mountain',null],
  [10,12,'plains',null],[11,12,'plains',null],
  [12,12,'jungle',null],[13,12,'coast',null],
  [14,12,'sea',null],[15,12,'sea',null],[16,12,'sea',null],
  [17,12,'sea',null],[18,12,'sea',null],[19,12,'sea',null],
  [20,12,'sea',null],[21,12,'sea',null],[22,12,'sea',null],[23,12,'sea',null],

  // ---- FILA 13 — San José ----
  [0,13,'sea',null],[1,13,'sea',null],[2,13,'sea',null],
  [3,13,'coast','punta_arenas'],
  [4,13,'plains',null],[5,13,'plains',null],
  [6,13,'mountain',null],
  [7,13,'city','san_jose'],
  [8,13,'mountain',null],[9,13,'mountain',null],
  [10,13,'plains',null],[11,13,'jungle',null],
  [12,13,'jungle',null],[13,13,'coast',null],
  [14,13,'sea',null],[15,13,'sea',null],[16,13,'sea',null],
  [17,13,'sea',null],[18,13,'sea',null],[19,13,'sea',null],
  [20,13,'sea',null],[21,13,'sea',null],[22,13,'sea',null],[23,13,'sea',null],

  // ---- FILAS 14-17 — Sur Costa Rica / Panamá / Mar ----
  [0,14,'sea',null],[1,14,'sea',null],[2,14,'sea',null],[3,14,'sea',null],
  [4,14,'coast',null],[5,14,'coast',null],[6,14,'mountain',null],[7,14,'mountain',null],
  [8,14,'jungle',null],[9,14,'jungle',null],[10,14,'jungle',null],
  [11,14,'coast',null],[12,14,'sea',null],[13,14,'sea',null],
  [14,14,'sea',null],[15,14,'sea',null],[16,14,'sea',null],[17,14,'sea',null],
  [18,14,'sea',null],[19,14,'sea',null],[20,14,'sea',null],[21,14,'sea',null],[22,14,'sea',null],[23,14,'sea',null],

  [0,15,'sea',null],[1,15,'sea',null],[2,15,'sea',null],[3,15,'sea',null],[4,15,'sea',null],
  [5,15,'coast',null],[6,15,'coast',null],[7,15,'jungle',null],[8,15,'jungle',null],
  [9,15,'coast',null],[10,15,'sea',null],[11,15,'sea',null],[12,15,'sea',null],
  [13,15,'sea',null],[14,15,'sea',null],[15,15,'sea',null],[16,15,'sea',null],
  [17,15,'sea',null],[18,15,'sea',null],[19,15,'sea',null],[20,15,'sea',null],
  [21,15,'sea',null],[22,15,'sea',null],[23,15,'sea',null],

  [0,16,'sea',null],[1,16,'sea',null],[2,16,'sea',null],[3,16,'sea',null],[4,16,'sea',null],
  [5,16,'sea',null],[6,16,'sea',null],[7,16,'sea',null],[8,16,'sea',null],[9,16,'sea',null],
  [10,16,'sea',null],[11,16,'sea',null],[12,16,'sea',null],[13,16,'sea',null],
  [14,16,'sea',null],[15,16,'sea',null],[16,16,'sea',null],[17,16,'sea',null],
  [18,16,'sea',null],[19,16,'sea',null],[20,16,'sea',null],[21,16,'sea',null],
  [22,16,'sea',null],[23,16,'sea',null],

  [0,17,'sea',null],[1,17,'sea',null],[2,17,'sea',null],[3,17,'sea',null],[4,17,'sea',null],
  [5,17,'sea',null],[6,17,'sea',null],[7,17,'sea',null],[8,17,'sea',null],[9,17,'sea',null],
  [10,17,'sea',null],[11,17,'sea',null],[12,17,'sea',null],[13,17,'sea',null],
  [14,17,'sea',null],[15,17,'sea',null],[16,17,'sea',null],[17,17,'sea',null],
  [18,17,'sea',null],[19,17,'sea',null],[20,17,'sea',null],[21,17,'sea',null],
  [22,17,'sea',null],[23,17,'sea',null],
];
