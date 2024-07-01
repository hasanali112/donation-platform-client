import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import image4 from "@/assets/4.jpg";
import image5 from "@/assets/5.jpg";
import image6 from "@/assets/6.jpg";
import image7 from "@/assets/7.jpg";

const GellaryLayout = () => {
  return (
    <div className="grid grid-cols-12  gap-4">
      <div className="col-span-3  w-[128px] h-[192px] translate-y-[90px]">
        <img
          src={image1}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3  w-[128px] h-[212px]">
        <img
          src={image2}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3  w-[128px] h-[171px] mt-2">
        <img
          src={image3}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3  w-[140px] h-[255px] mt-14">
        <img
          src={image4}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3  w-[172px] h-[258px] -translate-y-[30px] -translate-x-[45px]">
        <img
          src={image5}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3  w-[128px] h-[172px] -translate-y-[100px]">
        <img
          src={image6}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3  w-[128px] h-[172px] -translate-y-[134px]">
        <img
          src={image7}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3  w-[128px] h-[160px]">
        <img
          src={image4}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3  w-[128px] h-[192px] -translate-y-[187px] translate-x-[145px]">
        <img
          src={image4}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-3  w-[128px] h-[165px] -translate-y-[220px] translate-x-[150px]">
        <img
          src={image7}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default GellaryLayout;
