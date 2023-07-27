import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center justify-center h-16 ">
          <div className="flex items-center ">
            <div className="hidden md:block">
              <ul className="ml-10 flex items-center space-x-8">
                <li className="text-gray-300 hover:text-white cursor-pointer">
                  <img
                    className="w-5"
                    src="https://i.ibb.co/Tm3X6wB/Untitled-2.png"
                    alt=""
                  />
                </li>
                <li className="text-gray-300 hover:text-white cursor-pointer">
                  Shop
                </li>
                <li className="text-gray-300 hover:text-white cursor-pointer">
                  Product
                </li>
                <li className="text-gray-300 hover:text-white cursor-pointer">
                  Services
                </li>
                <li className="text-gray-300 hover:text-white cursor-pointer">
                  Contact
                </li>
                <li className="text-gray-300 hover:text-white cursor-pointer">
                  Contribution
                </li>
                <li className="text-gray-300 hover:text-white cursor-pointer">
                  <FiSearch></FiSearch>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center md:hidden  ">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <HiMenuAlt4
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              ></HiMenuAlt4>

              <MdClose
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              ></MdClose>
            </button>

            <img
              className="w-5 text-gray-300 hover:text-white cursor-pointer"
              src="https://i.ibb.co/Tm3X6wB/Untitled-2.png"
              alt=""
            />

            <ul>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                <FiSearch></FiSearch>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <Link className="text-gray-300 hover:text-white cursor-pointer">
            Shop
          </Link>
          <Link className="text-gray-300 hover:text-white cursor-pointer">
            Product
          </Link>
          <Link className="text-gray-300 hover:text-white cursor-pointer">
            Services
          </Link>
          <Link className="text-gray-300 hover:text-white cursor-pointer">
            Contact
          </Link>
          <Link className="text-gray-300 hover:text-white cursor-pointer">
            Contribution
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
