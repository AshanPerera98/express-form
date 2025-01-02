import React from "react";

import styles from "./CustomizationCard.module.css";

const CustomizationCard = ({ title, description, points, dark }) => {
  return (
    <div
      className={`${styles.card} ${
        dark ? styles.dark : styles.light
      } grid grid-cols-3 gap-[64px]`}
    >
      <div className={`my-auto col-span-1`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div
        className={`${styles.content} col-span-2 grid grid-flow-col px-[8px] py-[32px]`}
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
    </div>
  );
};

export default CustomizationCard;
