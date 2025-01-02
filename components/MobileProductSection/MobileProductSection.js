import React from "react";
import MobileProductCard from "./MobileProductCard";

const MobileProductSection = ({ content }) => {
  return (
    <div className="grid grid-flow-row gap-[24px]">
      {content.map((product, index) => {
        return <MobileProductCard {...product} key={index} />;
      })}
    </div>
  );
};

export default MobileProductSection;
