import Container from "@/components/layout/shared/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EventBanner = () => {
  return (
    <div className="bg-slate-200 mt-20">
      <div className="bg-black relative">
        <img
          src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="lg:h-[200px] w-full object-cover"
        />
        <div className="lg:h-[200px] h-[285px] w-full  bg-gradient-to-r from-[#211e3d] to-[#561c3e]  absolute top-0 opacity-[.90]">
          <Container className="flex flex-col lg:flex-row justify-between gap-4 items-center mt-7 lg:mt-16">
            <div>
              <h3 className="  text-white  text-xl font-semibold m">
                Our Next Event
              </h3>
              <h1 className=" text-white mt-4 text-4xl font-bold">
                Together we can do so much.
              </h1>
            </div>
            <div>
              <Link to="/events">
                <Button className="bg-blue-600 text-lg h-[60px] mt-3 rounded-sm">
                  View next events
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
