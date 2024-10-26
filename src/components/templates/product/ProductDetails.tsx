import Gallery from "@/components/modules/swiper/Gallery";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="min-h-96">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 max-w-full">
        <Gallery />
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProductDetails;
