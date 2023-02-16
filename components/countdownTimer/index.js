import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CountDownTimer({ ...props }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const intervalRef = useRef();

  useEffect(() => {
    const startTimer = () => {
      const countdownDate = new Date("June 10 2023 00:00:00").getTime();
      intervalRef.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(intervalRef.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    };

    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col item-center justify-center gap-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center flex flex-col pb-3 justify-center items-center shadow-lg mx-auto  bg-gradient-to-tr w-40  h-40 from-zinc-50 to-zinc-200 overflow-hidden  clip"
        >
          {/* Timer Days */}
          <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
            <span className="bg-gradient-to-b from-zinc-900 via-zinc-400 to-zinc-900 bg-clip-text text-transparent">
              {timerDays}
            </span>
          </div>
          <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-lg">
            Hari
          </small>
        </motion.div>
        <div className="w-full px-1 flex items-center justify-center h-full">


          {/* Timer Hours */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center flex flex-col pb-2 shadow-lg  bg-gradient-to-tr w-28  h-28  from-zinc-50 to-zinc-200 overflow-hidden  clip"
          >
            <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
              <span className="bg-gradient-to-b from-zinc-900 via-zinc-400 to-zinc-900 bg-clip-text text-transparent">
                {timerHours}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
              Jam
            </small>
          </motion.div>
          {/* Timer Minutes */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-center flex flex-col pb-2 shadow-lg  bg-gradient-to-tr w-28  h-28  from-zinc-50 to-zinc-200 overflow-hidden  clip"
          >
            <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
              <span className="bg-gradient-to-b from-zinc-900 via-zinc-400 to-zinc-900 bg-clip-text text-transparent">
                {timerMinutes}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
              Menit
            </small>
          </motion.div>
          {/* Timer Second */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center flex flex-col pb-2 shadow-lg  bg-gradient-to-tr w-28  h-28  from-zinc-50 to-zinc-200 overflow-hidden  clip"
          >
            <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
              <span className="bg-gradient-to-b from-zinc-900 via-zinc-400 to-zinc-900 bg-clip-text text-transparent">
                {timerSeconds}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
              Detik
            </small>
          </motion.div>
        </div>
      </div>
    </>
  );
}
