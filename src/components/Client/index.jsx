import React from "react";
import { MdPublishedWithChanges } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";

const Client = () => {
  return (
    <div className="container mx-auto py-10 mb-28">
      <div className="grid grid-cols-3 gap-16">
        <div className="border-2 border-stone-300 border-opacity-25 px-9 py-14 rounded-xl space-y-5">
          <div className="bg-white rounded-xl bg-opacity-20 p-5 inline-block text-6xl">
            <MdPublishedWithChanges />
          </div>
          <h1 className="font-semibold text-3xl">Collaboration</h1>
          <p className="text-sm text-stone-300 leading-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old
          </p>
        </div>
        <div className="border-2 border-stone-300 border-opacity-25 px-9 py-14 rounded-xl space-y-5">
          <div className="bg-white rounded-xl bg-opacity-20 p-5 inline-block text-6xl">
            <RiLock2Fill />
          </div>
          <h1 className="font-semibold text-3xl">Security</h1>
          <p className="text-sm text-stone-300 leading-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old
          </p>
        </div>
        <div className="border-2 border-stone-300 border-opacity-25 px-9 py-14 rounded-xl space-y-5">
          <div className="bg-white rounded-xl bg-opacity-20 p-5 inline-block text-6xl">
            <ImStatsBars />
          </div>
          <h1 className="font-semibold text-3xl">Analytics</h1>
          <p className="text-sm text-stone-300 leading-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client;
