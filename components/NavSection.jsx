import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavLinks = [
  { name: "Home", slug: "home", path: "/" },
  { name: "About", slug: "about", path: "/about" },
  { name: "Contact", slug: "contact", path: "/contact" },
];

const NavSection = () => {
  return (
    <div className="dark:bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="h-16 container mx-auto px-4 flex justify-between items-center">
        <div className=" font-bold text-xl text-primary">Brapurple</div>
        <nav className="hidden md:flex space-x-4 md:space-x-8 lg:space-x-12">
          {NavLinks.map((item, idx) => {
            return (
              <Link key={idx} href={item.path}>
                {item.name}
              </Link>
            );
          })}
        </nav>
        <Button className="hover:text-purple-400">Get Exclusive</Button>
      </div>
    </div>
  );
};

export default NavSection;
