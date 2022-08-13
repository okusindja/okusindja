let lang = {
  en: {
    myHomePage: `<div id="home" class="container__content__page">
    <div class="container__content__page__body">
      <h1 id="name" class="full-name">
        I am <br />
        Okusindja <br />
        de Almeida
      </h1>
    </div>
    <div class="container__content__page__cool-message">
      <span>I have something cool to show you :)</span>
    </div>
  </div>`,

    aboutMePage: `
    <div id="about" class="container__content__page">
    <div class="container__content__page__body">
      <div class="container__content__page__body__information">
        <h3 class="container__content__page__body__information__title">Who am I?</h3>
        <article class="container__content__page__body__information__body-text">
          Hello there, my name is Okusindja, but you can call me by my
          nickname "Kussy", I'm a young angolan guy seeking for better
          opportunities in my <b>Frontend</b> career. I studied in Angola,
          in ISPTEC - Instituto Superior Politécnico de Tecnologias E
          Ciências, in IT Engineering Course. I love coding and studying
          new technologies, and discuss theology, philosophy, and I am a
          book writer.
        </article>
      </div>
    </div>
  </div>
    `,
    mySkillsPage: `<div id="skills" class="container__content__page">
    <div class="container__content__page__body">
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
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 3"
          >
            <span><i class="fa-brands fa-css3-alt"></i> CSS3 96%</span>
            <div
              class="skill-liquid"
              style="--stat: 96%; --color: #5caae9"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
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
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 2"
          >
            <span><i class="fa-brands fa-html5"></i> HTML5 94%</span>
            <div
              class="skill-liquid"
              style="--stat: 94%; --color: #de8261"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
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
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 1"
          >
            <span><i class="fa-brands fa-js-square"></i> JS 56%</span>
            <div
              class="skill-liquid"
              style="--stat: 56%; --color: #e4c766"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
          </div>
        </li>

        <li>
          <div class="speech-bubble">
            <span
              >Knowing about version control using GIT commands and
              familiarity with a several agile methodologies that have the
              same basic principles as GIT. For repositories, I can use BitBucket,
              GitHub and GitLab</span
            >
          </div>
          <div
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 1"
          >
            <span><i class="fa-brands fa-git-alt"></i> GIT 86%</span>
            <div
              class="skill-liquid"
              style="--stat: 86%; --color: #c26340"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
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
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 1"
          >
            <span><i class="fa-brands fa-react"></i> REACTJS 55%</span>
            <div
              class="skill-liquid"
              style="--stat: 55%; --color: #365a8d"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
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
            class="container__content__page__body__information container__content__page__body__information--to-card"
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
            <div class="container__content__page__body__information__stat"></div>
          </div>
        </li>
      </ul>
    </div>
    <span class="skills-user-hint"
            >Tap on my skills, Am I that good?</span
          >
    <div class="container__content__page__cool-message">
      <span>Hover on my skills, Am I that good?</span>
    </div>
  </div>`,
    myExperience: `
  <div id="experience" class="container__content__page">
        <div class="container__content__page__body">
          <div class="container__content__page__body__information">
            <h3 class="container__content__page__body__information__title">
              What's my experience?
            </h3>
            <article class="container__content__page__body__information__body-text">
              <b>2021-Current:</b> NSDev as Junior Frontend Developer. Working
              mainly with JavaScript, HTML, CSS and ReactJS as main Framework.
              <br />
              <b>2021-Current:</b> FRN Cubo as Evolution Team Frontend Dev
              Member, and I'm fixing bugs, analying data and writting the best
              and cleanest code as possible, using Mainly VTEX CMS, Vtex IO
              and Vanilla JavaScript.
              <br />
              <b>2018-2021:</b>. Freelancer as Fullstack Web Dev and UI/UX
              Designer, using every trend technology in the market such as
              Angular 9, ReactJS, MySQL, etc, but mainly using JavaScript as
              the base language.
            </article>
          </div>
        </div>
      </div>
  `,
    myProjectsPage: `
  <div id="projects" class="container__content__page">
          <div class="container__content__page__body">
            <div class="container__content__page__body__information">
              <h3 class="container__content__page__body__information__title">
                My Projects
              </h3>
              <article class="container__content__page__body__information__body-text">
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
          <div class="container__content__page__cool-message">
            <span>These are my masterpieces! Check my GitHub</span>
          </div>
        </div>
  `,
    hireMePage: `
  <div id="hire" class="container__content__page">
          <div class="container__content__page__body">
            <div class="container__content__page__body__information">
              <h3 class="container__content__page__body__information__title">
                Interest in working with me?
              </h3>
              <article class="container__content__page__body__information__body-text">
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
          <div class="container__content__page__cool-message">
            <span>Hire me today, let's work on something cool!</span>
          </div>
        </div>
  `,
  },
  pt: {
    myHomePage: `<div id="home" class="container__content__page">
    <div class="container__content__page__body">
      <h1 id="name" class="full-name">
        Eu sou <br />
        Okusindja <br />
        de Almeida
      </h1>
    </div>
    <div class="container__content__page__cool-message">
      <span>Tenho algo interessante para você :)</span>
    </div>
  </div>`,
    aboutMePage: `
    <div id="about" class="container__content__page">
    <div class="container__content__page__body">
      <div class="container__content__page__body__information">
        <h3 class="container__content__page__body__information__title">Quem sou eu?</h3>
        <article class="container__content__page__body__information__body-text">
          Olá! Eu me chamo Okusindja, mas podes tratar-me pelo meu apelido
          "Kussy", Sou um jovem angolano à caça das melhores oportunidades para
          a minha carreira <b>Frontend Dev</b>. Eu estudei em Angola,
          no ISPTEC - Instituto Superior Politécnico de Tecnologias E
          Ciências, no curso de Engenharia Informática. Eu amo estudar e programar
          em novas tecnologias, discutir, teologia, filosofia e também sou escritor.
        </article>
      </div>
    </div>
  </div>
    `,
    mySkillsPage: `<div id="skills" class="container__content__page">
    <div class="container__content__page__body">
      <ul>
        <li>
          <div class="speech-bubble spread-pt spread-pt--md ">
            <span
              >Muito conhecimento de tecnologias de estilo, muita criatividade
              e grande mobilidade para Web Designing. Manuseio alguns Pré-processadores:
               SASS, Stylus, Less, Conhecimento naming
              convention utilizando o BEM, e muito mais!</span
            >
          </div>
          <div
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 3"
          >
            <span><i class="fa-brands fa-css3-alt"></i> CSS3 96%</span>
            <div
              class="skill-liquid"
              style="--stat: 96%; --color: #5caae9"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
          </div>
        </li>

        <li>
          <div class="speech-bubble">
            <span
              >Bom conhecimento de tags e atributos HTML, que me permitem criar websites
              mnemónicos com boa qualidade e sem prejudicar o SEO.</span
            >
          </div>
          <div
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 2"
          >
            <span><i class="fa-brands fa-html5"></i> HTML5 94%</span>
            <div
              class="skill-liquid"
              style="--stat: 94%; --color: #de8261"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
          </div>
        </li>

        <li>
          <div class="speech-bubble spread-pt">
            <span
              >Mergulhando no melhor que o JavaScript tem para oferecer, ES5 e ES6 em plenitude
              , no caminho de desenvolvimento para o nível Sênior. Abraçando novos desafios
               e anseiando pelas boas práticas para alcançar o mais alto nível de Clean Code.</span
            >
          </div>
          <div
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 1"
          >
            <span><i class="fa-brands fa-js-square"></i> JS 56%</span>
            <div
              class="skill-liquid"
              style="--stat: 56%; --color: #e4c766"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
          </div>
        </li>

        <li>
          <div class="speech-bubble spread-pt">
            <span
              >conhecimento em controlo de versões utilizando comandos do GIT e
              boa familiaridade com algumas das mais usadas metodologias ágeis
               que têm os mesmos princípios básicos que o Git. Consigo aceder e manipular
               repositórios com BitBucket, GitHub e GitLab</span
            >
          </div>
          <div
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 1"
          >
            <span><i class="fa-brands fa-git-alt"></i> GIT 86%</span>
            <div
              class="skill-liquid"
              style="--stat: 86%; --color: #c26340"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
          </div>
        </li>

        <li>
          <div class="speech-bubble spread-pt">
            <span
              >Aprendendo mais sobre essa biblioteca JS e desenvolvendo Apps com muita alegria.
              De momento esta é a principal biblioteca/Framework que uso no momento. Estou estudando
              sobre, e incluindo outras tecnologias que deixa tudo mais poderoso e produtivo
              , como NextJS e TypeScript.</span
            >
          </div>
          <div
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 1"
          >
            <span><i class="fa-brands fa-react"></i> REACTJS 55%</span>
            <div
              class="skill-liquid"
              style="--stat: 55%; --color: #365a8d"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
          </div>
        </li>

        <li>
          <div class="speech-bubble">
            <span
              >Figma, SCRUM, KANBAM, VTEX, Angular Framework, NodeJS, SQL,
              Adobe Illustrator, MVC, UML, Vanilla, Linux, Bootstrap,
              Excel, Firebase, JSX, POO, PowerShell, MySQL,
              Styled-Components, etc e etc.</span
            >
          </div>
          <div
            class="container__content__page__body__information container__content__page__body__information--to-card"
            style="--index: 1"
          >
            <span
              ><i class="fa-solid fa-diagram-project"></i> Outras Habilidades
              76%</span
            >
            <div
              class="skill-liquid"
              style="--stat: 76%; --color: #76d89c"
            ></div>
            <div class="container__content__page__body__information__stat"></div>
          </div>
        </li>
      </ul>
    </div>
    <span class="skills-user-hint"
            >Toque em uma habilidade, há qualidade?</span
          >
    <div class="container__content__page__cool-message">
      <span>Passe o mouse sobre as habilidades, há qualidade?</span>
    </div>
  </div>`,
    myExperience: `
    <div id="experience" class="container__content__page">
          <div class="container__content__page__body">
            <div class="container__content__page__body__information">
              <h3 class="container__content__page__body__information__title">
                Qual é a minha experiência?
              </h3>
              <article class="container__content__page__body__information__body-text">
                <b>2021-Current:</b> NSDev como Junior Frontend Developer. Trablhando
                principalmente com JavaScript, HTML, CSS e ReactJS Framework principal.
                <br />
                <b>2021-Current:</b> FRN Cubo como Membro do Team de Evolução, Frontend Dev
                , resolvo bugs, analiso código e dados, e escrendo o melhor e mais limpo
                código possível, usando principalmente: VTEX CMS, Vtex IO
                e Vanilla JavaScript.
                <br />
                <b>2018-2021:</b>. Freelancer como Fullstack Web Dev e UI/UX
                Designer, usando toda tecnologia de destaque do merca como:
                Angular 9, ReactJS, MySQL, etc, mas precisamente usando JavaScript como
                linguagem base.
              </article>
            </div>
          </div>
        </div>
    `,
    myProjectsPage: `
  <div id="projects" class="container__content__page">
          <div class="container__content__page__body">
            <div class="container__content__page__body__information">
              <h3 class="container__content__page__body__information__title">
                Meus Projectos
              </h3>
              <article class="container__content__page__body__information__body-text">
                Maior parte dos meus projectos são totalmente privados, e a menor parte deles
                são públicos, De momento dou mais atenção aos projectos pessoais,
                 portanto tenho alguns projectos inacabados, mas não sairás deste portfólio
                 sem ver nada de jeito haha. Alguns dos meus projectos públicos
                 estão no meu perfil do GitHub, mas consigo te mostrar alguns como:
                <b
                  ><a
                    href="https://d-candies.netlify.app/"
                    target="blank"
                    rel="noopener noreferrer"
                    >D Candies (só mobile de momento)</a
                  ></b
                >; Tenho também:
                <b
                  ><a
                    href="http://bukkis.netlify.com"
                    target="blank"
                    rel="noopener noreferrer"
                    >Bukkis (só mobile de momento)</a
                  ></b
                >
                Já trabalhei em um projecto comunitário como:
                <b
                  ><a
                    href="https://covidango.web.app/"
                    target="blank"
                    rel="noopener noreferrer"
                    >CovidAngo</a
                  ></b
                >. Estes são alguns projectos que estou seguro em mostrar... Mas prometo
                que muitos virão em breve! =)
              </article>
            </div>
          </div>
        </div>
  `,
    hireMePage: `
  <div id="hire" class="container__content__page">
          <div class="container__content__page__body">
            <div class="container__content__page__body__information">
              <h3 class="container__content__page__body__information__title">
                Gostaria de trabalhar comigo?
              </h3>
              <article class="container__content__page__body__information__body-text">
                Você pode me mandar uma mensagem hoje, para conversarmos sobre tecnologia e
                começarmos a trabalhar juntos, vamos criar obras para conquistar!
                <br />
                Entre em contacto comigo:
                <b
                  ><a href="tel:00244956035826"
                    >Meu terminal telefónico de Angola (Whatsapp e iMessage)</a
                  ></b
                >; Ou:
                <b><a href="okusindja@gmail.com">Meu email</a></b>
                Ou também podes visitar:
                <b
                  ><a
                    href="linkedin.com"
                    target="blank"
                    rel="noopener noreferrer"
                    >Meu Linkedin</a
                  ></b
                >. Mande uma menssagem, tu compras o café, eu trago as bolinhas de berlim =)
              </article>
            </div>
          </div>
          <div class="container__content__page__cool-message">
            <span>Contrate-me hoje, Vamos trabalhar em algo bom!</span>
          </div>
        </div>
  `,
  },
};

