const AllStaticCard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-black bg-opacity-35 text-white  lg:w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">5,295</h1>
          <p className="text-center text-xl">VOLUNTEERS</p>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="lg:w-[258px] w-full h-[258px] object-cover"
        />
      </div>
      <div className="bg-black bg-opacity-35 text-white  lg:w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">75</h1>
          <p className="text-center text-xl">LEGAL PLANS</p>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="lg:w-[258px] w-full h-[258px] object-cover"
        />
      </div>
      <div className="bg-black bg-opacity-35 text-white  lg:w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">276</h1>
          <p className="text-center text-xl">EVENTS</p>
        </div>
      </div>
    </div>
  );
};

export default AllStaticCard;
