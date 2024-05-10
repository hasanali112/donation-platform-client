import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type TPropsClass = {
  _id: string;
  className?: string;
  title: string;
  image: string;
  category: string;
  amount: string;
};

const DonateCard = ({
  className,
  title,
  image,
  category,
  amount,
  _id,
}: TPropsClass) => {
  return (
    <div
      className={cn(
        `border bg-gray-100  lg:w-[390px] lg:h-[450px] h-[500px] rounded-md p-1 hover:-translate-y-3 duration-500 lg:hover:scale-110  shadow-sm shadow-gray-200`,
        className
      )}
    >
      <div>
        <img src={image} alt="" className="rounded-md" />
      </div>
      <div className="mt-4 mx-2">
        <h1>{title}</h1>
        <p className="mt-2">Category: {category}</p>
        <p className="mt-2">Amount: ${amount}</p>
        <div className="translate-y-2 ">
          <Link to={`/donations/${_id}`}>
            <button className="p-2 w-[350px] text-white font-semibold bg-pink-600 rounded-lg ">
              View detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
