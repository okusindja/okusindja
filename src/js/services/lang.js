export function manageLanguages() {
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
              <span><i class="fa-brands fa-js-square"></i> JS 69%</span>
              <div
                class="skill-liquid"
                style="--stat: 69%; --color: #e4c766"
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
              <span><i class="fa-brands fa-react"></i> REACTJS 72%</span>
              <div
                class="skill-liquid"
                style="--stat: 72%; --color: #365a8d"
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
                <b>2023:</b> Interest Protocol as a Frontend Developer. Working
                with Nextjs and TypeScript to deliver the best interfaces in the crypto market.
                <br />
                <b>2021-2022:</b> NSDev as a Frontend Developer. Working
                mainly with JavaScript, HTML, CSS and ReactJS as main Framework.
                <br />
                <b>2021-2022:</b> FRN Cubo as Evolution Team Frontend Dev
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
                of them are public and I just participated on their development, so you won't
                leave this portfolio without seeing nothing haha. Some of projects I worked on are:
                  <b
                  ><a
                    href="https://br.diesel.com"
                    target="blank"
                    rel="noopener noreferrer"
                    >Diesel</a
                  ></b
                >;

                  <b
                  ><a
                    href="https://sestini.com.br"
                    target="blank"
                    rel="noopener noreferrer"
                    >Sestini</a
                  ></b
                >;

                  <b
                  ><a
                    href="https://catlifestyle.com.br"
                    target="blank"
                    rel="noopener noreferrer"
                    >Caterpillar</a
                  ></b
                >;

                  <b
                  ><a
                    href="https://loja.panasonic.com.br"
                    target="blank"
                    rel="noopener noreferrer"
                    >Panasonic</a
                  ></b
                >;
<b
                  ><a
                    href="https://fujioka.com.br"
                    target="blank"
                    rel="noopener noreferrer"
                    >Fujioka</a
                  ></b
                >; <b
                  ><a
                    href="https://hangloose.com.br"
                    target="blank"
                    rel="noopener noreferrer"
                    >Hang Loose</a
                  ></b
                >; <b
                ><a
                  href="https://hurley.com.br"
                  target="blank"
                  rel="noopener noreferrer"
                  >Hurley</a
                ></b
              >; <b
              ><a
                href="https://kipling.com.br"
                target="blank"
                rel="noopener noreferrer"
                >Kipling</a
              ></b
            >; <b
            ><a
              href="https://targus.com.br"
              target="blank"
              rel="noopener noreferrer"
              >Targus</a
            ></b
          > And +30 projects I get involved on! You can see it on my Linkedin in experiences section: <b
                  ><a
                    href="https://www.linkedin.com/in/okusindja-rodrigues-de-almeida"
                    target="blank"
                    rel="noopener noreferrer"
                    >My Linkedin</a
                  ></b
                >
                And I'm proud to say that I joined in a communitary project like:
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
                  >. Send me a message, so you can Contract me, I'll bring the
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
              <span><i class="fa-brands fa-js-square"></i> JS 69%</span>
              <div
                class="skill-liquid"
                style="--stat: 69%; --color: #e4c766"
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
                É a principal biblioteca/Framework que uso no momento. Estudando
                sobre, e incluindo outras tecnologias que deixam tudo mais poderoso e produtivo
                , como NextJS e TypeScript.</span
              >
            </div>
            <div
              class="container__content__page__body__information container__content__page__body__information--to-card"
              style="--index: 1"
            >
              <span><i class="fa-brands fa-react"></i> REACTJS 72%</span>
              <div
                class="skill-liquid"
                style="--stat: 72%; --color: #365a8d"
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
                Styled-Components, Web GL e ThreeJS etc e etc.</span
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
                <b>2023:</b> Interest Protocol: como Desenvolvedor Frontend. Trabalhando com Nextjs
                 e TypeScript para fornecer as melhores interfaces no mercado de criptomoedas. <br />
                  <b>2021-2022:</b> NSDev como um Frontend Developer. Trablhando
                  principalmente com JavaScript, HTML, CSS e ReactJS Framework principal.
                  <br />
                  <b>2021-2022:</b> FRN Cubo como Membro do Team de Evolução, Frontend Dev
                  , resolvi bugs, analisei código e dados, refatoração de código e escrevi o melhor e mais limpo
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
                  Maior parte dos meus projectos pessoais são totalmente privados, e a parte deles
                  são públicos, participei no desenvolvimento de alguns, mas não sairás deste portfólio
                   sem ver nada de jeito haha. Consigo mostrar-te alguns como:
                   <b
                   ><a
                     href="https://br.diesel.com"
                     target="blank"
                     rel="noopener noreferrer"
                     >Diesel</a
                   ></b
                 >;
 
                   <b
                   ><a
                     href="https://sestini.com.br"
                     target="blank"
                     rel="noopener noreferrer"
                     >Sestini</a
                   ></b
                 >;
 
                   <b
                   ><a
                     href="https://catlifestyle.com.br"
                     target="blank"
                     rel="noopener noreferrer"
                     >Caterpillar</a
                   ></b
                 >;
 
                   <b
                   ><a
                     href="https://loja.panasonic.com.br"
                     target="blank"
                     rel="noopener noreferrer"
                     >Panasonic</a
                   ></b
                 >;
 <b
                   ><a
                     href="https://fujioka.com.br"
                     target="blank"
                     rel="noopener noreferrer"
                     >Fujioka</a
                   ></b
                 >; <b
                   ><a
                     href="https://hangloose.com.br"
                     target="blank"
                     rel="noopener noreferrer"
                     >Hang Loose</a
                   ></b
                 >; <b
                 ><a
                   href="https://hurley.com.br"
                   target="blank"
                   rel="noopener noreferrer"
                   >Hurley</a
                 ></b
               >; <b
               ><a
                 href="https://kipling.com.br"
                 target="blank"
                 rel="noopener noreferrer"
                 >Kipling</a
               ></b
             >; <b
             ><a
               href="https://targus.com.br"
               target="blank"
               rel="noopener noreferrer"
               >Targus</a
             ></b
           > E +30 projectos onde estive envolvido! Veja o restante no meu linkedin na secção de experiências: <b
                   ><a
                     href="https://www.linkedin.com/in/okusindja-rodrigues-de-almeida"
                     target="blank"
                     rel="noopener noreferrer"
                     >Meu Linkedin</a
                   ></b
                 >
                 E orgulho-me em dizer que participei em um projecto comunitário como:
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
    fr: {
      myHomePage: `
        <div id="home" class="container__content__page">
          <div class="container__content__page__body">
            <h1 id="name" class="full-name">
              Je suis <br />
              Okusindja <br />
              de Almeida
            </h1>
          </div>
          <div class="container__content__page__cool-message">
            <span>J'ai quelque chose de cool à vous montrer :)</span>
          </div>
        </div>
      `,
      aboutMePage: `
      <div id="about" class="container__content__page">
      <div class="container__content__page__body">
        <div class="container__content__page__body__information">
          <h3 class="container__content__page__body__information__title">Qui suis-je?</h3>
          <article class="container__content__page__body__information__body-text">
            Bonjour, je m'appelle Okusindja, mais vous pouvez m'appeler par
            mon surnom "Kussy". Je suis un jeune Angolais à la recherche de
            meilleures opportunités dans ma carrière de <b>Frontend</b>. J'ai étudié en Angola,
            à l'ISPTEC - Instituto Superior Politécnico de Tecnologias E
            Ciências, dans le cours d'ingénierie informatique. J'adore coder et étudier
            de nouvelles technologies, et discuter de théologie, de philosophie et je suis un
            écrivain de livre.
          </article>
        </div>
      </div>
    </div>
    `,
      mySkillsPage: `
      <div id="skills" class="container__content__page">
      <div class="container__content__page__body">
        <ul>
          <li>
            <div class="speech-bubble">
              <span
                >Bonne familiarité avec les styles, beaucoup de créativité
                et grande mobilité pour le Web Design. Maîtrise de certains préprocesseurs :
                SASS, Stylus, Less, connaissance de la convention de nommage utilisant BEM, et bien plus encore !</span
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
                >Bonne connaissance des balises et des attributs HTML5, ce qui me permet de développer 
                des applications avec un bon référencement SEO.</span
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
                >Apprentissage approfondi de Javascript, ES5 et ES6 pour atteindre le niveau Senior. 
                J'embrasse les nouveaux défis et recherche les meilleures pratiques pour atteindre le niveau 
                divin du code propre.</span
              >
            </div>
            <div
              class="container__content__page__body__information container__content__page__body__information--to-card"
              style="--index: 1"
            >
              <span><i class="fa-brands fa-js-square"></i> JS 69%</span>
              <div
                class="skill-liquid"
                style="--stat: 69%; --color: #e4c766"
              ></div>
              <div class="container__content__page__body__information__stat"></div>
            </div>
          </li>
  
          <li>
            <div class="speech-bubble">
              <span
                >Connaissance de la gestion de versions à l'aide des commandes GIT et familiarité avec plusieurs méthodologies 
                agiles qui ont les mêmes principes de base que GIT. Pour les dépôts, je peux utiliser BitBucket, 
                GitHub et GitLab.</span
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
                >Développement d'applications avec ReactJS et d'autres technologies complémentaires 
                pour maximiser la productivité, telles que NextJS et Typescript.</span
              >
            </div>
            <div
              class="container__content__page__body__information container__content__page__body__information--to-card"
              style="--index: 1"
            >
              <span><i class="fa-brands fa-react"></i> REACTJS 72%</span>
              <div
                class="skill-liquid"
                style="--stat: 72%; --color: #365a8d"
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
                Styled-Components, etc et etc.</span
              >
            </div>
            <div
              class="container__content__page__body__information container__content__page__body__information--to-card"
              style="--index: 1"
            >
              <span
                ><i class="fa-solid fa-diagram-project"></i> AUTRES COMPÉTENCES
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
              >Appuyez sur mes compétences, suis-je si bon ?</span
            >
      <div class="container__content__page__cool-message">
        <span>Survolez mes compétences, suis-je si bon ?</span>
      </div>
    </div>
      `,
      myExperience: `
      <div id="experience" class="container__content__page">
      <div class="container__content__page__body">
        <div class="container__content__page__body__information">
          <h3 class="container__content__page__body__information__title">
            Quelle est mon expérience?
          </h3>
          <article class="container__content__page__body__information__body-text">
            <b>2023 :</b> Interest Protocol: en tant que Développeur Frontend. Travaillant avec Nextjs et TypeScript pour offrir les meilleures interfaces sur le marché de la crypto. <br />
            <b>2021-2022:</b> NSDev en tant que développeur Frontend. Travaillant principalement avec JavaScript, HTML, CSS et ReactJS comme principal Framework.
            <br />
            <b>2021-2022:</b> FRN Cubo en tant que membre de l'équipe d'évolution Frontend, et je résous des bugs, analyse des données et écris le meilleur et le plus propre code possible, en utilisant principalement VTEX CMS, Vtex IO et Vanilla JavaScript.
            <br />
            <b>2018-2021:</b> Freelance en tant que développeur Web Fullstack et designer UI/UX, utilisant toutes les technologies tendances sur le marché telles que Angular 9, ReactJS, MySQL, etc., mais principalement en utilisant JavaScript comme langage de base.
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
            Mes projets
          </h3>
          <article class="container__content__page__body__information__body-text">
          La plupart de mes projets sont entièrement privés et une partie d'entre eux sont publics auxquels 
          j'ai seulement participé au développement. Donc, vous ne quitterez pas ce portfolio sans rien 
          voir haha. Certains des projets sur lesquels j'ai travaillé sont :
            <b
            ><a
              href="https://br.diesel.com"
              target="blank"
              rel="noopener noreferrer"
              >Diesel</a
            ></b
          >;

            <b
            ><a
              href="https://sestini.com.br"
              target="blank"
              rel="noopener noreferrer"
              >Sestini</a
            ></b
          >;

            <b
            ><a
              href="https://catlifestyle.com.br"
              target="blank"
              rel="noopener noreferrer"
              >Caterpillar</a
            ></b
          >;

            <b
            ><a
              href="https://loja.panasonic.com.br"
              target="blank"
              rel="noopener noreferrer"
              >Panasonic</a
            ></b
          >;
<b
            ><a
              href="https://fujioka.com.br"
              target="blank"
              rel="noopener noreferrer"
              >Fujioka</a
            ></b
          >; <b
            ><a
              href="https://hangloose.com.br"
              target="blank"
              rel="noopener noreferrer"
              >Hang Loose</a
            ></b
          >; <b
          ><a
            href="https://hurley.com.br"
            target="blank"
            rel="noopener noreferrer"
            >Hurley</a
          ></b
        >; <b
        ><a
          href="https://kipling.com.br"
          target="blank"
          rel="noopener noreferrer"
          >Kipling</a
        ></b
      >; <b
      ><a
        href="https://targus.com.br"
        target="blank"
        rel="noopener noreferrer"
        >Targus</a
      ></b
    > Et plus de 30 projets sur lesquels j'ai travaillé ! Vous pouvez les voir 
    sur mon profil LinkedIn, dans la section "Expériences". <b
            ><a
              href="https://www.linkedin.com/in/okusindja-rodrigues-de-almeida"
              target="blank"
              rel="noopener noreferrer"
              >My Linkedin</a
            ></b
          >
          Et je suis fier de dire que j'ai participé à un projet communautaire tel que:
          <b
            ><a
              href="https://covidango.web.app/"
              target="blank"
              rel="noopener noreferrer"
              >CovidAngo</a
            ></b
          >. Voici quelques-uns d'entre eux que je suis sûr de pouvoir vous montrer... 
          Mais il y en a d'autres à venir bientôt ! =)
          </article>
        </div>
      </div>
      <!--div class="container__content__page__cool-message">
        <span>Ce sont mes chefs-d'œuvre! Vérifiez mon GitHub.</span>
      </!--div>
    </div>
      `,
      hireMePage: `
      <div id="hire" class="container__content__page">
      <div class="container__content__page__body">
        <div class="container__content__page__body__information">
          <h3 class="container__content__page__body__information__title">
            Intéressé à travailler avec moi?
          </h3>
          <article class="container__content__page__body__information__body-text">
            Vous pouvez me contacter dès aujourd'hui, afin que nous puissions parler de technologie et 
            commencer à travailler ensemble. Créons quelque chose de nouveau et conquérons!
            <br />
            Contactez-moi via :
            <b
              ><a href="tel:00244956035826"
                >Mon numéro de téléphone d'Angola (Whatsapp et iMessage)</a
              ></b
            >; Ou :
            <b><a href="okusindja@gmail.com">Mon email</a></b>
            Vous pouvez également visiter :
            <b
              ><a
                href="linkedin.com"
                target="blank"
                rel="noopener noreferrer"
                >Mon profil Linkedin</a
              ></b
            >. Envoyez-moi un message pour me contracter, je vous apporterai des beignets =)
          </article>
        </div>
      </div>
      <div class="container__content__page__cool-message">
        <span>Engagez-moi maintenant, travaillons sur du cool !</span>
      </div>
    </div>
      `,
    },
  };

  let homePage = document.querySelector("#home");
  let aboutPage = document.querySelector("#about");
  let skillsPage = document.querySelector("#skills");
  let experiencePage = document.querySelector("#experience");
  let projectsPage = document.querySelector("#projects");
  let hirePage = document.querySelector("#hire");
  let languageMenu = `
  <div class="container__lang-list">
    <a href="#en" data-reload class="container__lang-list__item container__lang-list__item--active">EN</a>
    <a href="#pt" data-reload class="container__lang-list__item ">PT</a>
    <a href="#fr" data-reload class="container__lang-list__item">FR</a>
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
  } else if (window.location.hash === "#fr") {
    menuItems.forEach((menuItem) => {
      let actualRef = menuItem.getAttribute;
      menuItem.setAttribute("href", actualRef + "#fr");
    });

    if (homePage) {
      container.innerHTML = lang.fr.myHomePage;
    } else if (aboutPage) {
      container.innerHTML = lang.fr.aboutMePage;
    } else if (skillsPage) {
      container.innerHTML = lang.fr.mySkillsPage;
    } else if (experiencePage) {
      container.innerHTML = lang.fr.myExperience;
    } else if (projectsPage) {
      container.innerHTML = lang.fr.myProjectsPage;
    } else if (hirePage) {
      container.innerHTML = lang.fr.hireMePage;
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
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  turnContentIntoCardByHoveringOnText();
});
