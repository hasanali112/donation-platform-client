import { cn } from "@/lib/utils";

type TNews = {
  className?: string;
};

const NewsCard = ({ className }: TNews) => {
  return (
    <div
      className={cn(
        `border bg-gray-100  lg:min-w-[370px] lg:h-[550px] h-[510px] rounded-sm  hover:-translate-y-3 duration-500 lg:hover:scale-110  shadow-sm shadow-gray-200`,
        className
      )}
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-sm"
        />
      </div>
      <div className="bg-white border-b-4 border-blue-600 rounded-md   w-[95%] h-[55%] mx-auto -translate-y-[60px]">
        <div className="p-3 mt-5 space-y-4">
          <h1 className="text-xl font-bold">Blog</h1>

          <p className="mt-2">
            <span className="font-semibold">Date</span>
            <span className="text-gray-500">Main Title</span>
            <span className="font-semibold">$5000</span>
            <span className="text-gray-500"> goal</span>
          </p>
        </div>
        <hr />
        <div className="p-3">
          <p className="mt-2 mb-3">Category: category</p>
          <p className="text-gray-500">description</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
