import { cn } from "@/lib/utils";

type TPropsClass = {
  className?: string;
};

const DonateCard = ({ className }: TPropsClass) => {
  return (
    <div
      className={cn(
        `border bg-gray-100  lg:w-[390px] lg:h-[450px] h-[500px] rounded-md p-1 hover:-translate-y-3 duration-500 lg:hover:scale-110  shadow-sm shadow-gray-200`,
        className
      )}
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1542627088-6603b66e5c54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-md"
        />
      </div>
      <div className="mt-4 mx-2">
        <h1>Your organization's logo, address and website</h1>
        <p className="mt-2">Category: Bag</p>
        <p className="mt-2">Amount: $20</p>
        <div className="translate-y-2 ">
          <button className="p-2 w-[350px] text-white font-semibold bg-pink-600 rounded-lg ">
            View detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
