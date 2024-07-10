import { useState, useEffect } from "react";
import "./Hero.css";
import { LuArrowLeftToLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";
import img1 from "../../images/Slider/img1.webp";
import img6 from "../../images/Slider/img6.webp";
import img8 from "../../images/Slider/img8.webp";
import img5 from "../../images/Slider/img5.webp";
import img7 from "../../images/Slider/img7.webp";

const Hero = () => {
  const [itemActive, setItemActive] = useState(0);
  const items = [
    {
      img: img7,
      title: "Discover",
      description: "Explore our latest and most exciting products.",
    },
    {
      img: img1,
      title: "Quality",
      description: "Experience the best quality and top-notch service.",
    },
    {
      img: img8,
      title: "Smart",
      description: "Get the best deals and save more with every purchase.",
    },
    {
      img: img6,
      title: "Exclusive",
      description: "Find unique items available only in our store.",
    },
    {
      img: img5,
      title: "Trending",
      description: "Stay ahead with the latest trends and styles.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setItemActive((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [items.length]);

  const showSlider = (index) => {
    setItemActive(index);
  };

  return (
    <>
      {/* // Hero Section Start */}
      <div className="slider">
        <div className="list">
          {items.map((item, index) => (
            <div
              className={`item ${index === itemActive ? "active" : ""}`}
              key={index}
            >
              <img src={item.img} alt={`slider ${index + 1}`} />
              <div className="content">
                <p>hudson</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="content-btn">
                  <a href="#">
                    <button>Shop</button>
                  </a>
                  <a href="#">
                    <button>More</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-btn">
          <button
            id="prev"
            onClick={() =>
              showSlider((itemActive - 1 + items.length) % items.length)
            }
          >
            <LuArrowLeftToLine />
          </button>
          <button
            id="next"
            onClick={() => showSlider((itemActive + 1) % items.length)}
          >
            <i className="fa fa-arrow-right"></i>
            <LuArrowRightToLine />
          </button>
        </div>
      </div>
      {/* // Hero Section End */}
    </>
  );
};

export default Hero;
