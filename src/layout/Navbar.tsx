import  { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import NAVICON from "../../public/assets/nav-icon.png";
const Navbar = () => {
  const [toggelmenu, setToggelmenu] = useState(false);
  return (
    <nav className="mt-6 flex items-center justify-between w-full">
      <div className="h-11 xl:h-16 aspect-square rounded-full flex items-center justify-center bg-dark-500 outline outline-dark-400">
        <img src={NAVICON} className="h-7 xl:h-10 aspect-square" alt="" />
      </div>
      <div className=" h-11 xl:h-16 mx-1 px-3 xl:px-16 rounded-3xl xl:rounded-full flex flex-1 items-center justify-between bg-dark-500 outline outline-dark-400 xl:text-xl font-bold uppercase">
        <p className="text-red-300    ">About</p>
        <p className="hidden  text-first sm:block">Portfolio</p>
        <p className="hidden  text-first sm:block">Contact</p>
        <IoMdMenu
          size={25}
          color="white"
          className="md:hidden"
          onClick={() => setToggelmenu(!toggelmenu)}
        />
      </div>
      {toggelmenu && (
        <div className="absolute sm:hidden top-20 right-10  bg-dark-400 rounded-2xl w-[50%]">
          <ul className="px-10 py-5 space-y-3 text-first transition-all duration-150 uppercase w-fit">
            <li className="hover:border-b-2 py-1">About</li>
            <li className="hover:border-b-2 py-1">portfolio</li>
            <li className="hover:border-b-2 py-1">contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
