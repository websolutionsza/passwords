/* ==========================================================================
   Password Manager — Liquid Glass (iOS-inspired) design system
   ========================================================================== */

:root {
  color-scheme: dark;

  /* Palette */
  --bg-0: #04060B;
  --bg-1: #0A0E17;
  --bg-2: #10151F;
  --glass-fill: rgba(255, 255, 255, 0.055);
  --glass-fill-strong: rgba(255, 255, 255, 0.09);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-border-strong: rgba(255, 255, 255, 0.18);
  --hairline: rgba(255, 255, 255, 0.08);

  --text-primary: rgba(255, 255, 255, 0.96);
  --text-secondary: rgba(235, 238, 245, 0.62);
  --text-tertiary: rgba(235, 238, 245, 0.4);

  --accent: #3E8CFF;
  --accent-strong: #6AA6FF;
  --accent-soft: rgba(62, 140, 255, 0.16);
  --accent-gradient: linear-gradient(135deg, #4B7CFF 0%, #35C7F0 100%);

  --success: #33D17A;
  --warning: #F5B94D;
  --danger: #FF6259;
  --danger-soft: rgba(255, 98, 89, 0.14);

  --radius-xl: 28px;
  --radius-lg: 22px;
  --radius-md: 16px;
  --radius-sm: 12px;
  --radius-pill: 999px;

  --shadow-soft: 0 12px 40px rgba(0, 0, 0, 0.45);
  --shadow-lift: 0 20px 60px rgba(0, 0, 0, 0.55);

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  --font-mono: "SF Mono", ui-monospace, "Menlo", "Consolas", monospace;
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html, body {
  height: 100%;
}

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-primary);
  background:
    radial-gradient(120% 70% at 50% -10%, rgba(62, 140, 255, 0.16) 0%, rgba(62, 140, 255, 0) 55%),
    radial-gradient(90% 60% at 85% 8%, rgba(53, 199, 240, 0.10) 0%, rgba(53, 199, 240, 0) 60%),
    linear-gradient(180deg, var(--bg-1) 0%, var(--bg-0) 100%);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  overscroll-behavior-y: none;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

button {
  font-family: inherit;
  color: inherit;
}

input, textarea, select {
  font-family: inherit;
}

a {
  color: inherit;
}

::selection {
  background: var(--accent-soft);
}

/* Scrollbars (desktop preview) */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 8px; }
::-webkit-scrollbar-track { background: transparent; }

/* ==========================================================================
   App shell
   ========================================================================== */

#app {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: env(safe-area-inset-bottom);
}

@media (min-width: 481px) {
  body {
    background:
      radial-gradient(120% 70% at 50% -10%, rgba(62, 140, 255, 0.14) 0%, rgba(62, 140, 255, 0) 55%),
      linear-gradient(180deg, var(--bg-1) 0%, var(--bg-0) 100%);
  }
  #app {
    box-shadow: var(--shadow-lift);
    border-left: 1px solid var(--hairline);
    border-right: 1px solid var(--hairline);
  }
}

.screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 100px;
  animation: screen-in 0.36s var(--ease-out);
}

.screen[hidden] { display: none !important; }

.screen--centered {
  justify-content: center;
  padding-bottom: 40px;
}

@keyframes screen-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ==========================================================================
   Glass card primitive
   ========================================================================== */

.glass {
  background: var(--glass-fill);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  box-shadow: var(--shadow-soft);
}

.glass-strong {
  background: var(--glass-fill-strong);
  border: 1px solid var(--glass-border-strong);
}

/* ==========================================================================
   Top bar
   ========================================================================== */

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 2px 18px;
  gap: 12px;
}

.topbar__title {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 750;
  letter-spacing: -0.02em;
  margin: 0;
}

.topbar__subtitle {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 2px 0 0;
}

.topbar__actions {
  display: flex;
  gap: 8px;
}

