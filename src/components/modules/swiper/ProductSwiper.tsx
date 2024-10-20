"use client";
import React from "react";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import ProductCartMD from "@/components/modules/itemBox/ProductCartMD";

type ProductType = {
  id: number;
  title: string;
  price: number;
  img: string;
};

type ProductSwiperPropsType = {
  products: ProductType[];
  title: string;
  icon: React.ReactNode;
  href?: string;
  showButton?: boolean;
};

const ProductSwiper = ({
  products,
  title,
  icon,
  href,
  showButton,
}: ProductSwiperPropsType) => {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between gap-2 flex-wrap border-b mb-4 pb-4">
          <div className="flex items-center gap-2">
            {icon}
            <h4 className="font-bold md:text-xl lg:text-3xl">{title}</h4>
          </div>
          {showButton && (
            <Link href={href || "/products"} className={buttonVariants({size: 'sm'})}>
              more <CircleArrowRight />
            </Link>
          )}
        </div>
        <div className="py-2">
          <Swiper
            slidesPerView={1}
            loop={products.length > 4 ? true : false}
            grabCursor={true}
            autoplay={
              products.length > 4
                ? {
                    delay: 5000,
                    disableOnInteraction: false,
                  }
                : false
            }
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="productSwiper bg-transparent"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="pt-2 pb-12 px-1">
                <ProductCartMD />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductSwiper;
