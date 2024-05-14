import Container from "../layout/shared/Container";
import LoadingCard from "./LoadingCard";

const CustomesLoading = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </Container>
  );
};

export default CustomesLoading;
