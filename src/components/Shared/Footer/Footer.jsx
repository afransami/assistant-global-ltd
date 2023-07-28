import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#f5f5f7]">
        <div className="hidden lg:block ">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
            <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
              <p className="text-center text-sm text-gray-500 sm:text-left">
                More ways to trade: Call : +880 1317 68 66 95
              </p>

              <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebookSquare></FaFacebookSquare>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin></FaLinkedin>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitterSquare></FaTwitterSquare>
                  </a>
                </li>
              </ul>
            </div>
            <span className="divider"></span>

            <div className="flex items-center justify-between text-[#3D3D3D]">
              <div>
                <p>Assistant Global Inc.</p>
              </div>

              <div className="flex items-center justify-between gap-8 text-xs">
                <p className="text-[#3D3D3D]">Send Feedback</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Disclaimer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
            <div className="mt-16 border-t border-gray-100 pt-6 flex items-center justify-between">
              <p className="text-center text-sm text-gray-500 sm:text-left">
                Contact : +880 1407 04 78 58
              </p>

              <ul className="flex justify-center items-center gap-6 mt-0 ">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebookSquare></FaFacebookSquare>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin></FaLinkedin>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitterSquare></FaTwitterSquare>
                  </a>
                </li>
              </ul>
            </div>
            <span className="divider"></span>

            <div className="flex flex-col-reverse items-center justify-between text-[#3D3D3D]">
              <div>
                <p>Assistant Global Inc.</p>
              </div>

              <div className="flex items-center justify-between gap-8 mb-4 text-xs">
                <p>Privacy</p>{" "}
                <span className="divider divider-horizontal"></span>
                <p>Terms</p>{" "}
                <span className="divider divider-horizontal"></span>
                <p>Disclaimer</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
