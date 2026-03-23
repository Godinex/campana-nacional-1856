// ============================================================
// TURN MANAGER — Sistema de turnos por fases
// Fases: filibustero_move → trivia → player_move → combat → resolution
// Lados: 'aliado' (jugador) | 'filibustero' (IA)
// ============================================================

export const PHASES = {
  FILIBUSTERO_MOVE: 'filibustero_move',
  TRIVIA:           'trivia',
  PLAYER_MOVE:      'player_move',
  COMBAT:           'combat',
  RESOLUTION:       'resolution',
};

export const PHASE_LABELS = {
  filibustero_move: 'Movimiento Filibustero',
  trivia:           'Pregunta de Batalla',
  player_move:      'Movimiento Aliado',
  combat:           'Combate',
  resolution:       'Resolución',
};

// Mini EventEmitter nativo — no depende de Phaser
class EventEmitter {
  constructor() { this._listeners = {}; }
  on(event, fn)  { (this._listeners[event] = this._listeners[event] || []).push(fn); return this; }
  off(event, fn) { if (this._listeners[event]) this._listeners[event] = this._listeners[event].filter(f => f !== fn); }
  emit(event, ...args) { (this._listeners[event] || []).forEach(fn => fn(...args)); }
  once(event, fn) {
    const wrap = (...args) => { fn(...args); this.off(event, wrap); };
    this.on(event, wrap);
  }
}

export class TurnManager extends EventEmitter {
  constructor() {
    super();
    this.turn      = 1;
    this.phase     = PHASES.FILIBUSTERO_MOVE;
    this.bonusBank = { combat: 0, move: 0, estetic: 0 };
    this.maxMoves  = 3;
    this.movesLeft = 3;
    this.log       = [];
  }

  nextPhase() {
    const order = [
      PHASES.FILIBUSTERO_MOVE,
      PHASES.TRIVIA,
      PHASES.PLAYER_MOVE,
      PHASES.COMBAT,
      PHASES.RESOLUTION,
    ];
    const idx = order.indexOf(this.phase);
    if (idx === order.length - 1) {
      this.turn++;
      this.phase = PHASES.FILIBUSTERO_MOVE;
      this.movesLeft = this.maxMoves + this.bonusBank.move;
      this.addLog(`⚔ Turno ${this.turn} comienza`);
    } else {
      this.phase = order[idx + 1];
      if (this.phase === PHASES.PLAYER_MOVE) {
        this.movesLeft = this.maxMoves + this.bonusBank.move;
        this.bonusBank.move = 0;
      }
    }
    this.emit('phaseChange', this.phase, this.turn);
    return this.phase;
  }

  addBonus(type, amount) {
    if (this.bonusBank[type] !== undefined) {
      this.bonusBank[type] += amount;
      this.emit('bonusUpdated', this.bonusBank);
    }
  }

  consumeCombatBonus() {
    const b = this.bonusBank.combat;
    this.bonusBank.combat = 0;
    this.emit('bonusUpdated', this.bonusBank);
    return b;
  }

  rollD20(modifier = 0) {
    const roll = Math.floor(Math.random() * 20) + 1;
    const total = roll + modifier;
    this.addLog(`🎲 D20: ${roll} + ${modifier} = ${total}`);
    return { roll, modifier, total };
  }

  addLog(msg) {
    const ts = new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' });
    this.log.unshift(`[${ts}] ${msg}`);
    if (this.log.length > 20) this.log.pop();
    this.emit('logUpdated', this.log);
  }

  canMove() {
    return this.phase === PHASES.PLAYER_MOVE && this.movesLeft > 0;
  }

  useMove() {
    if (this.movesLeft > 0) {
      this.movesLeft--;
      this.emit('movesUpdated', this.movesLeft);
      if (this.movesLeft === 0) this.emit('movesExhausted');
    }
  }
}
