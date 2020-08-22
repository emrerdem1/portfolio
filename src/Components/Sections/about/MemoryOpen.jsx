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
          <img src="" alt="" style={{ backgroundColor: "green" }} />
          <span>1</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "blue" }} />
          <span>2</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "red" }} />
          <span>3</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "black" }} />
          <span>4</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "gray" }} />
          <span>5</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "yellow" }} />
          <span>7</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "red" }} />
          <span>8</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "black" }} />
          <span>9</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "gray" }} />
          <span>10</span>
        </div>
        <div className="img-frame">
          <img src="" alt="" style={{ backgroundColor: "yellow" }} />
          <span>11</span>
        </div>
      </Slider>
    </div>
  );
};
