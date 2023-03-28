import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Pricing = () => {
  return (
    <div id="Pricing" className="container mx-auto pb-20">
      <h1 className="text-5xl font-semibold">Our Pricing</h1>
      <p className="text-stone-300 leading-7 py-14 text-lg">
        We offer favorable conditions for your <br /> comfortable and productive
        work
      </p>
      <div className="grid grid-cols-3 gap-10">
        <div className="px-10 py-12 space-y-5 border border-white border-opacity-25 rounded-3xl">
          <h1 className="text-5xl font-semibold pb-1">Free</h1>
          <p className="text-stone-300 pb-10">For individual dev</p>
          <div className="h-[1px] bg-white bg-opacity-20"></div>
          <ul className="space-y-5 pt-10">
            {[
              "5 GB storage",
              "10 GB tranfer/month",
              "4 users per namespace",
              "Local and private repos",
            ].map((value, index) => (
              <li key={index} className="flex items-center gap-2 text-lg">
                <span>
                  <AiOutlineCheck />
                </span>
                <p>{value}</p>
              </li>
            ))}
          </ul>
          <h1 className="text-3xl py-10">$0 <span className="text-base">/month</span></h1>
          <button className="w-full bg-white text-black py-4 rounded-full font-semibold">Buy Now</button>
        </div>
        <div className="px-10 py-12 space-y-5 bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] rounded-3xl text-black">
          <h1 className="text-5xl font-semibold pb-1">Premium</h1>
          <p className="text-stone-700 pb-10">For a small team</p>
          <div className="h-[1px] bg-black bg-opacity-20"></div>
          <ul className="space-y-5 pt-10">
            {[
              "60 GB storage",
              "Advanced CI/CD",
              "Enterprise agile planning",
              "Protected branches",
            ].map((value, index) => (
              <li key={index} className="flex items-center gap-2 text-lg">
                <span>
                  <AiOutlineCheck />
                </span>
                <p>{value}</p>
              </li>
            ))}
          </ul>
          <h1 className="text-3xl py-10">$16 <span className="text-base">/month</span></h1>
          <button className="w-full bg-black text-white py-4 rounded-full font-semibold">Buy Now</button>
        </div>
        <div className="px-10 py-12 space-y-5 border border-white border-opacity-25 rounded-3xl">
          <h1 className="text-5xl font-semibold pb-1">Ultimate</h1>
          <p className="text-stone-300 pb-10">For large companies</p>
          <div className="h-[1px] bg-white bg-opacity-20"></div>
          <ul className="space-y-5 pt-10">
            {[
              "260 GB storage",
              "Security dashboards",
              "Free guest users",
              "Container scanning",
            ].map((value, index) => (
              <li key={index} className="flex items-center gap-2 text-lg">
                <span>
                  <AiOutlineCheck />
                </span>
                <p>{value}</p>
              </li>
            ))}
          </ul>
          <h1 className="text-3xl py-10">$99 <span className="text-base">/month</span></h1>
          <button className="w-full bg-white text-black py-4 rounded-full font-semibold">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
