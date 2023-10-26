import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineGooglePlus,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="px-5 md:px-0">
      <div className="container mx-auto flex flex-col items-center py-16 space-y-10">
        <h1 className="text-3xl font-semibold">GitClick Opacity</h1>
        <p className="text-stone-300 text-sm text-center">
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock<span className="hidden md:block">, a Latin <br />{" "}
          Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
        </p>
        <ul className="flex space-x-5">
          {[
            <FaFacebookF />,
            <AiOutlineTwitter />,
            <AiOutlineGooglePlus />,
            <AiFillLinkedin />,
            <AiFillGithub />,
          ].map((value, index) => (
            <li key={index} className="text-2xl">
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto py-8 flex justify-center border-t">
        <p className="text-sm text-center">Copyright @2023 GitClick. <br /> Made By <span className="text-stone-600">Muhammad Ferdiansyah</span></p>
      </div>
    </div>
  );
};

export default Footer;
