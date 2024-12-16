import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SimilarProductsSkeleton = () => {
  return (
    <>
      <Skeleton className="border rounded-sm p-2 bg-secondary space-y-2 w-full max-w-72 lg:max-w-full mx-auto">
        <div className="flex items-center gap-2">
          <Skeleton className="w-24 h-12 shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-3/4 h-4" />
            <div className="flex w-full items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="w-12 h-4" />
              <Skeleton className="w-12 h-4" />
            </div>
          </div>
        </div>
      </Skeleton>
      <Skeleton className="border rounded-sm p-2 bg-secondary space-y-2 w-full max-w-72 lg:max-w-full mx-auto">
        <div className="flex items-center gap-2">
          <Skeleton className="w-24 h-12 shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-3/4 h-4" />
            <div className="flex w-full items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="w-12 h-4" />
              <Skeleton className="w-12 h-4" />
            </div>
          </div>
        </div>
      </Skeleton>
      <Skeleton className="border rounded-sm p-2 bg-secondary space-y-2 w-full max-w-72 lg:max-w-full mx-auto">
        <div className="flex items-center gap-2">
          <Skeleton className="w-24 h-12 shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-3/4 h-4" />
            <div className="flex w-full items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="w-12 h-4" />
              <Skeleton className="w-12 h-4" />
            </div>
          </div>
        </div>
      </Skeleton>
    </>
  );
};

export default SimilarProductsSkeleton;
