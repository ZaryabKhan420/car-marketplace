import React from "react";
import CarSpecification from "../../assets/Shared/CarSpecification";
import IconField from "../../pages/add-listing/IconField";
const Specification = ({ carDetails }) => {
  return (
    <div className="mt-5">
      {carDetails.listingTitle ? (
        <div className="p-5 rounded-xl border border-slate-300 shadow-md">
          {CarSpecification.map((item, index) => {
            return (
              <div
                key={index}
                className="my-5 flex justify-between items-center"
              >
                <h2 className="flex gap-2 items-center text-sm font-bold">
                  <IconField icon={item.icon} /> {item.label}
                </h2>
                <h2 className="text-sm font-semibold">
                  {carDetails[item.name]}
                </h2>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-[600px] bg-slate-300 animate-pulse rounded-xl"></div>
      )}
    </div>
  );
};

export default Specification;
