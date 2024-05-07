import Container from "../layout/shared/Container";
import hero from "./../../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="bg-[#151422] text-white">
      <Container>
        <div className="grid lg:grid-cols-12  items-center pt-16">
          <div className="col-span-5">
            <h1 className="text-4xl font-bold">Welcome to Rebuild Rising</h1>
            <p className="mt-3 min-w-[55ch] text-base">
              Directly support those who need it most with your donations. Your
              donation empowers families in poverty to choose how best to
              improve their lives.
            </p>
            <div className="mt-4 space-x-4">
              <button className="p-3 w-36 text-white font-semibold bg-pink-600 rounded-lg">
                Donate
              </button>
              <button className="p-3 w-36 text-white font-semibold bg-gray-600 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-span-7">
            <img src={hero} alt="" className="ml-8" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
