import React from "react";
import Aside from "../Aside";
import Sound from "../Backsound";

const Layout = ({ children }) => {
  return (
    <>
      <main className="w-full h-full relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        <div className="col-span-8 w-full h-full relative ">
          <Aside />
        </div>
        <div className="col-span-4 overflow-hidden relative z-40 bg-white min-h-screen">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
