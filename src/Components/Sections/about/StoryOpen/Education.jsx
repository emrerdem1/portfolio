import React from "react";

const RESUME_GDRIVE =
  "https://drive.google.com/file/d/1XJtv2TdBuCnwXA7IUpwt2CSqRIncnU2Z/view?usp=sharing";

export const Education = () => {
  return (
    <div className="story-open__education">
      <svg className="story-open__education--svg2"></svg>
      <div>
        <h2>Education</h2>
        <p>
          <i>
            (You can download{" "}
            <span>
              <a
                className="outer-links"
                href={RESUME_GDRIVE}
                title="CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </span>{" "}
            on the sidebar for the summary.)
          </i>
          I finished my elementary, junior and highschool education in my
          hometown, moving to a different state to get my bachalor's degree in{" "}
          <span>Managament Information Systems</span> deparment where I have
          been got to learn a variety of programming languages and databases
          such as <span>HTML, CSS, C#, PHP</span> and <span>Oracle</span>!
        </p>
        <p>
          After my graduation in MIS, I am blessed to participate in a Front-End
          Web Developer Bootcamp in{" "}
          <a
            className="outer-links"
            href="https://www.re-coded.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Re:Coded
          </a>
          ! I got to learn many new approaches and get accustomed to web
          developer tools such as{" "}
          <span>
            Vanilla JS, React, TypeScript, Firebase by building real web
            applications and more
          </span>{" "}
          with the help of caring instructors Re:Coded Team assigned to us and
          curriculum of{" "}
          <a
            className="outer-links"
            href="https://flatironschool.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flatiron Academy
          </a>
          ! I, now, have gained interest in Back-End side as well and I strive
          to be better coder from yesterday!
        </p>
      </div>
    </div>
  );
};
