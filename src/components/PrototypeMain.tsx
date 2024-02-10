import crossarrow from "../../public/assets/crossarrow.svg";
import markupphone from "../../public/assets/phonemarkup.png";

const PrototypeMain = () => {
  return (
    <div className=" bg-dark-500 max-sm:w-full rounded-xl px-8 md:px-14 pt-5 mt-3 md:mr-3 text-dark-1000 order-5 row-start-4 outline  outline-dark-400 ">
      <div className="flex justify-between items-center pt-1.5 md:pt-6">
        <div className="space-y-1 md:space-y-3">
          <p className="text-base md:text-2xl md:tracking-wide">
            iOS Mobile app
          </p>
          <p className="text-xs md:text-xl md:tracking-wider">
            Product develop
          </p>
        </div>
        <div className="h-5 md:h-9 md:mr-2 aspect-square rounded-full bg-red-400 flex items-center justify-center">
          <img src={crossarrow} alt="" className="h-2.5 md:h-4 aspect-square" />
        </div>
      </div>
      <div className="mt-6 md:mt-11 flex items-center justify-center">
        <img src={markupphone} alt="" className="md:w-[90%]" />
      </div>
    </div>
  );
};

export default PrototypeMain;
