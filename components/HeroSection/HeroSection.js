import React from "react";

import styles from "./HeroSection.module.css";

const HeroSection = ({ title, description, image }) => {
  return (
    <section
      id="hero"
      className={styles.heroSection}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${image}')`,
      }}
    >
      <div className="mx-auto flex flex-col items-center justify-center max-w-8xl px-[20px] h-full">
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
