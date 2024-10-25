"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import Image from "next/image";

const fakeGallery = [
  "https://placehold.co/640x360/orange/white/png",
  "https://placehold.co/640x360/pink/white/png",
  "https://placehold.co/640x360/red/white/png",
  "https://placehold.co/640x360/blue/white/png",
];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  return (
    <div className="p-2 rounded-lg bg-secondary">
      <Swiper
        zoom={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Zoom, Navigation, Thumbs]}
        className="swiperGallery aspect-video"
      >
        {fakeGallery.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <Image
                src={img}
                className="w-full rounded-md"
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
        className="swiperGalleryThumb mt-4"
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
  );
};

export default Gallery;
