import "../scss/main.scss";
import { buildNav, manageLanguages } from "../js/init";

const app = document.getElementById("app");

app.innerHTML = `
<section class="container">
  <div class="container__cube-menu"></div>

  <div class="container__content">
        <div id="about" class="content__page">
          <div class="content__page__body">
            <div class="content__page__body__information">
              <h3 class="content__page__body__information__title">Who am I?</h3>
              <article class="content__page__body__information__body-text">
                Hello there, my name is Okusindja, but you can call me by my
                nickname "Kussy", I'm a young angolan guy seeking for better
                opportunities in my <b>Frontend</b> career. When I'm not coding,
                I'm hanging out with friends and family, and praying as well. I
                consider myself a clever guy, I do like to talk about theology
                and conspirancy theory, I do art, like graffities and writting
                books, so I also consider myself as an css artist.
              </article>
            </div>
          </div>
          <div class="content__page__cool-message">
            <span>Just know about me, I'm a nice person :)</span>
          </div>
        </div>
      </div>
    </section>
`;

document.addEventListener("DOMContentLoaded", () => {
  manageLanguages();
  buildNav();
});
