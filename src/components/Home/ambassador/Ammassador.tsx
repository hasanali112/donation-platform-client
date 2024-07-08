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
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-24 mt-24">
          <AmmassadorCard
            image="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Smith"
          />
          <AmmassadorCard
            image="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Taylor"
          />
          <AmmassadorCard
            image="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Ava"
          />
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
