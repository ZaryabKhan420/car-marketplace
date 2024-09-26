import React from "react";
import contactImg from "../assets/contact.jpg";
import { MdCall } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { BsChatDotsFill } from "react-icons/bs";
const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Call",
      number: "021 123 145 14",
      btnText: "call now",
      icon: <MdCall className="text-[25px] text-primary " />,
    },
    {
      id: 2,
      title: "Chat",
      number: "021 123 145 14",
      btnText: "chat now",
      icon: <BsChatDotsFill className="text-[25px] text-primary " />,
    },
    {
      id: 3,
      title: "Video Call",
      number: "021 123 145 14",
      btnText: "Video Call now",
      icon: <BsChatDotsFill className="text-[25px] text-primary " />,
    },
    {
      id: 4,
      title: "Message",
      number: "021 123 145 14",
      btnText: "Message now",
      icon: <FaMessage className="text-[25px] text-primary " />,
    },
  ];

  return (
    <div
      id="contact"
      className="container grid grid-cols-1 lg:grid-cols-2 lg:gap-12 my-5 mt-10 sm:my-16 place-items-center transition-all duration-1000 "
    >
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex flex-col justify-start items-start gap-5">
          <h1 className="text-3xl text-black font-bold">Easy to contact us</h1>
          <p className="text-black">
            We always ready to help by providing the best services for you.{" "}
            <br /> We Beleive a good place to live can make your life better.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-32 place-items-center my-16 ml-6">
          {contactDetails.map((contact) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-5 "
                key={contact.id}
              >
                <div className="flex justify-center items-start gap-8">
                  {contact.icon}
                  <div>
                    <h2 className="text-lg font-semibold">{contact.title}</h2>
                    <p className="text-secondary">{contact.number}</p>
                  </div>
                </div>
                <button className="text-primary hover:text-white hover:bg-primary transition-all duration-300 w-full font-bold py-2 rounded-md">
                  {contact.btnText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="overflow-hidden rounded-t-[100rem] h-[25rem] sm:h-[30rem] lg:h-[35rem] w-[20rem] xs:w-[25rem] sm:w-[30rem] lg:place-self-end">
        <img
          src={
            "https://plus.unsplash.com/premium_photo-1682097382390-f28c7bd46b9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="w-full h-full object-cover"
          alt="value"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Contact;
