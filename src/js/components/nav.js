export function buildNav() {
  let cubeMenuContainer = document.querySelector(".container__cube-menu");

  let html = {
    en: {
      navBoxes: `<nav class="container__cube-menu__nav">
      <ul class="container__cube-menu__nav__nav-list">
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 6"
        >
        <a href="/#en"><h2>Home</h2></a>
        </li>

        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 5"
        >
          <a href="/about/#en"><h2>About Me</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 4"
        >
          <a href="/skills/#en"><h2>My Skills</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 3"
        >
          <a href="/experience/#en"><h2>Expreience</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 2"
        >
          <a href="/projects/#en"><h2>My Projects</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 1"
        >
          <a href="/hire/#en"><h2>Buy me a coffee</h2></a>
        </li>
      </ul>
    </nav>

    <div class="container__cube-menu__socials">
      <ul class="container__cube-menu__socials-list">
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-brands fa-github"></i>
          <span
            ><a
              href="https://github.com/lord-kraze"
              target="blank"
              rel="noopener noreferrer"
            >
              lord-kraze</a
            ></span
          >
        </li>
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-brands fa-linkedin-in"></i>
          <span
            ><a
              href="https://www.linkedin.com/in/okusindja-rodrigues-de-almeida-9b9186227/"
              target="blank"
              rel="noopener noreferrer"
            >
              Okusindja de Almeida</a
            ></span
          >
        </li>
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-solid fa-at"></i>
          <span
            ><a
              href="okusindja@gmail.com"
              target="blank"
              rel="noopener noreferrer"
            >
              okusindja@gmail.com
            </a></span
          >
        </li>
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-brands fa-whatsapp"></i>
          <span
            ><a
              href="tel:+244956035826"
              target="blank"
              rel="noopener noreferrer"
            >
              +244-956035826
            </a></span
          >
        </li>
      </ul>
    </div>`,
    },
    pt: {
      navBoxes: `
    <nav class="container__cube-menu__nav">
      <ul class="container__cube-menu__nav__nav-list">
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 6"
        >
        <a href="/#pt"><h2>Início</h2></a>
        </li>

        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 5"
        >
          <a href="/about/#pt"><h2>Sobre mim</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 4"
        >
          <a href="/skills/#pt"><h2>Habilidades</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 3"
        >
          <a href="/experience/#pt"><h2>Experiência</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 2"
        >
          <a href="/projects/#pt"><h2>Projectos</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 1"
        >
          <a href="/hire/#pt"><h2>Me contrate</h2></a>
        </li>
      </ul>
    </nav>

    <div class="container__cube-menu__socials">
      <ul class="container__cube-menu__socials-list">
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-brands fa-github"></i>
          <span
            ><a
              href="https://github.com/lord-kraze"
              target="blank"
              rel="noopener noreferrer"
            >
              lord-kraze</a
            ></span
          >
        </li>
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-brands fa-linkedin-in"></i>
          <span
            ><a
              href="https://www.linkedin.com/in/okusindja-rodrigues-de-almeida-9b9186227/"
              target="blank"
              rel="noopener noreferrer"
            >
              Okusindja de Almeida</a
            ></span
          >
        </li>
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-solid fa-at"></i>
          <span
            ><a
              href="okusindja@gmail.com"
              target="blank"
              rel="noopener noreferrer"
            >
              okusindja@gmail.com
            </a></span
          >
        </li>
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-brands fa-whatsapp"></i>
          <span
            ><a
              href="tel:+244956035826"
              target="blank"
              rel="noopener noreferrer"
            >
              +244-956035826
            </a></span
          >
        </li>
      </ul>
    </div>`,
    },
  };

  window.location.hash === "#pt"
    ? (cubeMenuContainer.innerHTML = html.pt.navBoxes)
    : (cubeMenuContainer.innerHTML = html.en.navBoxes);
}
