// ============================================================
// TRIVIA MODAL — Pregunta histórica con temporizador
// Bonos: +3 (<5s), +2 (5-15s), +1 (>15s), 0 (incorrecta)
// ============================================================
import { getRandomQuestion, CATEGORY_BONUS_TYPE } from '../data/trivia.js';

const FAST_THRESHOLD   = 5000;   // ms
const MEDIUM_THRESHOLD = 15000;  // ms
const TOTAL_TIME       = 20000;  // ms para responder

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
      this._render(q);
    });
  }

  _render(q) {
    // Limpiar si hay uno activo
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

    // Header
    const header = document.createElement('div');
    header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;';

    const catLabel = document.createElement('span');
    catLabel.style.cssText = 'font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#906030;';
    catLabel.textContent = `📜 ${q.category.toUpperCase()} · Dificultad ${'★'.repeat(q.difficulty)}${'☆'.repeat(3-q.difficulty)}`;

    const bonusHint = document.createElement('span');
    bonusHint.style.cssText = 'font-size:10px;color:#7fc47f;';
    const bonusType = CATEGORY_BONUS_TYPE[q.category];
    bonusHint.textContent = bonusType === 'combat' ? '⚔ Bono Combate' :
                            bonusType === 'move'   ? '👣 Bono Movimiento' : '🎨 Ítem Estético';
    header.appendChild(catLabel);
    header.appendChild(bonusHint);

    // Pregunta
    const questionEl = document.createElement('p');
    questionEl.style.cssText = 'font-size:17px;line-height:1.5;margin-bottom:22px;color:#f0d890;';
    questionEl.textContent = q.question;

    // Timer bar
    const timerWrap = document.createElement('div');
    timerWrap.style.cssText = 'background:#2a1500;border-radius:4px;height:6px;margin-bottom:18px;overflow:hidden;';
    const timerBar = document.createElement('div');
    timerBar.style.cssText = 'height:100%;width:100%;background:#d4a843;transition:width 0.1s linear;border-radius:4px;';
    timerWrap.appendChild(timerBar);

    const timerLabel = document.createElement('div');
    timerLabel.style.cssText = 'text-align:right;font-size:10px;color:#906030;margin-top:3px;margin-bottom:14px;';
    timerLabel.textContent = '20s';

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
      btn.onmouseover = () => { btn.style.background='#3a1a00'; btn.style.borderColor='#d4a843'; };
      btn.onmouseout  = () => { btn.style.background='#2a1200'; btn.style.borderColor='#5a3a10'; };
      btn.textContent = `${['A','B','C','D'][idx]}. ${opt}`;
      btn.addEventListener('click', () => this._answer(idx, q, overlay));
      optionsEl.appendChild(btn);
    });

    box.appendChild(header);
    box.appendChild(questionEl);
    box.appendChild(timerWrap);
    box.appendChild(timerLabel);
    box.appendChild(optionsEl);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    this._overlay = overlay;

    // Iniciar temporizador
    this._startMs = performance.now();
    const interval = setInterval(() => {
      const elapsed = performance.now() - this._startMs;
      const remaining = Math.max(0, TOTAL_TIME - elapsed);
      const pct = (remaining / TOTAL_TIME) * 100;
      timerBar.style.width = `${pct}%`;
      timerBar.style.background = pct > 60 ? '#7fc47f' : pct > 30 ? '#d4a843' : '#c04040';
      timerLabel.textContent = `${Math.ceil(remaining / 1000)}s`;

      if (remaining <= 0) {
        clearInterval(interval);
        this._timeout(q, overlay);
      }
    }, 100);
    this._timer = interval;
  }

  _answer(selectedIdx, q, overlay) {
    const elapsed = performance.now() - this._startMs;
    clearInterval(this._timer);

    const correct = selectedIdx === q.answer;
    let bonusAmount = 0;

    if (correct) {
      if (elapsed < FAST_THRESHOLD)        bonusAmount = 3;
      else if (elapsed < MEDIUM_THRESHOLD) bonusAmount = 2;
      else                                  bonusAmount = 1;
    }

    const bonusType = CATEGORY_BONUS_TYPE[q.category];
    this._showResult(overlay, correct, bonusAmount, bonusType, q, selectedIdx, elapsed);
  }

  _timeout(q, overlay) {
    this._showResult(overlay, false, 0, CATEGORY_BONUS_TYPE[q.category], q, -1, TOTAL_TIME);
  }

  _showResult(overlay, correct, bonusAmount, bonusType, q, selectedIdx, elapsed) {
    // Limpiar botones y mostrar resultado
    const box = overlay.querySelector('div');
    const btns = box.querySelectorAll('button');

    btns.forEach((btn, idx) => {
      if (idx === q.answer) {
        btn.style.background = '#0a3010';
        btn.style.borderColor = '#7fc47f';
        btn.style.color = '#7fc47f';
      } else if (idx === selectedIdx) {
        btn.style.background = '#3a0a0a';
        btn.style.borderColor = '#c04040';
        btn.style.color = '#c04040';
      }
      btn.style.cursor = 'default';
      btn.onmouseover = null;
      btn.onmouseout  = null;
    });

    // Resultado
    const resultEl = document.createElement('div');
    resultEl.style.cssText = `
      margin-top:18px; padding:12px 16px;
      border-radius:5px; text-align:center; font-size:14px;
      background:${correct ? '#0a2010' : '#200a0a'};
      border:1px solid ${correct ? '#7fc47f' : '#c04040'};
      color:${correct ? '#7fc47f' : '#c04040'};
    `;

    const secs = (elapsed / 1000).toFixed(1);
    if (selectedIdx === -1) {
      resultEl.innerHTML = `⏰ <strong>Tiempo agotado</strong> — Sin bono`;
    } else if (correct) {
      const speed = elapsed < FAST_THRESHOLD ? '⚡ ¡Rápido!' : elapsed < MEDIUM_THRESHOLD ? '✓ A tiempo' : '🐢 Lento';
      resultEl.innerHTML = `${speed} · <strong>+${bonusAmount}</strong> al banco de <em>${bonusType === 'combat' ? 'Combate' : bonusType === 'move' ? 'Movimiento' : 'Estético'}</em> (${secs}s)`;
    } else {
      resultEl.innerHTML = `✗ Incorrecto · Sin bono · Respuesta: <strong>${q.options[q.answer]}</strong>`;
    }
    box.appendChild(resultEl);

    // Cerrar automáticamente después de 2s
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
