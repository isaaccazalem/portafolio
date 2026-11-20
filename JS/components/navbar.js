export function renderNavbar() {
  return `<nav class="navbar navbar-expand-lg site-nav container"
      aria-label="Navegación principal">
      <a class="navbar-brand" href="#inicio" onclick="closeMainNav()">Portafolio<span>.</span></a>

      <button
        class="navbar-toggler"
        type="button"
        onclick="toggleMainNav()"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Abrir menú"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#inicio" onclick="closeMainNav()">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sobre-mi" onclick="closeMainNav()">Sobre mí</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#habilidades" onclick="closeMainNav()">Habilidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#certificaciones" onclick="closeMainNav()">Certificaciones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#proyectos" onclick="closeMainNav()">Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto" onclick="closeMainNav()">Contacto</a>
          </li>
        </ul>

        <div class="nav-actions">
          <a class="icon-link" href="#contacto" onclick="closeMainNav()" aria-label="Ir a contacto">✆</a>
          <button
            class="theme-button"
            id="themeToggle"
            aria-label="Cambiar tema"
          >
            ☼
          </button>
        </div>
      </div>
    </nav>
  `;
}


window.toggleMainNav = function () {
  const menu = document.getElementById('mainNav');
  const toggler = document.querySelector('.navbar-toggler');
  const isOpen = menu.classList.toggle('show');
  toggler.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
};

window.closeMainNav = function () {
  const menu = document.getElementById('mainNav');
  const toggler = document.querySelector('.navbar-toggler');
  if (!menu) return;
  menu.classList.remove('show');
  toggler?.setAttribute('aria-expanded', 'false');
};