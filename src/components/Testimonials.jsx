import React from "react";
import { TestimonialCard } from "./Index";
import img1 from "../assets/pic 1.jpg";
import img2 from "../assets/pic 2.jpg";
import img3 from "../assets/pic 3.jpg";
import img4 from "../assets/pic 4.jpg";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      description:
        "Found my perfect car quickly and easily. Great app with detailed filters and excellent support!",
      img: img1,
    },
    {
      id: 2,
      name: "Noah",
      description:
        "Seamless experience from start to finish. Easy search, great deals, and top-notch customer service!",
      img: img2,
    },
    {
      id: 3,
      name: "George",
      description:
        "This app made car buying effortless. Easy to use, lots of options, and fantastic results!",
      img: img3,
    },
    {
      id: 4,
      name: "Arthur",
      description:
        "Amazing app! Quick search, honest reviews, and smooth transaction. Highly recommended!",
      img: img4,
    },
  ];

  return (
    <div>
      <div className="container">
        <h1 className="font-bold text-3xl text-center">What our clients say</h1>
        <div className="grid my-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
          {testimonialData.map((value) => {
            return <TestimonialCard value={value} key={value.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
