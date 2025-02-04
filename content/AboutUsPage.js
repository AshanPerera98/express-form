const cards = [
  {
    title: "Our vision",
    description:
      "To be the leading provider of innovative and durable benchtops, transforming homes and caravans into functional, beautiful spaces that customers will enjoy for years to come.",
  },
  {
    title: "Our Mission",
    description:
      "We are dedicated to providing high-quality, custom benchtops for caravans and homes, offering exceptional durability, design, and customer satisfaction to enhance every space we touch.",
  },
];

import reliability from "@/assets/AboutUsPage/Icons/reliability.svg";
import durability from "@/assets/AboutUsPage/Icons/durability.svg";
import quality from "@/assets/AboutUsPage/Icons/quality.svg";
import flexibility from "@/assets/AboutUsPage/Icons/flexibility.svg";

const reasons = [
  {
    title: "Reliability",
    description:
      "We pride ourselves on being a dependable partner for all your benchtop needs. With a strong focus on meeting deadlines and delivering consistent results, you can trust us to provide a seamless experience from start to finish. When you choose us, you can count on us, every time.",
    icon: reliability.src,
  },
  {
    title: "Durability",
    description:
      "Our benchtops are built to last. Crafted from durable materials and designed to endure the wear and tear of daily life, our products stand up to the test of time. Whether it’s a home or caravan, we ensure that every surface we create is a long-lasting investment.",
    icon: durability.src,
  },
  {
    title: "Quality",
    description:
      "Our commitment to exceptional quality ensures that each benchtop is crafted with precision and attention to detail. Using only the finest materials, we create surfaces that not only look stunning but are built to withstand the demands of everyday life. Quality is at the heart of everything we do.",
    icon: quality.src,
  },
  {
    title: "Flexibilty",
    description:
      "We understand that every project is unique, which is why we offer a flexible approach to meet your specific needs. Whether you’re working on a custom design for your home or caravan, we adapt our services to fit your vision, budget, and schedule, ensuring a perfect fit every time.",
    icon: flexibility.src,
  },
];

export { cards, reasons };
