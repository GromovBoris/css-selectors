"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("./objects");
console.log(objects_1.level1.correct);
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("send");
    if (button) {
        button.addEventListener("click", () => {
            alert(objects_1.level1.correct);
        });
    }
});
