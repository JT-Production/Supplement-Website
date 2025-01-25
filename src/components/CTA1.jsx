import React from "react";
import quality from "../assets/quality.png";
import shipping from "../assets/ship.png"
import guarantee from "../assets/3kRg1x-LogoMakr.png"

const CTA1 = () => {

    const assurance = [
        {
            image: quality,
            heading: " 100% High Quality Product",
            subHeading: "We have option of pick up in store"
        },
        {
            image: shipping,
            heading: " Free Shipping Charge",
            subHeading: "Inside City delivery within 5 days"
        },
        {
            image: guarantee,
            heading: "Money Back Guarantee",
            subHeading: "We will take return in some cases"
        }
    ]

  return (
    <section className="bg-zinc-800 w-full lg:px-20 py-10 px-5">
      <div className="container flex justify-center">
        <div className="grid lg:grid-cols-3 gap-5 ">
         {assurance.map((assure, index) => (
             <div className="text-center mb-5" key={index}>
             <img src={assure.image} alt="" className="h-20 mx-auto my-3" />
             <h1 className="lg:text-xl text-2xl font-bold text-white ">
              {assure.heading}
             </h1>
             <p className="text-white font-monts font-light text-md">
               {assure.subHeading}
             </p>
           </div>
         ))}
       
        </div>
      </div>
    </section>
  );
};

export default CTA1;
