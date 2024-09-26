import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <header className="container flex flex-wrap gap-5 sm:gap-0 justify-center sm:justify-between items-center p-5 shadow-sm">
      <Link to="/">
        <img
          src={Logo}
          alt="Calescence"
          loading="lazy"
          width={150}
          height={100}
        />
      </Link>
      <ul className="hidden md:flex justify-center items-center gap-16 font-semibold">
        <Link
          to="/"
          className="hover:scale-105 transition-all duration-300 hover:text-primary"
        >
          Home{" "}
        </Link>
        <Link
          to="/"
          className="hover:scale-105 transition-all duration-300 hover:text-primary"
        >
          Search{" "}
        </Link>
        <Link
          to="/"
          className="hover:scale-105 transition-all duration-300 hover:text-primary"
        >
          New
        </Link>
        <Link
          to="/"
          className="hover:scale-105 transition-all duration-300 hover:text-primary"
        >
          PreOwned{" "}
        </Link>
      </ul>
      <div className="flex justify-center items-center gap-2 sm:gap-5">
        {isSignedIn ? (
          <>
            <UserButton />
            <Link to="/profile">
              <Button>Submit Listing</Button>
            </Link>
          </>
        ) : (
          <SignInButton forceRedirectUrl="/">
            <Link to="/profile">
              <Button>Submit Listing</Button>
            </Link>
          </SignInButton>
        )}
      </div>
    </header>
  );
};

export default Header;
