// ============================================================
// MAPA SVG — Centroamérica con fronteras históricas 1856
// Coordenadas aproximadas de fronteras reales
// Proyección simplificada: lon [-92, -83] → x [0,1200], lat [8, 18] → y [750,0]
// ============================================================

// Convierte coordenadas geográficas a píxeles del canvas
export function geoToPixel(lon, lat, W = 1200, H = 750) {
  const x = ((lon - (-92)) / ((-83) - (-92))) * W;
  const y = H - ((lat - 8) / (18 - 8)) * H;
  return { x, y };
}

// Fronteras aproximadas de cada país (polígonos simplificados)
export const COUNTRY_BORDERS = {
  guatemala: {
    name: 'Guatemala',
    color: 0x2a4a20,
    labelLon: -90.3, labelLat: 15.5,
    points: [
      [-92.2, 17.8], [-89.2, 17.8], [-89.2, 15.9], [-88.2, 15.7],
      [-88.9, 15.0], [-90.1, 13.9], [-92.2, 14.5], [-92.2, 17.8],
    ],
  },
  belize: {
    name: 'Belice',
    color: 0x1a3030,
    labelLon: -88.5, labelLat: 17.2,
    points: [
      [-89.2, 18.0], [-87.5, 18.0], [-87.5, 15.9], [-89.2, 15.9], [-89.2, 18.0],
    ],
  },
  honduras: {
    name: 'Honduras',
    color: 0x20304a,
    labelLon: -86.8, labelLat: 14.8,
    points: [
      [-89.2, 15.9], [-83.2, 15.9], [-83.2, 13.0], [-86.8, 13.0],
      [-87.7, 13.9], [-88.9, 15.0], [-89.2, 15.9],
    ],
  },
  el_salvador: {
    name: 'El Salvador',
    color: 0x4a3020,
    labelLon: -88.9, labelLat: 13.8,
    points: [
      [-90.1, 14.4], [-88.5, 14.4], [-87.7, 13.9], [-87.7, 13.1],
      [-90.1, 13.7], [-90.1, 14.4],
    ],
  },
  nicaragua: {
    name: 'Nicaragua',
    color: 0x1a3a1a,
    labelLon: -85.5, labelLat: 12.8,
    points: [
      [-87.7, 13.9], [-83.2, 13.0], [-83.2, 11.0], [-83.7, 10.9],
      [-85.7, 11.0], [-87.5, 12.0], [-87.7, 13.0], [-87.7, 13.9],
    ],
  },
  costa_rica: {
    name: 'Costa Rica',
    color: 0x1a2a3a,
    labelLon: -84.2, labelLat: 10.0,
    points: [
      [-85.7, 11.2], [-83.0, 10.9], [-82.6, 9.6], [-83.0, 8.8],
      [-83.5, 8.6], [-85.1, 9.5], [-85.8, 10.0], [-85.7, 11.2],
    ],
  },
  panama: {
    name: 'Panamá',
    color: 0x3a1a2a,
    labelLon: -80.5, labelLat: 8.8,
    points: [
      [-83.0, 8.8], [-77.2, 8.8], [-77.2, 7.2], [-83.0, 7.2], [-83.0, 8.8],
    ],
  },
};

// Cuerpos de agua
export const WATER_BODIES = [
  {
    name: 'Lago de Nicaragua',
    type: 'lake',
    color: 0x1a4060,
    labelLon: -85.4, labelLat: 11.5,
    points: [
      [-85.8, 12.2], [-84.8, 12.2], [-84.5, 11.0], [-85.2, 10.8],
      [-85.9, 11.2], [-85.8, 12.2],
    ],
  },
  {
    name: 'Lago de Managua',
    type: 'lake',
    color: 0x1a4060,
    labelLon: -86.3, labelLat: 12.3,
    points: [
      [-86.6, 12.5], [-86.0, 12.5], [-86.0, 12.1], [-86.6, 12.1], [-86.6, 12.5],
    ],
  },
  {
    name: 'Lago de Atitlán',
    type: 'lake',
    color: 0x1a4060,
    labelLon: -91.2, labelLat: 14.7,
    points: [
      [-91.4, 14.8], [-91.0, 14.8], [-91.0, 14.5], [-91.4, 14.5], [-91.4, 14.8],
    ],
  },
];

// Ríos estratégicos
export const RIVERS = [
  {
    name: 'Río San Juan',
    color: 0x3060a0,
    points: [[-84.5, 11.0], [-83.7, 10.9], [-83.0, 10.6]],
  },
  {
    name: 'Río Coco',
    color: 0x3060a0,
    points: [[-85.2, 14.8], [-84.0, 14.3], [-83.2, 14.8]],
  },
];

// Ciudades históricas con coordenadas reales
export const HISTORICAL_CITIES = [
  // Nicaragua
  { name: 'Granada',       lon: -85.96, lat: 11.93, type: 'major',   note: 'Capital de Walker' },
  { name: 'Managua',       lon: -86.29, lat: 12.13, type: 'major',   note: 'Capital de Nicaragua' },
  { name: 'León',          lon: -86.88, lat: 12.43, type: 'major',   note: 'Ciudad liberal' },
  { name: 'Rivas',         lon: -85.83, lat: 11.44, type: 'battle',  note: 'Batalla 11 abril 1856' },
  { name: 'San Juan del Sur', lon: -85.87, lat: 11.25, type: 'port', note: 'Puerto del Pacífico' },
  { name: 'Masaya',        lon: -86.10, lat: 11.97, type: 'town',    note: '' },
  { name: 'Chinandega',    lon: -87.13, lat: 12.63, type: 'town',    note: '' },
  { name: 'San Juan del Norte', lon: -83.71, lat: 10.93, type: 'port', note: 'Puerto Atlántico' },
  // Costa Rica
  { name: 'San José',      lon: -84.09, lat: 9.93,  type: 'major',  note: 'Capital de CR' },
  { name: 'Liberia',       lon: -85.43, lat: 10.63, type: 'town',   note: '' },
  { name: 'Puntarenas',    lon: -84.84, lat: 9.98,  type: 'port',   note: 'Puerto Pacífico CR' },
  { name: 'Sta. Rosa',     lon: -85.62, lat: 10.85, type: 'battle', note: '20 mar 1856' },
  { name: 'La Trinidad',   lon: -85.80, lat: 11.13, type: 'battle', note: 'Última batalla CR' },
  // Honduras
  { name: 'Tegucigalpa',   lon: -87.21, lat: 14.10, type: 'major',  note: 'Capital de Honduras' },
  { name: 'Comayagua',     lon: -87.64, lat: 14.45, type: 'town',   note: 'Ant. capital Honduras' },
  // El Salvador
  { name: 'San Salvador',  lon: -89.19, lat: 13.69, type: 'major',  note: 'Capital de El Salvador' },
  // Guatemala
  { name: 'Guatemala',     lon: -90.53, lat: 14.64, type: 'major',  note: 'Capital de Guatemala' },
];
