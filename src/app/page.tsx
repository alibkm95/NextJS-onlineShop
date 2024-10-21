import ProductSwiper from "@/components/modules/swiper/ProductSwiper";
import ContactUsBanner from "@/components/templates/ContactUsBanner";
import Hero from "@/components/templates/Hero";
import Testimonials from "@/components/templates/Testimonials";
import { PackagePlus, Percent, Star } from "lucide-react";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "product 1",
      img: "/images/product-fallback.png",
      price: 160.0,
    },
    {
      id: 2,
      title: "product 2",
      img: "/images/product-fallback.png",
      price: 160.0,
    },
    {
      id: 3,
      title: "product 3",
      img: "/images/product-fallback.png",
      price: 160.0,
    },
    {
      id: 4,
      title: "product 4",
      img: "/images/product-fallback.png",
      price: 160.0,
    },
    {
      id: 5,
      title: "product 5",
      img: "/images/product-fallback.png",
      price: 160.0,
    },
  ];

  return (
    <main>
      <Hero />
      <ProductSwiper
        products={products}
        title="Latest products"
        icon={<PackagePlus className="text-blue-700 size-6 md:size-8" />}
        href="/products"
        showButton={true}
      />
      <ProductSwiper
        products={products}
        title="Most popular"
        icon={
          <Star className="text-amber-500 fill-amber-500 size-6 md:size-8" />
        }
        href="/products"
        showButton={true}
      />
      <ProductSwiper
        products={products}
        title="OFF"
        icon={<Percent className="text-emerald-700 size-6 md:size-8" />}
        href="/products"
        showButton={true}
      />
      <ContactUsBanner />
      <Testimonials />
    </main>
  );
}
