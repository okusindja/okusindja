import "./scss/main.scss";
import { buildNav, manageLanguages } from "./js/index";

function transformTextIntoBlockText() {
  let myName = document.querySelector(".full-name");
  let shadow = "";
  const mobile = window.matchMedia("(max-width: 768px)");

  if (mobile.matches) {
    for (let i = 0; i < 900; i++) {
      shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #4d4e58";
    }
    if (myName) myName.style.textShadow = shadow;
  } else {
    for (let i = 0; i < 20; i++) {
      shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #4d4e58";
    }
    if (myName) myName.style.textShadow = shadow;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  transformTextIntoBlockText();
  manageLanguages();
  transformTextIntoBlockText();
  buildNav();
});
