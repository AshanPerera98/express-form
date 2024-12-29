import React from "react";
import styles from "./Section.module.css";

const Section = ({ id, preTitle, title, bgColor, children }) => {
  return (
    <section id={id} className={styles[bgColor]}>
      <div className="mx-auto flex flex-col justify-center max-w-8xl px-[20px] py-[144px] text-center">
        <div className="mb-[120px]">
          <h3 className={styles.preTitle}>{preTitle}</h3>
          <h1 className={styles.title}>{title}</h1>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
