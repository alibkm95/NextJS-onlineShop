import React from "react";
import MaxWidthWrapper from "../modules/MaxWidthWrapper";
import { Separator } from "../ui/separator";
import TestimonialSwiper from "../modules/swiper/TestimonialSwiper";

export type TestimonialType = {
  id: number;
  name: string;
  text: string;
  cover: string;
};

const Testimonials = () => {
  const testimonials: TestimonialType[] = [
    {
      id: 1,
      name: "Lionel Messi",
      text: "some text as place holder some text as place holder some text as place holder some text as place holder",
      cover: "",
    },
    {
      id: 2,
      name: "Robert Downey.Jr",
      text: "some text as place holder",
      cover: "",
    },
    {
      id: 3,
      name: "Rebecca Ferguson",
      text: "some text as place holder",
      cover: "",
    },
    {
      id: 4,
      name: "Soroush Lashkari",
      text: "some text as place holder",
      cover: "",
    },
    {
      id: 5,
      name: "Michael Jackson",
      text: "some text as place holder",
      cover: "",
    },
  ];

  return (
    <section className="py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="w-full max-w-3xl mx-auto mb-6">
          <div className="flex items-center gap-2">
            <Separator className="flex-1 bg-primary" />
            <h5 className="text-xl md:text-2xl lg:text-4xl font-bold">
              What our Customers say
            </h5>
            <Separator className="flex-1 bg-primary" />
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <TestimonialSwiper testimonials={testimonials} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
