import "../scss/main.scss";
import { buildNav, manageLanguages } from "../js/index";

function setSkillInformationOnMouseOver() {
  let skillListItems = document.querySelectorAll(
    "#skills ul li .content__page__body__information"
  );
  let mobileViewPort = window.matchMedia("(max-width: 768px)");
  let userHint = document.querySelector(".skills-user-hint");

  if (skillListItems) {
    skillListItems.forEach((skillListItem) => {
      skillListItem.addEventListener("mouseover", () => {
        skillListItem.previousElementSibling.style.transform = "scale(1)";
        if (userHint) userHint.remove();
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