.icon-btn {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-pill);
  border: 1px solid var(--glass-border);
  background: var(--glass-fill);
  backdrop-filter: blur(18px);
  cursor: pointer;
  transition: transform 0.18s var(--ease-standard), background 0.18s var(--ease-standard), border-color 0.18s;
}

.icon-btn:active { transform: scale(0.92); }
.icon-btn:hover { background: var(--glass-fill-strong); border-color: var(--glass-border-strong); }

.icon-btn svg { width: 19px; height: 19px; }

/* ==========================================================================
   Buttons
   ========================================================================== */

.btn {
  appearance: none;
  border: none;
  cursor: pointer;
  border-radius: var(--radius-pill);
  padding: 15px 22px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.16s var(--ease-standard), filter 0.16s var(--ease-standard), background 0.16s;
  width: 100%;
}

.btn:active { transform: scale(0.97); }

.btn-primary {
  background: var(--accent-gradient);
  color: #051021;
  box-shadow: 0 10px 30px rgba(62, 140, 255, 0.35);
}

.btn-primary:hover { filter: brightness(1.06); }

.btn-secondary {
  background: var(--glass-fill-strong);
  border: 1px solid var(--glass-border-strong);
  color: var(--text-primary);
}

.btn-secondary:hover { background: rgba(255,255,255,0.13); }

.btn-ghost {
  background: transparent;
  color: var(--accent-strong);
  padding: 12px 16px;
}

.btn-danger {
  background: var(--danger-soft);
  color: var(--danger);
  border: 1px solid rgba(255, 98, 89, 0.3);
}

.btn-danger:hover { background: rgba(255, 98, 89, 0.22); }

.btn-sm { padding: 10px 16px; font-size: 14px; width: auto; }
.btn[disabled] { opacity: 0.45; cursor: not-allowed; transform: none; }

/* ==========================================================================
   Form fields
   ========================================================================== */

.field {
  margin-bottom: 16px;
}

.field__label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  margin: 0 0 8px 4px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.field__control {
  position: relative;
  display: flex;
  align-items: center;
}

.input, .textarea, .select {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 15px 16px;
  font-size: 16px;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.18s var(--ease-standard), background 0.18s;
}

.input::placeholder, .textarea::placeholder { color: var(--text-tertiary); }

.input:focus, .textarea:focus, .select:focus {
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.07);
}

.input:focus-visible, .textarea:focus-visible, .select:focus-visible, .icon-btn:focus-visible, .btn:focus-visible, .chip:focus-visible, .navitem:focus-visible {
  outline: 2px solid var(--accent-strong);
  outline-offset: 2px;
}

.textarea { resize: vertical; min-height: 90px; }

.field__control .input--with-icon { padding-right: 46px; }

.field__icon-btn {
  position: absolute;
  right: 6px;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-pill);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
}

.field__icon-btn:hover { color: var(--text-primary); }
.field__icon-btn svg { width: 18px; height: 18px; }

.field__hint {
  font-size: 12.5px;
  color: var(--text-tertiary);
  margin: 6px 0 0 4px;
}

.field__error {
  font-size: 12.5px;
  color: var(--danger);
  margin: 6px 0 0 4px;
  display: none;
}

.field.has-error .input { border-color: var(--danger); }
.field.has-error .field__error { display: block; }

/* Select dropdown */
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238a93a6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
}

/* ==========================================================================
   Master password / lock screens
   ========================================================================== */

.lock-shield {
  width: 92px;
  height: 92px;
  margin: 0 auto 22px;
  border-radius: 26px;
  display: grid;
  place-items: center;
  background: var(--accent-gradient);
  box-shadow: 0 18px 46px rgba(62, 140, 255, 0.4);
  animation: shield-in 0.5s var(--ease-out);
}

.lock-shield svg { width: 44px; height: 44px; color: #061225; }

@keyframes shield-in {
  from { opacity: 0; transform: scale(0.82); }
  to { opacity: 1; transform: scale(1); }
}

.lock-title {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 750;
  text-align: center;
  letter-spacing: -0.02em;
  margin: 0 0 6px;
}

.lock-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.5;
  margin: 0 0 30px;
  padding: 0 8px;
}

