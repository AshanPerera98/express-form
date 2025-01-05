import kitchen from "@/assets/CaravanPage/ProductCard/kitchen.png";
import lounge from "@/assets/CaravanPage/ProductCard/lounge.png";
import bedroom from "@/assets/CaravanPage/ProductCard/bedroom.png";
import bathroom from "@/assets/CaravanPage/ProductCard/bathroom.png";

const productCards = [
  {
    title: "Kitchen",
    description:
      "Transform your caravan kitchen with a custom kitchen benchtop that blends style and practicality. Choose from a variety of materials, colours, and finishes designed for durability in compact spaces. Whether you’re looking for a sleek waterfall benchtop with a stove lid or without, we offer the perfect solution to enhance your mobile kitchen and suit your lifestyle on the go.",
    image: kitchen.src,
    products: [
      {
        productTitle: "Waterfall Bench Tops",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        productTitle: "Stove lid",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        productTitle: "Without Stove lid",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
    ],
  },
  {
    title: "Lounge",
    description:
      "Enhance your caravan lounge with a custom benchtop that’s both practical and stylish. Choose from durable materials in café-style or trifold designs, perfectly tailored to maximise your space and comfort while on the move.",
    image: lounge.src,
    products: [
      {
        productTitle: "Cafe",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        productTitle: "Trifold",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
    ],
  },
  {
    title: "Bathroom",
    description:
      "Transform your caravan bathroom with a custom benchtop designed for both style and practicality. Choose from durable materials for your ensuite benchtop, vanity, or washing machine area, all tailored to make the most of your space while maintaining a sleek, functional design.",
    image: bathroom.src,
    products: [
      {
        productTitle: "Washing Machine",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        productTitle: "Ensuite Bench Tops",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        productTitle: "Vanity",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
    ],
  },
  {
    title: "Bedroom",
    description:
      "Give your caravan bedroom a stylish makeover with a custom benchtop that’s as practical and adds style to your bedroom on the go. From sleek bedside tables to clever corner cupboards, our durable designs maximise space and add a touch of modern flair to your retreat on wheels.",
    image: bedroom.src,
    products: [
      {
        productTitle: "Bedside Table",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        productTitle: "Corner Cupboard",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
    ],
  },
];

const customizationCards = [
  {
    title: "Dimensions",
    description:
      "Our benchtops are fully customizable to any length, width, or thickness, ensuring a perfect fit for your space. Whatever your requirements, we tailor each piece to your exact specifications for a seamless finish.",
    points: [
      {
        title: "Length",
        description:
          "Whether it's two feet or spanning across the entire room, we have you covered. With our benchtops, size is just not a problem!",
      },
      {
        title: "Width",
        description:
          "From a narrow strip to as wide as you like, our products give you the flexibility to choose what's best for you.",
      },
      {
        title: "Thickness",
        description:
          "Get your benchtops in any thickness depending on the aesthetic and functionality you’re looking for.",
      },
    ],
  },
  {
    title: "Shape",
    description:
      "From a perfectly squared design to the unique shape you envision, we provide custom finishes tailored to your exact specifications, ensuring your benchtop is a true reflection of your style and needs.",
    points: [
      {
        title: "Any Shape",
        description:
          "In addition to our standard shapes cut to precision, we specialise in creating custom shapes to suit your exact needs, ensuring your benchtop fits perfectly and meets your unique style requirements.",
      },
    ],
  },
  {
    title: "Edge",
    description:
      "Choose from a variety of edge finishes, including smooth bullnose and sleek square edge designs. Each can be expertly crafted to enhance your benchtop’s style, offering a polished, customised look.",
    points: [
      {
        title: "Bullnose",
        description:
          "A smooth, rounded edge that adds a soft, elegant finish to your benchtop. Bullnose edges are perfect for creating a timeless, sophisticated look in any space.",
      },
      {
        title: "Square Edge ",
        description:
          "The clean, sharp lines of a square edge offer a modern, sleek look. Ideal for minimalist designs, square edges provide a bold, contemporary finish to any benchtop.",
      },
    ],
  },
  {
    title: "Laminate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      {
        title: "Any Finishing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    ],
  },
];

export { productCards, customizationCards };
