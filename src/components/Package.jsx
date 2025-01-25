import React from "react";
import { GiCheckMark } from "react-icons/gi";
import Button from "./Button";

const pricings = [
  {
    id: 1,
    title: "Pricing 1",
    duration: "Monthly",
    price: {
      amount: "$60",
      per: "Person",
    },
    features: [
      "Quisque rhoncus",
      "Lorem ipsum dolor",
      "Vivamus velit mir",
      "Velit mir",
      "Elit mir ivamus",
    ],
  },
  {
    id: 2,
    title: "Pricing 2",
    duration: "Yearly",
    price: {
      amount: "$90",
      per: "6 Person",
    },
    features: [
      "Quisque rhoncus",
      "Lorem ipsum dolor",
      "Vivamus velit mir",
      "Elit mir ivamus",
      "Velit mir",
      "Elit mir ivamus",
    ],
  },
  {
    id: 3,
    title: "Pricing 3",
    duration: "3 Year",
    price: {
      amount: "$120",
      per: "9 Person",
    },
    features: [
      "Quisque rhoncus",
      "Lorem ipsum dolor",
      "Vivamus velit mir",
      "Velit mir",
      "It ir ivamus",
    ],
  },
];

const Package = () => {
  return (
    <section className="flex justify-center text-center">
      <div className="text-white">
        <h1 className="text-white text-5xl font-bold">Choose your packages</h1>
        <p className="font-monts text-[15px] font-thin pb-10">
          Suspen dise tempus oncu enim pellen teste pretium.
        </p>

        <div className="grid lg:grid-cols-3 gap-5 grid-cols-1 px-10">
          {pricings.map((pricing, index) => (
            <div
              key={pricing.id}
              className={
                index === 1
                  ? "border px-20 py-10 my-2 place-self-stretch -translate-y-4"
                  : "border px-20 py-10"
              }
            >
              <h1 className="text-[28px]">{pricing.title}</h1>
              <p className="font-monts font-thin text-[15px]">
                {pricing.duration}
              </p>
              <p className="my-2 font-monts font-light text-[14px]">
                <span className="text-2xl font-monts font-bold text-cyan-400">
                  {pricing.price.amount}
                </span>{" "}
                / {pricing.price.per}
              </p>
              {pricing.features.map((feature, index) => (
                <div key={index} className="flex justify-center items-center gap-1">
                  <GiCheckMark className="text-cyan-500" />
                  <p className="font-monts font-thin my-2 text-[15px]">
                    {feature}
                  </p>
                </div>
              ))}
              <Button text={"Buy now"} className={"mt-16"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
