import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const services = [
    {
      id: 1,
      title: "Sell Cars",
    },
    {
      id: 2,
      title: "Buy Cars",
    },
    {
      id: 3,
      title: "Rent Cars",
    },
    {
      id: 4,
      title: "Finance",
    },
  ];
  const company = [
    {
      id: 1,
      title: "About us",
    },
    {
      id: 2,
      title: "Contact",
    },
    {
      id: 3,
      title: "Jobs",
    },
    {
      id: 4,
      title: "Press kit",
    },
  ];
  const Legal = [
    {
      id: 1,
      title: "Terms of use",
    },
    {
      id: 2,
      title: "Privacy policy",
    },
    {
      id: 3,
      title: "Cookie policy",
    },
  ];
  return (
    <footer className="footer container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center items-start mt-24 my-8 gap-5">
      <aside className="flex flex-col gap-5">
        <img src={Logo} alt="Logo" loading="lazy" />
        <p>Delivering Services since 1992.</p>
      </aside>
      <nav className="flex flex-col justify-center items-center gap-3">
        <h6 className="footer-title text-lg  font-bold ">Services</h6>
        {services.map((item) => (
          <Link
            to="#"
            key={item.id}
            className="hover:scale-105 transition-all duration-300 hover:text-primary text-sm"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <nav className="flex flex-col justify-center items-center gap-3">
        <h6 className="footer-title text-lg  font-bold ">Company</h6>
        {company.map((item) => (
          <Link
            to="#"
            key={item.id}
            className="hover:scale-105 transition-all duration-300 hover:text-primary text-sm"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <nav className="flex flex-col justify-center items-center gap-3">
        <h6 className="footer-title text-lg  font-bold ">Legal</h6>
        {Legal.map((item) => (
          <Link
            to="#"
            key={item.id}
            className="hover:scale-105 transition-all duration-300 hover:text-primary text-sm"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
