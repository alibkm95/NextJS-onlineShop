"use client";
import ProductSwiper from "@/components/modules/swiper/ProductSwiper";
import ContactUsBanner from "@/components/templates/ContactUsBanner";
import Hero from "@/components/templates/Hero";
import Testimonials from "@/components/templates/Testimonials";
import { fetchProducts } from "@/store/features/ProductsSlice";
import { AppDispatch, RootState } from "@/store/store";
import { PackagePlus, Percent, Star } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (!products) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <main>
      <Hero />
      {products && !loading && !error && (
        <>
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
        </>
      )}
      <ContactUsBanner />
      <Testimonials />
    </main>
  );
}
