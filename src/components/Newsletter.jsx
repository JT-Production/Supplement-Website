import React from "react";
import brand1 from '../assets/brand-1.png'
import brand2 from '../assets/brand-2.png'
import brand3 from '../assets/brand-3.png'
import brand4 from '../assets/brand-4.png'
import brand5 from '../assets/brand-5.png'

const Newsletter = () => {
  return (
    <section className="py-10 px-20">
      <div className="container text-center px-34">
        <h1 className=" text-white text-5xl font-bold">
          Sign up <br /> newsletter
        </h1>
        <p className="text-gray-300 font-monts font-extralight">
          Suspen dise tempus oncu enim pellen teste pretium.
        </p>

        <center>
        <div className="relative mt-6 lg:w-1/2 ">
          <input
            type="email"
            placeholder="Email address"
            autoComplete="off"
            aria-label="Email address"
            className="block w-full rounded-full border   border-e-white bg-transparent py-3 pl-6 pr-20 text-base/6 text-white ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-white focus: focus:ring-neutral-950/5"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              className="flex aspect-square h-full items-center lg:px-8 px-4 justify-center rounded-full bg-cyan-400 text-black transition "
            >
              Subscribe
            </button>
          </div>
        </div>
        </center>

        <div className="grid lg:grid-cols-5 gap-5 py-32 grid-cols-3">
        <center>
        <img src={brand1} alt="" className="grayscale hover:grayscale-0" />
        </center>
        <center>
        <img src={brand2} alt="" className="grayscale hover:grayscale-0" />
        </center>
        <center>
        <img src={brand3} alt="" className="grayscale hover:grayscale-0" />
        </center>
<center>
    <img src={brand4} alt="" className="grayscale hover:grayscale-0" />
</center> 
        <center>
        <img src={brand5} alt="" className="grayscale hover:grayscale-0" />
        </center>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
