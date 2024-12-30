"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slide from "./Slide";
import styles from "./Carousel.module.css";

const renderPrevArrow = (clickHandler, hasPrev, label) => {
  return (
    <button
      onClick={clickHandler}
      className={styles.arrowButton}
      style={{ left: "40px" }}
    >
      <ChevronLeftIcon aria-hidden="true" className="size-6" />
    </button>
  );
};

const renderNextArrow = (clickHandler, hasPrev, label) => {
  return (
    <button
      onClick={clickHandler}
      className={styles.arrowButton}
      style={{ right: "40px" }}
    >
      <ChevronRightIcon aria-hidden="true" className="size-6" />
    </button>
  );
};

const CarouselSection = ({ content }) => {
  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        renderArrowPrev={renderPrevArrow}
        renderArrowNext={renderNextArrow}
        showStatus={false}
      >
        {content.map((slide, index) => {
          return <Slide {...slide} key={index} />;
        })}
      </Carousel>
    </>
  );
};

export default CarouselSection;
