import React from "react";
import { Button } from "./ui/button";

const NavSection = () => {
  return (
    <div className="bg-purple-600 sticky top-0 z-50 shadow-md">
      <div className="h-16 container mx-auto px-4 flex justify-between items-center">
        <div className=" font-bold text-xl">Brapurple</div>
        <nav className="hidden md:flex space-x-4 md:space-x-8 lg:space-x-12">
          <div className="">Home</div>
          <div className="">About</div>
          <div className="">Contact</div>
        </nav>
        <Button className="hover:text-purple-400">Get Exclusive</Button>
      </div>
    </div>
  );
};

export default NavSection;
