function projectCard(project) {
  return `
    <article class="project-card">
      <div class="project-media">
        <img src="${project.img}" alt="${project.title}" />
      </div>

      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>

        <div class="tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        <div class="project-links">
          <span>Code</span>
          <span>Live Demo ↗</span>
        </div>
      </div>
    </article>
  `;
}

export function renderProjects() {
  const projects = [
    {
      img: "./assets/img/project1.png",
      title: "Landing de tienda de deportes",
      desc: "Una página para motivar a los usuarios a participar en actividades deportivas y actividad fisica.",
      tags: ["HTML", "CSS", "Bootstrap"],
    },
    {
      img: "./assets/img/portafolio.png",
      title: "Portafolio personal",
      desc: "Un sitio adaptable para mostrar perfil y trabajos.",
      tags: ["HTML", "CSS", "JavaScript"],
      code: "#contacto",
      demo: "#contacto",
    },
    {
      img: "./assets/img/erp.png",
      title: "sistema ERP",
      desc: "ERP para clínicas dentales.",
      tags: ["HTML", "CSS", "Bootstrap"],
      code: "#contacto",
      demo: "#contacto",
    },
  ];

  return /* html */ `
    <section class="section-wrap container projects-section" id="proyectos">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">Selección de trabajos</p>
          <h2>Mis proyectos <span>creativos</span></h2>
        </div>
        <div class="carousel-controls">
          <button id="projectPrev" aria-label="Proyectos anteriores">‹</button>
          <button id="projectNext" aria-label="Proyectos siguientes">›</button>
        </div>
      </div>

      <div class="project-grid" id="projectGrid">
        ${projects.map(projectCard).join("")}
      </div>
    </section>
  `;
}

export function initProjects() {
  const grid = document.getElementById("projectGrid");
  const next = document.getElementById("projectNext");
  const prev = document.getElementById("projectPrev");

  if (!grid || !next || !prev) return;

  next.addEventListener("click", () =>
    grid.appendChild(grid.firstElementChild)
  );

  prev.addEventListener("click", () =>
    grid.insertBefore(grid.lastElementChild, grid.firstElementChild)
  );
}