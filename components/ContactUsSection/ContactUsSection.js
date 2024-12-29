import React from "react";
import ActionButton from "../ActionButton/ActionButton";

import styles from "./ContactUsSection.module.css";

const ContactUsSection = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className="mx-auto flex flex-col justify-center max-w-8xl px-[20px] pt-[64px] pb-[32px] md:py-[144px] text-center">
        <div className="mb-[64px] md:mb-[120px]">
          <h3 className={styles.preTitle}>Have something in mind?</h3>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={`${styles.description} mx-auto`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <ActionButton label="Contact Us" link="/contact" />
      </div>
    </section>
  );
};

export default ContactUsSection;
