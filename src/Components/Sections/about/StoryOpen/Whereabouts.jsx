import React from "react";

export const Whereabouts = () => {
  return (
    <div className="story-open__whereabouts">
      <svg
        className="story-open__whereabouts--svg1"
        style={{ order: "1" }}
      ></svg>
      <div>
        <h2>Where I am from?</h2>
        <p>
          I was born in a little town of{" "}
          <a
            className="outer-links"
            href="https://en.wikipedia.org/wiki/Cappadocia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Cappadocia</span>
          </a>
          , Turkey where my family has been running a cute pottery workshop for
          generations. We basically craft the clay that we dug from the generous
          earth to shape into vessels and specific objects. I'm also an
          apprentice potter who's still learning the art in my leisure from my
          father. It's actually way more difficult than it looks from outside!
        </p>
      </div>
    </div>
  );
};
