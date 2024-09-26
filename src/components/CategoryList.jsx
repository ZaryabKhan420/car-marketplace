import React from "react";
import { Category } from "../assets/Shared/Data";
import { Link } from "react-router-dom";
const CategoryList = () => {
  return (
    <div className="container p-5 mt-16 flex flex-col justify-center items-center gap-12">
      <h1 className="text-3xl font-bold">Browse by Type</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-8 place-items-center md:px-5">
        {Category.map((item) => (
          <Link
            to={`/search/${item.name}`}
            className="rounded-lg w-full flex flex-col justify-center items-center gap-5 border cursor-pointer hover:shadow-md p-3"
            key={item.id}
          >
            <img
              src={item.icon}
              alt="car-type"
              loading="lazy"
              width={30}
              height={30}
              className="font-bold"
            />
            <h2 className="text-sm font-bold">{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
