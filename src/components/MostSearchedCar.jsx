import React, { useState, useEffect } from "react";
import { CarItem } from "../components/Index";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "../../configs/index";
import { carImages, carListing } from "../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import formatResult from "../assets/Shared/Service";

const MostSearchedCar = () => {
  const [carList, setCarList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      getUserCarListing();
    }
  }, [user]);

  const getUserCarListing = async () => {
    const dbResult = await db
      .select()
      .from(carListing)
      .leftJoin(carImages, eq(carListing.id, carImages.carListingId));
    let result = await formatResult(dbResult);
    setCarList(result);
  };
  return (
    <div className="my-8 container">
      <h1 className="font-bold text-3xl text-center">Most Searched Cars</h1>
      <div className="my-16 mx-8">
        <Carousel>
          <CarouselContent>
            {carList.map((car, idx) => (
              <CarouselItem
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                key={idx}
              >
                <CarItem car={car} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default MostSearchedCar;
