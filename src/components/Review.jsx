import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
const Review = () => {
  const reviews = [
    {
      name: "Kevin H.",
      date: "8/20/2023",
      comment: `“Malesuada et ut vitae eget.
            Leo viverra fringilla faucibus proin lacinia ornare amet. 
            Aliquam mi eros dapibus pulvinar.”`,
      stars: 5,
    },
    {
      name: "Kevin H.",
      date: "8/20/2023",
      comment: `“Malesuada et ut vitae eget.
            Leo viverra fringilla faucibus proin lacinia ornare amet. 
            Aliquam mi eros dapibus pulvinar.”`,
      stars: 5,
    },
    {
      name: "Kevin H.",
      date: "8/20/2023",
      comment: `“Malesuada et ut vitae eget.
            Leo viverra fringilla faucibus proin lacinia ornare amet. 
            Aliquam mi eros dapibus pulvinar.”`,
      stars: 4,
    },
    {
      name: "Kevin H.",
      date: "8/20/2023",
      comment: `“Malesuada et ut vitae eget.
            Leo viverra fringilla faucibus proin lacinia ornare amet. 
            Aliquam mi eros dapibus pulvinar.”`,
      stars: 5,
    },
    {
      name: "Kevin H.",
      date: "8/20/2023",
      comment: `“Malesuada et ut vitae eget.
            Leo viverra fringilla faucibus proin lacinia ornare amet. 
            Aliquam mi eros dapibus pulvinar.”`,
      stars: 3,
    },
    {
      name: "Kevin H.",
      date: "8/20/2023",
      comment: `“Malesuada et ut vitae eget.
            Leo viverra fringilla faucibus proin lacinia ornare amet. 
            Aliquam mi eros dapibus pulvinar.”`,
      stars: 5,
    }
  ];

  let fiveStars = () => {
    return (
      <div className="flex">
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
      </div>
    );
  };
  let fourStars = () => {
    return (
      <div className="flex">
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaRegStar className="text-orange-500" />
      </div>
    );
  };

  return (
    <section>
         <h1 className=" text-white text-5xl font-bold py-8 text-center font">Customer's Reviews</h1>

      <div className="grid lg:grid-cols-6 gap-4 px-32  md:grid-cols-3 grid-cols-1">
        {reviews.map((review, index) => {
          return (
            <div
              className="text-white block justify-center  text-center hover:bg-zinc-900 hover:border-zinc-700 w-full  p-1 cursor-pointer"
              key={index}
            >
              <div className="">
                <h1 className="text-2xl ">{review.name}</h1>
                <p className="font-monts font-extralight">{review.date}</p>
                <p className="font-monts text-[15px] px-4 text-center font-thin my-3">
                  {review.comment}
                </p>
              </div>
              <div className="flex justify-center">
                {review.stars === 5 ? fiveStars() : fourStars()}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
