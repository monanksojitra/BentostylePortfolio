import React from "react";
import owner from "../../public/assets/ownerimg.jpeg";
import copyicon from "../../public/assets/ph_copy.svg";

const Hero = () => {
  return (
    <div className="bg-dark-500 px-4 py-5 rounded-xl outline  outline-dark-400 ">
      <div className="flex items-center justify-center gap-x-2 bg-dark-600 h-5 rounded-xl w-fit px-3 ">
        <div className="h-2 aspect-square rounded-full bg-red-400"></div>
        <p className="text-[9px] text-first-200 tracking-wider">AVAILABLE FOR JOB</p>
      </div>
      <p className="text-dark-1000 text-base font-medium py-3 tracking-wide">UI/UX Designer</p>
      <div className="py-7 w-[80%]">
        <div className="h-20 aspect-square rounded-full border-4 border-dark-200 ">
          <img src={owner} alt="" className="rounded-full" />
        </div>
        <p className="text-2xl font-semibold text-first pt-7 ">I’m Monank Sojitra</p>
        <p className="text-dark-1000 font-normal text-base tracking-wide  py-2">
          I design digital products with great experience.
        </p>
        <div className="flex py-3 gap-2">
          <div className="flex ">
            <button
              type="button"
              className="h-8 rounded-tr-sm rounded-br-sm text-first text-xs bg-red-400 px-2 rounded-md btn"
            >
              Hire me
            </button>

            <button
              type="button"
              className="h-8 rounded-tl-sm rounded-bl-sm text-first text-xs bg-red-400 px-2 rounded-md btn"
            >
              +
            </button>
          </div>
          <div className="flex gap-[1px] ">
            <button
              type="button"
              className="h-8 rounded-tr-sm rounded-br-sm text-first text-xs bg-dark-600 px-2 rounded-md outline outline-1 outline-dark-400 tracking-tight"
            >
              Copy Email
            </button>

            <button
              type="button"
              className="h-8 rounded-tl-sm rounded-bl-sm text-first text-xs px-2 bg-dark-600 rounded-md outline outline-1  outline-dark-400 "
            >
              <img src={copyicon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
