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
    options: ['Lorenzo Salazar', 'Máximo Blanco', 'Manuel Quirós', 'Juan Santamaría'],
    answer: 3,
    note: 'MEP CR · 7mo grado · Figura heroica nacional',
  },
  {
    id: 'h-p-03', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿De qué país venía William Walker, el líder de los filibusteros?',
    options: ['Estados Unidos', 'Inglaterra', 'España', 'México'],
    answer: 0,
    note: 'MEP CR · MINED NI · contenido básico',
  },
  {
    id: 'h-p-04', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿En qué país centroamericano se desarrolló la mayor parte de la campaña?',
    options: ['Costa Rica', 'Honduras', 'Nicaragua', 'Guatemala'],
    answer: 2,
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
    options: ['El Héroe', 'El General', 'El Voluntario', 'El Tambor'],
    answer: 3,
    note: 'MEP CR · símbolo nacional',
  },
  {
    id: 'h-p-07', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿Cuántos países centroamericanos lucharon contra Walker?',
    options: ['5', '2', '3', '4'],
    answer: 0,
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
    options: ['Destino Manifiesto', 'Doctrina Monroe', 'Doctrina Truman', 'Política del Buen Vecino'],
    answer: 0,
    note: 'MEP CR · 9no grado · contexto imperialismo',
  },
  {
    id: 'h-s-02', category: 'historia', level: 'secundaria', difficulty: 2,
    question: '¿Bajo qué argumento Walker legalizó la esclavitud en Nicaragua en 1856?',
    options: [
      'Para atraer inversión inglesa',
      'Por tradición colonial española',
      'Para ganarse el apoyo de los estados esclavistas del sur de EE.UU.',
      'Por petición de los terratenientes nicaragüenses'
    ],
    answer: 2,
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
      'Defensa, Ataque y Rendición',
      'Santa Rosa, Rivas y Granada',
      'Primera, Segunda y Tercera Campaña'
    ],
    answer: 3,
    note: 'MEP CR · estructura curricular oficial',
  },
  {
    id: 'h-s-05', category: 'historia', level: 'secundaria', difficulty: 3,
    question: '¿Cómo contribuyó la Campaña Nacional a forjar la identidad nacional costarricense?',
    options: [
      'Fue el primer esfuerzo colectivo que unificó a todos los costarricenses como nación',
      'Estableció la religión oficial del país',
      'Llevó a Costa Rica a unirse a la Federación Centroamericana',
      'Generó la primera constitución del país'
    ],
    answer: 0,
    note: 'MEP CR · identidad nacional · Víctor Hugo Acuña',
  },
  {
    id: 'h-s-06', category: 'historia', level: 'secundaria', difficulty: 2,
    question: '¿En qué año y país fue fusilado William Walker?',
    options: ['1859, Nicaragua', '1861, Costa Rica', '1860, Honduras', '1862, Guatemala'],
    answer: 2,
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
    options: ['Gerardo Barrios', 'Francisco Dueñas', 'Santiago González', 'Ramón Belloso'],
    answer: 3,
    note: 'MINED SV · Historia de El Salvador',
  },
  {
    id: 'h-s-09', category: 'historia', level: 'secundaria', difficulty: 3,
    question: '¿Qué importancia histórica tiene la Campaña Nacional para Nicaragua según el MINED?',
    options: [
      'Demostró que Nicaragua podía defender su soberanía con aliados centroamericanos',
      'Fue el origen de la Guardia Nacional',
      'Llevó a la anexión de Nicaragua a EE.UU.',
      'Fue el inicio de la independencia de Nicaragua'
    ],
    answer: 0,
    note: 'MINED NI · soberanía e identidad nacional',
  },
  {
    id: 'h-s-10', category: 'historia', level: 'secundaria', difficulty: 3,
    question: '¿Cuál fue la capitulación que puso fin a la presencia de Walker en Nicaragua en 1857?',
    options: [
      'Tratado de Rivas',
      'Acuerdo de Granada',
      'Capitulación de La Trinidad',
      'Rendición de San Juan del Sur'
    ],
    answer: 2,
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
      'Porque era la frontera con Costa Rica',
      'Para construir un canal',
      'Para impedir que Walker recibiera refuerzos y suministros'
    ],
    answer: 3,
    note: 'MEP CR · estrategia de la campaña',
  },
  {
    id: 't-p-03', category: 'tactica', level: 'primaria', difficulty: 2,
    question: '¿Qué ventaja tenían los filibusteros sobre los soldados centroamericanos?',
    options: [
      'Tenían armas de fuego más modernas',
      'Eran más numerosos',
      'Conocían mejor el terreno',
      'Tenían apoyo de otros países centroamericanos'
    ],
    answer: 0,
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
      'Conectaba Granada con el Atlántico directamente',
      'Era la vía por donde llegaban refuerzos y dinero de EE.UU. a través de Nicaragua',
      'Era la ruta oficial del ejército nicaragüense'
    ],
    answer: 2,
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
      'Por orden del gobierno de EE.UU.',
      'Fue un incendio accidental',
      'Para negar a Walker una base de recursos y su símbolo de poder'
    ],
    answer: 3,
    note: 'MINED NI · táctica de tierra quemada',
  },

  // ═══════════════════════════════════════════════
  // GEOGRAFÍA — PRIMARIA
  // ═══════════════════════════════════════════════
  {
    id: 'g-p-01', category: 'geografia', level: 'primaria', difficulty: 1,
    question: '¿Qué río conecta el lago de Nicaragua con el océano Atlántico?',
    options: ['Río San Juan', 'Río Grande', 'Río Coco', 'Río Tempisque'],
    answer: 0,
    note: 'MEP CR · geografía regional',
  },
  {
    id: 'g-p-02', category: 'geografia', level: 'primaria', difficulty: 1,
    question: '¿En qué país está la ciudad de Rivas, donde se libró una batalla clave?',
    options: ['Costa Rica', 'Honduras', 'Nicaragua', 'Guatemala'],
    answer: 2,
    note: 'MINED NI · geografía histórica',
  },
  {
    id: 'g-p-03', category: 'geografia', level: 'primaria', difficulty: 1,
    question: '¿Cuántos países forman Centroamérica?',
    options: ['4', '7', '5', '6'],
    answer: 1,
    note: 'Contenido básico regional',
  },
  {
    id: 'g-p-04', category: 'geografia', level: 'primaria', difficulty: 2,
    question: '¿Cuál es el lago más grande de Centroamérica, importante en la campaña?',
    options: ['Lago de Managua', 'Lago Atitlán', 'Lago Gatún', 'Lago de Nicaragua'],
    answer: 3,
    note: 'MINED NI · geografía',
  },
  {
    id: 'g-p-05', category: 'geografia', level: 'primaria', difficulty: 2,
    question: '¿Qué ciudad fue la capital de Costa Rica durante la Campaña Nacional?',
    options: ['San José', 'Cartago', 'Heredia', 'Alajuela'],
    answer: 0,
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
      'Tenía las mejores tierras agrícolas de la región',
      'Era el paso más corto entre el lago de Nicaragua y el océano Pacífico en la Ruta de Tránsito',
      'Era la única frontera terrestre entre Nicaragua y Costa Rica'
    ],
    answer: 2,
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
      'Tenía las mayores reservas de oro de América',
      'Era el principal socio comercial de Gran Bretaña en el Caribe',
      'Ofrecía la ruta de tránsito más rápida entre el Atlántico y el Pacífico antes del Canal de Panamá'
    ],
    answer: 3,
    note: 'MEP CR · 9no grado · contexto global',
  },

  // ═══════════════════════════════════════════════
  // ARMAS — PRIMARIA
  // ═══════════════════════════════════════════════
  {
    id: 'a-p-01', category: 'armas', level: 'primaria', difficulty: 1,
    question: '¿Qué arma cuerpo a cuerpo usaban casi todos los soldados centroamericanos?',
    options: ['Machete', 'Lanza', 'Espada', 'Hacha'],
    answer: 0,
    note: 'Contenido regional · armamento básico',
  },
  {
    id: 'a-p-02', category: 'armas', level: 'primaria', difficulty: 2,
    question: '¿Cuál era la principal arma de fuego de los soldados de infantería en 1856?',
    options: ['Pistola', 'Metralleta', 'Fusil de avancarga', 'Arco y flecha'],
    answer: 2,
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
      'El avancarga era más preciso a larga distancia',
      'No había diferencia práctica en combate',
      'El retrocarga se cargaba más rápido desde la culata, aumentando la cadencia de fuego'
    ],
    answer: 3,
    note: 'Tecnología militar · siglo XIX',
  },

  // ═══════════════════════════════════════════════
  // UNIFORMES — PRIMARIA
  // ═══════════════════════════════════════════════
  {
    id: 'u-p-01', category: 'uniformes', level: 'primaria', difficulty: 1,
    question: '¿De qué color era el uniforme básico de la infantería costarricense en 1856?',
    options: ['Blanco', 'Azul', 'Verde', 'Rojo'],
    answer: 0,
    note: 'MEP CR · iconografía histórica',
  },
  {
    id: 'u-p-02', category: 'uniformes', level: 'primaria', difficulty: 2,
    question: '¿Qué accesorio identificaba al oficial de mayor rango en los ejércitos aliados?',
    options: ['Una capa roja', 'Un sombrero de plumas', 'Galones y charreteras en el uniforme', 'Una espada dorada'],
    answer: 2,
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
      'El clima tropical impedía usar uniformes',
      'Walker prohibió los uniformes por razones tácticas',
      'Eran mercenarios irregulares sin logística militar formal ni uniformes estandarizados'
    ],
    answer: 3,
    note: 'Historia militar · fuerzas irregulares',
  },

  // ═══════════════════════════════════════════════
  // HISTORIA — NUEVAS (primaria + secundaria)
  // ═══════════════════════════════════════════════
  {
    id: 'h-p-11', category: 'historia', level: 'primaria', difficulty: 1,
    question: '¿Qué enfermedad mató a muchos soldados costarricenses durante la Campaña Nacional?',
    options: ['Cólera', 'Malaria', 'Viruela', 'Fiebre amarilla'],
    answer: 0,
    note: 'MEP CR · consecuencias sanitarias de la campaña',
  },
  {
    id: 'h-p-12', category: 'historia', level: 'primaria', difficulty: 2,
    question: '¿Qué país centroamericano se unió a la coalición aliada pero llegó más tarde al conflicto?',
    options: ['Costa Rica', 'Belice', 'Guatemala', 'Panamá'],
    answer: 2,
    note: 'Coalición centroamericana',
  },
  {
    id: 'h-s-11', category: 'historia', level: 'secundaria', difficulty: 2,
    question: '¿Qué potencia extranjera bloqueó el río San Juan para debilitar a Walker en 1857?',
    options: ['Francia', 'Gran Bretaña', 'España', 'Estados Unidos (gobierno federal)'],
    answer: 1,
    note: 'Geopolítica del conflicto · intereses en la ruta interoceánica',
  },
  {
    id: 'h-s-12', category: 'historia', level: 'secundaria', difficulty: 3,
    question: '¿Por qué la ruta del río San Juan era estratégicamente vital para Walker?',
    options: [
      'Era la única fuente de agua potable en Nicaragua',
      'Unía las capitales de Nicaragua y Costa Rica',
      'Era la frontera natural reconocida por Gran Bretaña',
      'Controlaba el tránsito interoceánico y el suministro de tropas y armas desde EE.UU.'
    ],
    answer: 3,
    note: 'Estrategia · Compañía Accesoria del Tránsito',
  },

  // ═══════════════════════════════════════════════
  // TÁCTICA — NUEVAS
  // ═══════════════════════════════════════════════
  {
    id: 't-p-04', category: 'tactica', level: 'primaria', difficulty: 1,
    question: '¿Qué ventaja tenían los aliados al conocer mejor la geografía del terreno centroamericano?',
    options: [
      'Podían moverse más rápido por caminos conocidos y emboscar al enemigo',
      'Tenían mejores uniformes',
      'Sus rifles eran más modernos',
      'Recibían apoyo aéreo',
    ],
    answer: 0,
    note: 'Táctica · ventaja del terreno propio',
  },
  {
    id: 't-s-04', category: 'tactica', level: 'secundaria', difficulty: 2,
    question: '¿Por qué los aliados optaron por incendiar Rivas en lugar de atacarla frontalmente?',
    options: [
      'Por error durante el combate',
      'Órdenes directas de Walker',
      'Para destruir los depósitos de alimentos y municiones filibusteras',
      'Para señalizar la posición a otras tropas aliadas'
    ],
    answer: 2,
    note: 'Táctica · batalla de Rivas · acción de Juan Santamaría',
  },
  {
    id: 't-s-05', category: 'tactica', level: 'secundaria', difficulty: 3,
    question: '¿Qué táctica usaron los ejércitos aliados para cortar el suministro de Walker sin combate directo prolongado?',
    options: [
      'Bloqueo de puertos del Pacífico',
      'Cerco y bloqueo del río San Juan, cortando refuerzos y provisiones',
      'Alianza con tribus indígenas del interior',
      'Destrucción de los cañones filibusteros',
    ],
    answer: 1,
    note: 'Estrategia de sitio · coalición centroamericana',
  },
  {
    id: 't-p-05', category: 'tactica', level: 'primaria', difficulty: 2,
    question: '¿Cuál fue la estrategia principal de Costa Rica al inicio de la campaña en 1856?',
    options: [
      'Esperar a que Walker atacara primero',
      'Pedir ayuda a España',
      'Bloquear los puertos del Pacífico',
      'Avanzar rápidamente para sorprender a los filibusteros en Santa Rosa'
    ],
    answer: 3,
    note: 'MEP CR · Campaña de 1856 · marcha hacia Santa Rosa',
  },

  // ═══════════════════════════════════════════════
  // GEOGRAFÍA — NUEVAS
  // ═══════════════════════════════════════════════
  {
    id: 'g-p-06', category: 'geografia', level: 'primaria', difficulty: 1,
    question: '¿Qué lago nicaragüense era clave para el control del territorio durante la campaña?',
    options: ['Lago de Nicaragua (Cocibolca)', 'Lago de Managua', 'Lago Arenal', 'Lago Gatún'],
    answer: 0,
    note: 'Geografía · Nicaragua · ruta interoceánica',
  },
  {
    id: 'g-p-07', category: 'geografia', level: 'primaria', difficulty: 2,
    question: '¿Por qué ciudad nicaragüense estableció Walker su capital y base de operaciones?',
    options: ['Managua', 'León', 'Granada', 'Masaya'],
    answer: 2,
    note: 'Granada · capital filibustera',
  },
  {
    id: 'g-s-04', category: 'geografia', level: 'secundaria', difficulty: 2,
    question: '¿Qué río forma parte de la frontera entre Costa Rica y Nicaragua y fue escenario de operaciones militares?',
    options: ['Río Tempisque', 'Río San Juan', 'Río Reventazón', 'Río Sarapiquí'],
    answer: 1,
    note: 'Geografía · frontera · ruta interoceánica',
  },
  {
    id: 'g-s-05', category: 'geografia', level: 'secundaria', difficulty: 3,
    question: '¿Por qué la hacienda Santa Rosa era una posición geográficamente estratégica para detener el avance filibustero?',
    options: [
      'Tenía una fortaleza colonial construida por España',
      'Estaba en la cima de una montaña con visión de 360°',
      'Poseía el único pozo de agua en la región',
      'Era el único paso natural entre Guanacaste y el interior de Costa Rica'
    ],
    answer: 3,
    note: 'MEP CR · Batalla de Santa Rosa · geografía de Guanacaste',
  },

  // ═══════════════════════════════════════════════
  // ARMAS — NUEVAS
  // ═══════════════════════════════════════════════
  {
    id: 'a-p-03', category: 'armas', level: 'primaria', difficulty: 1,
    question: '¿Qué arma blanca era común entre los soldados centroamericanos durante la Campaña Nacional?',
    options: ['Machete', 'Sable de caballería', 'Bayoneta francesa', 'Hacha de guerra'],
    answer: 0,
    note: 'Armamento · infantería centroamericana',
  },
  {
    id: 'a-p-04', category: 'armas', level: 'primaria', difficulty: 2,
    question: '¿Qué tipo de artillería usaban los ejércitos aliados centroamericanos principalmente?',
    options: ['Morteros de sitio', 'Artillería naval', 'Cañones de campaña tirados por caballos', 'No usaban artillería'],
    answer: 2,
    note: 'Armamento · artillería de campaña siglo XIX',
  },
  {
    id: 'a-s-03', category: 'armas', level: 'secundaria', difficulty: 2,
    question: '¿Qué ventaja táctica daba el rifle de percusión sobre el mosquete de chispa en la época de la campaña?',
    options: [
      'Era más pesado y causaba más daño',
      'Mayor alcance, precisión y fiabilidad en condiciones húmedas tropicales',
      'Podía disparar más rápido en salvas',
      'No necesitaba pólvora negra',
    ],
    answer: 1,
    note: 'Historia del armamento · siglo XIX',
  },
  {
    id: 'a-s-04', category: 'armas', level: 'secundaria', difficulty: 3,
    question: '¿Por qué los filibusteros de Walker tenían ventaja armamentística inicial sobre las fuerzas aliadas?',
    options: [
      'Eran entrenados por el ejército prusiano',
      'Contaban con apoyo de artillería naval británica',
      'Usaban explosivos que los aliados desconocían',
      'Traían rifles modernos y experiencia de combate de las guerras civiles estadounidenses'
    ],
    answer: 3,
    note: 'Historia militar · ventaja filibustera inicial',
  },

  // ═══════════════════════════════════════════════
  // UNIFORMES — NUEVAS
  // ═══════════════════════════════════════════════
  {
    id: 'u-p-03', category: 'uniformes', level: 'primaria', difficulty: 1,
    question: '¿De qué color era el uniforme de los soldados costarricenses durante la Campaña Nacional?',
    options: ['Azul y blanco', 'Rojo y amarillo', 'Verde olivo', 'Negro'],
    answer: 0,
    note: 'MEP CR · uniformes históricos costarricenses',
  },
  {
    id: 'u-p-04', category: 'uniformes', level: 'primaria', difficulty: 2,
    question: '¿Qué tipo de sombrero usaban típicamente los soldados de infantería aliados en 1856?',
    options: ['Casco de metal', 'Sombrero de copa alta', 'Quepis (kepí) de tela', 'Turbante'],
    answer: 2,
    note: 'Uniformes militares centroamericanos siglo XIX',
  },
  {
    id: 'u-s-03', category: 'uniformes', level: 'secundaria', difficulty: 2,
    question: '¿Qué elemento del uniforme diferenciaba a los oficiales de los soldados rasos en los ejércitos aliados?',
    options: [
      'El color del pantalón',
      'Las charreteras, galones en la manga y tipo de sable',
      'El tamaño de la mochila',
      'El número de botones en el capote',
    ],
    answer: 1,
    note: 'Jerarquía militar · uniformes del siglo XIX',
  },
  {
    id: 'u-s-04', category: 'uniformes', level: 'secundaria', difficulty: 3,
    question: '¿Cómo influyó el clima tropical centroamericano en el diseño práctico de los uniformes aliados?',
    options: [
      'Se copiaron exactamente los uniformes europeos sin modificación',
      'Se usaron pieles de animales locales',
      'El clima no tuvo ningún efecto en el diseño de uniformes',
      'Se adoptaron telas ligeras de algodón y colores claros para soportar el calor y la humedad'
    ],
    answer: 3,
    note: 'Adaptación de uniformes · condiciones tropicales',
  },
];

// ── Memoria de preguntas usadas (sin repetición) ─────────────
const _usedIds = new Set();

function _markUsed(id) {
  _usedIds.add(id);
}

function _resetIfExhausted(pool) {
  // Si todas las preguntas del pool ya fueron usadas, reiniciar solo ese pool
  const allUsed = pool.every(q => _usedIds.has(q.id));
  if (allUsed) {
    pool.forEach(q => _usedIds.delete(q.id));
  }
}

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

  // Evitar repetición — filtrar ya usadas
  _resetIfExhausted(pool);
  const available = pool.filter(q => !_usedIds.has(q.id));
  const chosen = available.length > 0
    ? available[Math.floor(Math.random() * available.length)]
    : pool[Math.floor(Math.random() * pool.length)]; // último recurso

  _markUsed(chosen.id);
  return chosen;
}

// Categoría → tipo de bono
export const CATEGORY_BONUS_TYPE = {
  historia:   'combat',
  tactica:    'combat',
  geografia:  'move',
  armas:      'estetic',
  uniformes:  'estetic',
};
