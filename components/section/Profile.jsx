import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import bg from "../../public/image/ornamen-profile.png";
import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";
import { motion } from "framer-motion";
import GetQrCode from "../GetQRCode";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";

const Profile = ({ guest }) => {
  const sectionRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [displayed, setDisplayed] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);
  const [showAttend, setShowAttend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const { uuid } = router.query;

  const { register, handleSubmit } = useForm();

  const attendForm = async ({ status, present }) => {
    try {
      const userId = guest.userId;
      await axios.patch(
        `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/status/${uuid}?userId=${userId}`,
        {
          present: present,
          status: selectedValue,
        }
      );
      if (!status && selectedValue === "not Going") {
        setShowQrCode(false);
        Swal.fire({
          text: "Terima Kasih Atas Perhatiannya 😊",
          showConfirmButton: true,
          showCloseButton: false,
          showClass: {
            popup: "animate__animated animate__zoomIn animate__delay-1s",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else {
        setShowQrCode(true);
        Swal.fire({
          title: "Terima Kasih Atas Perhatiannya",
          text: " Jangan lupa untuk Screenshot Qr-Code 😊",
          showConfirmButton: false,
          showCloseButton: false,
          showConfirmButton: true,
          showClass: {
            popup: "animate__animated animate__zoomIn animate__delay-1s",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
      setShowModal(false);
      setShowAttend(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAttend = () => {
    setShowQrCode(false);
    setShowModal(false);
    setShowAttend(true);
  };

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !displayed) {
          setShowModal(true);
          setDisplayed(true);
        }
      });
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [displayed, guest.status]);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center lg:justify-between relative "
      id="profile"
    >
      {showQrCode && <GetQrCode setShowQrCode={setShowQrCode} />}
      <div className="absolute w-full top-0 h-full z-20">
        <Image
          src="/image/background-profile.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="w-full relative  flex flex-col items-center justify-center gap-16 h-full py-20 z-30">
        <div className="flex flex-col items-center relative w-full">
          <Image
            src="/img/cover-invitation-man.png"
            alt=""
            width={1200}
            height={575}
            objectFit="contain"
            priority
          />
          <div className="w-full bg-image-man -top-14 absolute -left-14 sm:-left-32 md:-left-40 lg:-left-24 -z-10 ">
            <Image
              src={bg}
              alt=""
              width={1200}
              height={575}
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center px-4">
            <h2 className="font-[Hattori] text-2xl bg-gradient-to-tr from-amber-600 via-yellow-700 bg-clip-text text-transparent">
              RAHMADI IRAWANSYAH
            </h2>
            <p className="text-zinc-600 dark:text-zinc-500 text-sm">
              Putra dari Bpk. Irawan Yusmiatna & Ibu Rosmini
            </p>
            <Link
              href="https://instagram.com/rahmadi.irawansyah"
              target="_blank"
              passHref
              prefetch={false}
            >
              <SlSocialInstagram
                size={22}
                className="text-zinc-700 dark:text-zinc-500 animate-spin hover:animate-none"
              />
            </Link>
          </div>
        </div>
        <div className="font-[parisienne] text-6xl text-amber-700/80">&</div>
        <div className="relative w-full">
          <Image
            src="/img/cover-invitation-woman.png"
            alt=""
            width={1200}
            height={575}
            objectFit="contain"
            priority
          />
          <div className="w-full bg-image-woman -top-14 absolute -left-14 sm:-left-32 md:-left-40 lg:-left-24 -z-10 ">
            <Image
              src={bg}
              alt=""
              width={1200}
              height={575}
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center px-4">
            <h2 className="font-[Hattori] text-2xl bg-gradient-to-tr from-amber-600 via-yellow-700 bg-clip-text text-transparent">
              DINDA NOVITA SARY
            </h2>
            <p className="text-zinc-600 dark:text-zinc-500 text-center text-sm">
              Putri dari Bpk. Nana Heryana dan Ibu Sri Sumiarti
            </p>
            <Link
              href="https://instagram.com/dindanovitas"
              target="_blank"
              passHref
              prefetch={false}
            >
              <SlSocialInstagram
                className="text-zinc-700 dark:text-zinc-400 animate-spin hover:animate-none"
                size={22}
              />
            </Link>
          </div>
        </div>
      </div>
      {guest && guest.status === "Opened" ? (
        <>
          {showModal && (
            <>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className={`fixed overflow-hidden top-40 right-0 shadow-lg shadow-black/20 rounded-tl-xl rounded-bl-xl w-72 lg:w-80 h-auto py-8 lg:py-6 flex items-center z-50 justify-center bg-zinc-50 transition-all duration-500 ease-linear
                ${
                  showModal
                    ? " right-0 "
                    : " -right-[100%] transition-all duration-500 ease-linear"
                }`}
              >
                <div className="text-center flex flex-col gap-4">
                  <div className="py-2 antialiased leading-loose">
                    <h1 className="text-zinc-800 text-2xl pb-3">
                      Hallo, {guest.name}
                    </h1>
                    <p className="text-sm px-3 text-zinc-700">
                      Mohon Konfirmasi Kehadiran dan Jangan Lupa untuk
                      Simpan/Screenshot QR-Code.
                    </p>
                  </div>
                  <button
                    className="text-zinc-300 text-sm py-3 items-center shadow-md shadow-black/30 w-fit mx-auto px-4 rounded justify-center gap-1 bg-zinc-800 hover:bg-black"
                    onClick={() => handleAttend()}
                  >
                    Konfirmasi Kehadiran
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </>
      ) : (
        ""
      )}
      {showAttend && (
        <div className="w-full md:w-5/6 lg:w-2/6 min-h-screen bg-black/70 backdrop-blur-sm fixed z-[999999999] flex items-center justify-center px-2 top-0 right-0">
          <form
            onSubmit={handleSubmit(attendForm)}
            className="w-full bg-white rounded z-50 h-auto  px-4 py-20 flex flex-col items-center justify-center gap-3"
          >
            <div className="w-full leading-relaxed mb-3">
              <h3 className="mb-2 text-lg text-zinc-800">Kehadiran :</h3>
              <div className="flex flex-col flex-nowrap gap-2">
                <div className="flex flex-nowrap gap-1">
                  <input
                    type="radio"
                    value="going"
                    onChange={() => handleClick("going")}
                    {...register("status", { required: true })}
                    checked={selectedValue === "going"}
                  />
                  <label
                    className="text-zinc-700"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("going");
                    }}
                  >
                    Ya, Saya akan hadir
                  </label>
                </div>
                <div className="flex flex-nowrap gap-1">
                  <input
                    type="radio"
                    value="not Going"
                    {...register("status", { required: true })}
                    checked={selectedValue === "not Going"}
                    onChange={() => handleClick("not Going")}
                  />
                  <label
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("not Going");
                    }}
                    className="text-zinc-700"
                  >
                    Maaf, Saya tidak bisa hadir
                  </label>
                </div>
              </div>
            </div>
            {selectedValue === "going" && (
              <div className="mb-3 w-full">
                <h3 className="mb-2 text-lg text-zinc-800">
                  Berapa Orang yang Hadir :
                </h3>
                <input
                  {...register("present", { required: true })}
                  placeholder="0"
                  className="py-3 border border-zinc-400 px-2 w-full outline-none  focus:outline-none rounded"
                  type="number"
                />
              </div>
            )}

            {selectedValue && (
              <button
                className="py-3 px-7 w-full text-white/80 bg-gradient-to-br from-zinc-800/90 to-zinc-900/80   hover:from-zinc-800 hover:to-zinc-900/90 "
                type="submit"
              >
                {loading ? (
                  <>
                    <div className="flex items-center justify-center gap-2 w-full">
                      <span>Loading...</span>
                      <div className="border-2  p-2  border-zinc-300  bg-clip-border animate-spin rounded-full relative overflow-x-hidden">
                        <span className="absolute top-0 right-0 h-2 w-2  bg-green-400 rounded-full z-10"></span>
                      </div>
                    </div>
                  </>
                ) : (
                  <span> Simpan</span>
                )}
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
