import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Pricing = () => {
  const cardValue = [
    {
      title: "Free",
      description: "For individual dev",
      value: [
        "5 GB storage",
        "10 GB tranfer/month",
        "4 users per namespace",
        "Local and private repos",
      ],
      price: "$0",
    },
    {
      title: "Premium",
      description: "For a small team",
      value: [
        "60 GB storage",
        "Advanced CI/CD",
        "Enterprise agile planning",
        "Protected branches",
      ],
      price: "$16",
    },
    {
      title: "Ultimate",
      description: "For large companies",
      value: [
        "260 GB storage",
        "Security dashboards",
        "Free guest users",
        "Container scanning",
      ],
      price: "$99",
    },
  ];

  return (
    <div id="Pricing" className="container px-5 md:px-0 mx-auto pb-20 overflow-hidden">
      <h1 className="text-5xl font-semibold">Our Pricing</h1>
      <p className="text-stone-300 leading-7 py-14 text-lg">
        We offer favorable conditions for your <br /> comfortable and productive
        work
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
        {cardValue.map((value, index) => (
          <div
            key={index}
            className="px-10 py-8 md:py-12 md:space-y-5 border border-white border-opacity-25 rounded-3xl z-[1] relative group hover:text-black overflow-hidden"
          >
            <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] transition-all duration-500 ease-in-out rounded-3xl -z-[1] group-hover:h-full" />
            <h1 className="text-5xl font-semibold pb-1">{value.title}</h1>
            <p className="text-stone-300 group-hover:text-stone-700 pb-5 md:pb-10">
              {value.description}
            </p>
            <div className="h-[1px] bg-white bg-opacity-20"></div>
            <ul className="space-y-2 md:space-y-5 pt-5 md:pt-10">
              {value.value.map((value, index) => (
                <li key={index} className="flex items-center gap-2 text-lg">
                  <span>
                    <AiOutlineCheck />
                  </span>
                  <p>{value}</p>
                </li>
              ))}
            </ul>
            <h1 className="text-3xl py-7 md:py-10">
              {value.price} <span className="text-base">/month</span>
            </h1>
            <button className="w-full bg-white group-hover:bg-black text-black group-hover:text-white py-4 rounded-full font-semibold hover:scale-105 active:scale-100 transition-all duration-150 ease-out">
              Buy Now
            </button>
            <span className="absolute bottom-0 left-0 w-full h-full bg-transparent rounded-3xl -z-[2]" />
          </div>
        ))}
        {/* <div className="px-10 py-12 space-y-5 bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] rounded-3xl text-black">
          <h1 className="text-5xl font-semibold pb-1"></h1>
          <p className="text-stone-700 pb-10"></p>
          <div className="h-[1px] bg-black bg-opacity-20"></div>
          <ul className="space-y-5 pt-10">
            {[].map((value, index) => (
              <li key={index} className="flex items-center gap-2 text-lg">
                <span>
                  <AiOutlineCheck />
                </span>
                <p>{value}</p>
              </li>
            ))}
          </ul>
          <h1 className="text-3xl py-10">
            $16 <span className="text-base">/month</span>
          </h1>
          <button className="w-full bg-black text-white py-4 rounded-full font-semibold">
            Buy Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
