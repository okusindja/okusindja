export function turnContentIntoCardByHoveringOnText() {
  let contentsToTurnIntoCards = document.querySelectorAll(
    ".container__content__page__body__information"
  );
  let isAlreadyAnCard = document.querySelector(
    ".container__content__page__body__information--to-card"
  );
  let coolMessage = document.querySelector(
    ".container__content__page__cool-message"
  );
  let isDesktop = window.matchMedia("(min-width: 768px)");

  if (contentsToTurnIntoCards && isDesktop.matches) {
    contentsToTurnIntoCards.forEach((contentToTurnIntoCard) => {
      contentToTurnIntoCard.addEventListener("mouseover", () => {
        if (!isAlreadyAnCard) {
          contentToTurnIntoCard.classList.add(
            "container__content__page__body__information--to-card"
          );
          if (coolMessage)
            coolMessage.classList.add(
              "container__content__page__cool-message--hide"
            );
        }
      });
    })
  }
}


document.addEventListener("DOMContentLoaded", () => {
  turnContentIntoCardByHoveringOnText();
});
