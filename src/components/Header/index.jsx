import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      <div className="container mx-auto flex justify-between items-center cursor-default text-white">
        <a href="#home">
          <h1 className="text-xl font-semibold">GitClick</h1>
        </a>
        <ul className="flex gap-10 text-sm text-stone-300">
          {["GitClick Client", "Pricing", "About"].map((value, index) => (
            <li key={index} className="cursor-pointer">
              <a className={`${value === 'GitClick Client' ? 'text-white' : ''}`} href={`#${value}`}>{value}</a>
            </li>
          ))}
        </ul>
        <button className="px-5 py-1 border border-gray-500 rounded-full hover:scale-110 active:scale-100 transition-transform duration-150 ease-out">
          Try Free
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
