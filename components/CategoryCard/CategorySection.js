import React from "react";

import CategoryCard from "./CategoryCard";

const CategorySection = ({ content }) => {
  return (
    <div className="flex items-center md:justify-around flex-col md:flex-row max-w-full gap-[32px]">
      {content.map((card, index) => {
        return <CategoryCard {...card} key={index} />;
      })}
    </div>
  );
};

export default CategorySection;
