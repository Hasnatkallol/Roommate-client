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
      <div className="min-h-[calc(100vh-316px)]">
        <main>
          <Outlet></Outlet>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
