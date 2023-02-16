import React, { useState, useRef, useEffect } from "react";
import { HiPause, HiPlay } from "react-icons/hi";
import { BiMusic } from "react-icons/bi";

const BackSound = () => {
  const [isPlay, setIsPlay] = useState(true);
  const audioEl = useRef();

  const playSong = () => {
    setIsPlay(true);
    audioEl.current.play();
  };
  const pauseSong = () => {
    setIsPlay(false);
    audioEl.current.pause();
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsPlay(true);
      audioEl.current.play();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-fit  z-[999999]  fixed flex items-center gap-2 top-4 left-2 lg:left-4">
        <div
          onClick={!isPlay ? playSong : pauseSong}
          className="cursor-pointer  rounded-full  backdrop-blur w-fit  shadow-lg shadow-white/40  transition-all duration-700 delay-75 ease-linear  p-2 bg-gradient-to-tr from-amber-900/80 via-yellow-900 to-amber-900/50"
        >
          {isPlay ? (
            <HiPause
              size={25}
              className={`text-zinc-100/80   shadow rounded-full shadow-black/40 ${
                isPlay === true ? "animate-spin" : "animate-none"
              }`}
            />
          ) : (
            <HiPlay
              size={25}
              className={`text-zinc-100/80   shadow rounded-full shadow-black/40 ${
                isPlay === false ? "animate-none" : "animate-spin"
              }`}
            />
          )}
          <audio ref={audioEl} autoPlay loop>
            <source src="/audio/audio.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="hidden lg:flex flex-nowrap">
          {isPlay === true ? (
            <p className="text-zinc-800  lg:text-zinc-800 dark:text-zinc-300 text-clip mix-blend-screen flex flex-nowrap items-center gap-1 ">
              Now is Play <BiMusic className="animate-spin" />
            </p>
          ) : (
            <p className="text-zinc-800  lg:text-zinc-800 dark:text-zinc-300 text-clip mix-blend-screen">
              Play Songs
            </p>
          )}
        </div>
        {isPlay === true && (
          <div className="hidden lg:flex  items-center gap-2 ">
            <marquee className=" text-zinc-900 lg:text-zinc-700 dark:text-zinc-400 text-clip mix-blend-screen flex flex-row ">
              <span>Brian McKnight Jr - Marry Your Daughter.mp3</span>
            </marquee>
          </div>
        )}
      </div>
    </>
  );
};

export default BackSound;
