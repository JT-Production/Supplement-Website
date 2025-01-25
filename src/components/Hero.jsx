import React from "react";
import heroBanner from "../assets/billboard-img.jpg";

const Hero = () => {
  return (
    <section className="py-28 px-20">
      <div className="container flex justify-center">
        <div className="grid md:grid-cols-2 lg:gap-5  text-white place-content-center">
          <div className="  px-5 text-center order-2 lg:order-first ">
            <h1 className="lg:text-6xl/[1.2] text-5xl/[1.2]  font-bold   lg:mt-20 ">
              Pre Workout Supplements.
            </h1>
            <p className="font-thin font-monts text-[15px]">
              Write here about your product short description.
            </p>
            <button className="px-10 py-3 bg-cyan-600 rounded-full mt-5 font-monts text-black text-sm uppercase">
              Purchase
            </button>
          </div>
          <div className="flex justify-center lg:h-full h-min px-5">
            <img
              src={heroBanner}
              alt=""
              className="lg:h-4/5 rounded-3xl h-3/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
