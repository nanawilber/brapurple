"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";

const NavLinks = [
  { name: "Home", slug: "home", path: "/" },
  { name: "About", slug: "about", path: "#about" },
  { name: "Contact", slug: "contact", path: "#contact" },
];

const NavSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="dark:bg-black/50 backdrop-blur-sm w-full fixed top-0 z-50">
      <div className="h-16 container mx-auto px-4 flex justify-between items-center relative">
        <Link
          href="/"
          className="max-h-14 hover:cursor-pointer hover:scale-105"
        >
          <Image
            src="/images/logo.png"
            width="41"
            height="40"
            className="object-fit"
          />
        </Link>
        <div className="hidden md:flex space-x-4 md:space-x-8 lg:space-x-12">
          {NavLinks.map((item, idx) => {
            return (
              <Link key={idx} href={item.path} className="hover:scale-105">
                {item.name}
              </Link>
            );
          })}
        </div>
        {menuOpen && (
          <div className="md:hidden absolute top-20 right-8 dark:bg-black/50 backdrop-blur-sm flex flex-col gap-2 p-6">
            {NavLinks.map((item, idx) => {
              return (
                <Link key={idx} href={item.path}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
        <div onClick={toggleMenu} className="md:hidden text-primary">
          {menuOpen ? <X /> : <AlignJustify />}
        </div>
        <Button className="hover:scale-105 hidden md:block">
          Get Exclusive
        </Button>
      </div>
    </div>
  );
};

export default NavSection;
