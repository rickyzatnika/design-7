// import axios from "axios";
// import Link from "next/link";
// import Image from "next/legacy/image";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import { motion } from "framer-motion";
// import { BiMap } from "react-icons/bi";
// import { BsFillArrowRightSquareFill } from "react-icons/bs";
// import Swal from "sweetalert2";

// const Home = ({ guest }) => {
//   const router = useRouter();

//   const { uuid } = router.query;
//   const [values, setValues] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [hidden, setHidden] = useState(true);
//   const { register, handleSubmit } = useForm();
//   const [showQRCode, setShowQRCode] = useState(false);
//   const [qrCode, setQrCode] = useState([]);

//   // react-hook-form setup ==============================
//   const formSubmit = async ({ status, present }) => {
//     try {
//       await axios.patch(
//         `${process.env.NEXT_PUBLIC_DEV_URI}/invitation/status/${uuid}`,
//         {
//           present: present,
//           status: status,
//         }
//       );
//       setHidden(false);
//       if (values === "not Going") {
//         setHidden(true);
//         setShowQRCode(false);
//         router.push(`/invitation/${guest.unique_Code}`);
//       } else {
//         setLoading(true);
//         setShowQRCode(true);
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         text: "Server Not Responding",
//       });
//     }
//   };

//   useEffect(() => {
//     if (!guest) return;
//     const fetchQRCode = async () => {
//       try {
//         const { data } = await axios.get(
//           `${process.env.NEXT_PUBLIC_DEV_URI}/invitation/validate/${router.query.uuid}`
//         );
//         setQrCode(data.qrCode);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchQRCode();
//   });

//   const onChanges = (e) => {
//     setValues(e);
//   };

//   if (!guest)
//     return (
//       <div
//         key={guest.id}
//         className="w-full h-screen flex items-center justify-center"
//       >
//         <div className="text-center flex items-center gap-1">
//           <p className="text-xl text-gray-500">Loading</p>
//           <span className="p-3 bg-gradient-to-tr from-indigo-600 to-transparent rounded-full animate-spin" />
//         </div>
//       </div>
//     );

