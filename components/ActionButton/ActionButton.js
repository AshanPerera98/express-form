"use client";

import React from "react";
import styles from "./ActionButton.module.css";
import Link from "next/link";

const ActionButton = ({ label, clickAction, link }) => {
  if (link)
    return (
      <Link href={link}>
        <button className={styles.actionButton} onClick={clickAction || null}>
          {label}
        </button>
      </Link>
    );

  return (
    <button className={styles.actionButton} onClick={clickAction || null}>
      {label}
    </button>
  );
};

export default ActionButton;
