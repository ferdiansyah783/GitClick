import React from "react";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="container px-5 md:px-0 mx-auto max-h-screen cursor-default overflow-hidden">
      <div className="h-screen grid lg:grid-cols-2">
        <div className="flex flex-col md:gap-2 justify-center items-center md:items-start">
          <motion.h1
            initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[40px] md:text-8xl lg:text-7xl 2xl:text-8xl font-semibold"
          >
            Streamline your
          </motion.h1>
          <motion.h1
            initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[40px] md:text-8xl lg:text-7xl 2xl:text-8xl font-semibold bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] text-transparent bg-clip-text -mt-3 md:-mt-0"
          >
            Dev Workflow
          </motion.h1>
          <motion.p
            initial={{ translateX: 200, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="py-5 md:py-12 leading-7 text-stone-300 text-sm md:text-base text-center md:text-start"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority <span className="hidden md:block"> <br /> have suffered alteration in some form, by
            injected humour, or randomised</span>
          </motion.p>
          <div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="px-8 md:px-16 py-3 md:py-4 bg-white hover:bg-gray-200 text-black rounded-full font-semibold mr-3 md:mr-5 transition-all duration-100 ease-out hover:scale-105 active:scale-100"
            >
              Donwload
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="px-8 md:px-16 py-3 md:py-4 border border-gray-500 rounded-full inline-block relative overflow-hidden bg-transparent z-[1] transition-all duration-100 ease-out group hover:text-black hover:scale-105 active:scale-100"
            >
              <motion.div className="absolute bottom-0 left-0 w-0 h-full bg-white transition-all duration-300 ease-out rounded-full -z-[1] group-hover:w-full" />
              Learn More
              <motion.div className="absolute bottom-0 left-0 w-full h-full bg-transparent rounded-full -z-[2]" />
            </motion.button>
          </div>
        </div>
        <div className="relative lg:static">
          <motion.img
            initial={{ opacity: 0, translateX: 30 }}
            animate={{
              opacity: 1,
              translateX: 1,
              transition: {
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="absolute -right-2 md:-right-8 lg:right-[1px] -top-20 lg:top-28 w-[250px] md:w-[500px] lg:w-[600px] 2xl:w-[770px] brightness-75"
            src={hero1}
          />
          <motion.img
            initial={{ opacity: 0, translateX: 30 }}
            animate={{
              opacity: 1,
              translateX: 1,
              transition: {
                duration: 1.5,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="absolute -right-2 md:-right-8 lg:right-[1px] lg:bottom-32 w-[300px] md:w-[600px] lg:w-[700px] 2xl:w-[890px] z-10 brightness-95"
            src={hero2}
          />
          <svg
            className="w-[500px] absolute bottom-0 left-[800px] hidden lg:block"
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
