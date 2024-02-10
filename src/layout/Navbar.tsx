import React from "react";
import { IoMdMenu } from "react-icons/io";
import NAVICON from "../../public/assets/nav-icon.png";
const Navbar = () => {
  return (
    <nav className="px-6 mt-6 flex items-center justify-between">
      <div className="h-11 aspect-square rounded-full flex items-center justify-center bg-dark-500 outline outline-dark-400">
        <img src={NAVICON} className="h-7 aspect-square" alt="" />
      </div>
      <div className=" h-11 mx-1 px-3 rounded-3xl flex flex-1 items-center justify-between bg-dark-500 outline outline-dark-400">
        <p className="text-red-300 text-sm font-bold uppercase">About</p>
        <p className="hidden sm:block">Portfolio</p>
        <p className="hidden sm:block">Contact</p>
        <IoMdMenu size={25} color="white" />
      </div>
    </nav>
  );
};
export default Navbar;
