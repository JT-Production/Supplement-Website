import React from "react";
import logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";

const NavBar = () => {
  const [menu, setMenu] = React.useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="backdrop-blur-sm fixed  w-full ">
      <div className="container ">
        <div className="navbar  py-5 md:px-8 flex flex-wrap lg:place-items-center justify-between ">
          <div className="navbar__brand ms-5">
            <a href="/">
              <img className="lg:h-8 w-auto h-6" src={logo} alt="React Jobs" />
            </a>
          </div>
          <div className="text-white  me-5 lg:hidden ">
            <button onClick={toggleMenu} >
             <IoIosMenu className="text-white text-2xl"/>
            </button>
          </div>
          <div className={"navbar__menu lg:mx-auto hidden lg:block " }>
            <ul className="lg:flex  gap-8 uppercase text-white font-normal text-sm tracking-widest font-monts ">
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

        <div className={menu === true ? "navbar__menu lg:mx-auto  lg:block md:ms-12 ms-5" : "hidden"}>
            <ul className="lg:flex  gap-8 uppercase text-white font-normal text-sm tracking-widest font-monts">
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
    </nav>
  );
};

export default NavBar;
