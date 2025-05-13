const tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

//Dezlizar flecha hacia abajo
tl.to(".hero-info_arrow", {
  y: 15,
  duration: 1.5,
  ease: "power2.inOut",
});
