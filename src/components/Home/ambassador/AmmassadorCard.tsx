type TProps = {
  image: string;
  name: string;
};

const AmmassadorCard = ({ image, name }: TProps) => {
  return (
    <div className="relative lg:mt-20 mb-20">
      <div className="bg-white lg:w-[390px] h-[267px] text-black rounded-sm">
        <div className="relative">
          <div className="rotate-45 absolute -top-[55px] left-[40%] bg-black bg-opacity-40  overflow-hidden  w-[100px] h-[100px]"></div>
          <img
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            src={image}
            alt=""
            className="w-[130px] h-[130px] object-cover absolute -top-[65px] left-[35%]"
          />
        </div>
        <div className="text-black pt-20 flex flex-col items-center">
          <h1 className="text-2xl ">
            <span className="font-bold">{name}</span> Gilmore
          </h1>
          <h3>SUPPORTER</h3>
          <p className="w-[85%] mx-auto text-gray-600 text-center">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring.
          </p>
        </div>
      </div>
      <div className="w-[20px] h-[20px] bg-blue-700 absolute bottom-0 left-0"></div>
    </div>
  );
};

export default AmmassadorCard;
