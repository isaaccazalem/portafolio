function field(label, id, type, placeholder) {
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      <input id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" required />
    </div>
  `;
}

export function renderContact() {
  return /* html */ `
    <section class="section-wrap container contact-section" id="contacto">
      <div class="contact-heading">
        <p class="eyebrow">¿Creamos algo juntos?</p>
        <h2>¡Ponte en <span>contacto!</span></h2>
        <p>Cuéntame sobre tu idea o proyecto. Será un gusto leerte.</p>
      </div>

      <div class="contact-layout">
        <div class="contact-art">
          <img
            src="./assets/img/contact.png"
            alt="Personaje del portafolio listo para conversar"
            class="contact-image"
          />
        </div>

        <form class="contact-form" id="contactForm">
          ${field("Nombre", "name", "text", "Tu nombre")}
          ${field("Correo electrónico", "email", "email", "tu@correo.com")}

          <div class="field">
            <label for="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" placeholder="¿En qué puedo ayudarte?" required></textarea>
          </div>

          <button class="btn btn-primary-custom" type="submit">Enviar mensaje ➤</button>
          <p class="form-note" id="formNote" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `;
}

export function initContact() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const note = document.getElementById("formNote");
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    // Validación simple
    if (!name || !email || !message) {
      note.textContent = "Por favor completa todos los campos.";
      return;
    }

    button.textContent = "Enviando...";
    button.disabled = true;
    note.textContent = "";

    try {
      const response = await fetch("https://formsubmit.co/ajax/isaac_cazales.m@hotmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: "Nuevo mensaje desde tu portafolio",
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        note.textContent = "¡Gracias! Tu mensaje fue enviado, te responderé pronto.";
        form.reset();
      } else {
        throw new Error("Error al enviar");
      }
    } catch (error) {
      note.textContent = "Hubo un error, intenta de nuevo o escríbeme directo a isaac_cazales.m@hotmail.com";
    } finally {
      button.textContent = originalText;
      button.disabled = false;
    }
  });
}