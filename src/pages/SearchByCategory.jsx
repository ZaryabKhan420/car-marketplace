import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Search, CarItem } from "../components/Index";
import { db } from "../../configs/index";
import { carImages, carListing } from "../../configs/schema";
import { eq } from "drizzle-orm";
import formatResult from "@/assets/Shared/Service";
const SearchByCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [loader, setLoader] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoader(true);
    const load = async () => {
      await getCategoryData();
    };
    load();
  }, []);

  const getCategoryData = async () => {
    const result = await db
      .select()
      .from(carListing)
      .innerJoin(carImages, eq(carListing.id, carImages.carListingId))
      .where(eq(carListing.category, category));
    const response = await formatResult(result);
    setCategoryList(response);
    setLoader(false);
  };

  return (
    <div className="my-8">
      <div className="bg-[#bfcafa] flex justify-center">
        <div className="py-16 lg:w-[50rem] md:w-[45rem] sm:[25rem] flex justify-center">
          <Search />
        </div>
      </div>
      <div className="container my-8">
        <h2 className="text-3xl font-bold text-black">{category}</h2>
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
          ) : categoryList.length === 0 ? (
            <div>This Category has no Cars.</div>
          ) : (
            categoryList.map((car, idx) => {
              return <CarItem car={car} key={idx} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchByCategory;
