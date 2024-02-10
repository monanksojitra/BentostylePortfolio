const ProductAndDesign = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 items-center justify-center text-dark-1000 text-sm md:text-2xl  order-3 md:py-3 md:mx-2 md:mt-1">
      <div className="h-20 md:h-36 flex items-center justify-center bg-dark-500 w-full rounded-md md:rounded-xl colorgredtr outline  outline-dark-400  ">
        <p className="tracking-wider">Product design</p>
      </div>
      <div className="flex w-full gap-x-2">
        <div className="h-20 md:h-36 md:mx-1 flex items-center justify-center  bg-dark-500 w-full rounded-md md:rounded-xl  colorgredtrs outline  outline-dark-400  ">
          <p className="tracking-wider">User Experience</p>
        </div>{" "}
        <div className="h-20 md:h-36 md:mx-1 flex items-center justify-center bg-dark-500 w-full rounded-md md:rounded-xl colorgredbl outline  outline-dark-400 ">
          <p className="tracking-wider">NoCode develop</p>
        </div>
      </div>
    </div>
  );
};

export default ProductAndDesign;
