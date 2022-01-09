export const RESUME =
  'https://drive.google.com/file/d/1eGdMg925taAFXOeO509YHS4X4eLlhsWt/view?usp=sharing';

const MADLIBS_DESCRIPTION = `Write out a full story that is processed into a format that will
            allow the one to keep track of "blanks". Whenever the user updates a
            blank in the edit view, it should update the preview any time a new
            character is typed.`;
const MADLIBS_TOOLS = `Vanilla JS, HTML, CSS, Git`;
const MADLIBS_LINKS = {
  repo: 'https://github.com/emrerdem1/MadLibs-Project',
  demo: 'https://madlibs-project.netlify.app/',
};

const BOARD_DESCRIPTION = `Build a ToDo Board that users can schedule their tasks. Users can
            create custom boards with unlimited amount of tasks within, move the
            position of boards freely, change tasks status by clicking and
            sorting boards to one's heart's content.`;
const BOARD_TOOLS = `ReactJS, Firebase, React-Bootstrap, Material UI, HTML, CSS, Git`;
const BOARD_LINKS = {
  repo: 'https://github.com/emrerdem1/ToDo-BoardProject',
  demo: 'https://todo-board-project.netlify.app/',
};

const MOVIE_DESCRIPTION = `Do the styling of Single Movie Page that is fetched from The Movie
            DB API and build functionalities to move from Movie Page to Actor
            Page with necessary fields getting filled. Do the search and sorting
            based on names, get recommendation and trailer section by using API.`;
const MOVIE_TOOLS = `Vanilla JS, Bootstrap, Postman, HTML, CSS, Git`;
const MOVIE_LINKS = {
  repo: 'https://github.com/emrerdem1/movie-website_w-API',
  demo: 'https://themoviedb-api.netlify.app/',
};

const PORTFOLIO_DESCRIPTION = `My playground that contains where I'm from and what my passions are as well as projects
from the little scaled ones I've worked on Front-End Developer Bootcamp to the ones I'm gonna develop that I'm proud of.`;
const PORTFOLIO_TOOLS = `ReactJS, Bootstrap, HTML, SCSS, Git`;
const PORTFOLIO_LINKS = {
  repo: 'https://github.com/emrerdem1/portfolio',
  demo: 'https://emrerdem.com/',
};

const ECOMMERCE_DESCRIPTION = `E-commerce website where users can sign-up, have access to their own profile pages,
do live searching, add items to shopping cart, read educational news and articles brought forth by Wordpress API.
The website is supported by dual language and aim to provide health related products and articles.`;
const ECOMMERCE_TOOLS = `ReactJS, Redux, Firebase, Wordpress API, i18next, React-Bootstrap, HTML, SCSS, Git`;
const ECOMMERCE_LINKS = {
  repo: 'https://github.com/emrerdem1/istanbul-capstone-ecommerce',
  demo: 'https://e-commerce-capstone.netlify.app/',
};

const TEETER_TOTTER_DESCRIPTION = `Balance teeter-totter according to the falling items. Produce dynamic weights, shapes and coordinates for both players. Calculate torque based on the size and coordinate. `;
const TEETER_TOTTER_TOOLS = `ReactJS, Redux, TypeScript, Emotion Styled Components, HTML, SCSS, Git`;
const TEETER_TOTTER_LINKS = {
  repo: 'https://github.com/emrerdem1/teeter-totter-game',
  demo: 'https://teeter-totter-game.netlify.app/',
};

const SIMPLE_UI_DESCRIPTION = `User should stay on the same page when localization changes. Navigating to a new page or going back should not change the language set. Logout button deletes "User Info" from site-wide/global state.`;
const SIMPLE_UI_TOOLS = `ReactJS, Redux, TypeScript, i18next, AntD, Emotion Styled Components, HTML, SCSS, Git`;
const SIMPLE_UI_LINKS = {
  repo: 'https://github.com/emrerdem1/simple-ui',
  demo: 'https://the-simple-ui.netlify.app/',
};

export const PROJECTS = [
  {
    title: 'Teeter-Totter',
    description: TEETER_TOTTER_DESCRIPTION,
    tools: TEETER_TOTTER_TOOLS,
    demoLink: TEETER_TOTTER_LINKS.demo,
    repoLink: TEETER_TOTTER_LINKS.repo,
  },
  {
    title: 'Simple-UI',
    description: SIMPLE_UI_DESCRIPTION,
    tools: SIMPLE_UI_TOOLS,
    demoLink: SIMPLE_UI_LINKS.demo,
    repoLink: SIMPLE_UI_LINKS.repo,
  },
  {
    title: 'E-Commerce',
    description: ECOMMERCE_DESCRIPTION,
    tools: ECOMMERCE_TOOLS,
    demoLink: ECOMMERCE_LINKS.demo,
    repoLink: ECOMMERCE_LINKS.repo,
  },
  {
    title: 'Board',
    description: BOARD_DESCRIPTION,
    tools: BOARD_TOOLS,
    demoLink: BOARD_LINKS.demo,
    repoLink: BOARD_LINKS.repo,
  },
  {
    title: 'Portfolio',
    description: PORTFOLIO_DESCRIPTION,
    tools: PORTFOLIO_TOOLS,
    demoLink: PORTFOLIO_LINKS.demo,
    repoLink: PORTFOLIO_LINKS.repo,
  },
  {
    title: 'Movie',
    description: MOVIE_DESCRIPTION,
    tools: MOVIE_TOOLS,
    demoLink: MOVIE_LINKS.demo,
    repoLink: MOVIE_LINKS.repo,
  },
  {
    title: 'Madlibs',
    description: MADLIBS_DESCRIPTION,
    tools: MADLIBS_TOOLS,
    demoLink: MADLIBS_LINKS.demo,
    repoLink: MADLIBS_LINKS.repo,
  },
];
