"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import SwiperCore from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import "@/styles/Gallery.modules.css";

interface GalleryProps {
  imgSet: string[];
}

const Gallery = ({ imgSet }: GalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  return (
    <div className="rounded-lg bg-secondary w-full max-w-[600px] p-2 mx-auto h-max">
      <div>
        <Swiper
          zoom={true}
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Zoom, Thumbs]}
          className="swiperGallery cursor-move"
        >
          {imgSet.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <Image
                  src={`/uploads/products/${img}`}
                  className="rounded-md w-full"
                  width={640}
                  height={360}
                  alt="product gallery image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="swiperGalleryThumb mt-4 cursor-pointer"
        >
          {imgSet.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`/uploads/products/${img}`}
                width={640}
                height={360}
                className="rounded-md"
                alt="product gallery thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
