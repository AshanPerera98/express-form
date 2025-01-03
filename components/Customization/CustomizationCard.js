import React from "react";

import styles from "./CustomizationCard.module.css";

const renderDesktopPoints = (points) => {
  return (
    <div
      className={`${styles.content} col-span-2 hidden sm:grid grid-flow-col px-[8px] py-[32px]`}
    >
      {points.map(({ title, description }, index) => {
        return (
          <div className={`my-auto px-[24px]`} key={index}>
            <h6 className={styles.pointTitle}>{title}</h6>
            <p className={styles.pointDescription}>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

const renderMobilePoints = (points) => {
  return (
    <div className={`col-span-2 grid grid-flow-row gap-[12px] sm:hidden`}>
      {points.map(({ title }, index) => {
        return (
          <div className={`my-auto`} key={index}>
            <h6 className={styles.mobilePoint}>{title}</h6>
          </div>
        );
      })}
    </div>
  );
};

const CustomizationCard = ({ title, description, points, dark }) => {
  return (
    <div
      className={`${styles.card} ${
        dark ? styles.dark : styles.light
      } grid grid-flow-row sm:grid-flow-col sm:grid-cols-3 gap-y-[32px] sm:gap-x-[64px] py-[32px] px-[24px] md:py-[42px] md:px-[48px]`}
    >
      <div className={`my-auto col-span-1`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {renderDesktopPoints(points)}
      {renderMobilePoints(points)}
    </div>
  );
};

export default CustomizationCard;
