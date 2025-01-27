import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import review1 from "../assets/review-image1.jpg";
import review2 from "../assets/review-image2.jpg";
import Button from "../components/Button";

const reviews = [
  {
    name: "Tom Johnson",
    img: review1,
    star: 5,
    date: "- 07/05/2022",
    comment: `Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at
                lectus urna duis convallis convallis`,
  },
  {
    name: "Jenny Willis",
    img: review2,
    star: 5,
    date: "- 07/05/2022",
    comment: `Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at
                lectus urna duis convallis convallis`,
  },
];

const ProductDetails = () => {
  const [displayContent, setDisplayContent] = useState(false);

  const showContent = () => {
    setDisplayContent(!displayContent);
  };

  return (
    <div className="container-lg ">
      <div className="flex py-2">
        <h1
          onClick={showContent}
          className={
            displayContent === false
              ? "text-[23px] font-bold me-4 text-cyan-500 cursor-pointer"
              : "text-[23px] font-bold me-4 cursor-pointer"
          }
        >
          Description
        </h1>
        <h1
          onClick={showContent}
          className={
            displayContent === true
              ? "text-[23px] font-bold me-4 text-cyan-500 cursor-pointer"
              : "text-[23px] font-bold me-4 cursor-pointer"
          }
        >
          Reviews (2)
        </h1>
      </div>
      <div className="">
        <p
          className={
            displayContent
              ? "font-monts font-thin text-[15px] hidden"
              : "font-monts font-thin text-[15px] "
          }
        >
          Dise tempus oncu enim pellen tesque este pretium in neque, elit morbi
          sagittis lorem habi mattis empus oncu enim pellen. Pellen tesque este
          pretium in neque, elit morbi sagittis lorem habi mattis empus .
        </p>
        <div className={!displayContent ? "hidden" : "block "}>
          {reviews.map((review, index) => {
            return (
              <div key={index} className="flex py-3">
                <img src={review.img} alt="" className="lg:h-16 rounded-md h-12" />
                <div className="ms-2">
                  <div className="flex">
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                    <FaStar className="text-orange-500" />
                  </div>

                  <div className="flex">
                    <h1 className="text-md font-monts me-2">{review.name}</h1>
                    <p className="font-monts font-thin"> {review.date}</p>
                  </div>
                  <p className="font-monts font-thin text-sm lg:text-md">{review.comment}</p>
                </div>
              </div>
            );
          })}

          <div className="px-3">
            <h1 className="text-2xl">Add a review</h1>
            <p className="text-[15px] font-thin font-monts">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <p className="text-[16px] font-thin font-monts pt-3">
              Your rating *
            </p>
            <div className="flex ">
              <FaStar className="text-zinc-500" />
              <FaStar className="text-zinc-500" />
              <FaStar className="text-zinc-500" />
              <FaStar className="text-zinc-500" />
              <FaStar className="text-zinc-500" />
            </div>
            <input type="file" className="py-3" />
            <form action="" className="py-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-black border py-2 me-2 px-2 lg:w-[220px]  w-[160px] border-zinc-800 active:border-zinc-800  focus:outline-none focus:border-white placeholder:text-neutral-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-black border py-2 me-4 px-2 lg:w-[220px] w-[160px] border-zinc-800 active:border-zinc-800  focus:outline-none focus:border-white placeholder:text-neutral-600"
                />
              </div>
              <div className="flex justify-start py-2 ">
                <textarea
                  name="message"
                  id=""
                  placeholder="Message"
                  className="lg:w-[450px] h-20 bg-black border py-2 me-4 px-2  border-zinc-800 active:border-zinc-800  focus:outline-none focus:border-white placeholder:text-neutral-600"
                ></textarea>
              </div>
              <div className="flex ">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="self-center h-2"
                />
                <p className="text-[14px] font-monts font-thin">
                  Save my name, email, and website in this browser for the next
                  time.
                </p>
              </div>

              <Button text={"Submit"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
