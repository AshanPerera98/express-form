import ActionButton from "@/components/ActionButton/ActionButton";
import styles from "./landing.module.css";
import Section from "@/components/Section/Section";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

import caravanCard from "@/assets/LandingPage/CategoryCard/caravan.png";
import homeCard from "@/assets/LandingPage/CategoryCard/home.png";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";

export default function Landing() {
  return (
    <>
      <section
        id="hero"
        className={`${styles.heroSection} bg-[url('./../assets/LandingPage/hero_bg.png')]`}
      >
        <div className="mx-auto flex flex-col items-center md:items-start justify-center max-w-8xl px-[20px] h-full">
          <h1 className={styles.heroTitle}>
            Where Comfort Meets the Great Outdoors...
          </h1>
          <ActionButton label="Our Products" link="#products" />
        </div>
      </section>
      <section>
        <p
          className={`${styles.intro} mx-auto flex flex-col justify-center max-w-[1000px] lg:px-[20px] lg:h-[600px] py-[64px] px-[32px] text-center`}
        >
          We specialize in creating durable, lightweight, and stylish counter
          tops, engineered to enhance the comfort and functionality of your
          caravan
        </p>
      </section>
      <Section
        id="products"
        preTitle="What do we offer?"
        title="Our Products"
        bgColor="bgWhite"
      >
        <div className="flex items-center md:justify-around flex-col md:flex-row max-w-full gap-[32px]">
          <CategoryCard
            title="Caravan Counter Tops"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image={caravanCard}
            link="/caravan"
          />
          <CategoryCard
            title="Home Counter Tops"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image={homeCard}
            link="/home"
          />
        </div>
      </Section>
      <ContactUsSection />
    </>
  );
}
