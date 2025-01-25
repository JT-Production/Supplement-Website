import React from "react";
import { IoBicycle } from "react-icons/io5";
import { PiBeerBottleFill, PiBone } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiDrinks2Line } from "react-icons/ri";
import { ImFire } from "react-icons/im";
import Feature from "../assets/feature-img.jpg";

const Supple = () => {
  let ctaData = [
    {
      id: 1,
      title: "Feature One",
      descrip: `Lorem ipsum dolor sit amet consectetur. Molestie aenean enim
                  massa magna.`,
      icon: IoBicycle,
    },
    {
      id: 2,
      title: "Feature Two",
      descrip: `Lorem ipsum dolor sit amet consectetur. Molestie aenean enim
                  massa magna.`,
      icon: AiOutlineThunderbolt,
    },
    {
      id: 3,
      title: "Feature Three",
      descrip: `Lorem ipsum dolor sit amet consectetur. Molestie aenean enim
                  massa magna.`,
      icon: PiBone,
    },
    {
      id: 4,
      title: "Feature Four",
      descrip: `Lorem ipsum dolor sit amet consectetur. Molestie aenean enim
                  massa magna.`,
      icon: PiBeerBottleFill,
    },
    {
      id: 5,
      title: "Feature Five",
      descrip: `Lorem ipsum dolor sit amet consectetur. Molestie aenean enim
                  massa magna.`,
      icon: RiDrinks2Line,
    },
    {
      id: 6,
      title: "Feature Six",
      descrip: `Lorem ipsum dolor sit amet consectetur. Molestie aenean enim
                  massa magna.`,
      icon: ImFire,
    },
  ];

  let rightCta = ctaData.splice(3, 3);
  // console.log(ctaData);
  // console.log(rightCta);

  return (
    <section className="py-10">
      <div className="container text-center">
        <h1 className=" text-white lg:text-5xl text-4xl font-bold">Why to use Supple</h1>
        <p className="text-gray-300 font-monts font-extralight">
          Suspen dise tempus oncu enim pellen teste pretium.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-white px-10">
          <div className="container">
            {ctaData.map((cta) => {
              const Icon = cta.icon;
              return (
                <div
                  className="flex gap-4 lg:ms-auto ms-0 lg:w-4/5 align-top my-10 flex-row-reverse lg:flex-row"
                  key={cta.id}
                >
                  <div className="lg:text-end text-start">
                    <h1 className="text-[20px] font-monts font-normal">
                      {cta.title}
                    </h1>
                    <p className="font-monts text-[15px] font-thin w-56">
                      {cta.descrip}
                    </p>
                  </div>
                  <Icon className="text-6xl w-11/12  text-cyan-500 mt-5" />
                  {/* {cta.icon} */}
                </div>
              );
            })}
          </div>
          <div className="">
            <img src={Feature} alt="" className="rounded-lg " />
          </div>
          <div className="container">
            {rightCta.map((cta) => {
              const Icon = cta.icon;
              return (
                
                  <div
                    className="flex gap-4  lg:w-4/5 align-top my-10 flex-row-reverse"
                    key={cta.id}
                  >
                    <div className="text-start">
                      <h1 className="text-[20px] font-monts font-normal">
                        {cta.title}
                      </h1>
                      <p className="font-monts text-[15px] font-thin w-56">
                        {cta.descrip}
                      </p>
                    </div>
                    <Icon className="text-6xl w-11/12  text-cyan-500 mt-5" />
                    {/* {cta.icon} */}
                  </div>
               
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supple;
