import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isActiveNav, setIsActiveNav] = useState(false);

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

  const handleActiveNav = () => {
    setIsActiveNav((prev) => !prev);
  };

  return (
    <div>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: isVisible ? 0 : -80 }}
        transition={{ stiffness: 120 }}
        className="fixed top-0 left-0 right-0 z-40 py-5 bg-black"
      >
        <div className="container px-5 md:px-0 mx-auto flex justify-between items-center cursor-default text-white">
          <a href="#home">
            <h1 className="text-xl font-semibold">GitClick</h1>
          </a>
          <ul className="md:flex gap-10 text-sm text-stone-300 hidden">
            {["GitClick Client", "Pricing", "About"].map((value, index) => (
              <li key={index} className="cursor-pointer">
                <a
                  className={`${
                    value === "GitClick Client" ? "text-white" : ""
                  }`}
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
          <button className="md:hidden" type="button" onClick={handleActiveNav}>
            <HiBars3 className="w-7 h-7" />
          </button>
        </div>
      </motion.header>

      <div
        className={`w-full h-full flex flex-col p-5 bg-black fixed top-0 z-50 ${
          isActiveNav ? "-translate-y-0" : "-translate-y-full"
        } transition-all ease-in-out duration-300`}
      >
        <div className="flex justify-end">
          <button onClick={handleActiveNav} className="py-3">
            <AiOutlineClose className="w-10 h-10" />
          </button>
        </div>
        {["GitClick Client", "Pricing", "About"].map((value, i) => (
          <div className="flex border-t px-5 pb-5">
            <a
              href={`#${value}`}
              onClick={handleActiveNav}
              className="py-3 text-2xl"
            >
              {value}
            </a>
          </div>
        ))}
        <div className="flex px-5 pb-5 relative">
          <div className="h-[1px] w-full bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] absolute top-0 left-0"></div>
          <button className="py-3 text-2xl font-semibold bg-gradient-to-r from-[#26e3c2] to-[#45a0f5] text-transparent bg-clip-text">
            Try Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
