import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SlLike } from "react-icons/sl";
import { ImWarning } from "react-icons/im";

const PreviewModal = () => {
  const [isModal, setIsModal] = useState(true);

  const closeModal = () => {
    setIsModal(false);
    return;
  };
  return (
    <>
      {isModal && (
        <div className="w-full h-full top-0 left-0 fixed bg-black/80 flex flex-col items-center justify-center z-[99999999999999]">
          <div className="w-full py-8 lg:w-4/6 shadow-lg shadow-white/20 bg-white/90 p-2 lg:p-8 h-full lg:h-4/6 flex flex-col items-center justify-between rounded-none lg:rounded-3xl">
            <div className="text-center leading-relaxed pt-3">
              <div className="w-full flex flex-col  items-center gap-2 justify-center">
                <ImWarning size={30} className="text-orange-500 " />
                <h1 className="text-zinc-700 tracking-wide text-3xl lg:text-4xl ">
                  PERHATIAN
                </h1>
              </div>
            </div>
            <div className="w-full px-5  lg:px-10 flex flex-col gap-2 justify-around">
              <ol className="list-decimal list-inside leading-relaxed">
                <li className="text-zinc-700 mb-3">
                  Salin dan Tempelkan Kode Undangan yang Anda dapat dari
                  Whatsapp.
                </li>
                <li className="text-zinc-700 mb-3">
                  Jika kode undangan tidak dapat diakses, mohon konfirmasi
                  kepada pengirim link undangan.
                </li>
                <li className="text-zinc-700 mb-3">
                  Jangan lupa untuk <i>klik</i> Ambil QR-Code dan Screenshot.
                </li>
                <li className="text-zinc-700 mb-3">
                  Simpan dan tunjukan QR-Code kepada penerima tamu saat memasuki
                  acara.
                </li>
                <li className="text-zinc-700 mb-3">
                  Jika lupa, bisa refresh kembali browser anda.
                </li>
              </ol>
            </div>
            <button
              onClick={closeModal}
              className="flex group items-center gap-2 border-b border-zinc-600 text-zinc-600 hover:text-zinc-900"
            >
              <span>Oke, saya mengerti </span>
              <SlLike className=" gerak relative" />
            </button>
            <p className="italic text-sm text-center py-10 text-zinc-600">
              Kami Ucapkan Terima Kasih Atas Perhatiannya
            </p>
            <div className="w-full text-zinc-500/80 flex flex-col lg:flex-row text-sm items-center justify-between px-2">
              <h3 className="">
                Powered By :{" "}
                <Link
                  href="https://webhouse.inkara.id"
                  passHref
                  target="_blank"
                  prefetch={false}
                  className="underline"
                >
                  WebHouse.inkara.id
                </Link>{" "}
              </h3>
              <p>©2023 - @webhouse_invitation</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewModal;
