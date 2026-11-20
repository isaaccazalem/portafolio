export function renderHero() {
  return `
    <section class="hero section-wrap container" id="inicio">
      <div class="hero-copy">
        <div class="social-links">        
          <a href="https://github.com/isaaccazalem" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><img src="./assets/icons/github.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/in/isaaccm1/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><img src="./assets/icons/linkedin.png" alt="Instagram" /></a>
          <a href="https://www.credly.com/users/isaac-cazales-merino" target="_blank" rel="noopener noreferrer" aria-label="Credly"><img src="./assets/icons/credly.png" alt="YouTube" /></a>
          <a href="https://www.tiktok.com/@nekosandxtr1" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><img src="./assets/icons/tik-tok.png" alt="TikTok" /></a>
          <span class="social-icon" title="Me gustan los gatos">
             <img src="./assets/icons/gato.png" alt="Gato" />
           </span>
        </div>

        <p class="eyebrow">Hola, qué gusto verte</p>
        <h1>Hola, soy <span>Isaac</span></h1>
        <p class="hero-role">Desarrollador java Full Stack</p>
        <p class="lead-copy">
          Me emociona descubrir cómo funciona la tecnología
          por dentro y convertir eso en aplicaciones claras,
          útiles y fáciles de usar. No solo me gusta programar,
          me gusta entender, crear y seguir aprendiendo en cada proyecto.
        </p>

        <div class="hero-buttons">
          <a class="btn btn-primary-custom" href="#contacto">✉ Hablemos</a>
          <a class="btn btn-outline-custom" href="#proyectos">Ver proyectos ↗</a>
        </div>
      </div>

      <div class="hero-art">
        <img
          src="./assets/img/hero.png"
          alt="Isaac - Desarrollador Java Full Stack"
          class="hero-image"
        />
      </div>
    </section>
  `;
}