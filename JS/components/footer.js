export function renderFooter() {
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <h3>Portafolio.</h3>
          <p>Java Fullstack Developer</p>
        </div>

        <div class="footer-socials">
          <a href="https://github.com/isaaccazalem" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
          </a>
          <a href="www.linkedin.com/in/isaaccazalesm" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/></svg>
          </a>
          <a href="" target="_blank" rel="noopener" title="X / Twitter" aria-label="X / Twitter">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1a4.55 4.55 0 0 0-7.76 4.15A12.9 12.9 0 0 1 1.64 3.16a4.55 4.55 0 0 0 1.41 6.08c-.73-.02-1.42-.22-2.02-.56v.06a4.55 4.55 0 0 0 3.65 4.46 4.6 4.6 0 0 1-2.05.08 4.55 4.55 0 0 0 4.25 3.16A9.13 9.13 0 0 1 0 19.54a12.87 12.87 0 0 0 6.98 2.05c8.37 0 12.95-6.93 12.95-12.95 0-.2 0-.39-.01-.58.89-.64 1.66-1.45 2.52-2.23z"/></svg>
          </a>
        </div>

        <div class="footer-copy">
          <p><span id="footerYear">2026</span> <span>by</span> <span class="footer-name">Isaac</span></p>
        </div>
      </div>
    </footer>
  `;
}

export function initFooter() {
  const yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
