import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 50;

      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: isVisible ? 0 : -80 }}
      transition={{ stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 py-5 bg-black"
    >
      <div className="container px-5 md:px-0 mx-auto flex justify-between items-center cursor-default text-white">
        <a href="#home">
          <h1 className="text-xl font-semibold">GitClick</h1>
        </a>
        <ul className="md:flex gap-10 text-sm text-stone-300 hidden">
          {["GitClick Client", "Pricing", "About"].map((value, index) => (
            <li key={index} className="cursor-pointer">
              <a
                className={`${value === "GitClick Client" ? "text-white" : ""}`}
                href={`#${value}`}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
        <button className="px-5 py-1 hidden md:block border border-gray-500 rounded-full hover:scale-110 active:scale-100 transition-transform duration-150 ease-out">
          Try Free
        </button>
        <button>
          <HiBars3 className="w-7 h-7" />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
