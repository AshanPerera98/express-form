import React from "react";
import CustomizationCard from "./CustomizationCard";
import SpecialCard from "./SpecialCard";

const CustomizationSection = ({ content }) => {
  return (
    <div className="grid grid-flow-row gap-[32px]">
      {content.map((option, index) => {
        return (
          <CustomizationCard {...option} dark={index % 2 === 0} key={index} />
        );
      })}
      <SpecialCard />
    </div>
  );
};

export default CustomizationSection;
