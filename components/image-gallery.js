import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TeaserCardCarousel from "./TeaserCardCarousel";
import TeaserCardItem from "./TeaserCardCarouselItem";
import {
  BsChevronRight,
  BsChevronLeft,
  MdArrowForwardIos,
} from "react-icons/bs";
const ImageGallary = ({ compProps }) => {
  if (!compProps) return;
  console.log(compProps)
  const [changes, setChanges] = useState(false);
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div className="custom-prev-arrow" onClick={onClick}>
        {" "}
        <div className="icon-up">
          <BsChevronLeft />
        </div>
      </div>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <div className="custom-next-arrow" onClick={onClick}>
        <div className="icon-up">
          <BsChevronRight />
        </div>
      </div>
    );
  };
  useEffect(() => {
if(window.innerWidth <= 1019) return
    document
      .querySelector("[data-index='0']")
      .className.includes("slick-current")
      ? (document.querySelector(".custom-prev-arrow").style.cssText =
          "display: none;")
      : (document.querySelector(".custom-prev-arrow").style.cssText =
          "display: block;");

    const itemLimit = document.querySelector(".slick-track").children.length;

    document
      .querySelector(".slick-track")
      .children[itemLimit - 1].className.includes("slick-active")
      ? (document.querySelector(".custom-next-arrow").style.cssText =
          "display: none;")
      : (document.querySelector(".custom-next-arrow").style.cssText =
          "display: block;");
  }, [changes]);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: function () {
      setChanges((prev) => !prev);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.18,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="sliderss">
      <div className="container">
        <div className="col-xs-12 p-0">
          <h2 className="h3 d-flex  justify-content-center text-dark mb-3" tabIndex="0" >
            {compProps.fields.title}
          </h2>
          <Slider {...settings}>
            {compProps.fields.cards.map((items, index) => (
              <TeaserCardItem
                key={index}
                description={items?.fields.bannerDescription}
                title={items?.fields.bannerTitle}
                image={items?.fields.bannerImage}
                layout= {items.fields.layout}
                button={items.fields.bannerCtAs}
              />
            ))}

          </Slider>
        </div>
      </div>
    </div>
  );
};
export default ImageGallary;
