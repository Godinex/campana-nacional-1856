// ============================================================
// TRIVIA MODAL — Pregunta histórica con temporizador
// Flujo: pregunta sola (4s) → opciones + timer 25s
// Bonos: +3 (<3s), +2 (3-8s), +1 (>8s), 0 (incorrecta)
// Medallas: 🏅 oro (<3s), 🎖 plata (3-8s), 📜 bronce (>8s)
// ============================================================
import { getRandomQuestion, CATEGORY_BONUS_TYPE } from '../data/trivia.js';

const FAST_THRESHOLD   = 3000;   // ms
const MEDIUM_THRESHOLD = 8000;   // ms
const TOTAL_TIME       = 25000;  // ms para responder
const READ_TIME        = 4000;   // ms mostrando solo la pregunta

// Historial de medallas acumulado durante la sesión
export const medalHistory = [];

export class TriviaModal {
  constructor() {
    this._overlay  = null;
    this._timer    = null;
    this._startMs  = 0;
    this._resolve  = null;
  }

  // Devuelve Promise<{ bonusType, bonusAmount, correct, category }>
  ask(categoryHint = null) {
    return new Promise(resolve => {
      this._resolve = resolve;
      const q = getRandomQuestion(categoryHint);
      this._renderQuestion(q);
    });
  }

  // ── FASE 1: Solo la pregunta, cuenta regresiva 3s ──────────
  _renderQuestion(q) {
    this._cleanup();

    const overlay = document.createElement('div');
    overlay.id = 'trivia-overlay';
    overlay.style.cssText = `
      position:fixed; inset:0; z-index:1000;
      background:rgba(10,5,0,0.88);
      display:flex; align-items:center; justify-content:center;
      font-family:Georgia,serif;
    `;

    const box = document.createElement('div');
    box.style.cssText = `
      background:#1a0a00;
      border:2px solid #d4a843;
      border-radius:8px;
      padding:28px 32px;
      max-width:560px; width:90%;
      color:#d4a843;
      box-shadow:0 0 40px rgba(212,168,67,0.25);
    `;

    // Header: categoría y tipo de bono
    const header = document.createElement('div');
    header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;';

    const catLabel = document.createElement('span');
    catLabel.style.cssText = 'font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#906030;';
    catLabel.textContent = `📜 ${q.category.toUpperCase()} · Dificultad ${'★'.repeat(q.difficulty)}${'☆'.repeat(3 - q.difficulty)}`;

    const bonusType = CATEGORY_BONUS_TYPE[q.category];
    const bonusHint = document.createElement('span');
    bonusHint.style.cssText = 'font-size:10px;color:#7fc47f;';
    bonusHint.textContent = bonusType === 'combat' ? '⚔ Bono Combate'
                          : bonusType === 'move'   ? '👣 Bono Movimiento'
                          :                          '🎨 Ítem Estético';
    header.appendChild(catLabel);
    header.appendChild(bonusHint);

    // Pregunta
    const questionEl = document.createElement('p');
    questionEl.style.cssText = 'font-size:17px;line-height:1.6;margin-bottom:24px;color:#f0d890;';
    questionEl.textContent = q.question;

    // Cuenta regresiva de lectura
    const readingEl = document.createElement('div');
    readingEl.style.cssText = `
      text-align:center; font-size:28px; color:#d4a843;
      padding:16px 0; letter-spacing:4px;
    `;
    const readSecs = READ_TIME / 1000;
    readingEl.textContent = `Leyendo... ${readSecs}`;

    box.appendChild(header);
    box.appendChild(questionEl);
    box.appendChild(readingEl);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    this._overlay = overlay;

    // Cuenta regresiva 2 → 1 → opciones
    let count = readSecs;
    const countdown = setInterval(() => {
      count--;
      if (count > 0) {
        readingEl.textContent = `Leyendo... ${count}`;
      } else {
        clearInterval(countdown);
        // Reemplazar el readingEl por el timer + opciones
        box.removeChild(readingEl);
        this._renderOptions(q, box, overlay, bonusType);
      }
    }, 1000);
  }

