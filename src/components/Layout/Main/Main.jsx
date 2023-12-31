import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-260px)]">
        <Outlet></Outlet>
      </div>
      <div className="bg-[#F5F5F7] ">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
