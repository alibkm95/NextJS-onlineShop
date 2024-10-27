import React from "react";

interface ProductDetailBoxProps {
  title: string;
  text: string;
  children: React.ReactNode;
  bg: string;
}

const ProductDetailBox: React.FC<ProductDetailBoxProps> = ({
  title,
  children,
  bg,
  text,
}) => {
  return (
    <div className="w-full max-w-64 border rounded-md p-4">
      <p className="text-sm text-center md:text-base md:text-start">{title}:</p>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start gap-2 pt-2 px-2">
        <div className={`rounded-md text-white p-2 ${bg}`}>{children}</div>
        <span className="text-xl font-semibold md:text-2xl xl:text-3xl">
          {text}
        </span>
      </div>
    </div>
  );
};

export default ProductDetailBox;
