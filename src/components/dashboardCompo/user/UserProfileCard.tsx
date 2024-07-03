/* eslint-disable react-hooks/rules-of-hooks */
import { TUser } from "@/components/layout/shared/Navbar";
import { Card } from "@/components/ui/card";
import { AuthContext } from "@/providers/AuthProviders";
import { useGetUserQuery } from "@/redux/api/userApi";
import { useContext } from "react";

const UserProfileCard = () => {
  const context = useContext(AuthContext);
  const { data, isLoading } = useGetUserQuery(undefined);
  if (!context) {
    return <p>null</p>;
  }

  const { user } = context;
  const email = user?.email;

  const userData = data?.filter((item: TUser) => item.email === email);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Card className="w-[350px] h-[650px] rounded-xl">
      <div>
        {userData?.map((item: TUser) => (
          <div key={item._id}>
            <img
              src={item?.photo}
              alt=""
              className="w-full h-[350px] object-cover rounded-xl"
            />
            <h1 className="ml-10 text-xl font-bold mt-10">{item?.name}</h1>
            <h3 className="ml-10 text-base  mt-3">{item?.email}</h3>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UserProfileCard;
