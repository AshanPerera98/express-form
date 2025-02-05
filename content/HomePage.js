import kitchen from "@/assets/HomePage/ProductCard/kitchen.jpg";
import office from "@/assets/HomePage/ProductCard/office.jpg";
import bathroom from "@/assets/HomePage/ProductCard/bathroom.jpg";

const productCards = [
  {
    title: "Kitchen",
    description:
      "Upgrade your kitchen with a custom kitchen bench that combines style and functionality. Choose from a variety of materials, colours, and finishes, all crafted for durability and designed to perfectly suit your space and lifestyle. Whether you prefer the sleek look of a waterfall edge or the modern appeal of an angled design, we have just what you need.",
    image: kitchen.src,
    products: [
      {
        productTitle: "Waterfall Bench Tops",
        productDescription:
          "Create a seamless, luxurious look with a waterfall edge that flows from the bench to the floor, enhancing any kitchen.",
      },
      {
        productTitle: "Angle Bench Tops",
        productDescription:
          "Add a modern touch with an angled design, featuring clean lines and sharp angles for a bold, minimalist look.",
      },
    ],
  },
  {
    title: "Bathroom",
    description:
      "Enhance your bathroom with a custom benchtop or bathroom vanity that fits your style. Choose from a variety of materials, colours, and finishes, all crafted for durability and designed to bring both beauty and functionality to your space.",
    image: bathroom.src,
    products: [
      {
        productTitle: "Bathrrom",
        productDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        productTitle: "Vanity",
        productDescription:
          "Elevate your bathroom with a custom vanity that combines elegance and storage.",
      },
      {
        productTitle: "Laundry",
        productDescription:
          "Maximise laundry space with a durable, water-resistant custom benchtop for a sleek, organised utility area.",
      },
    ],
  },
  {
    title: "Office",
    description:
      "Create a functional and stylish workspace with a custom office tabletop. Available in a variety of materials, colours, and finishes, our office surfaces are designed to boost productivity while adding a modern touch to your office environment.",
    image: office.src,
    products: [
      {
        productTitle: "Table Tops",
        productDescription:
          "Create the perfect workspace with a custom office tabletop, offering durable options like timber, stone, or laminate.",
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
