import React, { useState, useEffect } from "react";
import {
  HeaderDetail,
  ImageGallery,
  Description,
  Features,
  Pricing,
  Specification,
  UserDetails,
  FinancialCalculator,
} from "../components/listingDetailComponents/Index";
import { useParams } from "react-router-dom";
import { db } from "../../configs/index";
import { carImages, carListing } from "../../configs/schema";
import formatResult from "../assets/Shared/Service";
import { eq } from "drizzle-orm";
import { MostSearchedCar } from "../components/Index";

const ListingDetails = () => {
  const [carDetails, setCarDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getDetails();
  }, [id]);

  const getDetails = async () => {
    const response = await db
      .select()
      .from(carListing)
      .innerJoin(carImages, eq(carListing.id, carImages.carListingId))
      .where(eq(carListing.id, id));
    const data = formatResult(response);
    setCarDetails(data[0]);
  };
  return (
    <div className="container my-12">
      <div>
        <HeaderDetail carDetails={carDetails} />
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-5 gap-5">
          <div className="md:col-span-2">
            <ImageGallery carDetails={carDetails} />
            <Description carDetails={carDetails} />
            <Features features={carDetails?.features} />
            <FinancialCalculator />
          </div>
          <div>
            <Pricing carDetails={carDetails} />
            <Specification carDetails={carDetails} />
            <UserDetails carDetails={carDetails} />
          </div>
        </div>
        <MostSearchedCar />
      </div>
    </div>
  );
};

export default ListingDetails;
