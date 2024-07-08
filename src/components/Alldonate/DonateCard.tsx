import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "../ui/progress";

type TPropsClass = {
  _id: string;
  className?: string;
  title: string;
  image: string;
  category: string;
  amount: string;
  description: string;
};

const DonateCard = ({
  className,
  title,
  image,
  category,
  amount,
  description,
  _id,
}: TPropsClass) => {
  const calculateValue = (100 / 5000) * Number(amount);

  return (
    <div
      className={cn(
        `border bg-gray-100 min-w-[370px] max-w-[370px] lg:min-w-[370px] lg:max-w-[370px] lg:h-[550px] h-[510px] rounded-sm  hover:-translate-y-3 duration-500 lg:hover:scale-110  shadow-sm shadow-gray-200`,
        className
      )}
    >
      <div>
        <img src={image} alt="" className="rounded-sm" />
      </div>
      <div className="bg-white border-b-4 border-blue-600 rounded-md   w-[95%] h-[55%] mx-auto -translate-y-[60px]">
        <div className="p-3 mt-5 space-y-4">
          <h1 className="text-xl font-bold">{title}</h1>
          <Progress
            value={calculateValue}
            className={calculateValue > 60 ? `h-2 bg-[#3dbdb6]` : "bg-blue-600"}
          />
          <p className="mt-2">
            <span className="font-semibold">${amount}</span>{" "}
            <span className="text-gray-500">donated of</span>{" "}
            <span className="font-semibold">$5000</span>
            <span className="text-gray-500"> goal</span>
          </p>
        </div>
        <hr />
        <div className="p-3">
          <p className="mt-2 mb-3">Category: {category}</p>
          <p className="text-gray-500">{description.slice(0, 70)}..</p>
          <Link to={`/donations/${_id}`}>
            <h1 className="inline-flex gap-3 items-center  mt-5">
              <span className="font-semibold">Read More</span> <ArrowRight />
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
