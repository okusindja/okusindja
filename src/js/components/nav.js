export function buildNav() {
  let cubeMenuContainer = document.querySelector(".container__cube-menu");
  let cubeMenuContainerMobile = document.querySelector(
    ".container__cube-menu--mobile"
  );

  let html = {
    en: {
      navBoxes: `<nav class="container__cube-menu__nav">
      <ul class="container__cube-menu__nav__nav-list">
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 6"
        >
        <a href="/#en" title="Home"><h2>Home</h2></a>
        </li>

        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 5"
        >
          <a href="/about/#en" title="Read more about me"><h2>About Me</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 4"
        >
          <a href="/skills/#en" title="Some of my skills"><h2>My Skills</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 3"
        >
          <a href="/experience/#en" title="Some of my experience in the market"><h2>Experience</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 2"
        >
          <a href="/projects/#en" title="Some of my projects"><h2>My Projects</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 1"
        >
          <a href="/hire/#en" title="Hire me today"><h2>Buy me a coffee</h2></a>
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
              href="https://www.linkedin.com/in/okusindja-rodrigues-de-almeida"
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
        <a href="/#pt" title="Página Inicial"><h2>Início</h2></a>
        </li>

        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 5"
        >
          <a href="/about/#pt" title="Leia mais sobre mim"><h2>Sobre mim</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 4"
        >
          <a href="/skills/#pt" title="Algumas das minhas habilidades"><h2>Habilidades</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 3"
        >
          <a href="/experience/#pt"  title="A minha experiência no mercado"><h2>Experiência</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 2"
        >
          <a href="/projects/#pt"  title="Alguns projectos meus e participações"><h2>Projectos</h2></a>
        </li>
        <li
          class="container__cube-menu__nav__nav-list__item"
          style="--index: 1"
        >
          <a href="/hire/#pt"  title="Contrate-me hoje e vamos conversar"><h2>Me contrate</h2></a>
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
              href="https://www.linkedin.com/in/okusindja-rodrigues-de-almeida"
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
    </div>
    `,
    },
  };

  let menuMobileOpenButton = document.querySelector(".fa-bars");
  let menuMobileCloseButton = document.querySelector(".fa-times");
  let menuMobileContainer = document.querySelector(
    ".container__cube-menu--mobile__menu-list"
  );

  if (menuMobileOpenButton) {
    menuMobileOpenButton.addEventListener("click", () => {
      menuMobileCloseButton.style.display = "block";
      menuMobileContainer.style.display = "flex";
      menuMobileOpenButton.style.display = "none";
    });
  }
  if (menuMobileCloseButton && menuMobileContainer) {
    menuMobileCloseButton.addEventListener("click", () => {
      menuMobileCloseButton.style.display = "none";
      menuMobileContainer.style.display = "none";
      menuMobileOpenButton.style.display = "block";
    });
  }

  if (window.location.hash === "#pt") {
    cubeMenuContainer.innerHTML = html.pt.navBoxes;
    menuMobileContainer.innerHTML = html.pt.navBoxes;
  } else {
    cubeMenuContainer.innerHTML = html.en.navBoxes;
    menuMobileContainer.innerHTML = html.en.navBoxes;
  }
}
