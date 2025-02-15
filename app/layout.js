import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "EXPRESS FORM | Premium Australian Caravan and Home Benchtops",
  description:
    "Discover our premium benchtops for your caravan or home, from sleek modern designs to bold shades. Custom-made to any size, shape, or material, our benchtops blend style and durability, perfect for your kitchen bench, bathrooms, caravans and outdoor spaces across Australia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          media="all"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
          media="all"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          media="all"
        />
        <meta
          name="google-site-verification"
          content="-oq6hg_3hsIaDoEb9puZytC9lcVtLRFS2e--K8Mz9YE"
        />
      </head>
      <body className={`antialiased h-[100vh]`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