//   return (
//     <>
//       <div className="w-full h-screen py-0 sm:py-24 relative">
//         <motion.div
//           initial={{ y: -100 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute top-5 xs:-top-20 sm:-top-28 md:-top-24 lg:-top-5 z-50 right-0 w-full "
//         >
//           <Image
//             src="/image/orn-1-top.png"
//             alt=""
//             width={75}
//             height={50}
//             layout="responsive"
//             objectFit="contain"
//             priority
//           />
//         </motion.div>
//         {hidden && (
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.3 }}
//             className="absolute z-[99999] top-0 left-0 right-0 flex flex-col shadow-xl shadow-black/20 mx-auto w-full h-full px-0  items-center  justify-between "
//           >
//             <div className="text-center w-full py-4 bg-white p-1 ">
//               <h3 className="text-xl font-[Hattori] sm:text-2xl  text-zinc-800 font-semibold ">
//                 Dear, {guest.name}
//               </h3>
//             </div>
//             <form
//               onSubmit={handleSubmit(formSubmit)}
//               className="w-full  md:w-5/6 lg:w-4/6 flex flex-col items-center justify-center px-6 lg:px-0 pb-24 gap-1"
//             >
//               <div className="w-full leading-relaxed mb-3">
//                 <h3 className="mb-2 text-md lg:text-lg text-zinc-800">
//                   Kehadiran :
//                 </h3>
//                 <div className="flex flex-col flex-nowrap gap-2">
//                   <div className="flex flex-nowrap gap-1">
//                     <input
//                       type="radio"
//                       value="going"
//                       {...register("status", { required: true })}
//                       onChange={(e) => onChanges(e.target.value)}
//                     />
//                     <label className="text-zinc-700 text-sm lg:text-md">
//                       Saya Akan Hadir
//                     </label>
//                   </div>
//                   <div className="flex flex-nowrap gap-1">
//                     <input
//                       type="radio"
//                       value="not Going"
//                       {...register("status", { required: true })}
//                       onChange={(e) => onChanges(e.target.value)}
//                     />
//                     <label className="text-zinc-700 text-sm lg:text-md">
//                       Maaf, tidak bisa Hadir
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               {values === "going" && (
//                 <div className="mb-3 w-full">
//                   <h3 className="mb-2 text-md text-zinc-800">
//                     Berapa Orang yang Hadir :
//                   </h3>
//                   <input
//                     {...register("present", { required: true })}
//                     placeholder="0"
//                     className="py-2 px-2 w-full border border-zinc-400 focus:outline-zinc-600 rounded"
//                     type="number"
//                   />
//                 </div>
//               )}

//               <button
//                 className="py-3 px-7 w-full text-white/80 bg-gradient-to-br from-zinc-900/90 to-zinc-900  hover:from-zinc-800 hover:to-zinc-900/90 "
//                 type="submit"
//               >
//                 {loading ? (
//                   <div className="flex justify-center items-center gap-1">
//                     <span className="text-white/80">Loading...</span>
//                     <div className="border-2 p-2 border-zinc-300  bg-clip-border animate-spin rounded-full relative overflow-x-hidden">
//                       <span className="absolute top-0 right-0 h-2 w-2  bg-green-400 rounded-full z-10"></span>
//                     </div>
//                   </div>
//                 ) : (
//                   <p>Simpan</p>
//                 )}
//               </button>
//             </form>
//             <div className="absolute text-center w-full bottom-0">
//               <p className="text-zinc-800/80 text-sm italic py-2 px-2">
//                 *Konfirmasi Kehadiran untuk mendapatkan Qr-Code*
//               </p>
//             </div>
//           </motion.div>
//         )}
//         {showQRCode && (
//           <div
//             className={`w-full h-screen backdrop-blur absolute top-0 z-[99999] flex flex-col justify-center items-center ${
//               guest && guest.status === "not Going" ? "flex" : "hidden"
//             }`}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.4 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               div
//               className="antialiased w-full  bg-white  h-full flex flex-col items-center justify-evenly "
//             >
//               <div className="w-full h-full flex flex-col items-center justify-between  bg-zinc-200/40 leading-loose text-center">
//                 <div className="bg-gradient-to-tr from-amber-800/80 shadow-lg via-yellow-700 to-amber-900 w-full">
//                   <h1 className="text-zinc-100">{guest.name}</h1>
//                 </div>
//                 <div className="pb-5 flex w-full flex-col text-zinc-800 gap-2 items-center">
//                   <p className="text-xl font-[Hattori] tracking-widest">
//                     The Wedding Of
//                   </p>
//                   <p className="font-[parisienne] text-3xl font-semibold bg-gradient-to-tr from-amber-600 via-yellow-800 to-amber-600 bg-clip-text text-transparent py-2">
//                     Agoes & Reika
//                   </p>
//                   <small>Selasa, 23 Mei 2023</small>
//                   <div className="">
//                     <Image
//                       src={qrCode}
//                       alt="qr-code validate"
//                       width={300}
//                       height={175}
//                       objectFit="contain"
//                       objectPosition="center"
//                       priority
//                     />
//                     <div className="flex flex-col items-center pt-3">
//                       <BiMap size={28} className="text-zinc-900/80" />
//                       <p className="text-zinc-900/80 antialiased font-[Hattori] ">
//                         The Trans Luxury Hotel Bandung
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <small className="italic px-1 text-zinc-700/90">
//                   *Simpan dan Tunjukan QR-Code Saat Memasuki Acara*
//                 </small>
//               </div>
//               <Link
//                 href={`/invitation/${guest.unique_Code}`}
//                 className="w-full"
//                 passHref
//               >
//                 <div className="antialiased group flex items-center justify-center gap-2 bg-zinc-800 w-full text-center py-4 text-zinc-100/90 ">
//                   <span>Detail Undangan</span>
//                   <BsFillArrowRightSquareFill
//                     size={24}
//                     className="relative left-0 group group-hover:left-4 transition-all duration-300"
//                   />
//                 </div>
//               </Link>
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;
