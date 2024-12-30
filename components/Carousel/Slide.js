import React from "react";

import styles from "./Slide.module.css";

const Slide = ({ title, description, image }) => {
  return (
    <div
      className={`${styles.slide} flex flex-col items-start`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0)), url('${image}')`,
      }}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Slide;
