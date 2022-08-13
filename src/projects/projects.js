import "../scss/main.scss";
import { buildNav, manageLanguages } from "../js/index";

document.addEventListener("DOMContentLoaded", () => {
  manageLanguages();
  buildNav();
});
