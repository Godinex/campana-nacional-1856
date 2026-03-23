// ============================================================
// CAMPAIGN DATA — Nodos históricos, frases épicas
// ============================================================

// ── FRASES WALKER (cuando avanza) ───────────────────────────
export const WALKER_PHRASES = [
  { text: '¡Centroamérica será mía! ¡Ningún ejército me detendrá!', attr: '— William Walker' },
  { text: '¡Soy el Destino Manifiesto hecho hombre!', attr: '— William Walker' },
  { text: '¡Granada cae ante mi gloria! ¡El futuro es mío!', attr: '— William Walker' },
  { text: '¡Ningún indio miserable me frenará!', attr: '— William Walker' },
  { text: '¡América Central se arrodillará ante la bandera de los hombres libres!', attr: '— William Walker' },
  { text: '¡Mis hombres son invencibles! ¡Avanzamos hacia la gloria!', attr: '— William Walker' },
  { text: '¡El lago de Nicaragua es mío! ¡Y pronto lo será todo!', attr: '— William Walker' },
  { text: '¡Que tiemble Mora! Sus campesinos no pueden con mis rifles!', attr: '— William Walker' },
];

// ── FRASES ALIADAS (cuando avanzan) ─────────────────────────
export const ALLIED_PHRASES = [
  { text: '¡Viva Costa Rica libre y soberana!', attr: '— Juan Rafael Mora Porras' },
  { text: '¡El tambor suena, adelante soldados de la patria!', attr: '— Juan Santamaría' },
  { text: '¡Por Nicaragua y por toda Centroamérica, adelante!', attr: '— General Tomás Martínez' },
  { text: '¡Xatruch avanza! ¡Honduras no se rinde ante el invasor!', attr: '— Gral. Florencio Xatruch' },
  { text: '¡Belloso y El Salvador marchan con honor hacia la victoria!', attr: '— Gral. Ramón Belloso' },
  { text: '¡Que el mundo sepa que Centroamérica defiende su libertad!', attr: '— Coalición Aliada' },
  { text: '¡Santa Rosa demostró que somos capaces de vencer!', attr: '— Ejército Costarricense' },
  { text: '¡Por la memoria de los caídos, no daremos un paso atrás!', attr: '— Soldados Aliados' },
  { text: '¡Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica, unidos!', attr: '— Coalición 1856' },
  { text: '¡San Jacinto ha hablado: Nicaragua es libre!', attr: '— Andrés Castro' },
];

// ── NODOS — PRIMARIA (8 nodos por línea) ────────────────────
export const NODES_PRIMARIA = {
  walker: [
    { id: 'w1', title: 'Walker llega a Nicaragua',      date: 'Jun 1855', description: 'William Walker desembarca con 58 mercenarios en Nicaragua.' },
    { id: 'w2', title: 'Toma de Granada',               date: 'Oct 1855', description: 'Walker captura Granada y la declara su capital.' },
    { id: 'w3', title: 'Walker se proclama presidente', date: 'Jul 1856', description: 'Walker se declara presidente de Nicaragua y legaliza la esclavitud.' },
    { id: 'w4', title: 'Refuerzos del sur de EE.UU.',  date: 'Nov 1856', description: 'Llegan más mercenarios esclavistas de los estados del sur.' },
    { id: 'w5', title: 'Quema de Granada',              date: 'Nov 1856', description: 'Walker quema Granada al retirarse. Deja una bandera: "Aquí fue Granada".' },
    { id: 'w6', title: 'Sitio de Rivas',                date: 'Mar 1857', description: 'Walker se fortifica en Rivas, último reducto filibustero.' },
    { id: 'w7', title: 'Sin suministros',               date: 'Abr 1857', description: 'Los aliados cortan la Ruta de Tránsito. Walker queda aislado.' },
    { id: 'w8', title: 'Rendición de Walker',           date: 'May 1857', description: 'Walker se rinde ante el Comodoro Davis de la Marina de EE.UU.', isFinal: true },
  ],
  aliados: [
    { id: 'a1', title: 'Mora declara la guerra',        date: 'Feb 1856', description: 'El presidente Juan Rafael Mora llama a los costarricenses a defender Centroamérica.' },
    { id: 'a2', title: 'El ejército marcha',            date: 'Mar 1856', description: '9,000 voluntarios salen de San José hacia Nicaragua.' },
    { id: 'a3', title: '⚔ Batalla de Santa Rosa',      date: '20 Mar 1856', description: 'Primera victoria aliada. Los costarricenses derrotan a los filibusteros en 15 minutos.' },
    { id: 'a4', title: '⚔ Primera Batalla de Rivas',   date: '11 Abr 1856', description: 'Juan Santamaría quema el mesón. Costa Rica gana pero con grandes pérdidas.' },
    { id: 'a5', title: 'Alianza Centroamericana',       date: 'Jul 1856', description: 'Guatemala, El Salvador, Honduras y Nicaragua se unen a Costa Rica.' },
    { id: 'a6', title: '⚔ Batalla de San Jacinto',     date: '14 Sep 1856', description: 'Nicaragua derrota a Walker. Andrés Castro lucha con una piedra.' },
    { id: 'a7', title: 'Cerco de Rivas',                date: 'Feb 1857', description: 'Los ejércitos aliados rodean Rivas. Walker no puede escapar.' },
    { id: 'a8', title: '🏆 Victoria Aliada',            date: 'May 1857', description: '¡Centroamérica libre! Walker se rinde. La campaña termina.', isFinal: true },
  ],
};

