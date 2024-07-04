import Container from "@/components/layout/shared/Container";
import AmmassadorCard from "./AmmassadorCard";
import AllStaticCard from "./AllStaticCard";
import AllStaticSeceond from "./AllStaticSeceond";

const Ammassador = () => {
  return (
    <div className="bg-gradient-to-r from-[#211e3d] to-[#561c3e] text-white  pt-24">
      <Container>
        <h1 className="text-4xl font-bold text-center">
          Join us and beacome an abasssador
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-24">
          <AmmassadorCard />
          <AmmassadorCard />
          <AmmassadorCard />
        </div>
        <div className=" pt-20 pb-20">
          <AllStaticCard />
          <AllStaticSeceond />
        </div>
      </Container>
    </div>
  );
};

export default Ammassador;
