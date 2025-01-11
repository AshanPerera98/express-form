import React from "react";

import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ProductSection from "@/components/ProductSection/ProductSection";
import MobileProductSection from "@/components/MobileProductSection/MobileProductSection";
import CustomizationSection from "@/components/Customization/CustomizationSection";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";

import hero_bg from "@/assets/HomePage/hero_bg.png";

import { productCards, customizationCards } from "@/content/HomePage";

export const metadata = {
  title: "Home Benchtops | EXPRESS FORM",
  description:
    "Transform your home with our premium benchtops, crafted for style and durability. From modern kitchen counters to elegant bathroom surfaces, our custom-made benchtops in a variety of materials and finishes are designed to enhance your home’s aesthetic and functionality.",
};

export const Home = () => {
  return (
    <>
      <HeroSection
        title="Home Bench Tops"
        description="Benchtops built for Aussie living! The perfect mix of style, durability, and expert quality to suit your kitchen bench, bathroom, office or outdoor space."
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

export default Home;
