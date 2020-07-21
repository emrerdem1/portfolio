import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const MemoryOpen = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    slidesPerRow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    rows: 2,
    focusOnSelect: true,
    swipe: true,
    touchMove: true,
    adaptiveHeight: true,
    accessibility: true,
    arrows: true,
    draggable: true,
    infinite: true,
  };
  return (
    <div className="memory-open">
      <h2>Memories I will forever treasure...</h2>
      <Slider {...settings}>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#008000b5" }} />
          <span>1</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#6464c5" }} />
          <span>2</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#da3a3a" }} />
          <span>3</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#1b1919" }} />
          <span>4</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#948e8e" }} />
          <span>5</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#b7b746" }} />
          <span>7</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#da3a3a" }} />
          <span>8</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#1b1919" }} />
          <span>9</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#948e8e" }} />
          <span>10</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "#b7b746" }} />
          <span>11</span>
        </div>
      </Slider>
    </div>
  );
};
