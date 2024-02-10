const Work = () => {
  const worklist = [
    {
      id: 1,
      workname: "Product designer",
      worktime: "2021 - Present",
      techname: "Figma",
      color: true,
    },
    {
      id: 2,
      workname: "Product designer",
      worktime: "2021 - Present",
      techname: "Figma",
    },
    {
      id: 3,
      workname: "Product designer",
      worktime: "2021 - Present",
      techname: "Figma",
    },
    {
      id: 4,
      workname: "Product designer",
      worktime: "2021 - Present",
      techname: "Figma",
    },
  ];
  return (
    <div className="bg-dark-500 px-4 py-4 mt-4 mb-3 md:py-14 md:px-7 md:mr-3 rounded-xl outline h-fit outline-dark-400 order-2 row-span-2">
      <div className="flex items-center px-1 justify-start gap-2.5 font-bold">
        <div className="h-2 aspect-square rounded-full bg-dark-1000"></div>
        <p className="text-base md:text-2xl text-dark-1000">Recent Work</p>
      </div>
      <div className="pt-7 pb-2 md:pt-16 flex flex-col gap-2 md:gap-8">
        {worklist.map((item) => (
          <div
            key={item.id}
            className=" flex items-center justify-between px-1 text-lg md:text-2xl  tracking-tighter md:tracking-wide text-dark-1000"
          >
            <div className="md:flex flex-col gap-2">
              <p
                className={`font-semibold ${
                  item.color ? "text-red-200" : "text-dark-1000"
                }`}
              >
                {item.workname}
              </p>
              <p className="md:text-xl">{item.worktime}</p>
            </div>
            <p className="md:text-xl md:mr-2">{item.techname}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
