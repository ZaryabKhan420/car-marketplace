import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CarMakes, Pricing } from "../assets/Shared/Data";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [car, setCar] = useState(null);
  const [make, setMake] = useState(null);
  const [price, setPrice] = useState(null);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?car=${car}&make=${make}&price=${price}`);
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center md:flex-row md:mt-8 md:mb-16 py-5 px-8 rounded-lg md:rounded-full bg-white">
      <Select onValueChange={(value) => setCar(value)}>
        <SelectTrigger className="w-[180px] text-md border-none outline-none shadow-none ">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="Certified PreOwned">Certified PreOwned</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className=" hidden md:block h-14" />
      <Select onValueChange={(value) => setMake(value)}>
        <SelectTrigger className="w-[180px] text-md  border-none outline-none shadow-none">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {CarMakes.map((value) => (
            <SelectItem value={value.name} key={value.id}>
              {value.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block h-14" />
      <Select onValueChange={(value) => setPrice(value)}>
        <SelectTrigger className="w-[180px] text-md  border-none outline-none shadow-none">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Pricing.map((price) => (
            <SelectItem value={price.amount} key={price.id}>
              $ {price.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span
        onClick={handleSearch}
        className="bg-primary w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <IoMdSearch className="text-xl text-white" />
      </span>
    </div>
  );
};

export default Search;
