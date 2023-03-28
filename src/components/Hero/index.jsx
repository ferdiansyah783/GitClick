import React from "react";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container mx-auto max-h-screen">
      <div className="h-screen grid grid-cols-2">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-8xl font-semibold">Streamline your</h1>
          <h1 className="text-8xl font-semibold bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] text-transparent bg-clip-text">
            Dev Workflow
          </h1>
          <p className="py-12 leading-7 text-stone-300">
            There are many variations of passages of Lorem Ipsum available, but
            the majority <br /> have suffered alteration in some form, by
            injected humour, or randomised
          </p>
          <div>
            <button className="px-16 py-4 bg-white text-black rounded-full font-semibold mr-5 hover:bg-gray-200">
              Donwload
            </button>
            <motion.button
              whileHover={{
                background: "linear-gradient(to right, #ffffff, #ff0000)",
                transition: { duration: 0.3 },
              }}
              className="px-16 py-4 border border-white rounded-full"
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <div>
          <img
            className="absolute right-0 top-28 w-[770px] brightness-75"
            src={hero1}
          />
          <img
            className="absolute right-0 bottom-36 w-[890px] z-10 brightness-95"
            src={hero2}
          />
          <svg
            className="w-[500px] absolute bottom-0 left-[800px]"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#26e3c2" />
                <stop offset="100%" stopColor="rgba(0, 119, 255, 0)" />
              </radialGradient>
            </defs>
            <path
              fill="url(#myGradient)"
              opacity="0.5"
              d="M30.6,-46.2C39,-36,44.6,-26.2,49.8,-15C54.9,-3.9,59.7,8.5,57,19C54.3,29.5,44.1,38.1,33.3,44.2C22.6,50.4,11.3,54.1,-0.3,54.5C-11.8,54.8,-23.7,51.8,-36.2,46.3C-48.8,40.7,-62,32.6,-68.2,20.5C-74.4,8.4,-73.5,-7.6,-67.5,-20.7C-61.6,-33.9,-50.5,-44.1,-38.4,-53.1C-26.3,-62.1,-13.2,-69.8,-1,-68.4C11.1,-67,22.2,-56.4,30.6,-46.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