.strength-meter {
  display: flex;
  gap: 5px;
  margin: 10px 4px 4px;
}

.strength-meter__seg {
  height: 4px;
  flex: 1;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.25s var(--ease-standard);
}

.strength-label {
  font-size: 12.5px;
  color: var(--text-tertiary);
  margin: 8px 4px 0;
  display: flex;
  justify-content: space-between;
}

.callout {
  display: flex;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  background: var(--accent-soft);
  border: 1px solid rgba(62, 140, 255, 0.28);
  margin-bottom: 18px;
}

.callout--warning {
  background: rgba(245, 185, 77, 0.12);
  border-color: rgba(245, 185, 77, 0.3);
}

.callout--danger {
  background: var(--danger-soft);
  border-color: rgba(255, 98, 89, 0.3);
}

.callout svg { width: 20px; height: 20px; flex-shrink: 0; margin-top: 1px; }
.callout--warning svg { color: var(--warning); }
.callout--danger svg { color: var(--danger); }
.callout--info svg { color: var(--accent-strong); }

.callout p { margin: 0; font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); }
.callout strong { color: var(--text-primary); }

/* ==========================================================================
   Vault list
   ========================================================================== */

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  border-radius: var(--radius-pill);
  margin-bottom: 18px;
}

.search-bar svg { width: 18px; height: 18px; color: var(--text-tertiary); flex-shrink: 0; }

.search-bar input {
  border: none;
  background: transparent;
  outline: none;
  color: var(--text-primary);
  font-size: 16px;
  width: 100%;
}

.search-bar input::placeholder { color: var(--text-tertiary); }

.chip-row {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 2px 2px 18px;
  scrollbar-width: none;
}

.chip-row::-webkit-scrollbar { display: none; }

.chip {
  flex-shrink: 0;
  padding: 9px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--glass-border);
  background: var(--glass-fill);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.18s var(--ease-standard);
}

.chip.is-active {
  background: var(--accent-gradient);
  color: #051021;
  border-color: transparent;
}

.section-label {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-tertiary);
  margin: 4px 4px 10px;
}

.entry-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 22px;
}

.entry-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 13px 14px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: transform 0.16s var(--ease-standard), background 0.16s;
}

.entry-card:hover { background: var(--glass-fill-strong); }
.entry-card:active { transform: scale(0.98); }

.entry-card__icon {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  overflow: hidden;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: var(--glass-fill-strong);
  border: 1px solid var(--hairline);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 17px;
  color: var(--text-primary);
}

.entry-card__icon img { width: 100%; height: 100%; object-fit: cover; }

.entry-card__body { min-width: 0; flex: 1; }

.entry-card__title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.entry-card__subtitle {
  font-size: 13.5px;
  color: var(--text-secondary);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.entry-card__chevron { color: var(--text-tertiary); flex-shrink: 0; }
.entry-card__chevron svg { width: 18px; height: 18px; }

/* ==========================================================================
   Empty states
   ========================================================================== */

.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  gap: 6px;
}

.empty-state__icon {
  width: 68px;
  height: 68px;
  border-radius: 22px;
  display: grid;
  place-items: center;
  background: var(--glass-fill);
  border: 1px solid var(--glass-border);
  margin-bottom: 14px;
  color: var(--text-secondary);
}

.empty-state__icon svg { width: 30px; height: 30px; }

.empty-state__title {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 700;
  margin: 0;
}

.empty-state__text {
  font-size: 14px;
  color: var(--text-secondary);
  max-width: 280px;
  line-height: 1.5;
  margin: 2px 0 18px;
}

/* ==========================================================================
   Bottom navigation
   ========================================================================== */

.tabbar {
  position: fixed;
  left: 50%;
  bottom: calc(16px + env(safe-area-inset-bottom));
  transform: translateX(-50%);
  width: min(440px, calc(100% - 32px));
  display: flex;
  justify-content: space-around;
  padding: 10px 6px;
  border-radius: var(--radius-xl);
  z-index: 40;
  background: rgba(16, 21, 31, 0.72);
}

