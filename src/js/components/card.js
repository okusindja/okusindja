let contentsToTurnIntoCards = document.querySelector(
  ".container__content__page__body__information"
);
let isAlreadyAnCard = document.querySelector(
  ".container__content__page__body__information--to-card"
);
let coolMessage = document.querySelector(
  ".container__content__page__cool-message"
);
let isDesktop = window.matchMedia("(min-width: 768px)");

export function turnContentIntoCardByHoveringOnText() {
  if (contentsToTurnIntoCards && isDesktop.matches) {
    contentsToTurnIntoCards.addEventListener("mouseover", () => {
      if (!isAlreadyAnCard) {
        contentsToTurnIntoCards.classList.add(
          "container__content__page__body__information--to-card"
        );
        if (coolMessage)
          coolMessage.classList.add(
            "container__content__page__cool-message--hide"
          );
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  turnContentIntoCardByHoveringOnText();
});
