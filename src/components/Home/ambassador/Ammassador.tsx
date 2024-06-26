import Container from "@/components/layout/shared/Container";
import AmmassadorCard from "./AmmassadorCard";

const Ammassador = () => {
  return (
    <div className="bg-indigo-800 text-white h-screen pt-28">
      <Container>
        <h1 className="text-4xl font-bold text-center">
          Join us and beacome an abasssador
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-24">
          <AmmassadorCard />
          <AmmassadorCard />
          <AmmassadorCard />
        </div>
      </Container>
    </div>
  );
};

export default Ammassador;
