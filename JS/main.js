import { renderNavbar } from "./components/navbar.js";
import { renderHero } from "./components/hero.js";
import { renderAbout } from "./components/about.js";
import { renderSkills } from "./components/skills.js";
import { renderCertifications } from "./components/certifications.js";
import { renderProjects, initProjects } from "./components/projects.js";
import { renderContact, initContact } from "./components/contact.js";
import { renderFooter, initFooter } from "./components/footer.js";

function mount(id, render) {
  const node = document.getElementById(id);
  if (node) node.innerHTML = render();
}

mount("header", renderNavbar);
mount("hero", renderHero);
mount("about", renderAbout);
mount("skills", renderSkills);
mount("certificaciones", renderCertifications);
mount("projects", renderProjects);
mount("contact", renderContact);
mount("footer", renderFooter);

initTheme();
initProjects();
initContact();
initFooter();

window.toggleMainNav = function () {
  const menu = document.getElementById('mainNav');
  const toggler = document.querySelector('.navbar-toggler');
  if (!menu) return;
  const isOpen = menu.classList.toggle('show');
  toggler?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
};

window.closeMainNav = function () {
  const menu = document.getElementById('mainNav');
  const toggler = document.querySelector('.navbar-toggler');
  if (!menu) return;
  menu.classList.remove('show');
  toggler?.setAttribute('aria-expanded', 'false');
};

function initTheme() {
  const button = document.getElementById("themeToggle");
  if (!button) return;

  if (localStorage.getItem("portfolio-theme") === "light") {
    document.body.classList.add("light-theme");
    button.textContent = "☾";
  }

  button.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    const light = document.body.classList.contains("light-theme");
    button.textContent = light ? "☾" : "☼";
    localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  });
}