import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function BookDetailsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <Skeleton className="w-full h-96 rounded-lg" />

        <div className="flex flex-col gap-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full mt-4" />
          <Skeleton className="h-24 w-full rounded" />
        </div>
      </div>
    </div>
  );
}

export default BookDetailsSkeleton;
