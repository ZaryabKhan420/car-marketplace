import React from "react";
import { Button } from "../ui/button";
import { MdOutlineLocalOffer } from "react-icons/md";
const Pricing = ({ carDetails }) => {
  return (
    <div>
      {carDetails.sellingPrice ? (
        <div className="p-10 rounded-xl border border-slate-300 shadow-md">
          <h2>Our Price</h2>
          <h2 className="font-bold text-4xl">${carDetails.sellingPrice}</h2>
          <Button className="w-full mt-2" size="lg">
            {" "}
            <MdOutlineLocalOffer className="text-lg mr-2" /> Make an Offer
          </Button>
        </div>
      ) : (
        <div className="w-full h-[100px] bg-slate-300 animate-pulse rounded-xl"></div>
      )}
    </div>
  );
};

export default Pricing;
