"use client";

import React, { useState } from "react";

import Image from "next/image";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./ProductCard.module.css";

const ProductCard = ({ title, description, image, products }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={styles.card}
      onMouseLeave={active ? toggleActive : undefined}
    >
      <div className={`${styles.content} ${active ? styles.activated : ""}`}>
        <div className={`${styles.slider} ${active ? styles.slided : ""}`}>
          <div className={`${styles.slide2} grid grid-flow-col`}>
            {products.map(({ productTitle, productDescription }, index) => {
              return (
                <div className={styles.product} key={index}>
                  <h6 className={styles.productTitle}>{productTitle}</h6>
                  <p className={styles.productDesc}>{productDescription}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.slide1}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ActionButton label="View more" clickAction={toggleActive} />
          </div>
        </div>
      </div>
      <Image
        src={image}
        width={700}
        height={500}
        className={`${styles.image} ${active ? styles.contract : ""}`}
      />
    </div>
  );
};

export default ProductCard;
