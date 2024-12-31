"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselOverride.css";

import MobileSlide from "./MobileSlide";
import styles from "./MobileCarousel.module.css";

const renderPrevArrow = (clickHandler, hasPrev, label) => {
  return (
    <button
      onClick={clickHandler}
      className={styles.arrowButton}
      style={{ left: "0px" }}
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
      style={{ right: "0px" }}
    >
      <ChevronRightIcon aria-hidden="true" className="size-6" />
    </button>
  );
};

const indicatorStyles = {
  background: "#FAEDCD",
  width: 8,
  height: 8,
  borderRadius: 4,
  display: "inline-block",
  margin: "0 8px",
};

const renderIndecator = (clickHandler, isSelected, index, label) => {
  if (isSelected) {
    return (
      <li
        style={{
          ...indicatorStyles,
          background: "#A76D35",
          width: 12,
          height: 12,
          borderRadius: 6,
        }}
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    );
  }
  return (
    <li
      style={indicatorStyles}
      onClick={clickHandler}
      onKeyDown={clickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

const CarouselSection = ({ content }) => {
  return (
    <Carousel
      autoPlay={true}
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      dynamicHeight={false}
      renderIndicator={renderIndecator}
      renderArrowPrev={renderPrevArrow}
      renderArrowNext={renderNextArrow}
      transitionTime={600}
      showStatus={false}
      className="mobile-carousel"
    >
      {content.map((slide, index) => {
        return <MobileSlide {...slide} key={index} />;
      })}
    </Carousel>
  );
};

export default CarouselSection;
