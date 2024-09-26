import React from "react";
import { FaCheck } from "react-icons/fa6";
const Features = ({ features }) => {
  return (
    <div className="mt-5">
      {features ? (
        <div className="p-8 bg-white rounded-xl border border-slate-300 shadow-md">
          <h2 className="font-medium text-2xl">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
            {Object.entries(features).map(([features, value]) => {
              return (
                <div className="flex gap-2 items-center" key={features}>
                  <FaCheck className="text-lg rounded-full bg-blue-200 text-primary p-1" />
                  <h2 className="capitalize text-sm">
                    {features}-{value}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="h-[300px] w-full bg-slate-300 animate-pulse rounded-xl"></div>
      )}
    </div>
  );
};

export default Features;
