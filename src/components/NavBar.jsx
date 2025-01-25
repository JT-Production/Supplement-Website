import React from "react";
import logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="backdrop-blur-sm fixed  w-full ">
      <div className="container ">
        <div className="navbar  py-5 md:px-8 flex place-items-center justify-between">
          <div className="navbar__brand ms-5">
            <a href="/">
              <img className="lg:h-8 w-auto h-6" src={logo} alt="React Jobs" />
            </a>
          </div>
          <div className="text-white  me-5 lg:hidden ">
            <button>
             <IoIosMenu className="text-white text-2xl"/>
            </button>
          </div>
          <div className="navbar__menu mx-auto hidden lg:block ">
            <ul className="flex  gap-8 uppercase text-white font-normal text-sm tracking-widest font-monts ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Reviews</a>
              </li>
              <li>
                <a href="/">Video</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">FAQS</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
