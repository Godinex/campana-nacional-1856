// ============================================================
// BASE DE PREGUNTAS — La Campaña Nacional 1856-1857
// Alineado a programas de Estudios Sociales de Centroamérica
// MEP CR · MINED NI · SEP HN · MINED SV · MINEDUC GT
// ============================================================

export const TRIVIA_QUESTIONS = [

  // ═══════ HISTORIA · PRIMARIA ════════════════════════════
  { id:'hp01', category:'historia', level:'primaria', difficulty:1,
    question:'¿Quién era el presidente de Costa Rica durante la Campaña Nacional?',
    options:['Tomás Guardia','Juan Rafael Mora Porras','Braulio Carrillo','Próspero Fernández'], answer:1 },
  { id:'hp02', category:'historia', level:'primaria', difficulty:1,
    question:'¿Quién fue el héroe costarricense que quemó el mesón en Rivas?',
    options:['Lorenzo Salazar','Máximo Blanco','Manuel Quirós','Juan Santamaría'], answer:3 },
  { id:'hp03', category:'historia', level:'primaria', difficulty:1,
    question:'¿De qué país venía William Walker?',
    options:['Estados Unidos','Inglaterra','España','México'], answer:0 },
  { id:'hp04', category:'historia', level:'primaria', difficulty:1,
    question:'¿En qué país se desarrolló la mayor parte de la campaña?',
    options:['Costa Rica','Honduras','Nicaragua','Guatemala'], answer:2 },
  { id:'hp05', category:'historia', level:'primaria', difficulty:1,
    question:'¿Cómo se llama la primera batalla que ganó Costa Rica?',
    options:['Batalla de Rivas','Batalla de Santa Rosa','Batalla de San Jacinto','Batalla de Granada'], answer:1 },
  { id:'hp06', category:'historia', level:'primaria', difficulty:1,
    question:'¿Qué apodo tiene Juan Santamaría?',
    options:['El Héroe','El General','El Voluntario','El Tambor'], answer:3 },
  { id:'hp07', category:'historia', level:'primaria', difficulty:1,
    question:'¿Cuántos países centroamericanos lucharon contra Walker?',
    options:['5','3','4','6'], answer:0 },
  { id:'hp08', category:'historia', level:'primaria', difficulty:1,
    question:'¿Qué ciudad nicaragüense capturó Walker para usarla como su capital?',
    options:['Managua','León','Granada','Masaya'], answer:2 },
  { id:'hp09', category:'historia', level:'primaria', difficulty:2,
    question:'¿En qué año comenzó la Campaña Nacional?',
    options:['1854','1856','1855','1858'], answer:1 },
  { id:'hp10', category:'historia', level:'primaria', difficulty:2,
    question:'¿Qué enfermedad mató a más soldados costarricenses que las balas?',
    options:['Viruela','Sarampión','Cólera','Fiebre amarilla'], answer:3 },
  { id:'hp11', category:'historia', level:'primaria', difficulty:2,
    question:'¿Quién llamó al pueblo de Costa Rica a defender la patria en 1856?',
    options:['Juan Rafael Mora','Juan Santamaría','El Obispo Llorente','Tomás Guardia'], answer:0 },
  { id:'hp12', category:'historia', level:'primaria', difficulty:2,
    question:'¿Dónde fue fusilado William Walker finalmente?',
    options:['Nicaragua','Costa Rica','Honduras','Guatemala'], answer:2 },
  { id:'hp13', category:'historia', level:'primaria', difficulty:2,
    question:'¿Qué acción heroica realizó Andrés Castro en la Batalla de San Jacinto?',
    options:['Salvó la bandera','Luchó con una piedra al quedarse sin balas','Quemó el puente','Capturó a Walker'], answer:1 },
  { id:'hp14', category:'historia', level:'primaria', difficulty:2,
    question:'¿En qué mes y año se libró la Batalla de Santa Rosa?',
    options:['Enero 1856','Febrero 1856','Abril 1856','Marzo 1856'], answer:3 },
  { id:'hp15', category:'historia', level:'primaria', difficulty:2,
    question:'¿Qué representa el 11 de abril en Costa Rica?',
    options:['El día de la batalla de Rivas y Juan Santamaría','El inicio de la campaña','El día de la rendición de Walker','El día de independencia'], answer:0 },

  // ═══════ HISTORIA · SECUNDARIA ══════════════════════════
  { id:'hs01', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Qué doctrina política de EE.UU. impulsó la expansión filibustera en Centroamérica?',
    options:['Doctrina Monroe','Doctrina Truman','Destino Manifiesto','Política del Buen Vecino'], answer:2 },
  { id:'hs02', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Por qué Walker legalizó la esclavitud en Nicaragua en 1856?',
    options:['Tradición colonial','Para atraer el apoyo de los estados esclavistas del sur de EE.UU.','Por presión inglesa','Por petición de los terratenientes'], answer:1 },
  { id:'hs03', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Qué papel jugó Cornelio Vanderbilt en el conflicto con Walker?',
    options:['Financió el ejército aliado directamente','Fue aliado incondicional de Walker','Negoció la paz','Retiró su apoyo a Walker y financió a sus enemigos'], answer:3 },
  { id:'hs04', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Cuáles fueron las tres fases de la Campaña Nacional según el MEP de Costa Rica?',
    options:['Primera, Segunda y Tercera Campaña','Invasión, Batalla y Paz','Defensa, Ataque y Rendición','Santa Rosa, Rivas y Granada'], answer:0 },
  { id:'hs05', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Cómo contribuyó la Campaña Nacional a la identidad nacional costarricense?',
    options:['Estableció la religión oficial','Llevó a CR a unirse a la Federación','Fue el primer esfuerzo colectivo que unificó a los costarricenses como nación','Generó la primera constitución'], answer:2 },
  { id:'hs06', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Quién comandó las fuerzas hondureñas en la Campaña Nacional?',
    options:['Santos Guardiola','Florencio Xatruch','José Trinidad Cabañas','Francisco Ferrera'], answer:1 },
  { id:'hs07', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Qué general salvadoreño lideró las tropas de El Salvador?',
    options:['Gerardo Barrios','Francisco Dueñas','Santiago González','Ramón Belloso'], answer:3 },
  { id:'hs08', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Cuál fue la capitulación que puso fin a Walker en Nicaragua en 1857?',
    options:['Capitulación de La Trinidad','Tratado de Rivas','Acuerdo de Granada','Rendición de San Juan del Sur'], answer:0 },
  { id:'hs09', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Qué nación extranjera transportó a Walker fuera de Centroamérica en 1857?',
    options:['Gran Bretaña','Francia','Estados Unidos','México'], answer:2 },
  { id:'hs10', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Qué poeta o escritor documentó la Campaña Nacional con canciones patrióticas costarricenses?',
    options:['Ricardo Fernández Guardia','Tadeo Nadeo Gómez','Manuel González Zeledón','Aquileo Echeverría'], answer:1 },
  { id:'hs11', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Por qué el cabildo abierto de noviembre de 1855 fue importante para la Campaña?',
    options:['Se votó la constitución de guerra','Se eligió al general en jefe','Se firmó la alianza con Nicaragua','La población discutió y apoyó unánimemente el llamado de Mora a defender la patria'], answer:3 },
  { id:'hs12', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Qué rango militar se autoproclamó Walker cuando gobernó Nicaragua?',
    options:['Presidente y General en Jefe','General','Coronel','Almirante'], answer:0 },
  { id:'hs13', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Qué importancia tuvo la Campaña Nacional para la soberanía de Nicaragua según el MINED?',
    options:['Fue el origen de la Guardia Nacional','Llevó a la anexión de Nicaragua a EE.UU.','Demostró que Nicaragua podía defender su soberanía con aliados centroamericanos','Fue el inicio de la independencia'], answer:2 },
  { id:'hs14', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Cuál fue el impacto de la fiebre amarilla en la Primera Campaña costarricense?',
    options:['Mató a Walker','Obligó a Costa Rica a retirarse temporalmente y reorganizarse','Afectó solo a los filibusteros','No tuvo impacto significativo'], answer:1 },
  { id:'hs15', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Qué frase dejó Walker escrita al quemar Granada, símbolo de su crueldad?',
    options:['"Nicaragua es mía"','"Cenizas para los rebeldes"','"La gloria es del vencedor"','"Aquí fue Granada"'], answer:3 },

  // ═══════ TÁCTICA · PRIMARIA ═════════════════════════════
  { id:'tp01', category:'tactica', level:'primaria', difficulty:1,
    question:'¿Qué hizo Juan Santamaría para expulsar a los filibusteros del mesón en Rivas?',
    options:['Prendió fuego al edificio','Los atacó con cañones','Negoció su rendición','Bloqueó el río'], answer:0 },
  { id:'tp02', category:'tactica', level:'primaria', difficulty:2,
    question:'¿Por qué los aliados querían controlar el Río San Juan?',
    options:['Para pescar','Era la frontera con Costa Rica','Para impedir que Walker recibiera refuerzos','Para construir un canal'], answer:2 },
  { id:'tp03', category:'tactica', level:'primaria', difficulty:2,
    question:'¿Qué ventaja tenían los filibusteros sobre los soldados centroamericanos?',
    options:['Eran más numerosos','Tenían armas más modernas','Conocían mejor el terreno','Tenían más aliados'], answer:1 },
  { id:'tp04', category:'tactica', level:'primaria', difficulty:2,
    question:'¿Qué hicieron los aliados para que Walker no pudiera recibir más soldados de EE.UU.?',
    options:['Construyeron un muro','Pidieron ayuda a Inglaterra','Rodearon EE.UU.','Bloquearon la Ruta de Tránsito y el Río San Juan'], answer:3 },
  { id:'tp05', category:'tactica', level:'primaria', difficulty:1,
    question:'¿Qué ejércitos centroamericanos se unieron para rodear a Walker en Rivas?',
    options:['Los 5 países centroamericanos','Solo Costa Rica','Costa Rica y Nicaragua','Solo Nicaragua y Honduras'], answer:0 },

  // ═══════ TÁCTICA · SECUNDARIA ═══════════════════════════
  { id:'ts01', category:'tactica', level:'secundaria', difficulty:2,
    question:'¿Por qué la Ruta de Tránsito era estratégicamente vital para Walker?',
    options:['Era la única carretera entre Nicaragua y Honduras','Conectaba Granada con el Atlántico','Era la vía por donde llegaban refuerzos y dinero de EE.UU.','Era la ruta oficial del ejército'], answer:2 },
  { id:'ts02', category:'tactica', level:'secundaria', difficulty:3,
    question:'¿En qué consistió la "guerra de desgaste" aplicada por los aliados?',
    options:['Ataques frontales continuos','Cortar suministros, bloquear rutas y aislar a Walker hasta rendirlo','Bombardeo de Granada','Negociaciones diplomáticas'], answer:1 },
  { id:'ts03', category:'tactica', level:'secundaria', difficulty:2,
    question:'¿Por qué los aliados quemaron Granada antes de retirarse?',
    options:['Para castigar a civiles','Por orden de EE.UU.','Fue accidental','Para negar a Walker una base de recursos y su símbolo de poder'], answer:3 },
  { id:'ts04', category:'tactica', level:'secundaria', difficulty:2,
    question:'¿Qué ventaja táctica daba controlar el Lago de Nicaragua?',
    options:['Dominar la principal vía de comunicación y transporte de la región','Fuente de agua potable','Reserva de pesca para los ejércitos','Era solo simbólico'], answer:0 },
  { id:'ts05', category:'tactica', level:'secundaria', difficulty:3,
    question:'¿Por qué la Hacienda Santa Rosa era un punto estratégico para Costa Rica?',
    options:['Era el cuartel general del ejército','Tenía el único arsenal del país','Era el único paso terrestre hacia Nicaragua por el lado costarricense','Era residencia del presidente Mora'], answer:2 },
  { id:'ts06', category:'tactica', level:'secundaria', difficulty:3,
    question:'¿Qué error táctico cometió Walker al permanecer en Rivas en 1857?',
    options:['Atacó demasiado pronto','Quedó rodeado sin suministros ni posibilidad de escape o refuerzos','Dispersó demasiado sus fuerzas','Confió en una tregua falsa'], answer:1 },

  // ═══════ GEOGRAFÍA · PRIMARIA ════════════════════════════
  { id:'gp01', category:'geografia', level:'primaria', difficulty:1,
    question:'¿Qué río conecta el lago de Nicaragua con el océano Atlántico?',
    options:['Río Grande','Río Coco','Río Tempisque','Río San Juan'], answer:3 },
  { id:'gp02', category:'geografia', level:'primaria', difficulty:1,
    question:'¿En qué país está la ciudad de Rivas, escenario de batallas clave?',
    options:['Nicaragua','Costa Rica','Honduras','Guatemala'], answer:0 },
  { id:'gp03', category:'geografia', level:'primaria', difficulty:1,
    question:'¿Cuántos países forman Centroamérica?',
    options:['4','5','7','6'], answer:2 },
  { id:'gp04', category:'geografia', level:'primaria', difficulty:1,
    question:'¿Cuál es el lago más grande de Centroamérica?',
    options:['Lago de Managua','Lago de Nicaragua','Lago Atitlán','Lago Gatún'], answer:1 },
  { id:'gp05', category:'geografia', level:'primaria', difficulty:2,
    question:'¿Cuál era la capital de Costa Rica durante la Campaña Nacional?',
    options:['Cartago','Heredia','Alajuela','San José'], answer:3 },
  { id:'gp06', category:'geografia', level:'primaria', difficulty:2,
    question:'¿En qué océano desemboca el Río San Juan?',
    options:['Atlántico (Caribe)','Pacífico','Ártico','Índico'], answer:0 },
  { id:'gp07', category:'geografia', level:'primaria', difficulty:2,
    question:'¿Cuál era el principal puerto del Pacífico de Costa Rica en 1856?',
    options:['Puerto Limón','Quepos','Puntarenas','Golfito'], answer:2 },
  { id:'gp08', category:'geografia', level:'primaria', difficulty:2,
    question:'¿En qué región de Nicaragua está la ciudad de Granada?',
    options:['Norte','Sur, cerca del lago de Nicaragua','Costa Caribe','Oeste, en la frontera con Honduras'], answer:1 },

  // ═══════ GEOGRAFÍA · SECUNDARIA ══════════════════════════
  { id:'gs01', category:'geografia', level:'secundaria', difficulty:2,
    question:'¿Por qué el istmo de Rivas era estratégicamente vital en 1856?',
    options:['Era la capital de Nicaragua','Tenía las mejores tierras agrícolas','Era la única frontera con Costa Rica','Era el paso más corto entre el lago de Nicaragua y el océano Pacífico'], answer:3 },
  { id:'gs02', category:'geografia', level:'secundaria', difficulty:2,
    question:'¿Qué ruta usaban los pasajeros de EE.UU. para cruzar de Atlántico a Pacífico por Nicaragua?',
    options:['La Ruta de Tránsito por Río San Juan y lago de Nicaragua','El Canal de Panamá','El Camino Real colonial','La ruta por Honduras'], answer:0 },
  { id:'gs03', category:'geografia', level:'secundaria', difficulty:3,
    question:'¿Cuál era la importancia económica global de Nicaragua en los años 1850?',
    options:['Mayor productor de café del mundo','Mayores reservas de oro de América','Ofrecía la ruta más rápida entre Atlántico y Pacífico antes del Canal de Panamá','Principal socio de Gran Bretaña en el Caribe'], answer:2 },
  { id:'gs04', category:'geografia', level:'secundaria', difficulty:2,
    question:'¿Cuál es la capital de Honduras, país que participó en la Campaña Nacional?',
    options:['San Pedro Sula','Tegucigalpa','Comayagua','La Ceiba'], answer:1 },
  { id:'gs05', category:'geografia', level:'secundaria', difficulty:2,
    question:'¿Por qué el Río San Juan era estratégico para ambos bandos?',
    options:['Era la frontera oficial entre Nicaragua y Costa Rica','Era el único río navegable de Centroamérica','Tenía depósitos de oro','Conectaba el lago de Nicaragua con el Atlántico, pieza clave de la Ruta de Tránsito'], answer:3 },

  // ═══════ ARMAS · PRIMARIA ════════════════════════════════
  { id:'ap01', category:'armas', level:'primaria', difficulty:1,
    question:'¿Qué arma cuerpo a cuerpo usaban casi todos los soldados centroamericanos?',
    options:['Machete','Lanza','Espada','Hacha'], answer:0 },
  { id:'ap02', category:'armas', level:'primaria', difficulty:1,
    question:'¿Cuál era la principal arma de fuego de la infantería en 1856?',
    options:['Pistola','Metralleta','Fusil de avancarga','Arco y flecha'], answer:2 },
  { id:'ap03', category:'armas', level:'primaria', difficulty:2,
    question:'¿Qué usó Andrés Castro cuando se quedó sin munición en San Jacinto?',
    options:['Su espada','Una piedra','Un cuchillo','Un palo'], answer:1 },
  { id:'ap04', category:'armas', level:'primaria', difficulty:2,
    question:'¿Para qué usaban el machete los soldados centroamericanos además del combate?',
    options:['Para cocinar','Para señalar al enemigo','Para construir puentes','Para abrir caminos en la selva y recolectar alimentos'], answer:3 },

  // ═══════ ARMAS · SECUNDARIA ══════════════════════════════
  { id:'as01', category:'armas', level:'secundaria', difficulty:2,
    question:'¿Qué ventaja tenía la bala Minié sobre los proyectiles anteriores?',
    options:['Mayor alcance y precisión por ser cónica y expandirse en el cañón rayado','Era más barata','No necesitaba pólvora','Podía dispararse bajo el agua'], answer:0 },
  { id:'as02', category:'armas', level:'secundaria', difficulty:3,
    question:'¿Cuál era la diferencia táctica entre un fusil de avancarga y uno de retrocarga?',
    options:['El retrocarga no necesitaba pólvora','El avancarga era más preciso','El retrocarga se cargaba más rápido desde la culata aumentando la cadencia','No había diferencia práctica'], answer:2 },
  { id:'as03', category:'armas', level:'secundaria', difficulty:2,
    question:'¿Qué tipo de artillería se usó en la Batalla de Rivas?',
    options:['Obús Howitzer de trinchera','Cañón de campaña de 6 libras','Mortero de 12 libras','Cañón naval autopropulsado'], answer:1 },
  { id:'as04', category:'armas', level:'secundaria', difficulty:3,
    question:'¿Por qué los filibusteros tenían ventaja en armamento sobre los ejércitos aliados?',
    options:['Eran más numerosos','Tenían apoyo naval','Conocían mejor el terreno','Usaban rifles de percusión más modernos y con mayor cadencia de fuego'], answer:3 },

  // ═══════ UNIFORMES · PRIMARIA ════════════════════════════
  { id:'up01', category:'uniformes', level:'primaria', difficulty:1,
    question:'¿De qué color era el uniforme básico de la infantería costarricense en 1856?',
    options:['Blanco','Azul','Verde','Rojo'], answer:0 },
  { id:'up02', category:'uniformes', level:'primaria', difficulty:2,
    question:'¿Qué accesorio identificaba a un oficial de alto rango en los ejércitos aliados?',
    options:['Una capa roja','Un sombrero de plumas','Galones y charreteras en el uniforme','Una espada dorada'], answer:2 },
  { id:'up03', category:'uniformes', level:'primaria', difficulty:2,
    question:'¿Qué colores tenía la bandera de la antigua Federación Centroamericana?',
    options:['Rojo, blanco y azul','Azul, blanco y azul','Verde, blanco y rojo','Amarillo, azul y rojo'], answer:1 },

  // ═══════ UNIFORMES · SECUNDARIA ══════════════════════════
  { id:'us01', category:'uniformes', level:'secundaria', difficulty:2,
    question:'¿Qué simbolizaban los colores azul y blanco en los uniformes de los ejércitos aliados?',
    options:['El océano y las nubes','Alianza con Gran Bretaña','Los colores de la Iglesia Católica','Los colores de la antigua Federación Centroamericana'], answer:3 },
  { id:'us02', category:'uniformes', level:'secundaria', difficulty:3,
    question:'¿Por qué los filibusteros usaban ropa civil mezclada con uniformes militares?',
    options:['Eran mercenarios irregulares sin logística formal ni uniformes estandarizados','Por tradición del ejército de EE.UU.','El clima lo impedía','Walker lo prohibió tácticamente'], answer:0 },
  { id:'us03', category:'uniformes', level:'secundaria', difficulty:2,
    question:'¿Qué elemento del uniforme identificaba al Batallón Voluntarios de Costa Rica?',
    options:['Un escudo en el pecho','Las botas de cuero negro','La escarapela tricolor en el sombrero','El fusil con bayoneta plateada'], answer:2 },

  // ═══════ HISTORIA AVANZADA · SECUNDARIA ══════════════════
  { id:'hx01', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Cuál fue el primer acto oficial de Walker como "presidente" de Nicaragua?',
    options:['Declarar la guerra a Costa Rica','Reinstaurar la esclavitud y hacer el inglés idioma oficial','Disolver el ejército nicaragüense','Firmar un tratado con EE.UU.'], answer:1 },
  { id:'hx02', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Qué rol jugaron las mujeres costarricenses durante la Campaña Nacional?',
    options:['No participaron','Comandaron batallones auxiliares','Sirvieron como espías en Nicaragua','Atendieron heridos, cosieron uniformes y recaudaron fondos para el ejército'], answer:3 },
  { id:'hx03', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Por qué Walker intentó una segunda expedición a Centroamérica en 1860?',
    options:['Quería recuperar Nicaragua y cumplir su sueño imperialista','Fue enviado por el gobierno de EE.UU.','Buscaba oro en Honduras','Quería vengarse de Mora personalmente'], answer:0 },
  { id:'hx04', category:'historia', level:'secundaria', difficulty:3,
    question:'¿Qué país capturó a Walker en su segunda expedición y lo fusiló?',
    options:['Nicaragua','Costa Rica','Honduras','Guatemala'], answer:2 },
  { id:'hx05', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Qué institución de Costa Rica lleva el nombre del héroe Juan Santamaría?',
    options:['La Universidad Nacional','El aeropuerto internacional de San José','El Museo Nacional','El Banco Central'], answer:1 },
  { id:'hx06', category:'historia', level:'secundaria', difficulty:2,
    question:'¿Qué día celebra Costa Rica el Día de Juan Santamaría?',
    options:['15 de septiembre','20 de marzo','1 de mayo','11 de abril'], answer:3 },
  { id:'hx07', category:'tactica', level:'secundaria', difficulty:3,
    question:'¿Cómo logró Costa Rica controlar el Río San Juan en 1857?',
    options:['Capturando los vapores de la compañía de tránsito de Vanderbilt','Con ayuda naval inglesa','Construyendo una presa','Con una operación de caballería'], answer:0 },
  { id:'hx08', category:'geografia', level:'secundaria', difficulty:3,
    question:'¿En qué departamento de Nicaragua ocurrió la Batalla de San Jacinto?',
    options:['Managua','Granada','Matagalpa','Rivas'], answer:2 },
  { id:'hx09', category:'historia', level:'primaria', difficulty:2,
    question:'¿Qué le pasó a Juan Santamaría en la Batalla de Rivas?',
    options:['Fue capturado','Murió al prender fuego al mesón enemigo','Huyó con su batallón','Fue ascendido a general'], answer:1 },
  { id:'hx10', category:'historia', level:'primaria', difficulty:1,
    question:'¿Por qué la Campaña Nacional es importante para todos los países de Centroamérica?',
    options:['Porque la ganó un solo país','Porque contaron con ayuda de Europa','Porque terminó sin violencia','Porque fue una victoria de todos los países centroamericanos juntos'], answer:3 },
];

// ── Tracker de preguntas ya usadas (para evitar repetición) ──
const _usedIds = new Set();

export function resetUsedQuestions() {
  _usedIds.clear();
}

export function getRandomQuestion(category = null, level = null) {
  let pool = TRIVIA_QUESTIONS;
  if (category) pool = pool.filter(q => q.category === category);
  if (level)    pool = pool.filter(q => q.level    === level);
  if (!pool.length) pool = TRIVIA_QUESTIONS;

  // Preferir preguntas no usadas
  const unused = pool.filter(q => !_usedIds.has(q.id));
  const source  = unused.length > 0 ? unused : pool; // si se acaban, reusar

  const q = source[Math.floor(Math.random() * source.length)];
  _usedIds.add(q.id);
  return q;
}

export function getQuestionsByCategory(category) {
  return TRIVIA_QUESTIONS.filter(q => q.category === category);
}

export function getQuestionsByLevel(level) {
  return TRIVIA_QUESTIONS.filter(q => q.level === level);
}

export const CATEGORY_BONUS_TYPE = {
  historia:  'combat',
  tactica:   'combat',
  geografia: 'move',
  armas:     'estetic',
  uniformes: 'estetic',
};
