"use client";

import React from "react";
import styles from "./ActionButton.module.css";
import Link from "next/link";

const ActionButton = ({ label, clickAction, link }) => {
  return (
    <Link href={link || null}>
      <button className={styles.actionButton} onClick={clickAction || null}>
        {label}
      </button>
    </Link>
  );
};

export default ActionButton;
