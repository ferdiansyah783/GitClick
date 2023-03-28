import React from "react";
import code1 from "../../assets/images/code1.png";
import code3 from "../../assets/images/code2.png";

const About = () => {
  return (
    <div className="container mx-auto pb-36">
      <h1 className="text-8xl font-semibold bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] text-transparent bg-clip-text">
        We are a company that has created a DevOps platform for software
        innovatioin
      </h1>
      <div className="flex justify-center relative py-20">
        <div className="border-2 border-stone-900 rounded-xl overflow-hidden">
          <img src={code1} className="w-[950px]" />
        </div>
        <img src={code3} className="w-[400px] absolute right-44 -bottom-16 brightness-95 rounded-xl" />
      </div>
    </div>
  );
};

export default About;
