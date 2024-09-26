import React from "react";
import { HiCalendarDays } from "react-icons/hi2";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
const HeaderDetail = ({ carDetails }) => {
  return (
    <div>
      {carDetails.listingTitle ? (
        <div>
          <h2 className="font-bold text-3xl">{carDetails.listingTitle}</h2>
          <p className="text-sm mt-2">{carDetails?.tagline}</p>

          <div className="my-3 flex flex-wrap gap-5">
            <div className="flex gap-1 items-center bg-blue-50 rounded-full p-2">
              <HiCalendarDays className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm">{carDetails.year}</h2>
            </div>
            <div className="flex gap-1 items-center bg-blue-50 rounded-full p-2">
              <IoSpeedometerOutline className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm">
                {carDetails.mileage} miles
              </h2>
            </div>
            <div className="flex gap-1 items-center bg-blue-50 rounded-full p-2">
              <TbManualGearbox className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm">
                {carDetails.transmission}
              </h2>
            </div>
            <div className="flex gap-1 items-center bg-blue-50 rounded-full p-2">
              <LuFuel className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm">{carDetails.fuelType}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[100px] bg-slate-300 animate-pulse rounded-xl"></div>
      )}
    </div>
  );
};

export default HeaderDetail;
