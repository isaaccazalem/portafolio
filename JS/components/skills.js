export function renderSkills() {
  return /* html */ `
    <section class="section-wrap container skills-section" id="habilidades">
      <p class="eyebrow">Lo que uso</p>
      <h2>Habilidades y <span>tecnologías</span></h2>

      <div class="skill-grid">
        <article class="skill-item">
          <div class="skill-heading">
            <span class="skill-icon">▣</span>
            <div>
              <h3>Java</h3>
              <small>Programación orientada a objetos</small>
            </div>
            <b>90%</b>
          </div>
          <div class="progress">
            <span style="width: 90%"></span>
          </div>
        </article>

        <article class="skill-item">
          <div class="skill-heading">
            <span class="skill-icon">⌘</span>
            <div>
              <h3>SQL</h3>
              <small>Base de datos</small>
            </div>
            <b>85%</b>
          </div>
          <div class="progress">
            <span style="width: 85%"></span>
          </div>
        </article>

        <article class="skill-item">
          <div class="skill-heading">
            <span class="skill-icon">JS</span>
            <div>
              <h3>Node.js</h3>
              <small>Entorno de ejecución para JavaScript</small>
            </div>
            <b>70%</b>
          </div>
          <div class="progress">
            <span style="width: 70%"></span>
          </div>
        </article>

        <article class="skill-item">
          <div class="skill-heading">
            <span class="skill-icon">B</span>
            <div>
              <h3>Bootstrap</h3>
              <small>Diseño adaptable</small>
            </div>
            <b>75%</b>
          </div>
          <div class="progress">
            <span style="width: 75%"></span>
          </div>
        </article>

        <article class="skill-item">
          <div class="skill-heading">
            <span class="skill-icon">⌥</span>
            <div>
              <h3>Git</h3>
              <small>Control de versiones</small>
            </div>
            <b>65%</b>
          </div>
          <div class="progress">
            <span style="width: 65%"></span>
          </div>
        </article>

        <article class="skill-item">
          <div class="skill-heading">
            <span class="skill-icon">◈</span>
            <div>
              <h3>Scrum</h3>
              <small>Metodología de desarrollo</small>
            </div>
            <b>70%</b>
          </div>
          <div class="progress">
            <span style="width: 70%"></span>
          </div>
        </article>
      </div>
    </section>
  `;
}