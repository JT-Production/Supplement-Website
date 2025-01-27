import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import product1 from "../assets/product-large-1.jpg";
import product2 from "../assets/product-large-2.jpg";
import product3 from "../assets/product-large-3.jpg";
import Button from "./Button";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const [image, setImage] = useState("Image-1");
  // console.log(image);
  const toggleImages = (index) => {
    setImage(`Image-${index}`);
  };
  return (
    <section className="flex justify-center px">
      <div className=" text-white py-5 ">
        <div className="my-8">
          <h1 className="text-5xl font-bold text-center">Order Our Product</h1>
          <p className="font-monts lg:text-[15px] text-[13px] font-thin text-center">
            This is the only way to get this product in discount.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 ">
          <div className="flex mx-auto lg:w-[500px] w-[350px] ">
            <div className="ms-3">
              <img
                src={product1}
                onClick={() => toggleImages(1)}
                alt=""
                className={
                  image === "Image-1"
                    ? "lg:h-24 h-16 border-cyan-400 border rounded-md mb-3"
                    : "lg:h-24 h-16  border rounded-md mb-3"
                }
              />
              <img
                src={product2}
                onClick={() => toggleImages(2)}
                alt=""
                className={
                  image === "Image-2"
                    ? "lg:h-24 h-16 border-cyan-400 border rounded-md mb-3"
                    : "lg:h-24 h-16  border rounded-md mb-3"
                }
              />
              <img
                src={product3}
                onClick={() => toggleImages(3)}
                alt=""
                className={
                  image === "Image-3"
                    ? "lg:h-24 h-16 border-cyan-400 border rounded-md mb-3"
                    : "lg:h-24 h-16  border rounded-md mb-3"
                }
              />
            </div>

            <div className="flex justify-end ms-2">
              {image === "Image-1" ? (
                <img
                  src={product1}
                  alt=""
                  className="lg:h-[450px] rounded-lg  h-[300px]"
                />
              ) : image === "Image-2" ? (
                <img
                  src={product2}
                  alt=""
                  className="lg:h-[450px] rounded-lg h-[300px]"
                />
              ) : image === "Image-3" ? (
                <img
                  src={product3}
                  alt=""
                  className="lg:h-[450px] rounded-lg h-[300px]"
                />
              ) : (
                none
              )}
            </div>
          </div>
          <div className="lg:w-[490px] w-[350px] px-">
            <div className="ms-5 lg:ms-0">
              <div className="flex ">
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
              </div>

              <h1 className="text-3xl font-bold my-3">Supplement name</h1>
              <p className="text-xl font-bold font-monts text-cyan-500">
                $99.99{" "}
                <span className="font-thin text-[14px] text-white">$190</span>
              </p>
              <p className="font-thin font-monts text-[15px]">
                Tempus uspen dise oncu enim pellen tesque este pretium in neque,
                elit morbi sagittis lorem habi mattis empus oncu enim pellen.
              </p>

              <Button text={"Purchase"} />
              <hr className="mt-10 mb-2" />

              <ProductDetails />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
