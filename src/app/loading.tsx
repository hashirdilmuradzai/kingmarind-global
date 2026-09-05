import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FCFBF7] pt-28 pb-20 animate-pulse">
      {/* Skeleton Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="h-6 w-32 bg-[#315C38]/10 rounded-full" />
        <div className="h-12 sm:h-16 w-3/4 max-w-2xl bg-[#315C38]/15 rounded-2xl" />
        <div className="h-5 w-full max-w-xl bg-[#315C38]/10 rounded-lg" />
        
        {/* Skeleton Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-[#F7F3E8] rounded-2xl border border-[#315C38]/10 overflow-hidden space-y-4 p-5"
            >
              <div className="h-48 w-full bg-[#315C38]/10 rounded-xl" />
              <div className="h-5 w-2/3 bg-[#315C38]/15 rounded-md" />
              <div className="h-4 w-full bg-[#315C38]/8 rounded-md" />
              <div className="h-8 w-1/3 bg-[#315C38]/15 rounded-lg pt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