.navitem {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--text-tertiary);
  transition: color 0.18s var(--ease-standard);
  position: relative;
}

.navitem svg { width: 23px; height: 23px; }
.navitem span { font-size: 10.5px; font-weight: 600; letter-spacing: 0.01em; }

.navitem.is-active { color: var(--accent-strong); }

.navitem--fab {
  color: #051021;
}

.navitem--fab .navitem__fab-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent-gradient);
  display: grid;
  place-items: center;
  box-shadow: 0 8px 24px rgba(62, 140, 255, 0.45);
  margin-top: -22px;
  transition: transform 0.18s var(--ease-standard);
}

.navitem--fab:active .navitem__fab-circle { transform: scale(0.9); }
.navitem--fab svg { width: 24px; height: 24px; }
.navitem--fab span { color: var(--text-tertiary); }

/* ==========================================================================
   Details page
   ========================================================================== */

.detail-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 0 26px;
}

.detail-header__icon {
  width: 78px;
  height: 78px;
  border-radius: 22px;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: var(--glass-fill-strong);
  border: 1px solid var(--glass-border);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 14px;
}

.detail-header__icon img { width: 100%; height: 100%; object-fit: cover; }

.detail-header__title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 750;
  margin: 0 0 4px;
  letter-spacing: -0.01em;
}

.detail-header__subtitle {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
}

.detail-card {
  padding: 6px;
  margin-bottom: 16px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
  border-bottom: 1px solid var(--hairline);
}

.detail-row:last-child { border-bottom: none; }

.detail-row__body { min-width: 0; flex: 1; }

.detail-row__label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-tertiary);
  margin: 0 0 3px;
}

.detail-row__value {
  font-size: 15.5px;
  font-weight: 500;
  margin: 0;
  word-break: break-word;
}

.detail-row__value.is-mono {
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
}

.detail-row__actions { display: flex; gap: 6px; flex-shrink: 0; }

.detail-actions-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

/* ==========================================================================
   Toast
   ========================================================================== */

.toast {
  position: fixed;
  left: 50%;
  bottom: calc(92px + env(safe-area-inset-bottom));
  transform: translateX(-50%) translateY(20px);
  padding: 12px 20px;
  border-radius: var(--radius-pill);
  background: rgba(20, 24, 34, 0.92);
  border: 1px solid var(--glass-border-strong);
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s var(--ease-standard), transform 0.25s var(--ease-standard);
  box-shadow: var(--shadow-lift);
  max-width: calc(100% - 40px);
}

.toast.is-visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}

.toast svg { width: 17px; height: 17px; color: var(--success); flex-shrink: 0; }

/* ==========================================================================
   Modal / sheet
   ========================================================================== */

.sheet-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 4, 9, 0.6);
  backdrop-filter: blur(4px);
  z-index: 90;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s var(--ease-standard);
}

.sheet-backdrop.is-visible { opacity: 1; pointer-events: auto; }

.sheet {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 100%);
  width: min(480px, 100%);
  max-height: 86vh;
  overflow-y: auto;
  background: var(--bg-2);
  border: 1px solid var(--glass-border);
  border-bottom: none;
  border-radius: 28px 28px 0 0;
  padding: 10px 20px calc(28px + env(safe-area-inset-bottom));
  z-index: 91;
  transition: transform 0.32s var(--ease-out);
  box-shadow: 0 -20px 60px rgba(0,0,0,0.5);
}

.sheet.is-visible { transform: translate(-50%, 0); }

.sheet__handle {
  width: 36px;
  height: 4px;
  border-radius: 3px;
  background: rgba(255,255,255,0.2);
  margin: 8px auto 18px;
}

.sheet__title {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 750;
  margin: 0 0 16px;
  text-align: center;
}

/* ==========================================================================
   Settings list
   ========================================================================== */

