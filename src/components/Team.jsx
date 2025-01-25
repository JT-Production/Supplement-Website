import React from "react";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";

const teamMembers = [
  {
    img: team1,
    name: "Kevin bryan",
    carrer: "Cardio doctor",
  },
  {
    img: team2,
    name: "Jolly Garcia",
    carrer: "Fitness coach",
  },
  {
    img: team3,
    name: "Onnel Smith",
    carrer: "Senior doctor",
  },
  {
    img: team4,
    name: "Daniel Luis",
    carrer: "Swimming coach",
  },
];

const Team = () => {
  return (
    <section className="py-20">
        <h1 className="text-center text-white text-5xl font-bold">Recommended by</h1>
        <p className="text-white text-center font-monts text-[15px] font-thin pb-10">Suspen dise tempus oncu enim pellen teste pretium.</p>
      <div className="flex justify-center py-5">
        
        <div className="grid lg:grid-cols-4 gap-4 px-20 md:grid-cols-4">
            {teamMembers.map((member,index) => {
                return (
                    <div className=" text-white text-center" key={index}>
                        <img src={member.img} alt="" className="lg:h-72 rounded-lg " />
                        <h1 className="text-[22px]">{member.name}</h1>
                        <p className="font-monts text-[15px] font-thin pb-10">{member.carrer}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
};

export default Team;
