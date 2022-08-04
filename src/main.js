import "./scss/main.scss";
import { buildNav, manageLanguages } from "./js/init";

const app = document.getElementById("app");

app.innerHTML = `
// <section class="container">
//   <div class="container__cube-menu"></div>
//   <div class="container__content">
//     <div id="home" class="content__page">
//       <div class="content__page__body">
//         <h1 id="name" class="full-name">
//           I am <br />
//           Okusindja <br />
//           de Almeida
//         </h1>
//       </div>
//       <!-- <div class="content__page__cool-message">
//         <span>I have something cool to show you :)</span>
//       </div> -->
//     </div>
//   </div>
// </section>
// <footer class="footer"></footer>
`;

function transformTextIntoBlockText() {
  let myName = document.querySelector(".full-name");
  let shadow = "";

  for (let i = 0; i < 20; i++) {
    shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #4d4e58";
  }
  if (myName) myName.style.textShadow = shadow;
}

document.addEventListener("DOMContentLoaded", () => {
  transformTextIntoBlockText();
  manageLanguages();
  transformTextIntoBlockText();
  buildNav();
});
