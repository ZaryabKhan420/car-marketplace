import React from "react";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { TbManualGearbox } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const CarItem = ({ car }) => {
  const navigate = useNavigate();
  return (
    <Link
      to={`/listing-details/${car.id}`}
      className="hover:shadow-md cursor-pointer relative rounded-lg bg-white border"
    >
      <h2 className="absolute top-7 left-2 bg-green-500 text-white px-3 py-1 text-sm rounded-[50rem]">
        {car.condition}
      </h2>
      <div className="w-full h-[200px] bg-black rounded-t-xl">
        <img
          src={car.images[0]?.imageUrl}
          alt={car.listingTitle}
          loading="lazy"
          className="rounded-t-xl w-full h-full object-cover"
        />
      </div>
      <div className="px-4 py-1">
        <h1 className="text-lg font-bold my-1 text-black">
          {car.listingTitle}
        </h1>
        <Separator />
        <div className="flex justify-between items-center w-full my-3">
          <div className="flex flex-col justify-center items-center gap-2">
            <LuFuel className="text-lg" />
            <h2 className="text-sm">{car.mileage}</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <SlSpeedometer className="text-lg" />
            <h2 className="text-sm">{car.fuelType}</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <TbManualGearbox className="text-lg" />
            <h2 className="text-sm">{car.transmission}</h2>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-center my-1">
          <h2 className="text-xl font-bold">${car.sellingPrice}</h2>
          <button
            onClick={() => navigate(`/listing-details/${car.id}`)}
            className="text-md font-bold text-primary flex justify-center items-center gap-2"
          >
            view details
            <FiExternalLink />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
