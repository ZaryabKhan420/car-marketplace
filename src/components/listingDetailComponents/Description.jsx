import React from "react";

const Description = ({ carDetails }) => {
  return (
    <div className="mt-5">
      {carDetails.listingDescription ? (
        <div className="p-8 rounded-xl bg-white shadow-md border border-slate-300">
          <h2 className="mb-3 font-medium text-2xl">Description</h2>
          <p className="text-sm">{carDetails.listingDescription}</p>
        </div>
      ) : (
        <div className="rounded-xl bg-slate-300 animate-pulse h-[100px] w-full"></div>
      )}
    </div>
  );
};

export default Description;
