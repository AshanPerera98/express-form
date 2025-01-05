import React from "react";

import styles from "./SpecialCard.module.css";

const SpecialCard = () => {
  return (
    <div
      className={`${styles.card} my-auto mx-auto flex flex-col items-center justify-center`}
    >
      <h3 className={styles.title}>Want something more?</h3>
      <p className={styles.description}>
        We offer bespoke solutions to bring your vision to life. Whether it's a
        custom shape, unique material, or special feature, our team is here to
        craft the perfect benchtop tailored just for you. Let us help create the
        ideal space with personalised options that go beyond the ordinary.
      </p>
    </div>
  );
};

export default SpecialCard;