  // ── FASE 2: Timer + opciones ───────────────────────────────
  _renderOptions(q, box, overlay, bonusType) {
    // Timer bar
    const timerWrap = document.createElement('div');
    timerWrap.style.cssText = 'background:#2a1500;border-radius:4px;height:6px;margin-bottom:4px;overflow:hidden;';
    const timerBar = document.createElement('div');
    timerBar.style.cssText = 'height:100%;width:100%;background:#7fc47f;transition:width 0.1s linear;border-radius:4px;';
    timerWrap.appendChild(timerBar);

    const timerLabel = document.createElement('div');
    timerLabel.style.cssText = 'text-align:right;font-size:10px;color:#906030;margin-top:3px;margin-bottom:14px;';
    timerLabel.textContent = `${Math.ceil(TOTAL_TIME/1000)}s`;

    // Opciones
    const optionsEl = document.createElement('div');
    optionsEl.style.cssText = 'display:flex;flex-direction:column;gap:10px;';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.style.cssText = `
        background:#2a1200; border:1px solid #5a3a10;
        border-radius:5px; color:#c8a060;
        font-family:Georgia,serif; font-size:14px;
        padding:10px 14px; text-align:left; cursor:pointer;
        transition:background 0.15s, border-color 0.15s;
      `;
      btn.onmouseover = () => { btn.style.background = '#3a1a00'; btn.style.borderColor = '#d4a843'; };
      btn.onmouseout  = () => { btn.style.background = '#2a1200'; btn.style.borderColor = '#5a3a10'; };
      btn.textContent = `${['A', 'B', 'C', 'D'][idx]}. ${opt}`;
      btn.addEventListener('click', () => this._answer(idx, q, overlay, bonusType));
      optionsEl.appendChild(btn);
    });

    box.appendChild(timerWrap);
    box.appendChild(timerLabel);
    box.appendChild(optionsEl);

    // Iniciar temporizador ahora
    this._startMs = performance.now();
    const interval = setInterval(() => {
      const elapsed   = performance.now() - this._startMs;
      const remaining = Math.max(0, TOTAL_TIME - elapsed);
      const pct       = (remaining / TOTAL_TIME) * 100;
      timerBar.style.width      = `${pct}%`;
      timerBar.style.background = pct > 60 ? '#7fc47f' : pct > 30 ? '#d4a843' : '#c04040';
      timerLabel.textContent    = `${Math.ceil(remaining / 1000)}s`;

      if (remaining <= 0) {
        clearInterval(interval);
        this._timeout(q, overlay, bonusType);
      }
    }, 100);
    this._timer = interval;
  }

  _answer(selectedIdx, q, overlay, bonusType) {
    const elapsed = performance.now() - this._startMs;
    clearInterval(this._timer);

    const correct = selectedIdx === q.answer;
    let bonusAmount = 0;
    let medal = null;

    if (correct) {
      if (elapsed < FAST_THRESHOLD) {
        bonusAmount = 3;
        medal = { emoji: '🏅', label: '¡Héroe!', color: '#ffd700' };
      } else if (elapsed < MEDIUM_THRESHOLD) {
        bonusAmount = 2;
        medal = { emoji: '🎖', label: 'Veterano', color: '#b0c8e0' };
      } else {
        bonusAmount = 1;
        medal = { emoji: '📜', label: 'Soldado', color: '#c8a060' };
      }
      medalHistory.push({ medal, category: q.category, elapsed });
    }

    this._showResult(overlay, correct, bonusAmount, bonusType, q, selectedIdx, elapsed, medal);
  }

  _timeout(q, overlay, bonusType) {
    this._showResult(overlay, false, 0, bonusType, q, -1, TOTAL_TIME, null);
  }

  _showResult(overlay, correct, bonusAmount, bonusType, q, selectedIdx, elapsed, medal) {
    const box  = overlay.querySelector('div');
    const btns = box.querySelectorAll('button');

    btns.forEach((btn, idx) => {
      if (idx === q.answer) {
        btn.style.background  = '#0a3010';
        btn.style.borderColor = '#7fc47f';
        btn.style.color       = '#7fc47f';
      } else if (idx === selectedIdx) {
        btn.style.background  = '#3a0a0a';
        btn.style.borderColor = '#c04040';
        btn.style.color       = '#c04040';
      }
      btn.style.cursor  = 'default';
      btn.onmouseover   = null;
      btn.onmouseout    = null;
    });

    const resultEl = document.createElement('div');
    resultEl.style.cssText = `
      margin-top:18px; padding:14px 16px;
      border-radius:5px; text-align:center;
      background:${correct ? '#0a2010' : '#200a0a'};
      border:1px solid ${correct ? '#7fc47f' : '#c04040'};
      color:${correct ? '#7fc47f' : '#c04040'};
    `;

    const secs = (elapsed / 1000).toFixed(1);

    if (selectedIdx === -1) {
      resultEl.innerHTML = `<div style="font-size:24px">⏰</div><strong>Tiempo agotado</strong> — Sin bono`;
    } else if (correct && medal) {
      resultEl.innerHTML = `
        <div style="font-size:42px;margin-bottom:6px">${medal.emoji}</div>
        <div style="font-size:16px;font-weight:bold;color:${medal.color}">${medal.label}</div>
        <div style="font-size:12px;margin-top:6px;color:#a8c0a0">
          +${bonusAmount} al banco de <em>${bonusType === 'combat' ? 'Combate' : bonusType === 'move' ? 'Movimiento' : 'Estético'}</em>
          · ${secs}s
        </div>
      `;
    } else {
      resultEl.innerHTML = `
        <div style="font-size:20px">✗</div>
        <div>Incorrecto · Sin bono</div>
        <div style="margin-top:6px;font-size:12px">
          Respuesta correcta: <strong style="color:#f0d890">${q.options[q.answer]}</strong>
        </div>
      `;
    }

    box.appendChild(resultEl);

    // Cerrar automáticamente
    setTimeout(() => {
      this._cleanup();
      if (this._resolve) {
        this._resolve({ bonusType, bonusAmount, correct, category: q.category });
        this._resolve = null;
      }
    }, 2200);
  }

  _cleanup() {
    if (this._timer)   { clearInterval(this._timer); this._timer = null; }
    if (this._overlay) { this._overlay.remove(); this._overlay = null; }
  }
}
