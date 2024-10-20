"use client";
import { TestimonialType } from "@/components/templates/Testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TestimonialsSwiperPropsType = {
  testimonials: TestimonialType[];
};

const TestimonialSwiper = ({ testimonials }: TestimonialsSwiperPropsType) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            // shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            // shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="testimonialSwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="h-full">
            <div className="w-[90%] h-full mx-auto border p-4 rounded-lg bg-background flex flex-col items-center justify-center gap-4">
              <div className="space-y-2">
                <Quote />
                <p className="text-xl md:text-2xl lg:text-3xl text-center">
                  {testimonial.text}
                </p>
                <Quote className="ms-auto" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>{testimonial.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSwiper;
