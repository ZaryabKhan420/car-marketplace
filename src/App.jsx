import React from "react";
import { Header, Footer } from "./components/Index";
import { Outlet, ScrollRestoration } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