export function manageLanguages() {
  let homePage = document.querySelector("#home");
  let aboutPage = document.querySelector("#about");
  let skillsPage = document.querySelector("#skills");
  let experiencePage = document.querySelector("#experience");
  let projectsPage = document.querySelector("#projects");
  let hirePage = document.querySelector("#hire");
  let languageMenu = `
  <div class="container__lang-list">
    <a href="#en" data-reload class="container__lang-list__item container__lang-list__item--active">EN</a>
    <a href="#pt" data-reload class="container__lang-list__item">PT</a>
  </div>
    `;
  let container = document.querySelector(".container__content");
  let menuItems = document.querySelectorAll(
    ".container__cube-menu__nav-list__item a"
  );
  container.insertAdjacentHTML("afterend", languageMenu);

  if (window.location.hash === "#pt") {
    menuItems.forEach((menuItem) => {
      let actualRef = menuItem.getAttribute;
      menuItem.setAttribute("href", actualRef + "#pt");
    });
    if (homePage) {
      container.innerHTML = lang.pt.myHomePage;
    } else if (aboutPage) {
      container.innerHTML = lang.pt.aboutMePage;
    } else if (skillsPage) {
      container.innerHTML = lang.pt.mySkillsPage;
    } else if (experiencePage) {
      container.innerHTML = lang.pt.myExperience;
    } else if (projectsPage) {
      container.innerHTML = lang.pt.myProjectsPage;
    } else if (hirePage) {
      container.innerHTML = lang.pt.hireMePage;
    }
  }
  let languages = document.querySelectorAll(
    "[data-reload].container__lang-list__item"
  );
  languages.forEach((language) => {
    language.addEventListener("click", ({ target }) => {
      window.location.hash = target.getAttribute("href");
      location.reload(true);
    });
  });
}
