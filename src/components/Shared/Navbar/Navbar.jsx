import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logoblk from "../../../assets/logoBlack.png";
import Logo from "../../../assets/hompageLogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:bg-[#313132] bg-[#f4f4f6] z-3 fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl px-4 mx-auto lg:px-8 lg:py-0 py-2">
        <div className="lg:flex md:flex items-center justify-center lg:h-12 sm:h-8">
          <div className="">
            <div className="hidden md:block">
              <ul
                className="flex items-center justify-between gap-10 lg:gap-32 font-[12px] lg:text-[#F3F3F3] text-black"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <li className=" hover:text-gray-900 cursor-pointer hidden md:block lg:hidden md:ml-10">
                  <img
                    className="w-10"
                    // src="https://i.ibb.co/Tm3X6wB/Untitled-2.png"
                    src={Logoblk}
                    alt=""
                  />
                </li>
                <li className=" hover:text-gray-900 cursor-pointer hidden lg:block">
                  <img
                    className="w-10"
                    // src="https://i.ibb.co/Tm3X6wB/Untitled-2.png"
                    src={Logo}
                    alt=""
                  />
                </li>
                <li className="font-Montserrat hover:text-gray-400 cursor-pointer text-[15px]">Shop</li>
                <li className="font-Montserrat hover:text-gray-400 cursor-pointer text-[15px]">Product</li>
                <li className="font-Montserrat hover:text-gray-400 cursor-pointer text-[15px]">Services</li>
                <li className="font-Montserrat hover:text-gray-400 cursor-pointer text-[15px]">Contact</li>
                <li className="font-Montserrat hover:text-gray-400 cursor-pointer text-[15px]">
                  Contribution
                </li>
                <li className=" hover:text-gray-400 cursor-pointer">
                  <FiSearch className="text-xl"></FiSearch>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center md:hidden ">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only ">Open main menu</span>
              <HiMenuAlt4
                className={`${isOpen ? "hidden" : "block"} h-6 w-6 text-black`}
              ></HiMenuAlt4>

              <MdClose
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              ></MdClose>
            </button>

            <Link to="/"><img
              className="w-6 text-black cursor-pointer"
              // src={Logo}
              src="https://i.ibb.co/3m1t5kt/Untitled-2-removebg-preview.png"
              alt=""
            /></Link>

            <ul>
              <li className="text-black cursor-pointer">
                <FiSearch className="text-lg"></FiSearch>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col">
          <Link className="font-Montserrat text-gray-900 hover:text-gray-400 cursor-pointer">
            Shop
          </Link>
          <Link className="font-Montserrat text-gray-900 hover:text-gray-400 cursor-pointer">
            Product
          </Link>
          <Link className="font-Montserrat text-gray-900 hover:text-gray-400 cursor-pointer">
            Services
          </Link>
          <Link className="text-gray-900 hover:text-gray-400 cursor-pointer">
            Contact
          </Link>
          <Link className="font-Montserrat text-gray-900 hover:text-gray-400 cursor-pointer">
            Contribution
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
