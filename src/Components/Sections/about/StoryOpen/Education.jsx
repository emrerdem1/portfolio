import useFirestoreDoc from 'Components/common/hooks/useFirestoreDoc';
import { CollectionNames } from 'Components/common/utils/firebaseHelper';
import React from 'react';

export const Education = () => {
  const { docs: resume } = useFirestoreDoc({
    collectionName: CollectionNames.RESUME,
  });

  return (
    <div className="story-open__education">
      <svg className="story-open__education--svg2"></svg>
      <div>
        <h2>Education</h2>
        <p>
          <i>
            (You can download{' '}
            <span>
              <a
                href={resume[0] && resume[0]?.url}
                className="outer-links"
                title="CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </span>{' '}
            for the summary.)
          </i>
          I finished my elementary, junior and highschool education in my
          hometown, moving to a different state to get my Bachelor's Degree in{' '}
          <span>Management Information Systems</span> department where I have
          been got to learn a variety of programming languages and databases
          such as <span>HTML, CSS, C#, PHP</span> and <span>Oracle</span>!
        </p>
        <p>
          After my graduation in MIS, I am blessed to participate in a Front-End
          Web Developer Bootcamp in{' '}
          <a
            className="outer-links"
            href="https://www.re-coded.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Re:Coded
          </a>
          ! I got to learn many new approaches and get accustomed to web
          developer tools such as{' '}
          <span>
            React, TypeScript, GraphQL, Redux, Firebase, Vanilla JS by building
            real web applications and more
          </span>{' '}
          with the help of caring instructors Re:Coded Team assigned to us and
          curriculum of{' '}
          <a
            className="outer-links"
            href="https://flatironschool.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flatiron Academy
          </a>
          ! I have already begun to excel in Back-End side and I strive to be
          better coder from yesterday!
        </p>
      </div>
    </div>
  );
};
