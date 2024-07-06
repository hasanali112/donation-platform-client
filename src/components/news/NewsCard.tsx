import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

type TNewsProps = {
  className?: string;
  item: {
    _id: string;
    title: string;
    image: string;
    category: string;
    header: string;
    body: string;
    conclution: string;
  };
};

const NewsCard = ({ item, className }: TNewsProps) => {
  return (
    <div
      className={cn(
        `border bg-gray-100  lg:min-w-[370px] lg:h-[550px] h-[510px] rounded-sm  hover:-translate-y-3 duration-500 lg:hover:scale-110  shadow-sm shadow-gray-200`,
        className
      )}
    >
      <div>
        <img src={item.image} alt="" className="rounded-sm" />
      </div>
      <div className="bg-white border-b-4 border-blue-600 rounded-md   w-[95%] h-[55%] mx-auto -translate-y-[60px]">
        <div className="p-3 mt-5 space-y-4">
          <h1 className="text-lg inline-flex items-center gap-3">
            <Calendar />
            June 30, 2024
          </h1>

          <p className="mt-2 text-xl font-bold">{item.title}</p>
        </div>
        <div className="p-3">
          <p className=" mb-3">{item?.header.slice(0, 90)}</p>
          <Link to={`/news/${item._id}`}>
            <p className="text-gray-500 mt-3 inline-flex items-center gap-3">
              Continue reading <ArrowRight />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
