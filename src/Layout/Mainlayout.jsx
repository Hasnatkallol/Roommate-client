import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Mainlayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
