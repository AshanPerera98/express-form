import React from "react";

import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ProductSection from "@/components/ProductSection/ProductSection";
import MobileProductSection from "@/components/MobileProductSection/MobileProductSection";
import CustomizationSection from "@/components/Customization/CustomizationSection";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";

import hero_bg from "@/assets/CaravanPage/hero_bg.webp";

import { productCards, customizationCards } from "@/content/CaravanPage";

export const metadata = {
  title: "Caravan Benchtops | EXPRESS FORM",
  description:
    "With over 7 years of experience, we specialise in custom caravan benchtops designed for style and durability. From kitchen counters to bathroom surfaces, our space-saving solutions in a variety of materials enhance your mobile living experience.",
};

export const Caravan = () => {
  return (
    <>
      <HeroSection
        title="Caravan Bench Tops"
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
      <Section
        id="customization"
        preTitle="Want anything specific?"
        title="Customization Options"
        bgColor="bgLight"
      >
        <CustomizationSection content={customizationCards} />
      </Section>
      <ContactUsSection />
    </>
  );
};

export default Caravan;
