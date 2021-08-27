export const RESUME =
  'https://drive.google.com/file/d/1vU0RngCDDcVfP7t3vAcT_QDp1Ncf61Iz/view?usp=sharing';

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

export const PROJECTS = [
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
