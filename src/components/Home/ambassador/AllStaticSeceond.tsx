import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AllStaticSeceond = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-[258px] h-[258px] object-cover"
        />
      </div>
      <div className="bg-black bg-opacity-35 text-white  w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">58</h1>
          <p className="text-center text-xl">SPONSORS</p>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-[258px] h-[258px] object-cover"
        />
      </div>

      <div className="bg-black bg-opacity-30 text-white  w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">18,562</h1>
          <p className="text-center text-xl">DONATIONS</p>
        </div>
      </div>

      <div className="bg-gray-200 cursor-pointer hover:bg-slate-600 bg-opacity-35 text-white  w-[258px] h-[258px]">
        <Link to="">
          <div className="flex flex-col mt-20">
            <h1 className="w-1/2 mx-auto font-semibold">
              <ArrowRight className="ml-10" />
            </h1>
            <p className="text-center text-xl">Be a part of future</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AllStaticSeceond;
