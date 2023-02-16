import React, { useState } from "react";
import Image from "next/legacy/image";
import Sound from "../Backsound";
import { images } from "../MyImage";
import Navbar from "../Navbar";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Aside = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 800,
    fade: true,
    className: "w-full h-full",
    slidesToShow: 1,
    slideToScroll: 1,
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <>
      <Sound />
      <div className="w-full min-h-screen hidden lg:flex flex-col items-center justify-center">
        <div className="fixed z-20 top-14 text-zinc-300 text-3xl font-[timesi]">
          Wedding Invitation
        </div>
        <div className=" fixed flex flex-col items-center justify-center gap-4 z-20">
          <h1 className="text-8xl text-white font-[parisienne]">Rahmadi</h1>
          <span className="text-6xl font-[parisienne] bg-gradient-to-tr from-amber-400 via-yellow-600 to-amber-400 bg-clip-text text-transparent font-bold">
            &
          </span>
          <h1 className="text-8xl text-white font-[parisienne]">Dinda</h1>
        </div>
        <div className="w-full min-h-screen fixed top-0 left-0  z-10 bg-gradient-to-t from-black/90 to-transparent " />
        <Navbar />
        <div className="w-full h-full fixed top-0  -z-10">
          <Slick {...settings}>
            {images.map((img) => (
              <Image
                key={img.id}
                src={`${img.src}`}
                alt=""
                width={100}
                height={110}
                layout="responsive"
                objectFit="cover"
                objectPosition="bottom"
                placeholder="blur"
                blurDataURL={img.src}
              />
            ))}
          </Slick>
        </div>
        <div className="flex flex-col items-center justify-center fixed bottom-16 z-20">
          <h1 className="font-[Hattori] text-4xl text-zinc-200 ">
            10 Juni 2023
          </h1>
          <span className="bg-green-600/90 w-3 h-3 relative top-2 rounded-full animate-ping"></span>
        </div>
      </div>
    </>
  );
};

export default Aside;
