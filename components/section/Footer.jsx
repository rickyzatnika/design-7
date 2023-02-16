import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-zinc-300/80 flex relative w-full h-28 lg:h-auto py-2 flex-nowrap items-start lg:items-center justify-center gap-1">
      <p className="text-md">Powered By : </p>
      <Link href="https://webhouse.inkara.id" className="underline">
        WebHouse
      </Link>
    </footer>
  );
};

export default Footer;
