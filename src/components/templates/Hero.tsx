"use client";
import React from "react";
import MaxWidthWrapper from "../modules/MaxWidthWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/Hero.modules.css";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ShoppingBag, Sparkles, Truck } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="py-8 px-2">
      <MaxWidthWrapper>
        <div className="w-full rounded-lg overflow-hidden">
          <Swiper
            speed={1000}
            parallax={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="hero-swiper"
          >
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                backgroundImage: "url(/images/hero.png)",
              }}
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide className="space-y-6 md:space-y-7 lg:space-y-8 px-8 py-12 md:px-12 md:py-16 lg:px-20">
              <div
                className="flex items-center flex-col gap-2 md:gap-4 md:py-2 lg:py-4 lg:flex-row"
                data-swiper-parallax="-300"
              >
                <Image
                  src="/images/favicon.png"
                  width={100}
                  height={100}
                  alt="icon"
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
                <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                  MEGA Toys
                </h1>
              </div>
              <div data-swiper-parallax="-200">
                <p className="text-lg font-medium md:text-2xl lg:text-3xl text-center lg:text-start">
                  Big size toys for little kids 😎.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center gap-8 lg:justify-start lg:items-start"
                data-swiper-parallax="-100"
              >
                <p className="text-sm max-w-[500px] md:text-md lg:text-lg text-center lg:text-start">
                  Make your child happier. Browse through the products and we
                  will guarantee that you will find the most suitable product
                  for your child.
                </p>
                <Link
                  href="/products"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "text-lg lg:text-2xl w-max [&_svg]:size-6"
                  )}
                >
                  Get started <Sparkles />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="space-y-6 md:space-y-7 lg:space-y-8 px-8 py-12 md:px-12 md:py-16 lg:px-20">
              <div
                className="flex items-center flex-col gap-2 md:gap-4 md:py-2 lg:py-4 lg:flex-row"
                data-swiper-parallax="-300"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-blue-700 rounded-lg flex items-center justify-center">
                  <Truck size={55} />
                </div>
                <h3 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                  Free Shipping
                </h3>
              </div>
              <div data-swiper-parallax="-200">
                <p className="text-lg font-medium md:text-2xl lg:text-3xl text-center lg:text-start">
                  Free shipping in all USA states.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center gap-8 lg:justify-start lg:items-start"
                data-swiper-parallax="-100"
              >
                <p className="text-sm max-w-[500px] md:text-md lg:text-lg text-center lg:text-start">
                  We charge no shipping fees if you are shopping from USA. Also
                  the shipping fee is very low for other countries.
                </p>
                <Link
                  href="/products"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "text-lg lg:text-2xl w-max [&_svg]:size-6"
                  )}
                >
                  Go to shop <ShoppingBag />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="space-y-6 md:space-y-7 lg:space-y-8 px-8 py-12 md:px-12 md:py-16 lg:px-20">
              <div
                className="flex items-center flex-col gap-2 md:gap-4 md:py-2 lg:py-4 lg:flex-row"
                data-swiper-parallax="-300"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-emerald-700 rounded-lg flex items-center justify-center">
                  <BadgeCheck size={55} />
                </div>
                <h3 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                  High quality
                </h3>
              </div>
              <div data-swiper-parallax="-200">
                <p className="text-lg font-medium md:text-2xl lg:text-3xl text-center lg:text-start">
                  High quality materials and products.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center gap-8 lg:justify-start lg:items-start"
                data-swiper-parallax="-100"
              >
                <p className="text-sm max-w-[500px] md:text-md lg:text-lg text-center lg:text-start">
                  All our products have high quality raw materials and are
                  produced with the highest standards. We also provide support,
                  maintenance and repair for our customers.
                </p>
                <Link
                  href="/products"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "text-lg lg:text-2xl w-max [&_svg]:size-6"
                  )}
                >
                  Go to shop <ShoppingBag />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
