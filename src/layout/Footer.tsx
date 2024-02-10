import React from "react";
const Footer = () => {
  return (
    <footer className=" h-36 mx-6 rounded-2xl mb-8 bg-dark-400 text-base flex flex-col gap-y-5 items-center justify-center">
      <div className="flex items-center justify-center gap-x-2 bg-dark-600 rounded-xl px-4">
        <div className="h-2 aspect-square rounded-full bg-red-400"></div>
        <p className="text-[9px] text-first-200">AVAILABLE FOR JOB</p>
      </div>
      <div className="flex items-center justify-between gap-x-8">
        <p className=" text-red-300">Twitter</p>
        <p className=" text-first-100">Instagram</p>
        <p className=" text-first-100">LinkdIn</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-first-200">Portfolio 2024</p>
      </div>
    </footer>
  );
};
export default Footer;
