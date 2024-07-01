const AmmassadorCard = () => {
  return (
    <div className="bg-white w-[390px] h-[267px] text-black rounded-lg">
      <div className="relative">
        <div className="rotate-45 absolute -top-[55px] left-[40%] bg-black bg-opacity-40  overflow-hidden  w-[100px] h-[100px]"></div>
        <img
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-[130px] h-[130px] object-cover absolute -top-[65px] left-[35%]"
        />
      </div>
      <div className="text-black mt-20 flex flex-col items-center">
        <h1 className="text-2xl ">
          <span className="font-bold">Jennifer</span> Gilmore
        </h1>
        <h3>SUPPORTER</h3>
        <p className="w-[85%] mx-auto text-gray-600 text-center">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring.
        </p>
      </div>
    </div>
  );
};

export default AmmassadorCard;
