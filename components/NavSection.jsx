import React from "react";
import { Button } from "./ui/button";

const NavSection = () => {
  return (
    <div className="dark:bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="h-16 container mx-auto px-4 flex justify-between items-center">
        <div className=" font-bold text-xl text-primary">Brapurple</div>
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
