import Container from "@/components/layout/shared/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <div className="bg-slate-200 pt-28 pb-40">
      <Container>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="bg-white shadow-md lg:h-[370px] my-auto p-5 rounded-l-md">
            <h1 className="text-blue-600 text-xl font-semibold mt-10 ml-8">
              Joint The Fight
            </h1>
            <h1 className="text-4xl font-bold mt-4 ml-8">
              Your Gift Will Help
            </h1>
            <p className="text-gray-500 mt-4 ml-8">
              Your gift will help transform lives by providing essential
              resources and support to those in need. Every donation, no matter
              the size, contributes to creating a brighter future for
              individuals and communities.
            </p>
            <Link to="/about">
              <Button className="bg-blue-600 ml-8 mt-4">How To Help?</Button>
            </Link>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1664301488979-ce1230f43cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </Container>
      <div className="mt-28">
        <div className="bg-black relative">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[350px] w-full object-cover"
          />
          <div className="h-[350px] w-full  bg-gradient-to-r from-[#211e3d] to-[#561c3e]  absolute top-0 opacity-[.97]">
            <h3 className=" text-center text-gray-400 mt-28 text-xl font-semibold">
              Next Event Coming in 30, November
            </h3>
            <h1 className="text-center text-white mt-4 text-4xl font-bold">
              Now, No Event organize.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
