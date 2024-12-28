import ActionButton from "@/components/ActionButton/ActionButton";
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <>
      <section
        id="hero"
        className={`${styles.heroSection} bg-[url('./../assets/LandingPage/hero_bg.png')]`}
      >
        <div className="mx-auto flex flex-col justify-center max-w-8xl px-20px h-full">
          <h1 className={styles.heroTitle}>
            Where Comfort Meets the Great Outdoors...
          </h1>
          <ActionButton label="Our Products" link="#products" />
        </div>
      </section>
      <section>
        <p
          className={`${styles.intro} mx-auto flex flex-col justify-center max-w-[1000px] px-20px lg:h-[600px] py-[64px] px-[32px] text-center`}
        >
          We specialize in creating durable, lightweight, and stylish counter
          tops, engineered to enhance the comfort and functionality of your
          caravan
        </p>
      </section>
    </>
  );
}
