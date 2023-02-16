import CountDown from "../countdownTimer";
import Image from "next/legacy/image";
import { TbMapSearch } from "react-icons/tb";
import { useState } from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import Link from "next/link";

const Event = () => {
  const [showMap, setShowMap] = useState(false);

  const handleMapClick = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="w-full min-h-screen relative" id="event">
      <div className="absolute w-full top-0 h-full z-30">
        <Image
          src="/image/background-profile.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="w-full min-h-screen flex flex-col items-center justify-around relative z-40">
        <h1 className="text-4xl bg-gradient-to-tr from-amber-600 via-yellow-700 to-transparent bg-clip-text text-transparent font-[parisienne] ">
          Save The Date
        </h1>
        <div className="w-full px-2">
          <CountDown />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <AddToCalendarButton
            name="The Wedding Rahmadi & Dinda"
            options="'Google'"
            location="Jl. Tubagus Ismail No.90, Sekeloa, Kecamatan Coblong, Kota Bandung, Jawa Barat 40134"
            startDate="2023-6-10"
            startTime="10:15"
            endTime="14:20"
            buttonStyle="date"
            timeZone="Asia/Jakarta"
            label=" add to calendar"
            trigger="click"
          ></AddToCalendarButton>
          <button
            type="button"
            onClick={handleMapClick}
            className="text-black py-2 px-5 text-sm flex items-center gap-2 bg-zinc-200 shadow-lg shadow-black/20 rounded "
          >
            <TbMapSearch size={20} className="text-zinc-600/80" />
            {showMap === true ? <span>CLOSE</span> : <span>OPEN</span>} MAPS
          </button>
        </div>
        {showMap && (
          <div className="w-full px-2 lg:px-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.03662091098!2d107.6207860151833!3d-6.886217069298227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7000af6876b%3A0xfb6d1a3f65c98e39!2sJl.%20Tubagus%20Ismail%20No.90%2C%20Sekeloa%2C%20Kecamatan%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040134!5e0!3m2!1sid!2sid!4v1676520917371!5m2!1sid!2sid"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
