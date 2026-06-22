const startButton = document.getElementById("start-btn");
const status = document.getElementById("status");

if (startButton && status) {
  startButton.addEventListener("click", () => {
    status.textContent = "Project setup started.";
  });
}
