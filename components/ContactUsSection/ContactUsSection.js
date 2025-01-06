import React from "react";
import ActionButton from "../ActionButton/ActionButton";

import styles from "./ContactUsSection.module.css";

const ContactUsSection = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className="mx-auto flex flex-col justify-center max-w-8xl px-[20px] pt-[64px] pb-[32px] md:py-[144px] text-center">
        <div className="mb-[64px] md:mb-[72px]">
          <h3 className={styles.preTitle}>Have something in mind?</h3>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={`${styles.description} mx-auto`}>
            Ready to get started on your perfect benchtop or have any questions?
            We’d love to hear from you!
          </p>
        </div>
        <ActionButton label="Contact Us" link="/contact" />
      </div>
    </section>
  );
};

export default ContactUsSection;
