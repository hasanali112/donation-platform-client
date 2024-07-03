import Container from "@/components/layout/shared/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="pt-28 pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-3 w-[320px] h-370px] ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681152783643-ffffe0d9ec95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <div className="col-span-3 w-[250px] h-[350px] translate-x-[170px] -translate-y-[25px]">
                <img
                  src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="rounded-lg w-[250px] h-[250px] object-cover"
                />
              </div>
              <div className="col-span-3 w-[370px] h-[370px] translate-y-[250px] -translate-x-[130px]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="col-span-5 mt-10">
            <div className="bg-blue-700 w-5 h-5"></div>
            <h1 className="text-red-600 font-semibold text-2xl mt-5">
              We do need you
            </h1>
            <h1 className="text-4xl font-bold mt-5">
              If we want to go <span className="text-blue-600">futhurer</span>
            </h1>
            <h1 className="text-4xl font-bold mt-5">
              lets go <span className="text-blue-600">togther</span>
            </h1>
            <p className="mt-5 text-gray-500">
              Teamwork is the ability to work together toward a common vision.
              The ability to direct individual accomplishments toward
              organizational objectives.
            </p>
            <p className="mt-5 text-gray-500">
              I invite everyone to choose forgiveness rather than division,
              teamwork over personal ambition.
            </p>
            <div>
              <Link to="/members">
                <Button className="bg-blue-700 mt-5 h-16 text-xl">
                  Discover our team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
