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
