// ============================================================
// BASE DE PREGUNTAS — La Campaña Nacional 1856-1857
// Categorías:
//   'historia'   → bono combate (+1/+2/+3)
//   'tactica'    → bono combate (+1/+2/+3)
//   'geografia'  → bono movimiento (+1/+2/+3)
//   'armas'      → ítem estético
//   'uniformes'  → ítem estético
// ============================================================

export const TRIVIA_QUESTIONS = [

  // ─── HISTORIA ───────────────────────────────────────────
  {
    id: 'h01',
    category: 'historia',
    difficulty: 1,
    question: '¿Quién era el líder de los filibusteros que invadió Nicaragua en 1855?',
    options: ['William Walker', 'Juan Rafael Mora', 'Cornelius Vanderbilt', 'José Guardia'],
    answer: 0,
  },
  {
    id: 'h02',
    category: 'historia',
    difficulty: 1,
    question: '¿Qué presidente costarricense lideró la Campaña Nacional contra Walker?',
    options: ['Braulio Carrillo', 'Juan Rafael Mora Porras', 'Tomás Guardia', 'Próspero Fernández'],
    answer: 1,
  },
  {
    id: 'h03',
    category: 'historia',
    difficulty: 1,
    question: '¿En qué batalla Costa Rica derrotó por primera vez a los filibusteros?',
    options: ['Batalla de Rivas', 'Batalla de Santa Rosa', 'Batalla de San Jacinto', 'Batalla de La Trinidad'],
    answer: 1,
  },
  {
    id: 'h04',
    category: 'historia',
    difficulty: 2,
    question: '¿Qué héroe costarricense quemó el mesón en Rivas para expulsar a los filibusteros?',
    options: ['Máximo Blanco', 'Juan Santamaría', 'Lorenzo Salazar', 'Manuel Quirós'],
    answer: 1,
  },
  {
    id: 'h05',
    category: 'historia',
    difficulty: 2,
    question: '¿En qué año fue fusilado William Walker en Honduras?',
    options: ['1857', '1858', '1859', '1860'],
    answer: 3,
  },
  {
    id: 'h06',
    category: 'historia',
    difficulty: 2,
    question: '¿Qué país centroamericano fue el primero en unirse a Costa Rica en la Campaña Nacional?',
    options: ['Guatemala', 'Honduras', 'El Salvador', 'Nicaragua'],
    answer: 3,
  },
  {
    id: 'h07',
    category: 'historia',
    difficulty: 3,
    question: '¿Cómo se llamaba la ciudad nicaragüense que fue capital de Walker?',
    options: ['Managua', 'León', 'Granada', 'Masaya'],
    answer: 2,
  },
  {
    id: 'h08',
    category: 'historia',
    difficulty: 3,
    question: '¿Qué magnate financió inicialmente la expedición de Walker para proteger su ruta de tránsito?',
    options: ['John D. Rockefeller', 'Cornelius Vanderbilt', 'Jay Gould', 'Andrew Carnegie'],
    answer: 1,
  },
  {
    id: 'h09',
    category: 'historia',
    difficulty: 2,
    question: '¿En qué fecha se libró la Batalla de Santa Rosa?',
    options: ['20 de marzo de 1856', '15 de abril de 1856', '11 de abril de 1856', '1 de mayo de 1856'],
    answer: 0,
  },
  {
    id: 'h10',
    category: 'historia',
    difficulty: 3,
    question: '¿Cuántos hombres aproximadamente tenía el ejército costarricense en la primera campaña?',
    options: ['1,000', '2,000', '4,000', '9,000'],
    answer: 2,
  },
  {
    id: 'h11',
    category: 'historia',
    difficulty: 2,
    question: '¿Qué enfermedad mató a más soldados aliados que las balas filibusteras?',
    options: ['Malaria', 'Fiebre amarilla', 'Cólera', 'Tifus'],
    answer: 1,
  },
  {
    id: 'h12',
    category: 'historia',
    difficulty: 3,
    question: '¿Qué general nicaragüense era aliado de Walker al inicio pero luego lo combatió?',
    options: ['Tomás Martínez', 'Jerez Tellería', 'Fernando Chamorro', 'Máximo Jerez'],
    answer: 3,
  },

  // ─── TÁCTICA ────────────────────────────────────────────
  {
    id: 't01',
    category: 'tactica',
    difficulty: 1,
    question: '¿Qué ventaja táctica tenían los filibusteros sobre los ejércitos centroamericanos?',
    options: ['Mayor número de soldados', 'Rifles de repetición modernos', 'Apoyo naval', 'Mejor conocimiento del terreno'],
    answer: 1,
  },
  {
    id: 't02',
    category: 'tactica',
    difficulty: 2,
    question: '¿Qué táctica usó Costa Rica para cortar el suministro a Walker en Nicaragua?',
    options: ['Bloqueo naval', 'Control del Río San Juan y ruta de tránsito', 'Emboscadas en montaña', 'Alianza con EE.UU.'],
    answer: 1,
  },
  {
    id: 't03',
    category: 'tactica',
    difficulty: 2,
    question: '¿Cuál fue la formación principal de los aliados en batalla campal?',
    options: ['Línea de mosqueteros', 'Guerrilla dispersa', 'Columnas de carga a bayoneta', 'Caballería pesada'],
    answer: 2,
  },
  {
    id: 't04',
    category: 'tactica',
    difficulty: 3,
    question: '¿Por qué era estratégicamente vital controlar el lago de Nicaragua?',
    options: [
      'Era fuente de agua potable',
      'Conectaba el Atlántico con el Pacífico vía el Río San Juan',
      'Contenía minas de oro',
      'Era la frontera con Costa Rica',
    ],
    answer: 1,
  },
  {
    id: 't05',
    category: 'tactica',
    difficulty: 1,
    question: '¿Qué arma cuerpo a cuerpo portaban la mayoría de los soldados aliados?',
    options: ['Sable de caballería', 'Machete', 'Bayoneta', 'Lanza de infantería'],
    answer: 1,
  },
  {
    id: 't06',
    category: 'tactica',
    difficulty: 2,
    question: '¿Por qué los aliados decidieron quemar Granada antes de retirarse?',
    options: [
      'Para destruir las armas almacenadas',
      'Para eliminar el símbolo del poder de Walker y negarle recursos',
      'Por accidente durante el combate',
      'Fue una orden del gobierno de EE.UU.',
    ],
    answer: 1,
  },
  {
    id: 't07',
    category: 'tactica',
    difficulty: 3,
    question: '¿Qué importancia tenía la Hacienda Santa Rosa para la defensa de Costa Rica?',
    options: [
      'Era el cuartel principal del ejército',
      'Era el único paso terrestre hacia Nicaragua por el lado costarricense',
      'Tenía el único arsenal del país',
      'Era residencia del presidente Mora',
    ],
    answer: 1,
  },

  // ─── GEOGRAFÍA ──────────────────────────────────────────
  {
    id: 'g01',
    category: 'geografia',
    difficulty: 1,
    question: '¿Qué río formaba la ruta de tránsito entre el Atlántico y el lago de Nicaragua?',
    options: ['Río Grande', 'Río Coco', 'Río San Juan', 'Río Tempisque'],
    answer: 2,
  },
  {
    id: 'g02',
    category: 'geografia',
    difficulty: 1,
    question: '¿En qué país está la ciudad de Rivas, escenario de batallas clave?',
    options: ['Costa Rica', 'Honduras', 'Nicaragua', 'El Salvador'],
    answer: 2,
  },
  {
    id: 'g03',
    category: 'geografia',
    difficulty: 2,
    question: '¿Qué volcán activo está cerca de Granada, Nicaragua?',
    options: ['Volcán Irazú', 'Volcán Mombacho', 'Volcán Arenal', 'Volcán Santa Ana'],
    answer: 1,
  },
  {
    id: 'g04',
    category: 'geografia',
    difficulty: 2,
    question: '¿Qué puerto costarricense en el Pacífico era el punto de desembarco de refuerzos?',
    options: ['Puerto Limón', 'Puntarenas', 'Quepos', 'Golfito'],
    answer: 1,
  },
  {
    id: 'g05',
    category: 'geografia',
    difficulty: 1,
    question: '¿Cuántos países forman Centroamérica?',
    options: ['4', '5', '6', '7'],
    answer: 3,
  },
  {
    id: 'g06',
    category: 'geografia',
    difficulty: 2,
    question: '¿Qué ciudad salvadoreña fue base de operaciones del ejército del general Ramón Belloso?',
    options: ['San Salvador', 'Santa Ana', 'San Miguel', 'Sonsonate'],
    answer: 0,
  },
  {
    id: 'g07',
    category: 'geografia',
    difficulty: 3,
    question: '¿Por qué el istmo de Rivas era estratégicamente vital en 1856?',
    options: [
      'Era la capital de Nicaragua',
      'Era el paso más corto entre el lago de Nicaragua y el océano Pacífico',
      'Tenía las mejores tierras agrícolas',
      'Era frontera con Costa Rica',
    ],
    answer: 1,
  },
  {
    id: 'g08',
    category: 'geografia',
    difficulty: 2,
    question: '¿Qué lago nicaragüense es el más grande de Centroamérica?',
    options: ['Lago de Managua', 'Lago de Nicaragua', 'Lago Gatún', 'Lago Atitlán'],
    answer: 1,
  },
  {
    id: 'g09',
    category: 'geografia',
    difficulty: 3,
    question: '¿Cuál era el nombre colonial de la ruta que usaban los filibusteros para cruzar Nicaragua?',
    options: ['Ruta del Maíz', 'Ruta de Tránsito', 'Camino Real', 'Paso del Istmo'],
    answer: 1,
  },

  // ─── ARMAS ──────────────────────────────────────────────
  {
    id: 'a01',
    category: 'armas',
    difficulty: 1,
    question: '¿Qué rifle usaban principalmente los filibusteros en 1856?',
    options: ['Winchester 1873', 'Enfield Pattern 1853', 'Springfield Model 1855', 'Sharps 1852'],
    answer: 2,
  },
  {
    id: 'a02',
    category: 'armas',
    difficulty: 2,
    question: '¿Qué arma de artillería se usó en la Batalla de Rivas?',
    options: ['Cañón de campaña de 6 libras', 'Obús Howitzer', 'Mortero de trinchera', 'Cañón naval de 12 libras'],
    answer: 0,
  },
  {
    id: 'a03',
    category: 'armas',
    difficulty: 2,
    question: '¿Cuál era la principal ventaja del rifle Minié sobre los mosquetes anteriores?',
    options: [
      'Podía disparar 10 balas por minuto',
      'Mayor alcance y precisión gracias a la bala cónica',
      'Era más liviano que cualquier arma anterior',
      'No necesitaba pólvora',
    ],
    answer: 1,
  },
  {
    id: 'a04',
    category: 'armas',
    difficulty: 1,
    question: '¿Qué arma improvisada usaba la infantería centroamericana además del fusil?',
    options: ['Hacha de guerra', 'Machete', 'Garrote', 'Cuchillo bowie'],
    answer: 1,
  },
  {
    id: 'a05',
    category: 'armas',
    difficulty: 3,
    question: '¿Qué es un "escopetero" en el contexto de los ejércitos centroamericanos del siglo XIX?',
    options: [
      'Soldado especialista en explosivos',
      'Soldado armado con escopeta de cañón corto para combate cerrado',
      'Fabricante de armas del ejército',
      'Oficial de artillería',
    ],
    answer: 1,
  },

  // ─── UNIFORMES ──────────────────────────────────────────
  {
    id: 'u01',
    category: 'uniformes',
    difficulty: 1,
    question: '¿De qué color era el uniforme básico de la infantería costarricense en 1856?',
    options: ['Azul oscuro', 'Blanco', 'Verde oliva', 'Café tierra'],
    answer: 1,
  },
  {
    id: 'u02',
    category: 'uniformes',
    difficulty: 2,
    question: '¿Qué tipo de sombrero usaban típicamente los soldados filibusteros?',
    options: ['Shako de infantería', 'Kepí estilo francés', 'Sombrero de jipijapa (panamá)', 'Bicornio napoleónico'],
    answer: 2,
  },
  {
    id: 'u03',
    category: 'uniformes',
    difficulty: 2,
    question: '¿Qué color de divisa distinguía a los oficiales del ejército aliado de Nicaragua?',
    options: ['Dorado', 'Rojo carmesí', 'Azul real', 'Verde'],
    answer: 1,
  },
  {
    id: 'u04',
    category: 'uniformes',
    difficulty: 3,
    question: '¿Qué accesorio de uniforme distinguía a un sargento de un soldado raso en los ejércitos centroamericanos?',
    options: [
      'Pluma en el sombrero',
      'Galones en la manga',
      'Cinturón dorado',
      'Escarapela tricolor',
    ],
    answer: 1,
  },
  {
    id: 'u05',
    category: 'uniformes',
    difficulty: 1,
    question: '¿Qué simbolizaba la escarapela azul y blanco que portaban los soldados guatemaltecos?',
    options: [
      'Colores de la bandera de Guatemala',
      'Colores de la Federación Centroamericana',
      'Alianza con Gran Bretaña',
      'Pertenencia al ejército regular',
    ],
    answer: 1,
  },

  // ─── HISTORIA AVANZADA ──────────────────────────────────
  {
    id: 'h13',
    category: 'historia',
    difficulty: 3,
    question: '¿Qué tratado puso fin oficialmente a las hostilidades con Walker en 1857?',
    options: [
      'Tratado de Rivas',
      'Capitulación de la hacienda La Trinidad',
      'Acuerdo de paz de Granada',
      'Tratado de Managua',
    ],
    answer: 1,
  },
  {
    id: 'h14',
    category: 'historia',
    difficulty: 2,
    question: '¿Quién comandaba las fuerzas hondureñas en la Campaña Nacional?',
    options: [
      'Santos Guardiola',
      'Florencio Xatruch',
      'José Trinidad Cabañas',
      'Francisco Ferrera',
    ],
    answer: 1,
  },
  {
    id: 'h15',
    category: 'historia',
    difficulty: 2,
    question: '¿Cuándo se celebra el Día del Boyero en Costa Rica, relacionado con la Campaña Nacional?',
    options: ['11 de abril', '15 de septiembre', '20 de marzo', '25 de julio'],
    answer: 0,
  },
  {
    id: 'h16',
    category: 'historia',
    difficulty: 3,
    question: '¿Bajo qué bandera combatieron los filibusteros de Walker?',
    options: [
      'Bandera de Estados Unidos',
      'Bandera de la República de Nicaragua bajo Walker',
      'Bandera confederada',
      'Sin bandera oficial',
    ],
    answer: 1,
  },
  {
    id: 'h17',
    category: 'historia',
    difficulty: 2,
    question: '¿Qué rango militar ostentaba William Walker cuando gobernó Nicaragua?',
    options: ['General', 'Coronel', 'Presidente y General en Jefe', 'Almirante'],
    answer: 2,
  },
  {
    id: 'h18',
    category: 'historia',
    difficulty: 3,
    question: '¿Qué general salvadoreño comandó la división del ejército aliado de El Salvador?',
    options: ['Gerardo Barrios', 'Ramón Belloso', 'Francisco Dueñas', 'Santiago González'],
    answer: 1,
  },
  {
    id: 'h19',
    category: 'historia',
    difficulty: 1,
    question: '¿Qué apodo recibió Juan Santamaría en la historia costarricense?',
    options: ['El Soldado de la Patria', 'El Héroe Nacional', 'El Tambor', 'El Voluntario'],
    answer: 2,
  },
  {
    id: 'h20',
    category: 'historia',
    difficulty: 2,
    question: '¿Qué nación extranjera ayudó a transportar a Walker fuera de Centroamérica en 1857?',
    options: ['Gran Bretaña', 'Francia', 'Estados Unidos', 'México'],
    answer: 2,
  },
];

// Obtener preguntas por categoría
export function getQuestionsByCategory(category) {
  return TRIVIA_QUESTIONS.filter(q => q.category === category);
}

// Obtener pregunta aleatoria por categoría
export function getRandomQuestion(category = null) {
  const pool = category
    ? TRIVIA_QUESTIONS.filter(q => q.category === category)
    : TRIVIA_QUESTIONS;
  return pool[Math.floor(Math.random() * pool.length)];
}

// Mapeo de categoría → tipo de bono
export const CATEGORY_BONUS_TYPE = {
  historia:   'combat',
  tactica:    'combat',
  geografia:  'move',
  armas:      'estetic',
  uniformes:  'estetic',
};
