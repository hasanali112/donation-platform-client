import { cn } from "@/lib/utils";
import { ArrowRight, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

type TPropsClass = {
  _id: string;
  className?: string;
  title: string;
  image: string;
  category: string;
  amount: string;
  description: string;
};

const CampainCard = ({
  className,
  title,
  image,
  description,
  _id,
}: TPropsClass) => {
  return (
    <div className="group">
      <div
        className={cn(
          `xl:w-[415px] mt-16 rounded-sm  duration-500 relative group-hover:-translate-y-1`,
          className
        )}
      >
        <div className="relative">
          <img
            src={image}
            alt=""
            className="rounded-sm object-cover w-full h-[410px]"
          />
          <div className="w-full group-hover:h-[410px] absolute top-0 group-hover:bg-opacity-50 group-hover:rounded-sm  group-hover:bg-blue-500 group-hover:duration-500"></div>
        </div>
        <div className="absolute top-[70%] lg:left-2 xl:left-3">
          <div className="xl:w-[390px] lg:w-[360px] h-[190px] mx-auto bg-[#ffffff] border-b-2 border-blue-700  rounded-md shadow-md p-4 relative">
            <h1 className="text-[23px] font-bold">{title}</h1>
            <p className="mt-4">{description.slice(0, 70)}</p>
            <Link
              to={`/donations/${_id}`}
              className="group-hover:text-blue-900"
            >
              <p className="inline-flex gap-4 items-center text-sm font-semibold mt-5">
                Read Plan{" "}
                <span>
                  <ArrowRight />
                </span>
              </p>
            </Link>
            <div className="bg-blue-600 w-[50px] flex justify-center items-center h-[50px] rounded-full text-white absolute -top-[13%] right-[18px] z-50">
              <HeartPulse />
            </div>
            <div className="w-[63px] flex justify-center items-center h-[63px] rounded-full text-white absolute -top-[17%] right-[3%] group-hover:bg-white group-hover:duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampainCard;
