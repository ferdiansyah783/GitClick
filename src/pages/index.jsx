import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Client from "../components/Client";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "../utils/follow-pointer";

const Home = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    
  return (
    <div className="bg-black text-white font-poppins">
      <motion.div
        ref={ref}
        className="w-5 h-5 bg-pink-600 rounded-full z-50"
        animate={{ x, y }}
        transition={{
          damping: 1,
          stiffness: 100,
          restDelta: 0.001,
        }}
      />
      <Header />
      <main>
        <Hero />
        <Client />
        <About />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
