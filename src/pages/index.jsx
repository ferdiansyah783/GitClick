import React from "react";
import About from "../components/About";
import Client from "../components/Client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div className="bg-black text-white font-poppins">
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
