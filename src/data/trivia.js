// ============================================================
// BASE DE PREGUNTAS — La Campaña Nacional 1856-1857
// Alineado a programas de Estudios Sociales de Centroamérica
// MEP Costa Rica · MINED Nicaragua · SEP Honduras · MINED El Salvador · MINEDUC Guatemala
//
// Categorías:
//   'historia'   → bono combate
//   'tactica'    → bono combate
//   'geografia'  → bono movimiento
//   'armas'      → ítem estético
//   'uniformes'  → ítem estético
//
// Niveles:
//   'primaria'   → 4to–6to grado (9–12 años)
//   'secundaria' → 7mo–9no grado (12–15 años)
// ============================================================

export const TRIVIA_QUESTIONS = [

  // ═══════════════════════════════════════════════
  // HISTORIA — PRIMARIA
  // ═══════════════════════════════════════════════
  {
    id: 'h-p-01', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿Quién era el presidente de Costa Rica durante la Campaña Nacional?',
    options: ['Tomás Guardia', 'Juan Rafael Mora Porras', 'Braulio Carrillo', 'Próspero Fernández'],
    answer: 1,
    note: 'MEP CR · 7mo grado · Unidad 3',
  },
  {
    id: 'h-p-02', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿Quién fue el héroe costarricense que quemó el mesón en Rivas?',
    options: ['Juan Santamaría', 'Lorenzo Salazar', 'Máximo Blanco', 'Manuel Quirós'],
    answer: 0,
    note: 'MEP CR · 7mo grado · Figura heroica nacional',
  },
  {
    id: 'h-p-03', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿De qué país venía William Walker, el líder de los filibusteros?',
    options: ['Inglaterra', 'España', 'Estados Unidos', 'México'],
    answer: 2,
    note: 'MEP CR · MINED NI · contenido básico',
  },
  {
    id: 'h-p-04', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿En qué país centroamericano se desarrolló la mayor parte de la campaña?',
    options: ['Costa Rica', 'Honduras', 'Guatemala', 'Nicaragua'],
    answer: 3,
    note: 'MINED NI · contenido básico',
  },
  {
    id: 'h-p-05', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿Cómo se llama la batalla donde Costa Rica ganó su primera victoria?',
    options: ['Batalla de Rivas', 'Batalla de Santa Rosa', 'Batalla de San Jacinto', 'Batalla de Granada'],
    answer: 1,
    note: 'MEP CR · 7mo grado',
  },
  {
    id: 'h-p-06', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿Qué apodo tiene Juan Santamaría en Costa Rica?',
    options: ['El Héroe', 'El General', 'El Tambor', 'El Voluntario'],
    answer: 2,
    note: 'MEP CR · símbolo nacional',
  },
  {
    id: 'h-p-07', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿Cuántos países centroamericanos lucharon contra Walker?',
    options: ['2', '3', '4', '5'],
    answer: 3,
    note: 'Contenido regional centroamericano',
  },
  {
    id: 'h-p-08', category: 'historia', level: 'primaria', difficulty: 2,
    question: '¿En qué año comenzó la Campaña Nacional?',
    options: ['1854', '1855', '1856', '1858'],
    answer: 2,
    note: 'MEP CR · MINED NI',
  },
  {
    id: 'h-p-09', category: 'historia', level: 'primaria', difficulty: 2,
    question: '¿Qué enfermedad afectó gravemente a los soldados costarricenses al regresar?',
    options: ['Viruela', 'Fiebre amarilla', 'Sarampión', 'Cólera'],
    answer: 1,
    note: 'MEP CR · impacto humano de la campaña',
  },
  {
    id: 'h-p-10', category: 'historia', level: 'primaria', difficulty: 2,
    question: '¿Qué ciudad nicaragüense capturó Walker como su capital?',
    options: ['Managua', 'León', 'Masaya', 'Granada'],
    answer: 3,
    note: 'MINED NI · 6to grado',
  },

  // ═══════════════════════════════════════════════
  // HISTORIA — SECUNDARIA
  // ═══════════════════════════════════════════════
  {
    id: 'h-s-01', category: 'historia', level: 'secundaria', difficulty: 2,
    question: '¿Qué doctrina política de EE.UU. impulsó la expansión filibustera en Centroamérica?',
    options: ['Doctrina Monroe', 'Destino Manifiesto', 'Doctrina Truman', 'Política del Buen Vecino'],
    answer: 1,
    note: 'MEP CR · 9no grado · contexto imperialismo',
  },
  {
    id: 'h-s-02', category: 'historia', level: 'secundaria', difficulty: 2,
    question: '¿Bajo qué argumento Walker legalizó la esclavitud en Nicaragua en 1856?',
    options: [
      'Para atraer inversión inglesa',
      'Para ganarse el apoyo de los estados esclavistas del sur de EE.UU.',
      'Por tradición colonial española',
      'Por petición de los terratenientes nicaragüenses',
    ],
    answer: 1,
    note: 'MEP CR · 9no grado · contexto político',
  },
  {
    id: 'h-s-03', category: 'historia', level: 'secundaria', difficulty: 2,
    question: '¿Qué papel jugó Cornelio Vanderbilt en el conflicto contra Walker?',
    options: [
      'Financió el ejército aliado',
      'Retiró su apoyo a Walker y financió a sus enemigos tras un conflicto de negocios',
      'Fue aliado incondicional de Walker',
      'Negoció la paz entre Walker y los aliados',
    ],
    answer: 1,
    note: 'MEP CR · 9no grado · factores económicos',
  },
  {
    id: 'h-s-04', category: 'historia', level: 'secundaria', difficulty: 2,
    question: '¿Qué tres fases tuvo la Campaña Nacional de Costa Rica según el MEP?',
    options: [
      'Invasión, Batalla y Paz',
      'Primera, Segunda y Tercera Campaña',
      'Defensa, Ataque y Rendición',
      'Santa Rosa, Rivas y Granada',
    ],
    answer: 1,
    note: 'MEP CR · estructura curricular oficial',
  },
  {
    id: 'h-s-05', category: 'historia', level: 'secundaria', difficulty: 3,
    question: '¿Cómo contribuyó la Campaña Nacional a forjar la identidad nacional costarricense?',
    options: [
      'Estableció la religión oficial del país',
      'Fue el primer esfuerzo colectivo que unificó a todos los costarricenses como nación',
      'Llevó a Costa Rica a unirse a la Federación Centroamericana',
      'Generó la primera constitución del país',
    ],
    answer: 1,
    note: 'MEP CR · identidad nacional · Víctor Hugo Acuña',
  },
  {
    id: 'h-s-06', category: 'historia', level: 'secundaria', difficulty: 2,
    question: '¿En qué año y país fue fusilado William Walker?',
    options: ['1859, Nicaragua', '1860, Honduras', '1861, Costa Rica', '1862, Guatemala'],
    answer: 1,
    note: 'SEP HN · Historia de Honduras',
  },
  {
    id: 'h-s-07', category: 'historia', level: 'secundaria', difficulty: 3,
    question: '¿Quién comandó las fuerzas hondureñas en la Campaña Nacional?',
    options: ['Santos Guardiola', 'Florencio Xatruch', 'José Trinidad Cabañas', 'Francisco Ferrera'],
    answer: 1,
    note: 'SEP HN · héroe nacional de Honduras',
  },
  {
    id: 'h-s-08', category: 'historia', level: 'secundaria', difficulty: 2,
    question: '¿Qué general salvadoreño lideró las tropas de El Salvador en la campaña?',
    options: ['Gerardo Barrios', 'Ramón Belloso', 'Francisco Dueñas', 'Santiago González'],
    answer: 1,
    note: 'MINED SV · Historia de El Salvador',
  },
  {
    id: 'h-s-09', category: 'historia', level: 'secundaria', difficulty: 3,
    question: '¿Qué importancia histórica tiene la Campaña Nacional para Nicaragua según el MINED?',
    options: [
      'Fue el origen de la Guardia Nacional',
      'Demostró que Nicaragua podía defender su soberanía con aliados centroamericanos',
      'Llevó a la anexión de Nicaragua a EE.UU.',
      'Fue el inicio de la independencia de Nicaragua',
    ],
    answer: 1,
    note: 'MINED NI · soberanía e identidad nacional',
  },
  {
    id: 'h-s-10', category: 'historia', level: 'secundaria', difficulty: 3,
    question: '¿Cuál fue la capitulación que puso fin a la presencia de Walker en Nicaragua en 1857?',
    options: [
      'Tratado de Rivas',
      'Capitulación de La Trinidad',
      'Acuerdo de Granada',
      'Rendición de San Juan del Sur',
    ],
    answer: 1,
    note: 'MEP CR · fin de la campaña',
  },

  // ═══════════════════════════════════════════════
  // TÁCTICA — PRIMARIA
  // ═══════════════════════════════════════════════
  {
    id: 't-p-01', category: 'tactica', level: 'primaria', difficulty: 1,
    question: '¿Qué hizo Juan Santamaría para expulsar a los filibusteros del mesón en Rivas?',
    options: ['Los atacó con cañones', 'Prendió fuego al edificio con una antorcha', 'Negoció su rendición', 'Bloqueó el río'],
    answer: 1,
    note: 'MEP CR · acción heroica táctica',
  },
  {
    id: 't-p-02', category: 'tactica', level: 'primaria', difficulty: 2,
    question: '¿Por qué los aliados querían controlar el Río San Juan?',
    options: [
      'Para pescar y alimentar a los soldados',
      'Para impedir que Walker recibiera refuerzos y suministros',
      'Porque era la frontera con Costa Rica',
      'Para construir un canal',
    ],
    answer: 1,
    note: 'MEP CR · estrategia de la campaña',
  },
  {
    id: 't-p-03', category: 'tactica', level: 'primaria', difficulty: 2,
    question: '¿Qué ventaja tenían los filibusteros sobre los soldados centroamericanos?',
    options: [
      'Eran más numerosos',
      'Tenían armas de fuego más modernas',
      'Conocían mejor el terreno',
      'Tenían apoyo de otros países centroamericanos',
    ],
    answer: 1,
    note: 'Contenido regional',
  },

  // ═══════════════════════════════════════════════
  // TÁCTICA — SECUNDARIA
  // ═══════════════════════════════════════════════
  {
    id: 't-s-01', category: 'tactica', level: 'secundaria', difficulty: 2,
    question: '¿Por qué la Ruta de Tránsito era estratégicamente vital para Walker?',
    options: [
      'Era la única carretera entre Nicaragua y Honduras',
      'Era la vía por donde llegaban refuerzos y dinero de EE.UU. a través de Nicaragua',
      'Conectaba Granada con el Atlántico directamente',
      'Era la ruta oficial del ejército nicaragüense',
    ],
    answer: 1,
    note: 'MEP CR · 9no grado · economía y guerra',
  },
  {
    id: 't-s-02', category: 'tactica', level: 'secundaria', difficulty: 3,
    question: '¿Qué fue la "guerra de desgaste" aplicada por los aliados contra Walker?',
    options: [
      'Ataques frontales continuos con toda la tropa',
      'Cortar suministros, bloquear rutas y aislar a Walker hasta que no pudiera sostenerse',
      'Bombardeo constante de Granada',
      'Negociaciones diplomáticas prolongadas',
    ],
    answer: 1,
    note: 'MEP CR · 9no grado · estrategia militar',
  },
  {
    id: 't-s-03', category: 'tactica', level: 'secundaria', difficulty: 2,
    question: '¿Por qué los aliados decidieron quemar Granada antes de retirarse?',
    options: [
      'Para castigar a la población civil',
      'Para negar a Walker una base de recursos y su símbolo de poder',
      'Por orden del gobierno de EE.UU.',
      'Fue un incendio accidental',
    ],
    answer: 1,
    note: 'MINED NI · táctica de tierra quemada',
  },

  // ═══════════════════════════════════════════════
  // GEOGRAFÍA — PRIMARIA
  // ═══════════════════════════════════════════════
  {
    id: 'g-p-01', category: 'geografia', level: 'primaria', difficulty: 1,
    question: '¿Qué río conecta el lago de Nicaragua con el océano Atlántico?',
    options: ['Río Grande', 'Río Coco', 'Río San Juan', 'Río Tempisque'],
    answer: 2,
    note: 'MEP CR · geografía regional',
  },
  {
    id: 'g-p-02', category: 'geografia', level: 'primaria', difficulty: 1,
    question: '¿En qué país está la ciudad de Rivas, donde se libró una batalla clave?',
    options: ['Costa Rica', 'Honduras', 'Guatemala', 'Nicaragua'],
    answer: 3,
    note: 'MINED NI · geografía histórica',
  },
  {
    id: 'g-p-03', category: 'geografia', level: 'primaria', difficulty: 1,
    question: '¿Cuántos países forman Centroamérica?',
    options: ['4', '5', '6', '7'],
    answer: 3,
    note: 'Contenido básico regional',
  },
  {
    id: 'g-p-04', category: 'geografia', level: 'primaria', difficulty: 2,
    question: '¿Cuál es el lago más grande de Centroamérica, importante en la campaña?',
    options: ['Lago de Managua', 'Lago de Nicaragua', 'Lago Atitlán', 'Lago Gatún'],
    answer: 1,
    note: 'MINED NI · geografía',
  },
  {
    id: 'g-p-05', category: 'geografia', level: 'primaria', difficulty: 2,
    question: '¿Qué ciudad fue la capital de Costa Rica durante la Campaña Nacional?',
    options: ['Cartago', 'Heredia', 'San José', 'Alajuela'],
    answer: 2,
    note: 'MEP CR',
  },

  // ═══════════════════════════════════════════════
  // GEOGRAFÍA — SECUNDARIA
  // ═══════════════════════════════════════════════
  {
    id: 'g-s-01', category: 'geografia', level: 'secundaria', difficulty: 2,
    question: '¿Por qué el istmo de Rivas era estratégicamente vital en 1856?',
    options: [
      'Era la capital de Nicaragua',
      'Era el paso más corto entre el lago de Nicaragua y el océano Pacífico en la Ruta de Tránsito',
      'Tenía las mejores tierras agrícolas de la región',
      'Era la única frontera terrestre entre Nicaragua y Costa Rica',
    ],
    answer: 1,
    note: 'MEP CR · MINED NI · geografía estratégica',
  },
  {
    id: 'g-s-02', category: 'geografia', level: 'secundaria', difficulty: 2,
    question: '¿Qué ruta usaban los pasajeros de EE.UU. para cruzar de Atlántico a Pacífico por Nicaragua?',
    options: ['El Canal de Panamá', 'La Ruta de Tránsito por el Río San Juan y lago de Nicaragua', 'El Camino Real colonial', 'La ruta por Honduras'],
    answer: 1,
    note: 'MEP CR · economía e imperialismo',
  },
  {
    id: 'g-s-03', category: 'geografia', level: 'secundaria', difficulty: 3,
    question: '¿Cuál era la importancia económica global de Nicaragua en la década de 1850?',
    options: [
      'Era el mayor productor de café del mundo',
      'Ofrecía la ruta de tránsito más rápida entre el Atlántico y el Pacífico antes del Canal de Panamá',
      'Tenía las mayores reservas de oro de América',
      'Era el principal socio comercial de Gran Bretaña en el Caribe',
    ],
    answer: 1,
    note: 'MEP CR · 9no grado · contexto global',
  },

  // ═══════════════════════════════════════════════
  // ARMAS — PRIMARIA
  // ═══════════════════════════════════════════════
  {
    id: 'a-p-01', category: 'armas', level: 'primaria', difficulty: 1,
    question: '¿Qué arma cuerpo a cuerpo usaban casi todos los soldados centroamericanos?',
    options: ['Lanza', 'Espada', 'Machete', 'Hacha'],
    answer: 2,
    note: 'Contenido regional · armamento básico',
  },
  {
    id: 'a-p-02', category: 'armas', level: 'primaria', difficulty: 2,
    question: '¿Cuál era la principal arma de fuego de los soldados de infantería en 1856?',
    options: ['Pistola', 'Fusil de avancarga', 'Metralleta', 'Arco y flecha'],
    answer: 1,
    note: 'Armamento histórico básico',
  },

  // ═══════════════════════════════════════════════
  // ARMAS — SECUNDARIA
  // ═══════════════════════════════════════════════
  {
    id: 'a-s-01', category: 'armas', level: 'secundaria', difficulty: 2,
    question: '¿Qué ventaja tenía la bala Minié usada en el conflicto?',
    options: [
      'Era más barata de fabricar',
      'Mayor alcance y precisión al ser cónica y expandirse en el cañón rayado',
      'No necesitaba pólvora',
      'Podía dispararse bajo el agua',
    ],
    answer: 1,
    note: 'Tecnología militar del siglo XIX',
  },
  {
    id: 'a-s-02', category: 'armas', level: 'secundaria', difficulty: 3,
    question: '¿Cuál era la diferencia táctica entre un fusil de avancarga y uno de retrocarga?',
    options: [
      'El retrocarga no necesitaba pólvora',
      'El retrocarga se cargaba más rápido desde la culata, aumentando la cadencia de fuego',
      'El avancarga era más preciso a larga distancia',
      'No había diferencia práctica en combate',
    ],
    answer: 1,
    note: 'Tecnología militar · siglo XIX',
  },

  // ═══════════════════════════════════════════════
  // UNIFORMES — PRIMARIA
  // ═══════════════════════════════════════════════
  {
    id: 'u-p-01', category: 'uniformes', level: 'primaria', difficulty: 1,
    question: '¿De qué color era el uniforme básico de la infantería costarricense en 1856?',
    options: ['Azul', 'Verde', 'Blanco', 'Rojo'],
    answer: 2,
    note: 'MEP CR · iconografía histórica',
  },
  {
    id: 'u-p-02', category: 'uniformes', level: 'primaria', difficulty: 2,
    question: '¿Qué accesorio identificaba al oficial de mayor rango en los ejércitos aliados?',
    options: ['Una capa roja', 'Galones y charreteras en el uniforme', 'Un sombrero de plumas', 'Una espada dorada'],
    answer: 1,
    note: 'Iconografía militar del siglo XIX',
  },

  // ═══════════════════════════════════════════════
  // UNIFORMES — SECUNDARIA
  // ═══════════════════════════════════════════════
  {
    id: 'u-s-01', category: 'uniformes', level: 'secundaria', difficulty: 2,
    question: '¿Qué simbolizaban los colores azul y blanco en los uniformes de los ejércitos aliados?',
    options: [
      'Los colores del océano y las nubes centroamericanas',
      'Los colores de la bandera de la antigua Federación Centroamericana',
      'Alianza con Gran Bretaña',
      'Los colores de la Iglesia Católica',
    ],
    answer: 1,
    note: 'Identidad regional centroamericana',
  },
  {
    id: 'u-s-02', category: 'uniformes', level: 'secundaria', difficulty: 3,
    question: '¿Por qué los filibusteros usaban ropa civil mezclada con uniformes militares?',
    options: [
      'Por tradición del ejército de EE.UU.',
      'Eran mercenarios irregulares sin logística militar formal ni uniformes estandarizados',
      'El clima tropical impedía usar uniformes',
      'Walker prohibió los uniformes por razones tácticas',
    ],
    answer: 1,
    note: 'Historia militar · fuerzas irregulares',
  },
];

// ── Utilidades ──────────────────────────────────────────────

export function getQuestionsByCategory(category) {
  return TRIVIA_QUESTIONS.filter(q => q.category === category);
}

export function getQuestionsByLevel(level) {
  return TRIVIA_QUESTIONS.filter(q => q.level === level);
}

export function getRandomQuestion(category = null, level = null) {
  let pool = TRIVIA_QUESTIONS;
  if (category) pool = pool.filter(q => q.category === category);
  if (level)    pool = pool.filter(q => q.level === level);
  if (pool.length === 0) pool = TRIVIA_QUESTIONS; // fallback
  return pool[Math.floor(Math.random() * pool.length)];
}

// Categoría → tipo de bono
export const CATEGORY_BONUS_TYPE = {
  historia:   'combat',
  tactica:    'combat',
  geografia:  'move',
  armas:      'estetic',
  uniformes:  'estetic',
};
