import Image from "next/image";
import React from "react";

import styles from "./CategoryCard.module.css";
import Link from "next/link";

const CategoryCard = ({ title, description, image, link }) => {
  return (
    <div className={styles.card}>
      <Image src={image} width={500} height={300} className={styles.image} />
      <div className={styles.content}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.description}>{description}</p>
      </div>
      <Link href={link}>
        <button className={styles.button}>See more</button>
      </Link>
    </div>
  );
};

export default CategoryCard;
