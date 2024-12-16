import Image from "next/image";
import React from "react";

const SimilarProductsNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-secondary border p-4 w-full rounded">
      <Image
        src="/images/404.svg"
        width={300}
        height={300}
        alt="not found"
        className="w-full h-full max-w-[180px] max-h-[180px]"

      />
      <p className="text-sm font-bold">Can not find similar products!</p>
    </div>
  );
};

export default SimilarProductsNotFound;
