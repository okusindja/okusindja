let contentsToTurnIntoCards = document.querySelector(
  ".content__page__body__information"
);
let isAlreadyAnCard = document.querySelector(
  ".content__page__body__information--to-card"
);
let coolMessage = document.querySelector(".content__page__cool-message");
let isMobile = window.matchMedia("(min-width: 768px)");

export function turnContentIntoCardByHoveringOnText() {
  if (contentsToTurnIntoCards && isMobile.matches) {
    contentsToTurnIntoCards.addEventListener("mouseover", () => {
      if (!isAlreadyAnCard) {
        contentsToTurnIntoCards.classList.add(
          "content__page__body__information--to-card"
        );
        if (coolMessage)
          coolMessage.classList.add("content__page__cool-message--hide");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  turnContentIntoCardByHoveringOnText();
});
