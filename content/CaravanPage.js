import kitchen from "@/assets/CaravanPage/ProductCard/kitchen.jpg";
import lounge from "@/assets/CaravanPage/ProductCard/lounge.jpg";
import bedroom from "@/assets/CaravanPage/ProductCard/bedroom.jpg";
import bathroom from "@/assets/CaravanPage/ProductCard/bathroom.jpg";

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
          "Enhance your caravan kitchen with a sleek waterfall benchtop, offering a modern, flowing design that's practical and durable.",
      },
      {
        productTitle: "Stove Lid",
        productDescription:
          "Enhance your caravan kitchen with a sleek waterfall benchtop, offering a modern, flowing design that's practical and durable.",
      },
      {
        productTitle: "Without Stove Lid",
        productDescription:
          "Choose a stove-lid-free benchtop for a more open, accessible kitchen, offering extra counter space and a minimalist design.",
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
          "Design a stylish café-inspired lounge with a custom benchtop, using durable materials like timber or laminate for a functional, welcoming space.",
      },
      {
        productTitle: "Trifold",
        productDescription:
          "Maximise your caravan's functionality with a trifold benchtop, offering extra counter space that folds away to save room.",
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
          "Create a functional caravan laundry with a custom benchtop around your washing machine, using durable, water-resistant materials to maximise space.",
      },
      {
        productTitle: "Ensuite Bench Tops",
        productDescription:
          "Elevate your caravan ensuite with a custom benchtop, choosing moisture-resistant materials that fit compact spaces and offer style and practicality.",
      },
      {
        productTitle: "Vanity",
        productDescription:
          "Maximise your caravan’s bathroom with a custom vanity benchtop, offering durable materials, ample storage, and functional counter space for mobile living.",
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
          "Maximise your caravan bedroom with a custom bedside table benchtop, offering durable materials, efficient storage, and space-saving design for organised essentials.",
      },
      {
        productTitle: "Corner Cupboard",
        productDescription:
          "Maximise space with a custom corner cupboard benchtop, fitting snugly into corners for hidden storage and a modern, efficient look.",
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
      "Our premium laminate benchtops feature stylish finishes like Woodland Oak and Santhia, offering durability, easy maintenance, and a sophisticated look for any benchtop design.",
    points: [
      {
        title: "Any Finishing",
        description:
          "Choose from a wide variety of finishes to perfectly match your style. Whether it’s sleek and modern or warm and rustic, our wide range of options is sure to give you the tailored look.",
      },
    ],
  },
];

export { productCards, customizationCards };
