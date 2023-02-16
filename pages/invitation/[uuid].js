import React from "react";
import {
  Header,
  Wish,
  Profile,
  Navbar,
  Invitation,
  Gallery,
  Event,
  Footer,
} from "../../components";
import axios from "axios";

const GuestInvitation = ({ guest, posts }) => {

  return (
    <>
      <Header />
      <Invitation guest={guest} />
      <Profile guest={guest} />
      <Event />
      <Gallery />
      <Wish guest={guest} posts={posts} />
      <Footer />
      <Navbar />
    </>
  );
};

export default GuestInvitation;

// export const getStaticPaths = async () => {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation`);
//   const invitationDataList = res.data || [];
//   const paths = invitationDataList.length
//     ? invitationDataList.map((guests) => {
//       return {
//         params: {
//           uuid: guests.unique_Code,
//         },
//       };
//     })
//     : [];
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
//   );
//   const guest = res.data || {};
//   return {
//     props: {
//       guest,
//     },
//     revalidate: 1
//   };
// };

export const getServerSideProps = async ({ params, query }) => {

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
  );
  const guest = res.data || {};

  const res2 = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/comment/${params.uuid}?userId=${query.userId}`)
  const posts = res2.data || [];

  return {
    props: {
      guest,
      posts,
      revalidate: 1
    },
  };
};

