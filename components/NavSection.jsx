"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";

const NavLinks = [
  { name: "Home", slug: "home", path: "/" },
  { name: "About", slug: "about", path: "/about" },
  { name: "Contact", slug: "contact", path: "/contact" },
];

const NavSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="dark:bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="h-16 container mx-auto px-4 flex justify-between items-center relative">
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
        {menuOpen && (
          <nav className="md:hidden absolute top-20 right-10 dark:bg-black/50 backdrop-blur-sm flex flex-col gap-2">
            {NavLinks.map((item, idx) => {
              return (
                <Link key={idx} href={item.path}>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        )}
        <div onClick={toggleMenu} className="md:hidden text-primary">
          {menuOpen ? <X /> : <AlignJustify />}
        </div>
        <Button className="hover:text-purple-400 hidden md:block">
          Get Exclusive
        </Button>
      </div>
    </div>
  );
};

export default NavSection;
