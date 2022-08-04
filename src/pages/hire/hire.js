import "../../scss/main.scss";
import { buildNav, manageLanguages } from "../../js/init";

document.addEventListener("DOMContentLoaded", () => {
  manageLanguages();
  buildNav();
});
