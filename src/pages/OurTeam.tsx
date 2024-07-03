import Container from "@/components/layout/shared/Container";
import OurTeamCard from "@/components/ourTeam/OurTeamCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div className="bg-slate-200 pt-28 pb-16">
      <Container>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="bg-white shadow-md lg:h-[370px] my-auto p-5">
            <h1 className="text-blue-600 text-xl font-semibold mt-10 ml-8">
              Best teamwork
            </h1>
            <h1 className="text-4xl font-bold mt-4 ml-8">
              We are working in unison
            </h1>
            <p className="text-gray-500 mt-4 ml-8">
              Our team is working in unison, seamlessly collaborating to achieve
              our common goals. Each member brings unique strengths and skills,
              contributing to a harmonious and productive environment.
            </p>
            <Link to="/donation-checkout">
              <Button className="bg-blue-600 ml-8 mt-4">More about us</Button>
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </Container>
      <div className="pt-28">
        <div className="bg-black relative ">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[350px] w-full object-cover"
          />
          <div className="h-[350px] w-full  bg-gradient-to-r from-[#211e3d] to-[#561c3e]  absolute top-0 opacity-[.97]">
            <h3 className=" text-center text-gray-400 mt-28 text-xl font-semibold">
              Our Pride
            </h3>
            <h1 className="text-center text-white mt-4 text-4xl font-bold">
              Member of Our Team
            </h1>
          </div>
        </div>
      </div>
      <Container>
        <div className="pt-28">
          <h1 className="text-xl text-center text-blue-700 font-semibold">
            Strong Leadership
          </h1>
          <h1 className="text-4xl text-center font-bold mt-4">
            Our Ambassadar
          </h1>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-10 mt-10">
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
          </div>
        </div>
        <div className="pt-28">
          <h1 className="text-xl text-center text-blue-700 font-semibold">
            Strong Bonding
          </h1>
          <h1 className="text-4xl text-center font-bold mt-4">Our Volunteer</h1>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-10 mt-10">
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
