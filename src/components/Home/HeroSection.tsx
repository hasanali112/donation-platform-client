import { Link } from "react-router-dom";
import Container from "../layout/shared/Container";
import hero from "./../../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="bg-[#151422] text-white">
      <Container>
        <div className="grid grid-cols-12  items-center pt-16">
          <div className="lg:col-span-5 col-span-12">
            <h1 className="text-4xl font-bold">Welcome to Rebuild Rising</h1>
            <p className="mt-3 lg:min-w-[55ch] text-base">
              Directly support those who need it most with your donations. Your
              donation empowers families in poverty to choose how best to
              improve their lives.
            </p>
            <div className="mt-4 space-x-4">
              <Link to="/donation-checkout">
                <button className="p-3 w-36 text-white font-semibold bg-blue-700 rounded-lg">
                  Donate
                </button>
              </Link>
              <button className="p-3 w-36 text-white font-semibold bg-gray-600 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12 mt-10 lg:mt-0">
            <img src={hero} alt="" className="lg:ml-8" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
