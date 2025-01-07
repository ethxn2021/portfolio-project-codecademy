// Calculate programming time
const programmingTimeElement = document.getElementById("programming-time");
const secondsProgramming =
  Math.floor(Date.now() / 1000) - new Date(2020, 8, 1).getTime() / 1000; // Assume programming started in September 2020
programmingTimeElement.textContent = secondsProgramming.toLocaleString();
