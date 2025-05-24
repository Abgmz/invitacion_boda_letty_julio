(() => {
  //Countdwown
  const daysEl = document.getElementById("counter-day");
  const hoursEl = document.getElementById("counter-hour");
  const minutesEl = document.getElementById("counter-minute");
  const secondsEl = document.getElementById("counter-second");

  const marriedDay = new Date("August 9, 2025 00:00:00");
  const marriedDayToMil = marriedDay.getTime();

  setInterval(() => {
    const today = new Date().getTime();
    const restTime = marriedDayToMil - today;

    //Convert milliseconds to days, hours, minutes and seconds
    const days = Math.floor(restTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (restTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((restTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((restTime % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
})();

//Implementacion del modal
(() => {
  const modalEl = document.getElementById("wedding-modal");
  const modalBtn = document.getElementById("enter-site");

  modalBtn.addEventListener("click", (ev) => {
    modalEl.classList.add("hide-modal");
  });
})();

// Implementacion de ruto para el lugar del evento
(() => {
  document
    .querySelector(".reception_location-button")
    .addEventListener("click", () => {
      // Coordenadas del lugar (reemplázalas por las de tu sede)
      const lat = 25.683103019029296;
      const lng = -100.22113769127941;

      // Detectar si es móvil para abrir app nativa
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // Abrir en apps nativas (Google Maps o Apple Maps)
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`
        );
      } else {
        // Abrir en web para desktop
        window.open(`https://www.google.com/maps?q=${lat},${lng}`);
      }
    });
})();

//Implementacion invitados y confirmacion de asistencia
(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get("invitado") || "Invitado Especial";
  const guestNumberAccess = urlParams.get("acceso") || "1";
  const numeroNovio = "528123855233";
  const numeroNovia = "528116288544";
  const mensaje = `¡Hola! Soy ${decodeURIComponent(
    guestName
  )}. Confirmo mi asistencia.`;

  function enviarWhatsApp(numero) {
    const mensajeCodificado = encodeURIComponent(mensaje);
    window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, "_blank");
  }

  document.querySelector(".guest_card-name").textContent = guestName;
  document.querySelector(
    ".guest_card-resume em"
  ).textContent = `${guestNumberAccess} ${
    guestNumberAccess > 1 ? "accesos" : "acceso"
  }`;

  document.getElementById("confirmLetty").addEventListener("click", () => {
    enviarWhatsApp(numeroNovia);
  });

  document.getElementById("confirmJulio").addEventListener("click", () => {
    enviarWhatsApp(numeroNovio);
  });
})();
