import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";

import hero_bg from "@/assets/CaravanPage/hero_bg.png";
import ProductSection from "@/components/ProductSection/ProductSection";
import Section from "@/components/Section/Section";

import { productCards } from "@/content/CaravanPage";
import MobileProductSection from "@/components/MobileProductSection/MobileProductSection";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";

export const Caravan = () => {
  return (
    <>
      <HeroSection
        title="Caravan Counter Tops"
        description="Adventure-Ready, Style-Driven – Our Caravan Benchtops Are Perfectly Designed to Endure the Demands of Life on the Road While Adding a Premium Touch to Your Caravan’s Interior..."
        image={hero_bg.src}
      />
      <Section
        id="products"
        preTitle="What do we offer?"
        title="Our Products"
        desktopOnly
      >
        <ProductSection content={productCards} />
      </Section>
      <Section
        id="products"
        preTitle="What do we offer?"
        title="Our Products"
        mobileOnly
      >
        <MobileProductSection content={productCards} />
      </Section>
      <ContactUsSection />
    </>
  );
};

export default Caravan;