// ── NODOS — SECUNDARIA (12 nodos por línea) ─────────────────
export const NODES_SECUNDARIA = {
  walker: [
    { id: 'w1',  title: 'Walker llega a Nicaragua',       date: 'Jun 1855',  description: 'Walker desembarca con 58 mercenarios. Lo llaman "filibusteros".' },
    { id: 'w2',  title: 'Toma de Granada',                date: 'Oct 1855',  description: 'Captura Granada con artillería y controla el lago de Nicaragua.' },
    { id: 'w3',  title: 'Control de la Ruta de Tránsito', date: 'Ene 1856',  description: 'Walker controla la ruta Vanderbilt: el paso más lucrativo del continente.' },
    { id: 'w4',  title: 'Walker presidente',              date: 'Jul 1856',  description: 'Se autoproclama presidente. Reinstaura la esclavitud para atraer al sur de EE.UU.' },
    { id: 'w5',  title: 'Refuerzos esclavistas',          date: 'Sep 1856',  description: 'Cientos de mercenarios del sur de EE.UU. refuerzan a Walker.' },
    { id: 'w6',  title: 'Quema de Granada',               date: 'Nov 1856',  description: '"Aquí fue Granada" — Walker destruye la ciudad al retirarse.' },
    { id: 'w7',  title: 'Retroceso a Rivas',              date: 'Dic 1856',  description: 'Walker abandona Managua y León. Solo le queda Rivas.' },
    { id: 'w8',  title: 'Intento de romper el cerco',     date: 'Ene 1857',  description: 'Walker intenta sin éxito romper el cerco aliado en Rivas.' },
    { id: 'w9',  title: 'Pérdida de la ruta de suministro', date: 'Feb 1857', description: 'Costa Rica toma el Río San Juan. Walker queda sin refuerzos.' },
    { id: 'w10', title: 'Hambre y deserción',             date: 'Mar 1857',  description: 'Los filibusteros empiezan a desertar. Falta de comida y municiones.' },
    { id: 'w11', title: 'Último reducto',                 date: 'Abr 1857',  description: 'Solo quedan 300 filibusteros en Rivas. Walker pide ayuda a EE.UU.' },
    { id: 'w12', title: 'Rendición de Walker',            date: 'May 1857',  description: 'Walker se entrega al Comodoro Davis. Más tarde intentará volver y morirá fusilado.', isFinal: true },
  ],
  aliados: [
    { id: 'a1',  title: 'Cabildo abierto en San José',    date: 'Nov 1855',  description: 'Mora y el Obispo Llorente llaman al pueblo a defender la patria.' },
    { id: 'a2',  title: 'Decreto de guerra',              date: 'Feb 1856',  description: 'Costa Rica declara la guerra. 9,000 voluntarios de todas las clases sociales.' },
    { id: 'a3',  title: '⚔ Batalla de Santa Rosa',       date: '20 Mar 1856', description: 'Victoria en 15 minutos. Los filibusteros huyen dejando armas y víveres.' },
    { id: 'a4',  title: '⚔ Primera Batalla de Rivas',    date: '11 Abr 1856', description: 'Juan Santamaría quema el mesón. Victoria pero con fiebre amarilla que mata a cientos.' },
    { id: 'a5',  title: 'La epidemia',                    date: 'May 1856',  description: 'La fiebre amarilla mata a más soldados que las balas. Costa Rica se retira temporalmente.' },
    { id: 'a6',  title: 'Segunda campaña — alianza',      date: 'Jul 1856',  description: 'Guatemala, El Salvador, Honduras y Nicaragua se unen formalmente.' },
    { id: 'a7',  title: '⚔ Batalla de San Jacinto',      date: '14 Sep 1856', description: 'Nicaragua derrota a Walker. Andrés Castro lucha con una piedra al quedarse sin balas.' },
    { id: 'a8',  title: 'División Belloso entra',         date: 'Oct 1856',  description: 'El Salvador envía al General Ramón Belloso con tropas disciplinadas.' },
    { id: 'a9',  title: 'División Xatruch entra',         date: 'Nov 1856',  description: 'Honduras envía al General Florencio Xatruch. La coalición es completa.' },
    { id: 'a10', title: 'Toma del Río San Juan',          date: 'Feb 1857',  description: 'Costa Rica captura el río. Walker queda sin suministros del Atlántico.' },
    { id: 'a11', title: 'Cerco total de Rivas',           date: 'Mar 1857',  description: '5 ejércitos rodean Rivas. Walker no puede ni huir ni recibir refuerzos.' },
    { id: 'a12', title: '🏆 Victoria de Centroamérica',  date: 'May 1857',  description: '¡Walker se rinde! Los 5 países celebran juntos. Centroamérica permanece libre.', isFinal: true },
  ],
};
