export function renderAbout() {
  return `
    <section class="section-wrap container about-section" id="sobre-mi">
      <div class="about-art">
        <img class="about-img" src="assets/img/about.png" alt="Sobre mí" />
      </div>

      <div class="about-copy">
        <p class="eyebrow">Sobre mí</p>
        <h2>Aprendo, creo y comparto tecnología</h2>
       <p>
        Me apasiona el mundo de la tecnología
        y cómo todo se conecta: el backend con Java,
        el frontend que usa la gente y las bases de datos
        que guardan todo en orden. Disfruto aprender,
        practicar y crear proyectos que no solo funcionen,
        sino que se sientan bien usarlos. Cada línea de código
        es una oportunidad para mejorar y compartir algo útil.
      </p>
        <div class="stats">
          <div>
            <strong>3+</strong>
            <small>Años aprendiendo</small>
          </div>
          <div>
            <strong>8+</strong>
            <small>Proyectos creados</small>
          </div>
          <div>
            <strong>100%</strong>
            <small>Curiosidad</small>
          </div>
        </div>
      </div>
    </section>
  `;
}