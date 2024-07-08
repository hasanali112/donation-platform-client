import DonateCard from "@/components/alldonate/DonateCard";
import CustomesLoading from "@/components/cutomsLoading/CustomesLoading";
import { useGetDonationPostQuery } from "@/redux/api/baseApi";
import { TProps } from "@/type/type";

const FavouriteCampain = () => {
  const { data, isLoading, isError } = useGetDonationPostQuery(undefined);

  if (isLoading) {
    return <CustomesLoading />;
  }

  const filterData = data?.filter((item: TProps) => item.favourite === true);

  if (isError) {
    console.log(isError);
  }

  return (
    <div>
      <div className="bg-[#1b3263] w-[97%] mx-auto  h-[80px]  rounded-sm mb-4 mt-10">
        <h1 className="text-2xl font-bold pt-4 ml-5">Favourite Campains</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center text-black p-5">
        {filterData?.map((item: TProps) => (
          <DonateCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteCampain;
