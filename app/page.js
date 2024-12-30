import ActionButton from "@/components/ActionButton/ActionButton";
import styles from "./landing.module.css";
import Section from "@/components/Section/Section";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import CarouselSection from "@/components/Carousel/CarouselSection";
import CategorySection from "@/components/CategoryCard/CategorySection";

import { categoryCards, carouselSlides } from "@/content/LandingPage";

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
      <Section id="carousel" bgColor="bgLight" tight>
        <CarouselSection content={carouselSlides} />
      </Section>
      <Section
        id="products"
        preTitle="What do we offer?"
        title="Our Products"
        bgColor="bgWhite"
      >
        <CategorySection content={categoryCards} />
      </Section>
      <ContactUsSection />
    </>
  );
}
