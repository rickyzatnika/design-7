import { useState } from "react";
import Image from "next/legacy/image";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import 'animate.css';


const variants = {
  closed: { opacity: 0.5 },
  open: { opacity: 1, scale: 0.9 },
};

const Gifts = ({ setShowPopup }) => {
  const [copyText, setCopyText] = useState(true);
  const [active, inActive] = useState("qr-bri");
  const [show, setShow] = useState(true);

  const showBri = () => {
    inActive("qr-bri");
    if (inActive !== "qr-bri") {
      setShow(true);
    }
    return () => {
      setShow(false);
    };
  };
  const showBca = () => {
    inActive("qr-bca");
    if (inActive !== "qr-bri") {
      setShow(false);
    }
    return () => {
      setShow(true);
    };
  };

  const briClick = () => {
    setCopyText(false);
    Swal.fire({
      title: "Copied Successfully",
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: true,
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    setTimeout(() => {
      setCopyText(true);
      setShowPopup(true);
    }, 2000);
    navigator.clipboard.writeText("5221843031162717");

    return () => clearTimeout();
  };
  const bcaClick = () => {
    setCopyText(false);
    Swal.fire({
      title: "Copied Successfully",
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: true,
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    setTimeout(() => {
      setCopyText(true);
      setShowPopup(true);
    }, 2000);
    navigator.clipboard.writeText("7772282331");
    return () => clearTimeout();
  };

  return (
    <>
      <div className="w-full min-h-screen relative p-2 flex flex-col items-center justify-center ">
        <h3 className="py-8 font-[Hattori] text-xl">Kirim Hadiah disini juga bisa lho.. </h3>
        <div className="  w-full bg-white/80 shadow-2xl shadow-amber-500/10  py-8  ">
          <div className="flex items-center justify-center gap-4 mb-5">
            <button
              onClick={showBri}
              className={`${active === "qr-bri"
                ? "rounded-full bg-[#161616] hover:bg-none hover:border hover:border-[#161616]  py-1 px-6 text-[#e6e6e6]"
                : "border border-[#161616] rounded-full  py-1 px-6"
                }`}
            >
              BRI
            </button>
            <button
              onClick={showBca}
              className={`${active === "qr-bca"
                ? "rounded-full bg-[#161616] hover:bg-none hover:border hover:border-[#161616]  py-1 px-6 text-[#e6e6e6]"
                : "border border-[#161616] rounded-full  py-1 px-6"
                }`}
            >
              BCA
            </button>
          </div>
          {active === "qr-bri" && (
            <div className="w-full flex gap-2 flex-col items-center">
              <motion.div
                animate={show ? "open" : "closed"}
                variants={variants}
                className="w-full bg-white pt-6 pb-2 mb-4 text-center "
              >
                <Image
                  src="/img/qr-bri.png"
                  alt="qr-code"
                  width={100}
                  height={75}
                  objectFit="contain"
                  objectPosition="center"
                  layout="responsive"
                  priority
                />
                <p className="text-md text-center pt-2 text-[#444]">BRI QRIS</p>
                <span className="italic text-center text-[#666]">
                  a/n Rahmadi Irwansyah
                </span>
              </motion.div>
              <p className="italic">atau</p>
              <button
                onClick={briClick}
                className="py-1 px-6 border rounded-full hover:bg-[#161616] hover:text-[#e6e6e6] border-[#161616]"
              >
                {copyText ? (
                  <p>Salin No.Rekening</p>
                ) : (
                  <div className="flex w-full items-center justify-center gap-2">
                    <p>loading</p>
                    <div className="animate-spin border-2 border-black border-b-black/20 w-3 h-3 rounded-full"></div>
                  </div>
                )}
              </button>
            </div>
          )}
          {active === "qr-bca" && (
            <div className="w-full flex gap-2 flex-col items-center">
              <motion.div
                animate={show ? "closed" : "open"}
                variants={variants}
                className="w-full bg-white pt-6 pb-2 mb-4 text-center"
              >
                <Image
                  src="/img/qr-bca.png"
                  alt="qr-code"
                  width={100}
                  height={75}
                  objectFit="contain"
                  objectPosition="center"
                  layout="responsive"
                  priority
                />
                <p className="text-md text-center pt-2 text-[#444]">BCA QRIS</p>
                <span className="italic text-center text-[#666]">
                  a/n Dinda Novita Sary
                </span>
              </motion.div>
              <p className="italic">atau</p>
              <button
                onClick={bcaClick}
                className="py-1 px-6 border rounded-full hover:bg-[#161616] hover:text-[#e6e6e6] border-[#161616]"
              >
                {copyText ? (
                  <p>Salin No.Rekening</p>
                ) : (
                  <div className="flex w-full items-center justify-center gap-2">
                    <p>loading</p>
                    <div className="animate-spin border-2 border-black border-b-black/20 w-3 h-3 rounded-full"></div>
                  </div>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gifts;
