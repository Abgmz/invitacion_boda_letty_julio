const musicButton = document.getElementById("music-button");
const audio = document.getElementById("wedding-song");

// Controlador de clic
musicButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicButton.classList.add("playing");
  } else {
    audio.pause();
    musicButton.classList.remove("playing");
  }
});

// Opcional: Reproducir automáticamente (con interacción del usuario)
document.body.addEventListener(
  "click",
  () => {
    audio
      .play()
      .then(() => {
        musicButton.classList.add("playing");
      })
      .catch((error) => {
        console.log("Autoplay bloqueado: ", error);
      });
  },
  { once: true }
); // Solo se ejecuta una vez
