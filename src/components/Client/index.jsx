import React from "react";
import { MdPublishedWithChanges } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";
import { motion } from "framer-motion";

const Client = () => {
  const cardValue = [
    {
      icon: <MdPublishedWithChanges />,
      title: "Collaboration",
      value:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      icon: <RiLock2Fill />,
      title: "Security",
      value:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      icon: <ImStatsBars />,
      title: "Analytics",
      value:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
  ];

  return (
    <div id="GitClick Client" className="container px-8 md:px-0 mx-auto pt-24 md:pt-44 lg:py-10 mb-28 overflow-hidden">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        {cardValue.map((value, index) => (
          <div
            key={index}
            className="border-2 border-stone-300 border-opacity-25 px-4 md:px-9 py-4 md:py-14 rounded-xl space-y-5 hover:scale-110 transition-transform duration-150 ease-out"
          >
            <div className="inline-block bg-white rounded-xl bg-opacity-20 p-5 text-5xl md:text-6xl">
              {value.icon}
            </div>
            <h1 className="font-semibold text-3xl">{value.title}</h1>
            <p className="lg:text-sm text-stone-300 leading-6">{value.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
