import { useGetDonationPostQuery } from "@/redux/api/baseApi";
import Container from "../layout/shared/Container";
import DonateCard from "./DonateCard";
import { TProps } from "@/type/type";
import { CircleDashed } from "lucide-react";

const Donate = () => {
  const { data, isLoading, isError } = useGetDonationPostQuery(undefined);

  if (isLoading) {
    return (
      <div
        className={
          isLoading
            ? "flex justify-center items-center mt-10 text-white font-semibold h-screen"
            : ""
        }
      >
        <button
          type="button"
          className="bg-indigo-500 p-10 flex items-center text-3xl rounded-lg"
          disabled
        >
          <CircleDashed className="animate-spin h-10 w-10 mr-3 ..." />
          Processing...
        </button>
      </div>
    );
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
