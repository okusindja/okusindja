import "../scss/main.scss";
import { buildNav, manageLanguages } from "../js/init";

const app = document.getElementById("app");

app.innerHTML = `
<section class="container">
  <div class="container__cube-menu"></div>

  <div class="container__content">
        <div id="hire" class="content__page">
          <div class="content__page__body">
            <div class="content__page__body__information">
              <h3 class="content__page__body__information__title">
                Interest in working with me?
              </h3>
              <article class="content__page__body__information__body-text">
                You can message me today, so we can talk about technology and
                start working together, let's create something new and conquer!
                <br />
                Contact me through:
                <b
                  ><a href="tel:00244956035826"
                    >My Phone Number From Angola (Whatsapp and iMessage)</a
                  ></b
                >; Or:
                <b><a href="okusindja@gmail.com">My Email</a></b>
                Or you can also visit:
                <b
                  ><a
                    href="linkedin.com"
                    target="blank"
                    rel="noopener noreferrer"
                    >My Linkedin</a
                  ></b
                >. Send me a message, so you can buy me a coffee, I'll bring the
                donuts =)
              </article>
            </div>
          </div>
          <div class="content__page__cool-message">
            <span>Hire me today, let's work on something cool!</span>
          </div>
        </div>
      </div>
    </section>
`;

document.addEventListener("DOMContentLoaded", () => {
  manageLanguages();
  buildNav();
});
