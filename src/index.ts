import { level1 } from "./objects";

console.log(level1.correct);

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("send");
  if (button) {
    button.addEventListener("click", () => {
      alert(level1.correct);
    });
  }
});
