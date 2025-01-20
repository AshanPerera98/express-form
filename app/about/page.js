import React from "react";
import Image from "next/image";

import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";

import styles from "./styles.module.css";

import hero_bg from "@/assets/AboutUsPage/hero_bg.webp";
import { cards, reasons } from "@/content/AboutUsPage";

const renderCard = ({ title, description, index }) => {
  return (
    <div className={styles.card} key={index}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const renderSpecialty = ({ title, description, icon, index }) => {
  return (
    <div className="text-center md:text-left max-w-[400px]" key={index}>
      <Image src={icon} height={64} width={64} className="mx-auto md:ml-0" />
      <h3 className={`${styles.reasonTitle} mt-[16px]`}>{title}</h3>
      <p className={`${styles.reasonDescription} mt-[24px]`}>{description}</p>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <>
      <HeroSection
        title="About Us"
        description="Adventure-Ready, Style-Driven – Our Caravan Benchtops Are Perfectly Designed to Endure the Demands of Life on the Road While Adding a Premium Touch to Your Caravan’s Interior..."
        image={hero_bg.src}
      />
      <Section preTitle="Wanna know us?" title="Who We Are" mobileNoPadding>
        <p className={`${styles.description} mx-auto px-[20px] sm:px-0`}>
          Explore our wide range of vibrant stock colours, thoughtfully curated
          to suit every style and preference. From timeless neutrals to bold,
          adventurous shades, our collection is designed to enhance the look and
          feel of your caravan interiors. Whether you're seeking a classic
          finish or a modern touch, find the perfect colour to reflect your
          personality and elevate your journey. With durable, high-quality
          finishes, our stock colours are built to last, ensuring your caravan
          stays beautiful mile after mile
        </p>
        <div className="flex  flex-col sm:justify-between sm:flex-row mt-[64px] sm:mt-[120px]">
          {cards.map((card, index) => renderCard({ ...card, index }))}
        </div>
      </Section>
      <Section
        preTitle="Why choose us?"
        title="Our Specialities"
        bgColor="bgLight"
      >
        <div className="grid grid-flow-row md:grid-cols-2 gap-x-[120px] gap-y-[64px] md:gap-y-[120px] mx-auto max-w-[1000px]">
          {reasons.map((reason, index) =>
            renderSpecialty({ ...reason, index })
          )}
        </div>
      </Section>
      <ContactUsSection />
    </>
  );
};

export default AboutUs;
