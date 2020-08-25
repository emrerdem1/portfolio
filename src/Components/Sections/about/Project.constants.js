const MADLIBS_DESCRIPTION = `Write out a full story that is processed into a format that will
            allow the one to keep track of "blanks". Whenever the user updates a
            blank in the edit view, it should update the preview any time a new
            character is typed.`;
const MADLIBS_TOOLS = `HTML, CSS, Vanilla JS`;
const MADLIBS_LINKS = {
  repo: "https://github.com/emrerdem1/MadLibs-Project",
  demo: "https://madlibs-project.netlify.app/",
};

const BOARD_DESCRIPTION = `Build a ToDo Board that users can schedule their tasks. Users can
            create custom boards with unlimited amount of tasks within, move the
            position of boards freely, change tasks status by clicking and
            sorting boards to one's heart's content.`;
const BOARD_TOOLS = `HTML, CSS, React-Bootstrap, Material UI, ReactJS, Firebase`;
const BOARD_LINKS = {
  repo:
    "https://github.com/emrerdem1/bootcamp-istanbul-2020mar/tree/master/movie-project/Maher-Emre",
  demo: "#",
};

const MOVIE_DESCRIPTION = `Do the styling of Single Movie Page that is fetched from The Movie
            DB API and build functionalities to move from Movie Page to Actor
            Page with necessary fields getting filled. Do the search and sorting
            based on names, get recommendation and trailer section by using API.`;
const MOVIE_TOOLS = `HTML, CSS, Bootstrap, Postman, Vanilla JS`;
const MOVIE_LINKS = {
  repo: "https://github.com/emrerdem1/ToDo-BoardProject",
  demo: "https://todo-board-project.netlify.app/",
};

export const PROJECTS = [
  {
    title: "Madlibs",
    description: MADLIBS_DESCRIPTION,
    tools: MADLIBS_TOOLS,
    demoLink: MADLIBS_LINKS.demo,
    repoLink: MADLIBS_LINKS.repo,
  },
  {
    title: "Movie",
    description: MOVIE_DESCRIPTION,
    tools: MOVIE_TOOLS,
    demoLink: MOVIE_LINKS.demo,
    repoLink: MOVIE_LINKS.repo,
  },
  {
    title: "Board",
    description: BOARD_DESCRIPTION,
    tools: BOARD_TOOLS,
    demoLink: BOARD_LINKS.demo,
    repoLink: BOARD_LINKS.repo,
  },
];
