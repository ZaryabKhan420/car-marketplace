import React, { useEffect, useState } from "react";
import { CarItem, Search } from "../components/Index";
import { db } from "../../configs/index";
import { carImages, carListing } from "../../configs/schema";
import { useSearchParams } from "react-router-dom";
import formatResult from "@/assets/Shared/Service";
import { eq } from "drizzle-orm";
const SearchPage = () => {
  const [loader, setLoader] = useState(false);
  const [carList, setCarList] = useState([]);
  const [searchParams] = useSearchParams();
  const car = searchParams.get("car");
  const make = searchParams.get("make");
  const price = searchParams.get("price");

  useEffect(() => {
    setLoader(true);
    getSearchResult();
  }, [car, make, price]);

  const getSearchResult = async () => {
    const result = await db
      .select()
      .from(carListing)
      .innerJoin(carImages, eq(carListing.id, carImages.carListingId))
      .where(car != null && eq(carListing.condition, car))
      .where(make != null && eq(carListing.make, make));
    const response = formatResult(result);
    setCarList(response);
    setLoader(false);
    console.log(response);
  };

  return (
    <div className="my-8">
      <div className="bg-[#bfcafa] flex justify-center">
        <div className="py-16 lg:w-[50rem] md:w-[45rem] sm:[25rem] flex justify-center">
          <Search />
        </div>
      </div>
      <div className="container my-8">
        <h2 className="text-3xl font-bold text-black">Search Result</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {loader ? (
            [0, 1, 2, 3].map((item) => {
              return (
                <div
                  key={item}
                  className="h-[200px] animate-pulse bg-slate-300 rounded-xl"
                ></div>
              );
            })
          ) : carList.length === 0 ? (
            <div>This Search has no Cars.</div>
          ) : (
            carList.map((car, idx) => {
              return <CarItem car={car} key={idx} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
