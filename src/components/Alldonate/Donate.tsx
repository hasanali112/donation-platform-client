import Container from "../layout/shared/Container";
import DonateCard from "./DonateCard";

const Donate = () => {
  return (
    <div>
      <Container className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center ">
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
          <DonateCard />
        </div>
      </Container>
    </div>
  );
};

export default Donate;
