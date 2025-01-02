import React from "react";

import styles from "./MobileProductCard.module.css";

const MobileProductCard = ({ title, description, image, products }) => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles.image} mx-auto flex items-center justify-center`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${image}')`,
        }}
      >
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        {products.map(({ productTitle, productDescription }, index) => {
          return (
            <h6 className={styles.product} key={index}>
              {productTitle}
            </h6>
          );
        })}
      </div>
    </div>
  );
};

export default MobileProductCard;
