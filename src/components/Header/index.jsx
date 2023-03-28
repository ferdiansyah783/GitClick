import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 bg-black">
      <div className="container mx-auto flex justify-between items-center text-white">
        <h1 className="text-xl font-semibold">GitClick</h1>
        <ul className="flex gap-10 text-sm text-stone-300">
          <li>GitClick Client</li>
          <li>Pricing</li>
          <li>About</li>
        </ul>
        <div className="px-5 py-1 border rounded-full">Try Free</div>
      </div>
    </header>
  );
};

export default Header;
