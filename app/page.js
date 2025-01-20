import ActionButton from "@/components/ActionButton/ActionButton";
import styles from "./landing.module.css";
import Section from "@/components/Section/Section";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import CarouselSection from "@/components/Carousel/CarouselSection";
import MobileCarousel from "@/components/MobileCarousel/MobileCarousel";
import CategorySection from "@/components/CategoryCard/CategorySection";

import hero_bg from "@/assets/LandingPage/hero_bg.webp";

import { categoryCards, carouselSlides } from "@/content/LandingPage";

export default function Landing() {
  return (
    <>
      <section
        id="hero"
        className={styles.heroSection}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${hero_bg.src}')`,
        }}
      >
        <div className="mx-auto flex flex-col items-center md:items-start justify-center max-w-8xl px-[20px] h-full">
          <h1 className={styles.heroTitle}>
            Durable and elegant Aussie benchtops
          </h1>
          <ActionButton label="Our Products" link="#products" />
        </div>
      </section>
      <section id="intro">
        <p
          className={`${styles.intro} mx-auto flex flex-col justify-center max-w-[1000px] lg:px-[20px] lg:h-[600px] py-[64px] px-[32px] text-center`}
        >
          Explore our range of stylish, lightweight benchtops for your homes and
          caravans, crafted with care to ensure maximum durability.
        </p>
      </section>
      <Section id="carousel" bgColor="bgLight" tight desktopOnly>
        <CarouselSection content={carouselSlides} />
      </Section>
      <Section id="carousel" bgColor="bgLight" tight mobileOnly>
        <MobileCarousel content={carouselSlides} />
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
