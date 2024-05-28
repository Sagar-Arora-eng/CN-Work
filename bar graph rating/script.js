// script.js
document.addEventListener("DOMContentLoaded", () => {
  const data = [10, 20, 30, 40, 50]; // Example data
  const barChartContainer = document.getElementById("barChartContainer");

  // Find the maximum value in the data set for scaling purposes
  const maxValue = Math.max(...data);

  data.forEach((value) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${(value / maxValue) * 100}%`;
    bar.innerHTML = `<span>${value}</span>`;
    barChartContainer.appendChild(bar);
  });
});
