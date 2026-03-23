// ============================================================
// AI CONTROLLER — Movimientos históricos scriptados de Walker
// Los primeros turnos replican lo que ocurrió históricamente.
// Después de los movimientos scriptados, la IA usa lógica táctica.
// ============================================================
import { PHASES } from './TurnManager.js';

// Guión histórico de Walker 1856-1857
// Cada entrada: { turn, unitName, targetCol, targetRow, note }
const WALKER_SCRIPT = [
  // Turno 1 — Walker ya está en Rivas, avanza hacia La Virgen
  { turn: 1, unitId: 0, toCol: 4, toRow: 9,
    note: 'Walker se posiciona en La Virgen, amenazando la ruta del Tránsito' },

  // Turno 2 — Refuerzo en Granada
  { turn: 2, unitId: 1, toCol: 7, toRow: 7,
    note: 'La guarnición de Granada se fortifica' },

  // Turno 3 — Walker intenta flanquear hacia Guanacaste
  { turn: 3, unitId: 0, toCol: 5, toRow: 9,
    note: 'Walker avanza hacia la costa pacífica' },

  // Turno 4 — Presión sobre San Jorge
  { turn: 4, unitId: 0, toCol: 6, toRow: 8,
    note: 'Walker amenaza San Jorge — acceso al lago' },

  // Turno 5 — Intento de recuperar Rivas
  { turn: 5, unitId: 0, toCol: 4, toRow: 8,
    note: 'Walker retrocede a Rivas para defender el enclave' },
];

export class AIController {
  constructor(turnManager, pathfinder) {
    this.tm         = turnManager;
    this.pathfinder = pathfinder;
    this.script     = WALKER_SCRIPT;
    this.difficulty = 'normal'; // easy | normal | hard
  }

  // Ejecutar turno de IA — devuelve array de acciones { unitId, path, note }
  async executeTurn(peons, hexData) {
    const actions = [];
    const scriptedMoves = this.script.filter(s => s.turn === this.tm.turn);

    if (scriptedMoves.length > 0) {
      // Usar guión histórico
      for (const move of scriptedMoves) {
        const unit = peons[move.unitId];
        if (!unit || unit.side !== 'filibustero') continue;

        const path = this.pathfinder.findPath(
          unit.col, unit.row,
          move.toCol, move.toRow,
          12
        );

        actions.push({
          unitId:  move.unitId,
          unit,
          path:    path.length ? path : [[move.toCol, move.toRow]],
          note:    move.note,
        });
      }
    } else {
      // IA táctica — buscar unidades aliadas más cercanas y presionarlas
      const filiUnits = peons.filter(p => p.side === 'filibustero');
      const allyUnits = peons.filter(p => p.side === 'aliado');

      for (const fili of filiUnits) {
        if (allyUnits.length === 0) break;

        // Encontrar aliado más cercano
        let closest = allyUnits[0];
        let minDist = Infinity;
        for (const ally of allyUnits) {
          const d = Math.abs(fili.col - ally.col) + Math.abs(fili.row - ally.row);
          if (d < minDist) { minDist = d; closest = ally; }
        }

        // Moverse un paso hacia el aliado más cercano
        const movePoints = this.difficulty === 'hard' ? 4 : this.difficulty === 'easy' ? 1 : 2;
        const path = this.pathfinder.findPath(fili.col, fili.row, closest.col, closest.row, movePoints);

        if (path.length > 0) {
          // Solo tomar los pasos que el presupuesto permite
          const limitedPath = path.slice(0, movePoints);
          actions.push({ unitId: peons.indexOf(fili), unit: fili, path: limitedPath, note: null });
        }
      }
    }

    return actions;
  }

  // Simular bono de trivia de la IA
  simulateTriviaBonus() {
    const roll = Math.random();
    if (this.difficulty === 'easy')   return roll < 0.3 ? 3 : roll < 0.6 ? 2 : 1;
    if (this.difficulty === 'normal') return roll < 0.5 ? 3 : roll < 0.8 ? 2 : 1;
    if (this.difficulty === 'hard')   return roll < 0.8 ? 3 : 2;
    return 1;
  }
}
