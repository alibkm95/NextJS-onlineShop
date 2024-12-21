import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SwiperSkeleton = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-around gap-4">
        <div className="bg-card w-64 rounded-xl overflow-hidden">
          <Skeleton className="w-full h-28 rounded-none" />
          <div className="p-4 space-y-4">
            <Skeleton className="w-[80%] h-4" />
            <div className="flex items-center gap-1 justify-between">
              <Skeleton className="w-[60%] h-4" />
              <Skeleton className="w-[15%] h-4" />
            </div>
            <Skeleton className="w-full h-[2px]" />
            <Skeleton className="w-24 h-8 ms-auto" />
          </div>
        </div>
        <div className="bg-card w-64 rounded-xl overflow-hidden hidden md:block">
          <Skeleton className="w-full h-28 rounded-none" />
          <div className="p-4 space-y-4">
            <Skeleton className="w-[80%] h-4" />
            <div className="flex items-center gap-1 justify-between">
              <Skeleton className="w-[60%] h-4" />
              <Skeleton className="w-[15%] h-4" />
            </div>
            <Skeleton className="w-full h-[2px]" />
            <Skeleton className="w-24 h-8 ms-auto" />
          </div>
        </div>
        <div className="bg-card w-64 rounded-xl overflow-hidden hidden lg:block">
          <Skeleton className="w-full h-28 rounded-none" />
          <div className="p-4 space-y-4">
            <Skeleton className="w-[80%] h-4" />
            <div className="flex items-center gap-1 justify-between">
              <Skeleton className="w-[60%] h-4" />
              <Skeleton className="w-[15%] h-4" />
            </div>
            <Skeleton className="w-full h-[2px]" />
            <Skeleton className="w-24 h-8 ms-auto" />
          </div>
        </div>
        <div className="bg-card w-64 rounded-xl overflow-hidden hidden xl:block">
          <Skeleton className="w-full h-28 rounded-none" />
          <div className="p-4 space-y-4">
            <Skeleton className="w-[80%] h-4" />
            <div className="flex items-center gap-1 justify-between">
              <Skeleton className="w-[60%] h-4" />
              <Skeleton className="w-[15%] h-4" />
            </div>
            <Skeleton className="w-full h-[2px]" />
            <Skeleton className="w-24 h-8 ms-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSkeleton;
