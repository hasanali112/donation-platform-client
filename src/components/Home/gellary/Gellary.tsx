import Container from "@/components/layout/shared/Container";
import GellaryLayout from "./GellaryLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Gellary = () => {
  return (
    <div className="lg:mt-3 pt-20 ">
      <Container>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-[50px] px-4">
          <div className="lg:col-span-6 col-span-6  mt-20">
            <h1 className="text-4xl font-bold mb-4 ">Gellary</h1>
            <p className="lg:w-[90%]">
              Our donation gallery isn't just a collection of images; it's a
              vivid testament to the power of giving. Each picture weaves a
              narrative of hope, compassion, and transformative change. Through
              these visuals, we showcase the real-life impact of donations on
              individuals and communities, illustrating how every contribution
              helps to create a brighter future.
            </p>
            <div className="mt-5">
              <Link to="/donation-checkout">
                <div className="bg-slate-100 shadow-md border-l-4 w-[340px] h-[70px] border-blue-800 flex items-center justify-between mb-3">
                  <h1 className=" ml-5 font-semibold">Make a donation</h1>
                  <ArrowRight className="mr-4" />
                </div>
              </Link>
              <Link to="/members">
                <div className="bg-slate-100 shadow-md border-l-4 w-[340px] h-[70px] border-blue-800 flex items-center justify-between mb-3">
                  <h1 className=" ml-5 font-semibold">Discover ambassadors</h1>
                  <ArrowRight className="mr-4" />
                </div>
              </Link>
              <Link to="">
                <div className="bg-slate-100 shadow-md border-l-4 w-[340px] h-[70px] border-blue-800 flex items-center justify-between">
                  <h1 className=" ml-5 font-semibold">View upcoming event</h1>
                  <ArrowRight className="mr-4" />
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-6">
            <GellaryLayout />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gellary;
