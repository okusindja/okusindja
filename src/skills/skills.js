import "../scss/main.scss";
import { buildNav, manageLanguages } from "../js/init";

const app = document.getElementById("app");

app.innerHTML = `
<section class="container">
      <div class="container__cube-menu"></div>

      <div class="container__content">
        <div id="skills" class="content__page">
          <div class="content__page__body">
            <ul>
              <li>
                <div class="speech-bubble">
                  <span
                    >A lot of styling technology knowing, creativity and good
                    mobility in web designing. I work with a lot of
                    preprocessors such as: SASS, Stylus, Less, good naming
                    convention using BEM technic, and much more!</span
                  >
                </div>
                <div
                  class="content__page__body__information content__page__body__information--to-card"
                  style="--index: 3"
                >
                  <span><i class="fa-brands fa-css3-alt"></i> CSS3 96%</span>
                  <div
                    class="skill-liquid"
                    style="--stat: 96%; --color: #5caae9"
                  ></div>
                  <div class="content__page__body__information__stat"></div>
                </div>
              </li>

              <li>
                <div class="speech-bubble">
                  <span
                    >Good knowing of HTML5 tags and attributes, that allows me
                    to develop applications with good SEO</span
                  >
                </div>
                <div
                  class="content__page__body__information content__page__body__information--to-card"
                  style="--index: 2"
                >
                  <span><i class="fa-brands fa-html5"></i> HTML5 94%</span>
                  <div
                    class="skill-liquid"
                    style="--stat: 94%; --color: #de8261"
                  ></div>
                  <div class="content__page__body__information__stat"></div>
                </div>
              </li>

              <li>
                <div class="speech-bubble">
                  <span
                    >Learning the best of Javascript, ES5 and ES6 at the
                    fullest, running through the road to Senior level. Embracing
                    new challenges and seeking for the best practices to achieve
                    the clean code God level.</span
                  >
                </div>
                <div
                  class="content__page__body__information content__page__body__information--to-card"
                  style="--index: 1"
                >
                  <span><i class="fa-brands fa-js-square"></i> JS 56%</span>
                  <div
                    class="skill-liquid"
                    style="--stat: 56%; --color: #e4c766"
                  ></div>
                  <div class="content__page__body__information__stat"></div>
                </div>
              </li>

              <li>
                <div class="speech-bubble">
                  <span
                    >Knowing about version control using GIT commands and
                    familiarity with a several agile methodologies that have the
                    same basic principles as GIT.</span
                  >
                </div>
                <div
                  class="content__page__body__information content__page__body__information--to-card"
                  style="--index: 1"
                >
                  <span><i class="fa-brands fa-git-alt"></i> GIT 86%</span>
                  <div
                    class="skill-liquid"
                    style="--stat: 86%; --color: #c26340"
                  ></div>
                  <div class="content__page__body__information__stat"></div>
                </div>
              </li>

              <li>
                <div class="speech-bubble">
                  <span
                    >Learning about this JS Library and building Apps with joy.
                    This is the main Library/Framework I use. I'm using it and
                    studying about it grouping other technologies that make it
                    powerful, such as NextJS and TypeScript.</span
                  >
                </div>
                <div
                  class="content__page__body__information content__page__body__information--to-card"
                  style="--index: 1"
                >
                  <span><i class="fa-brands fa-react"></i> REACTJS 55%</span>
                  <div
                    class="skill-liquid"
                    style="--stat: 55%; --color: #365a8d"
                  ></div>
                  <div class="content__page__body__information__stat"></div>
                </div>
              </li>

              <li>
                <div class="speech-bubble">
                  <span
                    >Figma, SCRUM, KANBAM, VTEX, Angular Framework, NodeJS, SQL,
                    Adobe Illustrator, MVC, UML, Vanilla, Linux, Bootstrap,
                    Excel, Firebase, JSX, POO, PowerShell, MySQL,
                    Styled-Components, etc and etc.</span
                  >
                </div>
                <div
                  class="content__page__body__information content__page__body__information--to-card"
                  style="--index: 1"
                >
                  <span
                    ><i class="fa-solid fa-diagram-project"></i> OTHER SKILLS
                    76%</span
                  >
                  <div
                    class="skill-liquid"
                    style="--stat: 76%; --color: #76d89c"
                  ></div>
                  <div class="content__page__body__information__stat"></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="content__page__cool-message">
            <span>Take a look at my stats, Am I that good?</span>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer"></footer>
`;

function setSkillInformationOnMouseOver() {
  let skillListItems = document.querySelectorAll(
    "#skills ul li .content__page__body__information"
  );

  if (skillListItems) {
    skillListItems.forEach((skillListItem) => {
      skillListItem.addEventListener("mouseover", () => {
        skillListItem.previousElementSibling.style.transform = "scale(1)";
      });
      skillListItem.addEventListener("mouseout", () => {
        skillListItem.previousElementSibling.style.transform = "scale(0)";
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setSkillInformationOnMouseOver();
  manageLanguages();
  setSkillInformationOnMouseOver();
  buildNav();
});
