import React from "react";

const TestimonialCard = ({ value }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 px-6 pb-5 shadow-lg  rounded-xl ml-5 mb-5 dark:bg-gray-800">
      <div className="flex w-full justify-between items-start py-2 text-black/20">
        <img
          src={value.img}
          alt="Testimonial"
          className="rounded-full w-[80px] mb-5"
        />
        <p className="text-9xl font-serif">,,</p>
      </div>
      <p className="text-sm font-sans text-gray-500">{value.description}</p>
      <h2 className="text-xl font-bold font-cursive text-brandDark/70">
        {value.name}
      </h2>
    </div>
  );
};

export default TestimonialCard;
