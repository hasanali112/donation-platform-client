import DonateCard from "@/components/alldonate/DonateCard";
import CustomesLoading from "@/components/cutomsLoading/CustomesLoading";
import TopNav from "@/components/layout/DashboardLayout/TopNav";
import { useGetDonationPostQuery } from "@/redux/api/baseApi";
import { TProps } from "@/type/type";

const FavouriteCampain = () => {
  const { data, isLoading, isError } = useGetDonationPostQuery(undefined);

  if (isLoading) {
    return <CustomesLoading />;
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <div>
      <TopNav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center p-5">
        {data?.map((item: TProps) => (
          <DonateCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteCampain;