.settings-group {
  margin-bottom: 22px;
}

.settings-card { padding: 4px; }

.settings-row {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 14px 12px;
  border-bottom: 1px solid var(--hairline);
  cursor: pointer;
  transition: background 0.16s var(--ease-standard);
}

.settings-row:last-child { border-bottom: none; }
.settings-row:hover { background: rgba(255,255,255,0.03); }

.settings-row__icon {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  color: var(--accent-strong);
  flex-shrink: 0;
}

.settings-row__icon.is-danger { background: var(--danger-soft); color: var(--danger); }
.settings-row__icon svg { width: 17px; height: 17px; }

.settings-row__label { flex: 1; font-size: 15.5px; font-weight: 500; }
.settings-row__value { font-size: 14px; color: var(--text-tertiary); }
.settings-row__chevron { color: var(--text-tertiary); }
.settings-row__chevron svg { width: 16px; height: 16px; }

/* Toggle switch */
.switch {
  position: relative;
  width: 46px;
  height: 27px;
  flex-shrink: 0;
}

.switch input { opacity: 0; width: 0; height: 0; position: absolute; }

.switch__track {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.15);
  border-radius: var(--radius-pill);
  transition: background 0.22s var(--ease-standard);
  cursor: pointer;
}

.switch__track::before {
  content: "";
  position: absolute;
  width: 23px;
  height: 23px;
  left: 2px;
  top: 2px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.22s var(--ease-standard);
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}

.switch input:checked + .switch__track { background: var(--success); }
.switch input:checked + .switch__track::before { transform: translateX(19px); }

/* ==========================================================================
   Password generator card
   ========================================================================== */

.generator-output {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-radius: var(--radius-md);
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--glass-border);
  margin-bottom: 16px;
}

.generator-output__text {
  flex: 1;
  font-family: var(--font-mono);
  font-size: 16.5px;
  letter-spacing: 0.02em;
  word-break: break-all;
}

.generator-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 4px;
}

.generator-row__label { font-size: 15px; font-weight: 500; }

.range {
  width: 100%;
  accent-color: var(--accent);
}

/* ==========================================================================
   Footer credit
   ========================================================================== */

.app-footer {
  text-align: center;
  padding: 22px 10px 8px;
  font-size: 12px;
  color: var(--text-tertiary);
}

.app-footer a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.16s;
}

.app-footer a:hover { color: var(--accent-strong); }

/* ==========================================================================
   Category grid
   ========================================================================== */

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 10px;
}

.category-tile {
  padding: 18px 16px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: transform 0.16s var(--ease-standard), background 0.16s;
}

.category-tile:hover { background: var(--glass-fill-strong); }
.category-tile:active { transform: scale(0.97); }

.category-tile__icon {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  color: var(--accent-strong);
  margin-bottom: 12px;
}

.category-tile__icon svg { width: 19px; height: 19px; }
.category-tile__count { font-size: 13px; color: var(--text-tertiary); margin: 2px 0 0; }
.category-tile__name { font-size: 16px; font-weight: 650; margin: 0; }

/* ==========================================================================
   Misc utility
   ========================================================================== */

.hidden { display: none !important; }
.mt-0 { margin-top: 0 !important; }
.mb-0 { margin-bottom: 0 !important; }
.text-center { text-align: center; }
.stack { display: flex; flex-direction: column; gap: 12px; }
.row { display: flex; align-items: center; gap: 10px; }
.row-between { display: flex; align-items: center; justify-content: space-between; }
.spacer { flex: 1; }

.pill-badge {
  font-size: 11.5px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: var(--radius-pill);
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.divider {
  height: 1px;
  background: var(--hairline);
  margin: 18px 0;
  border: none;
}

.spinner {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2.5px solid rgba(255,255,255,0.18);
  border-top-color: var(--accent-strong);
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.splash {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.splash img { width: 84px; height: 84px; border-radius: 22px; box-shadow: var(--shadow-lift); }

.file-input-hidden { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
