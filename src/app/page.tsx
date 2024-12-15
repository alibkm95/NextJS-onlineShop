"use client";
import ProductSwiper from "@/components/modules/swiper/ProductSwiper";
import ContactUsBanner from "@/components/templates/ContactUsBanner";
import Hero from "@/components/templates/Hero";
import Testimonials from "@/components/templates/Testimonials";
import { fetchProducts } from "@/store/features/ProductsSlice";
import { AppDispatch, RootState } from "@/store/store";
import { ProductType } from "@/types";
import { PackagePlus, Percent, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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

  const latestProducts = useMemo(() => {
    return products ? [...products].slice(0, 9) : null;
  }, [products]);
  const popularProducts = useMemo(() => {
    return products
      ? [...products].sort((a, b) => b.score - a.score).slice(0, 9)
      : null;
  }, [products]);
  const offProducts = useMemo(() => {
    return products
      ? [...products].filter((product) => product.off! > 0)
      : null;
  }, [products]);

  return (
    <main>
      <Hero />
      <ProductSwiper
        products={latestProducts}
        loading={loading}
        error={error}
        title="Latest products"
        icon={<PackagePlus className="text-blue-700 size-6 md:size-8" />}
        href="/products"
        showButton={true}
      />
      <ProductSwiper
        products={popularProducts}
        loading={loading}
        error={error}
        title="Most popular"
        icon={
          <Star className="text-amber-500 fill-amber-500 size-6 md:size-8" />
        }
        href="/products"
        showButton={true}
      />
      <ProductSwiper
        products={offProducts}
        loading={loading}
        error={error}
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
