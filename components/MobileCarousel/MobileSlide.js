import React from "react";
import Image from "next/image";

import styles from "./MobileSlide.module.css";

const Slide = ({ title, description, image }) => {
  return (
    <div className={`flex flex-col items-start`}>
      <Image width={500} height={240} className={styles.image} src={image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Slide;
