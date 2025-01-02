import React from "react";

import styles from "./SpecialCard.module.css";

const SpecialCard = () => {
  return (
    <div
      className={`${styles.card} my-auto mx-auto flex flex-col items-center justify-center`}
    >
      <h3 className={styles.title}>Want something more?</h3>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default SpecialCard;
