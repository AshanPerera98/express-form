import caravanCard from "@/assets/LandingPage/CategoryCard/caravan.webp";
import homeCard from "@/assets/LandingPage/CategoryCard/home.webp";

const categoryCards = [
  {
    title: "Caravan Benchtop",
    description:
      "Transform your caravan with our expertly crafted benchtops, designed for durability and style. Choose from a variety of colours, materials, and sizes to perfectly suit your space. Made to last, our benchtops are the ideal choice for your caravan.",
    image: caravanCard.src,
    link: "/caravan",
  },
  {
    title: "Home Benchtops",
    description:
      "Upgrade your home with our custom benchtops, perfect for kitchens, bathrooms, and even outdoor gardens. Whether you need a sleek kitchen bench or a stylish bathroom vanity, our durable, high-quality surfaces are designed to suit every space and lifestyle.",
    image: homeCard.src,
    link: "/home",
  },
];

// --------------------------------------------------------

import slide1 from "@/assets/LandingPage/Carousel/slide1.jpg";
import slide2 from "@/assets/LandingPage/Carousel/slide2.jpg";
import slide3 from "@/assets/LandingPage/Carousel/slide3.jpg";

const carouselSlides = [
  {
    title: "First Slide",
    description:
      "Our countertops are crafted with durability in mind. Designed to withstand the rigors of daily life, they’re heat, scratch, and stain-resistant—perfect for busy family kitchens or the adventurous lifestyle of caravan living. With our benchtops, you can enjoy long-lasting beauty and functionality for years to come.",
    image: slide1.src,
  },
  {
    title: "Second Slide",
    description:
      "Our countertops are crafted with durability in mind. Designed to withstand the rigors of daily life, they’re heat, scratch, and stain-resistant—perfect for busy family kitchens or the adventurous lifestyle of caravan living. With our benchtops, you can enjoy long-lasting beauty and functionality for years to come.",
    image: slide2.src,
  },
  {
    title: "Third Slide",
    description:
      "We make the process easy and stress-free with professional installation services. Our experienced team ensures your countertops are installed quickly, safely, and to the highest standards. Whether you're upgrading your home or renovating your caravan, you can relax knowing the job will be done right, every time.",
    image: slide3.src,
  },
];

export { categoryCards, carouselSlides };
