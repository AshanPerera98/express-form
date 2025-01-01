import React from "react";

import styles from "./ProductSection.module.css";
import ProductCard from "./ProductCard";

const ProductSection = ({ content }) => {
  return (
    <div className="grid grid-flow-row gap-[24px]">
      {content.map((product, index) => {
        return <ProductCard {...product} key={index} />;
      })}
    </div>
  );
};

export default ProductSection;
