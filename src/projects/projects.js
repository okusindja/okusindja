import "../scss/main.scss";
import { buildNav, manageLanguages } from "../js/init";

const app = document.getElementById("app");

app.innerHTML = `
<section class="container">
  <div class="container__cube-menu"></div>

  <div class="container__content">
  <div id="projects" class="content__page">
    <div class="content__page__body">
      <div class="content__page__body__information">
        <h3 class="content__page__body__information__title">
          My Projects
        </h3>
        <article class="content__page__body__information__body-text">
          Mostly of my projects are totally privates, and some other part
          of them are public, I pay more attention on my personal projects
          for a while, so I have some of unfinished projects, so you won't
          leave this portfolio without seeing nothing haha. Some of my
          public unfinished projects are in my github, but I'll show you
          some of them such as:
          <b
            ><a
              href="https://d-candies.netlify.app/"
              target="blank"
              rel="noopener noreferrer"
              >D Candies (mobile only)</a
            ></b
          >; I have:
          <b
            ><a
              href="http://bukkis.netlify.com"
              target="blank"
              rel="noopener noreferrer"
              >Bukkis (mobile only)</a
            ></b
          >
          I joined in a communitary project like:
          <b
            ><a
              href="https://covidango.web.app/"
              target="blank"
              rel="noopener noreferrer"
              >CovidAngo</a
            ></b
          >. These are some of them that I feel safe to show you... But
          there's hits coming soon! =)
        </article>
      </div>
    </div>
    <div class="content__page__cool-message">
      <span>These are my masterpieces! Check my GitHub</span>
    </div>
  </div>
</div>
</section>
`;

document.addEventListener("DOMContentLoaded", () => {
  manageLanguages();
  buildNav();
});
