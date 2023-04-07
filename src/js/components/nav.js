export function buildNav() {
  let cubeMenuContainer = document.querySelector(".container__cube-menu");
  let menuMobileOpenButton = document.querySelector(".fa-bars");
  let menuMobileCloseButton = document.querySelector(".fa-times");
  let containerContent = document.querySelector(".container__content");
  let backgroundToggle = document.querySelector(".container");

  let html = {
    en: {
      navBoxes: `<nav class="container__cube-menu__nav">
      <ul class="container__cube-menu__nav-list">
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 6"
        >
        <a href="/" title="Home"><h2>Home</h2></a>
        </li>

        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 5"
        >
          <a href="/about/" title="Read more about me"><h2>About Me</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 4"
        >
          <a href="/skills/" title="Some of my skills"><h2>My Skills</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 3"
        >
          <a href="/experience/" title="Some of my experience in the market"><h2>Experience</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 2"
        >
          <a href="/projects/" title="Some of my projects"><h2>My Projects</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 1"
        >
          <a href="/hire/" title="Hire me today"><h2>Contract me</h2></a>
        </li>
      </ul>
    </nav>

    <div class="container__cube-menu__socials">
      <ul class="container__cube-menu__socials-list">
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-brands fa-github"></i>
          <span
            ><a
              href="https://github.com/okusindja"
              target="blank"
              rel="noopener noreferrer"
            >
              okusindja</a
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
        <li class="container__cube-menu__socials-list__item">
              <i class="fa-solid fa-clipboard-user"></i>
              <span
                ><a
                  href="https://doc-08-98-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/i1h2kbpta23kucj9vt6u5jm59qv4fa94/1jht2f7hk08e9skf9d6jlo8gjs8rc4qp/1680888000000/3/110869512765744014261/APznzabpzHyTvXLb12wHyLYDoLVNXfXv3Kq7cMwbTy3B5OOV-O-dSJkqxW84_Zfo51cKisXLQpMuV8-rY3__7uKvPty1CjdQy4xWPrLEaUbL1N1XgBbomVWPaNSxgy_SAZ_Z7oUTWLc0DYbyD9CgaT68S-QWrqu-XHCeoVMKwR5qvT-uXKDLeJ4A61LbuSfhCXQTR5RipqGdpd6jB6L40IBCiyv91WkoMNdrJJVfKtyv5tq07FiIhDXZdVMFju-q2QbAkzuHa2RovbPK2ehNFNUSPk62I9ggCZGPvpZkis-xqZ6RAjbUvmUBc-4spRtKyJxlE6f5XTNS-eh3KTkAMPBzoP9qLiEvjgguDmMxPRzaxja9YVzhxhclCWUqpwx4ChkfakX1kDF9iwBksHIM3numVTRvv5NnsA==?authuser=0&nonce=5c8d18l3jc0mg&user=110869512765744014261&hash=0jluq31crdfsicq78vdc3t1ske3r13p3"
                  target="blank"
                  rel="noopener noreferrer"
                >
                Download CV
                </a></span
              >
            </li>
      </ul>
    </div>`,
    },

    pt: {
      navBoxes: `
    <nav class="container__cube-menu__nav">
      <ul class="container__cube-menu__nav-list">
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 6"
        >
        <a href="/#pt" title="Página Inicial"><h2>Início</h2></a>
        </li>

        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 5"
        >
          <a href="/about/#pt" title="Leia mais sobre mim"><h2>Sobre mim</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 4"
        >
          <a href="/skills/#pt" title="Algumas das minhas habilidades"><h2>Habilidades</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 3"
        >
          <a href="/experience/#pt"  title="A minha experiência no mercado"><h2>Experiência</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 2"
        >
          <a href="/projects/#pt"  title="Alguns projectos meus e participações"><h2>Projectos</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
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
              href="https://github.com/okusindja"
              target="blank"
              rel="noopener noreferrer"
            >
              okusindja</a
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
        <li class="container__cube-menu__socials-list__item">
              <i class="fa-solid fa-clipboard-user"></i>
              <span
                ><a
                  href="https://doc-08-98-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/i1h2kbpta23kucj9vt6u5jm59qv4fa94/1jht2f7hk08e9skf9d6jlo8gjs8rc4qp/1680888000000/3/110869512765744014261/APznzabpzHyTvXLb12wHyLYDoLVNXfXv3Kq7cMwbTy3B5OOV-O-dSJkqxW84_Zfo51cKisXLQpMuV8-rY3__7uKvPty1CjdQy4xWPrLEaUbL1N1XgBbomVWPaNSxgy_SAZ_Z7oUTWLc0DYbyD9CgaT68S-QWrqu-XHCeoVMKwR5qvT-uXKDLeJ4A61LbuSfhCXQTR5RipqGdpd6jB6L40IBCiyv91WkoMNdrJJVfKtyv5tq07FiIhDXZdVMFju-q2QbAkzuHa2RovbPK2ehNFNUSPk62I9ggCZGPvpZkis-xqZ6RAjbUvmUBc-4spRtKyJxlE6f5XTNS-eh3KTkAMPBzoP9qLiEvjgguDmMxPRzaxja9YVzhxhclCWUqpwx4ChkfakX1kDF9iwBksHIM3numVTRvv5NnsA==?authuser=0&nonce=5c8d18l3jc0mg&user=110869512765744014261&hash=0jluq31crdfsicq78vdc3t1ske3r13p3"
                  target="blank"
                  rel="noopener noreferrer"
                >
                Baixar CV
                </a></span
              >
            </li>
      </ul>
    </div>
    `,
    },

    fr: {
      navBoxes: `
    <nav class="container__cube-menu__nav">
      <ul class="container__cube-menu__nav-list">
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 6"
        >
        <a href="/#fr" title="Page d'accueil"><h2>Page d'accueil</h2></a>
        </li>

        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 5"
        >
          <a href="/about/#fr" title="En savoir plus sur moi"><h2>À propos de moi</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 4"
        >
        <a href="/skills/#fr" title="Certaines de mes compétences"><h2>Compétences</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 3"
        >
        <a href="/experience/#fr" title="Mon expérience sur le marché"><h2>Expérience</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 2"
        >
        <a href="/projects/#fr" title="Certains de mes projets et participations"><h2>Projets</h2></a>
        </li>
        <li
          class="container__cube-menu__nav-list__item"
          style="--index: 1"
        >
        <a href="/hire/#fr" title="Engagez-moi aujourd'hui et discutons"><h2>Engagez-moi</h2></a>
        </li>
      </ul>
    </nav>

    <div class="container__cube-menu__socials">
      <ul class="container__cube-menu__socials-list">
        <li class="container__cube-menu__socials-list__item">
          <i class="fa-brands fa-github"></i>
          <span
            ><a
              href="https://github.com/okusindja"
              target="blank"
              rel="noopener noreferrer"
            >
              okusindja</a
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
        <li class="container__cube-menu__socials-list__item">
              <i class="fa-solid fa-clipboard-user"></i>
              <span
                ><a
                  href="https://doc-08-98-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/i1h2kbpta23kucj9vt6u5jm59qv4fa94/1jht2f7hk08e9skf9d6jlo8gjs8rc4qp/1680888000000/3/110869512765744014261/APznzabpzHyTvXLb12wHyLYDoLVNXfXv3Kq7cMwbTy3B5OOV-O-dSJkqxW84_Zfo51cKisXLQpMuV8-rY3__7uKvPty1CjdQy4xWPrLEaUbL1N1XgBbomVWPaNSxgy_SAZ_Z7oUTWLc0DYbyD9CgaT68S-QWrqu-XHCeoVMKwR5qvT-uXKDLeJ4A61LbuSfhCXQTR5RipqGdpd6jB6L40IBCiyv91WkoMNdrJJVfKtyv5tq07FiIhDXZdVMFju-q2QbAkzuHa2RovbPK2ehNFNUSPk62I9ggCZGPvpZkis-xqZ6RAjbUvmUBc-4spRtKyJxlE6f5XTNS-eh3KTkAMPBzoP9qLiEvjgguDmMxPRzaxja9YVzhxhclCWUqpwx4ChkfakX1kDF9iwBksHIM3numVTRvv5NnsA==?authuser=0&nonce=5c8d18l3jc0mg&user=110869512765744014261&hash=0jluq31crdfsicq78vdc3t1ske3r13p3"
                  target="blank"
                  rel="noopener noreferrer"
                >
                Télécharger CV
                </a></span
              >
            </li>
      </ul>
    </div>
    `,
    },
  };

  menuMobileOpenButton.addEventListener("click", ({ target }) => {
    target.style.display = "none";
    cubeMenuContainer.style.display = "flex";
    menuMobileCloseButton.style.display = "block";
    containerContent.style.display = "none";
    backgroundToggle.style.background = "#404059";
  });

  menuMobileCloseButton.addEventListener("click", ({ target }) => {
    target.style.display = "none";
    cubeMenuContainer.style.display = "none";
    menuMobileOpenButton.style.display = "block";
    containerContent.style.display = "block";
    backgroundToggle.style.background = "radial-gradient(#e66465, #9198e5)";
  });

  if (window.location.hash === "#pt") {
    cubeMenuContainer.innerHTML = html.pt.navBoxes;
  } else if (window.location.hash === "#en"){
    cubeMenuContainer.innerHTML = html.en.navBoxes;
  } else if (window.location.hash === "#fr") {
    cubeMenuContainer.innerHTML = html.fr.navBoxes;
  }
}
