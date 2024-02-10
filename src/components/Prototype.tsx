import crossarrow from "/assets/crossarrow.svg";
import ptototype2 from "/assets/twoimggroup1.png";
import ptototype3 from "/assets/towimggroup2.png";

const Prototype = () => {
  const prototypedata = [
    {
      id: 2,
      protptypename: "AI Music product",
      prototypetype: "UX Case study",
      src: ptototype2,
    },
    {
      id: 3,
      protptypename: "AI Music product",
      prototypetype: "UX Case study",
      src: ptototype3,
    },
  ];
  return (
    <div className="flex flex-col md:mx-3 gap-4 md:gap-7 items-center justify-center text-dark-1000 text-sm my-4 col-span-1 order-4 row-span-3">
      {prototypedata.map((item) => (
        <div className=" bg-dark-500 w-full rounded-xl px-8 md:px-14 pt-4 md:pt-9 outline  outline-dark-400 ">
          <div className="flex justify-between items-center tracking-tight">
            <div className="space-y-1 md:space-y-3">
              <p className="text-base md:text-2xl font-bold">
                {item.protptypename}
              </p>
              <p className="text-xs md:text-xl md:tracking-wider">
                {item.prototypetype}
              </p>
            </div>
            <div className="h-5 md:h-9 aspect-square rounded-full bg-red-400 flex items-center justify-center">
              <img
                src={crossarrow}
                alt=""
                className="h-2.5 md:h-4 aspect-square"
              />
            </div>
          </div>
          <div className="my-4 md:my-8 flex items-center justify-center">
            <img src={item.src} alt="" className="md:h-[350px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prototype;
