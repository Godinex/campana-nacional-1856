// ============================================================
// HEX PATHFINDER — A* para grilla hexagonal offset (pointy-top)
// ============================================================
import { TERRAIN_COLORS } from '../../data/hexmap.js';

// Vecinos en sistema offset (pointy-top, odd-r)
function getNeighbors(col, row) {
  const even = row % 2 === 0;
  return even
    ? [
        [col + 1, row],
        [col - 1, row],
        [col,     row - 1],
        [col - 1, row - 1],
        [col,     row + 1],
        [col - 1, row + 1],
      ]
    : [
        [col + 1, row],
        [col - 1, row],
        [col + 1, row - 1],
        [col,     row - 1],
        [col + 1, row + 1],
        [col,     row + 1],
      ];
}

// Distancia hex (offset → cube → distancia)
function hexDistance(c1, r1, c2, r2) {
  // Convert offset to cube coords
  const x1 = c1 - (r1 - (r1 & 1)) / 2;
  const z1 = r1;
  const y1 = -x1 - z1;

  const x2 = c2 - (r2 - (r2 & 1)) / 2;
  const z2 = r2;
  const y2 = -x2 - z2;

  return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2), Math.abs(z1 - z2));
}

export class HexPathfinder {
  constructor(hexData) {
    this.hexData = hexData; // map of "col,row" → { terrain, ... }
  }

  // Devuelve array de [col,row] desde start hasta goal, o [] si no hay ruta
  findPath(startCol, startRow, goalCol, goalRow, maxCost = 999) {
    const key = (c, r) => `${c},${r}`;
    const startKey = key(startCol, startRow);
    const goalKey  = key(goalCol, goalRow);

    if (startKey === goalKey) return [];

    // A* open set as min-heap (simple array for now)
    const openSet   = new Map();
    const cameFrom  = new Map();
    const gScore    = new Map();
    const fScore    = new Map();

    gScore.set(startKey, 0);
    fScore.set(startKey, hexDistance(startCol, startRow, goalCol, goalRow));
    openSet.set(startKey, { col: startCol, row: startRow });

    while (openSet.size > 0) {
      // Get node with lowest fScore
      let current = null;
      let lowestF = Infinity;
      for (const [k, node] of openSet) {
        const f = fScore.get(k) ?? Infinity;
        if (f < lowestF) { lowestF = f; current = k; }
      }

      if (current === goalKey) {
        return this.reconstructPath(cameFrom, current);
      }

      const { col, row } = openSet.get(current);
      openSet.delete(current);

      for (const [nc, nr] of getNeighbors(col, row)) {
        const nk = key(nc, nr);
        const hex = this.hexData[nk];
        if (!hex) continue;

        const tc = TERRAIN_COLORS[hex.terrain];
        const moveCost = tc ? tc.moveCost : 99;
        if (moveCost >= 99) continue; // impassable

        const tentativeG = (gScore.get(current) ?? Infinity) + moveCost;
        if (tentativeG > maxCost) continue;

        if (tentativeG < (gScore.get(nk) ?? Infinity)) {
          cameFrom.set(nk, current);
          gScore.set(nk, tentativeG);
          fScore.set(nk, tentativeG + hexDistance(nc, nr, goalCol, goalRow));
          if (!openSet.has(nk)) {
            openSet.set(nk, { col: nc, row: nr });
          }
        }
      }
    }

    return []; // no path found
  }

  reconstructPath(cameFrom, current) {
    const path = [];
    while (cameFrom.has(current)) {
      const [c, r] = current.split(',').map(Number);
      path.unshift([c, r]);
      current = cameFrom.get(current);
    }
    return path;
  }

  // Retorna todos los hexes alcanzables en N pasos de movimiento
  getReachable(startCol, startRow, movePoints) {
    const key = (c, r) => `${c},${r}`;
    const visited = new Map();
    visited.set(key(startCol, startRow), 0);
    const queue = [{ col: startCol, row: startRow, cost: 0 }];
    const reachable = [];

    while (queue.length > 0) {
      const { col, row, cost } = queue.shift();
      for (const [nc, nr] of getNeighbors(col, row)) {
        const nk = key(nc, nr);
        const hex = this.hexData[nk];
        if (!hex) continue;
        const tc = TERRAIN_COLORS[hex.terrain];
        const moveCost = tc ? tc.moveCost : 99;
        if (moveCost >= 99) continue;
        const newCost = cost + moveCost;
        if (newCost <= movePoints && (!visited.has(nk) || visited.get(nk) > newCost)) {
          visited.set(nk, newCost);
          queue.push({ col: nc, row: nr, cost: newCost });
          reachable.push([nc, nr, newCost]);
        }
      }
    }
    return reachable;
  }
}
