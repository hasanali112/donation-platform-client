import { useGetDonationPostQuery } from "@/redux/api/baseApi";
import Container from "../layout/shared/Container";
import DonateCard from "./DonateCard";
import { TProps } from "@/type/type";

const Donate = () => {
  const { data, isLoading, isError } = useGetDonationPostQuery(undefined);

  if (isLoading) {
    return <p>Loading........</p>;
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <div>
      <Container className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center ">
          {data?.map((item: TProps) => (
            <DonateCard {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Donate;
