import React from "react";
import styles from "./Section.module.css";

const Section = ({
  id,
  preTitle,
  title,
  bgColor,
  tight,
  mobileOnly,
  desktopOnly,
  children,
  mobileNoPadding,
}) => {
  return (
    <section
      id={id}
      className={`${styles[bgColor]} ${mobileOnly && "visible sm:hidden"} ${
        desktopOnly && "hidden sm:block"
      }`}
    >
      <div
        className={`mx-auto flex flex-col justify-center max-w-8xl px-[20px] ${
          mobileNoPadding
            ? "pt-[32px] pb-0 px-0 md:px-[20px]"
            : tight
            ? "pt-[32px]"
            : "pt-[64px]"
        } pb-[32px] ${tight ? "md:py-[64px]" : "md:py-[144px]"} text-center`}
      >
        {(title || preTitle) && (
          <div className="mb-[64px] md:mb-[120px]">
            <h3 className={styles.preTitle}>{preTitle}</h3>
            <h1 className={styles.title}>{title}</h1>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
