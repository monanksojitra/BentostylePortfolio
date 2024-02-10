import owner from "/assets/ownerimg.jpeg";
import copyicon from "/assets/ph_copy.svg";
import plus from "/assets/plus.svg";

const Hero = () => {
  return (
    <div className="bg-dark-500 px-4 py-5 md:py-11 md:px-10 md:mt-5 rounded-xl outline  outline-dark-400 col-span-2 order-1">
      <div className="flex flex-col md:w-full justify-between md:items-center md:flex-row">
        <div className="flex items-center justify-center gap-x-2 md:gap-x-3 bg-dark-600 h-5 md:h-7 rounded-xl w-fit px-3 md:order-2">
          <div className="h-2 aspect-square rounded-full bg-red-400"></div>
          <p className="text-[9px] md:text-xs text-first-200 tracking-wider md:tracking-[1.8px] ">
            AVAILABLE FOR JOB
          </p>
        </div>
        <p className="text-dark-1000 text-base font-medium py-3 tracking-wide md:text-2xl md:order-1">
          UI/UX Designer
        </p>
      </div>
      <div className="pt-7 md:flex items-center justify-between flex-row-reverse">
        <div className="h-20 md:h-44 md:mx-1 aspect-square rounded-full border-4 md:border-8 border-dark-200">
          <img src={owner} alt="" className="rounded-full" />
        </div>
        <div className="w-[80%] md:w-[48%] xl:w-[28%]">
          <div className=" md:space-y-4 ">
            <p className="text-2xl md:text-4xl font-semibold text-first pt-7 ">
              I’m Monank Sojitra
            </p>
            <p className="text-dark-1000 font-normal text-base md:text-xl tracking-wide  py-2">
              I design digital products with great experience.
            </p>
          </div>
          <div className="flex mt-3 gap-2 lg:w-full md:my-6">
            <div className="flex text-xs md:text-base md:font-semibold">
              <div className="h-8 md:h-10 flex items-center justify-center rounded-tr-sm rounded-br-sm text-first text-center bg-red-400 px-2 rounded-md btn">
                <p> Hire me</p>
              </div>

              <div className="h-8 md:h-10 flex items-center justify-center rounded-tl-sm rounded-bl-sm text-first text-center bg-red-400 px-2 md:px-3 rounded-md btn">
                <img src={plus} alt="" className="h-2 md:h-3 aspect-square" />
              </div>
            </div>
            <div className="flex gap-[1px] text-xs md:text-base">
              <button
                type="button"
                className="h-8 md:h-10 rounded-tr-sm rounded-br-sm text-first  bg-dark-600 px-2 rounded-md outline outline-1 outline-dark-400 tracking-tight md:px-4"
              >
                Copy Email
              </button>

              <button
                type="button"
                className="h-8 md:h-10 rounded-tl-sm rounded-bl-sm text-first  px-2 bg-dark-600 rounded-md outline outline-1  outline-dark-400 md:px-2 "
              >
                <img src={copyicon} alt="" className="md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
