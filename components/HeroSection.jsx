import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container px-4 sm:px-0 py-4 sm:py-8 w-full h-full ">
      <div className="grid grid-cols-2 items-center">
        <div className="w-[500px] h-[500px] flex rounded-full  overflow-hidden">
          <Image
            src="/images/002.jpg"
            width="1080"
            height="1350"
            className="object-cover"
          />
        </div>
        <div className="CTA">
          <div className="heading flex flex-col text-3xl ">
            <span>
              Meet <span className="text-primary">Brapurple</span>:
            </span>
            <span>The Dynamic Voice from Takoradi</span>
          </div>
          <div className="sub-heading my-6">
            <span>
              Blending soulful melodies and eclectic raps, Brapurple is
              redefining Ghanaian music. With a passion for creativity and a
              mission to put Takoradi on the global music map, he invites you to
              explore his world of sound and storytelling.
            </span>
          </div>
          <Link href="/about" className="socials text-primary">
            more..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
