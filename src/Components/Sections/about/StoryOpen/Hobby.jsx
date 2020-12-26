import React from "react";

export const Hobby = () => {
  return (
    <div className="story-open__hobby">
      <svg className="story-open__hobby--svg3" style={{ order: "1" }}></svg>
      <div>
        <h2>Hobbies</h2>
        <p>
          Stray animals become an irreplaceable part of my life for last 4
          years! I cannot function well without getting their attention for a
          week! It's always a stress relieving for me to spend time with those
          little cuties!
        </p>
        <p>
          I'm also{" "}
          <a
            className="outer-links"
            href="https://www.liveabout.com/what-is-anime-144982"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anime
          </a>{" "}
          and{" "}
          <a
            className="outer-links"
            href="https://en.wikipedia.org/wiki/Manga"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manga
          </a>{" "}
          enthusiast so much so that I've been started translating subtitles of
          them from English to Turkish since the highschool days! I have
          completed dozen hundreds of subtitles for Anime series that I loved,
          but I do it rarely now as I focused on becoming a full-fledged software
          engineer!
        </p>
      </div>
    </div>
  );
};
