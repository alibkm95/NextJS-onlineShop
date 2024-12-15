import { ShieldAlert } from "lucide-react";
import React from "react";

const SwiperNotFound = () => {
  return (
    <div className="w-full p-8 flex items-center justify-center flex-col">
      <h5 className="text-lg text-center flex items-center gap-2 mb-4 font-bold md:text-xl lg:text-2xl">
        <ShieldAlert className="text-destructive" />
        Loading data error!
      </h5>
      <p className="text-center max-w-xl text-sm lg:text-base">
        Please check your connection or proxy settings and try to reload this
        page.
      </p>
    </div>
  );
};

export default SwiperNotFound;
