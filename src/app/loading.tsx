import Spinner from "@/components/modules/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-background z-[99999]">
      <div className="w-full h-full flex items-center justify-center gap-2">
        <span className="inline-block text-2xl font-bold">Loading</span>
        <Spinner size={30} />
      </div>
    </div>
  );
};

export default Loading;
