const Footer = () => {
  return (
    <footer className=" h-36 md:h-28 md:mt-4 md:px-12 rounded-2xl mb-8 bg-dark-500 text-base flex flex-col md:flex-row-reverse md:justify-between  gap-y-5 items-center justify-center outline  outline-dark-400 colorgredbl">
      <div className="flex items-center justify-center gap-x-2 md:gap-x-3 bg-dark-600 rounded-xl px-4 md:h-7">
        <div className="h-2 aspect-square rounded-full bg-red-400"></div>
        <p className="text-[9px] md:text-xs md:tracking-widest text-first-200">
          AVAILABLE FOR JOB
        </p>
      </div>
      <div className="flex items-center justify-between gap-x-8 md:gap-x-5 md:text-xl">
        <p className=" text-red-300">Twitter</p>
        <p className=" text-first-100">Instagram</p>
        <p className=" text-first-100">LinkdIn</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-first-200 md:text-2xl md:tracking-wider">
          Portfolio 2024
        </p>
      </div>
    </footer>
  );
};
export default Footer;
