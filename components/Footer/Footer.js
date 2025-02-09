import React from "react";

import styles from "./Footer.module.css";

import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="mx-auto max-w-8xl px-[20px] py-[32px] md:pt-[64px]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-[24px]">
          <div className="mb-[32px] sm:mb-0">
            <Image src={logo} width={141} height={32} />
            <address className={styles.address}>
              Express Form,
              <br />
              28 Export Road,
              <br />
              Craigieburn,
              <br />
              Australia.
              <br />
              3064
              <br />
            </address>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-[16px] sm:gap-[32px]">
            <Link className={styles.link} href="/">
              Home
            </Link>
            <Link className={styles.link} href="/caravan">
              Caravan Tops
            </Link>
            <Link className={styles.link} href="/home">
              Home Tops
            </Link>
            <Link className={styles.link} href="/about">
              About Us
            </Link>
            <Link href="/contact" className="mt-[16px] sm:mt-0">
              <button className={styles.button}>Contact Us</button>
            </Link>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-[24px] gap-[8px]">
          <p className={styles.footNotes}>©2025 All Rights Reserved</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-[8px] sm:gap-[32px]">
            <p className={styles.footNotes}>Disclaimer</p>
            <p className={styles.footNotes}>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
