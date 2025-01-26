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
      "Explore our wide range of vibrant stock colours, thoughtfully curated to suit every style and preference. From timeless neutrals to bold, adventurous shades, our collection is designed to enhance the look and feel of your caravan interiors. Whether you're seeking a classic finish or a modern touch, find the perfect colour to reflect your personality and elevate your journey.",
    image: slide1.src,
  },
  {
    title: "Second Slide",
    description:
      "Explore our wide range of vibrant stock colours, thoughtfully curated to suit every style and preference. From timeless neutrals to bold, adventurous shades, our collection is designed to enhance the look and feel of your caravan interiors. Whether you're seeking a classic finish or a modern touch, find the perfect colour to reflect your personality and elevate your journey.",
    image: slide2.src,
  },
  {
    title: "Third Slide",
    description:
      "Explore our wide range of vibrant stock colours, thoughtfully curated to suit every style and preference. From timeless neutrals to bold, adventurous shades, our collection is designed to enhance the look and feel of your caravan interiors. Whether you're seeking a classic finish or a modern touch, find the perfect colour to reflect your personality and elevate your journey.",
    image: slide3.src,
  },
];

export { categoryCards, carouselSlides };
