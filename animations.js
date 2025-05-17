gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

//Dezlizar flecha hacia abajo
tl.to([".hero-info_arrow", ".family_card-heart"], {
  y: 8, // Flecha: +15px, Corazón: +15px
  duration: 0.5,
  ease: "sine.inOut",
  stagger: 0.2, // Pequeño desfase entre elementos
});

// Configuración individual por elemento
const elementos = [
  { selector: ".hero-info_text", delay: 0, start: "top 80%" },
  { selector: ".hero-info_title-wrapper", delay: 0.5, start: "top 90%" },
  { selector: ".hero-info_bottom", delay: 0.2, start: "top 90%" },
  { selector: ".timeout_title", delay: 0.2, start: "top 90%" },
  { selector: ".timeout_text", delay: 0.4, start: "top 70%" },
  { selector: ".timeout_counter", delay: 0.6, start: "top 70%" },
  { selector: ".timeout_image-01", delay: 0.2, start: "top 70%" },
  { selector: ".timeout_image-02", delay: 0.4, start: "top 70%" },
  { selector: ".timeout_image-03", delay: 0.6, start: "top 70%" },
  { selector: ".guest_card", delay: 0.2, start: "top 90%" },
  { selector: ".family_title", delay: 0.3, start: "top 90%" },
  { selector: ".family_card:nth-child(1)", delay: 0.2, start: "top 90%" },
  { selector: ".family_card:nth-child(2)", delay: 0.4, start: "top 90%" },
  { selector: ".family_card:nth-child(3)", delay: 0.6, start: "top 90%" },
  { selector: ".reception_image", delay: 0.2, start: "top 90%" },
  { selector: ".reception_card", delay: 0.4, start: "top 90%" },
  { selector: ".gift_title", delay: 0.3, start: "top 90%" },
  { selector: ".gift_text", delay: 0.4, start: "top 90%" },
  { selector: ".gift_image", delay: 0.5, start: "top 90%" },
  { selector: ".confirm_title", delay: 0.3, start: "top 90%" },
  { selector: ".confirm_image:nth-child(1)", delay: 0.2, start: "top 90%" },
  { selector: ".confirm_image:nth-child(2)", delay: 0.4, start: "top 90%" },
  { selector: ".confirm_image:nth-child(3)", delay: 0.6, start: "top 90%" },
  { selector: ".confirm_selection", delay: 0.5, start: "top 90%" },
];

elementos.forEach(({ selector, delay, start }) => {
  gsap.from(selector, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay, // Retraso personalizado
    scrollTrigger: {
      trigger: selector,
      start, // Punto de activación único
      toggleActions: "play reset play reset",
    },
  });
});
