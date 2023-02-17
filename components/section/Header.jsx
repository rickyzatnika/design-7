import { useState } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const images = [
    {
      id: 1,
      src: "/img/bg-cover.JPG",
    },
    {
      id: 2,
      src: "/img/bg-cover-2.JPG",
    },
    {
      id: 3,
      src: "/img/image-6.JPG",
    },
    {
      id: 4,
      src: "/img/recover-slide.JPG",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 500,
    fade: true,
    className: "w-full h-full",
    slidesToShow: 1,
    slideToScroll: 1,
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col relative items-center justify-center"
        id="header"
      >
        <motion.div
          initial={{ scale: 1.5 }}
          whileInView={{ scale: 1 }}
          className="w-full min-h-screen absolute top-0  "
        >
          <Slick {...settings}>
            {images.map((img) => (
              <Image
                key={img.id}
                src={`${img.src}`}
                alt=""
                width={350}
                height={1000}
                style={{ width: "auto", height: "auto" }}
                layout="responsive"
                objectFit="cover"
                objectPosition="bottom"
                priority
              />
            ))}
          </Slick>
        </motion.div>
        <div className="w-full h-screen bg-gradient-to-tl from-black via-black/60 to-transparent absolute top-0 z-10"></div>
        <div className="w-full relative z-20 flex flex-col items-center justify-center">
          <h1 className="text-zinc-200 font-[Hattori] text-3xl">
            The Wedding Of
          </h1>
          <div className="text-center leading-relaxed py-4">
            <h3 className="text-5xl  px-2 font-extrabold bg-gradient-to-tr from-amber-500 via-yellow-600 font-[parisienne] to-amber-500 bg-clip-text text-transparent py-2 ">
              Rahmadi
            </h3>
            <span className="font-[parisienne] text-3xl text-zinc-200">&</span>
            <h4 className="text-5xl  px-2 font-extrabold bg-gradient-to-tr from-amber-500 via-yellow-600 font-[parisienne] to-amber-500 bg-clip-text text-transparent py-2">
              Dinda
            </h4>
          </div>
        </div>

        <div className="flex flex-col relative z-50 items-center gap-1 justify-center w-80">
          <div className="mouse"></div>
          <small className="text-zinc-300/80">scroll down</small>
        </div>
      </div>
    </>
  );
};

export default Header;
