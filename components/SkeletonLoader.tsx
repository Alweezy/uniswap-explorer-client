import React from "react";
export const SkeletonLoader = () => {
  return (
    <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
      <div className="flex flex-col space-y-3">
        <div className="w-40 bg-slate-300 h-8 rounded-md"></div>
      </div>
    </div>
  );
};
