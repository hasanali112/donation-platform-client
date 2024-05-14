const LoadingCard = () => {
  return (
    <div className="border bg-gray-100  lg:w-[390px] lg:h-[450px] h-[500px] rounded-md p-1 hover:-translate-y-3 duration-500 lg:hover:scale-110  shadow-sm shadow-gray-200">
      <div className="animate-pulse ">
        <div className="rounded-lg bg-slate-300 h-[250px] w-full"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded mt-10"></div>
          <div className="space-y-3 pt-10">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-5 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
