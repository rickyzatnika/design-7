import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { FcCurrencyExchange } from "react-icons/fc";
import Gifts from "../gifts";

const ShowProtocol = () => {
  const images = [
    {
      id: 1,
      src: "/image/prokes-1.png",
    },
    {
      id: 2,
      src: "/image/prokes-2.png",
    },
    {
      id: 3,
      src: "/image/prokes-3.png",
    },
    {
      id: 4,
      src: "/image/prokes-4.png",
    },
    {
      id: 5,
      src: "/image/prokes-5.png",
    },
  ];

  const [showPopup, setShowPopup] = useState(true);

  const handleAmplop = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          className="w-full shadow-xl py-20 shadow-black/20 bg-white"
        >
          <div className=" w-full h-full flex flex-col items-center justify-between">
            <div className="text-lg w-full shadow-lg py-2 shadow-black/30 text-zinc-200 bg-zinc-800 text-center ">
              <h1>MOHON UNTUK TETAP MEMATUHI</h1>
              <h2 className="font-[Hattori]">PROTOKOL KESEHATAN</h2>
            </div>
            <div className=" py-20 grid grid-cols-3 px-3 gap-2 items-center justify-center">
              {images.map((image) => (
                <div key={image.id} className=" w-full h-full col-span-1 ">
                  <Image
                    src={image.src}
                    alt=""
                    width={100}
                    height={100}
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={image.src}
                  />
                </div>
              ))}
            </div>
            <button
              className=" group transition-all duration-100 ease-linear flex items-center gap-1 font-semibold py-2 px-6 text-zinc-100 rounded-full bg-green-500/80  shadow-md shadow-black/20 hover:bg-green-500/90 hover:text-zinc-200"
              onClick={() => handleAmplop()}
            >
              <span className="relative">Kirim Hadiah</span>
              <FcCurrencyExchange className="group-hover:animate-bounce text-2xl" />
            </button>
          </div>
        </motion.div>
      ) : (
        <Gifts setShowPopup={setShowPopup} />
      )}
    </>
  );
};

export default ShowProtocol;
