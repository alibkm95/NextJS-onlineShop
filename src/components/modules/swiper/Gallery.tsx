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

const fakeGallery = [
  "https://placehold.co/640x360/orange/white/png",
  "https://placehold.co/640x360/pink/white/png",
  "https://placehold.co/640x360/red/white/png",
  "https://placehold.co/640x360/blue/white/png",
];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  return (
    <div className="rounded-lg bg-secondary max-w-full p-2">
      <div>
        <Swiper
          zoom={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Zoom, Thumbs]}
          className="swiperGallery cursor-move"
        >
          {fakeGallery.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <Image
                  src={img}
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
          onSwiper={(swiper: SwiperCore) => setThumbsSwiper(swiper)}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="swiperGalleryThumb mt-4 cursor-pointer"
        >
          {fakeGallery.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
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
