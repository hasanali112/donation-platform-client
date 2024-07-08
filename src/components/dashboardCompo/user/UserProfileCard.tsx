/* eslint-disable react-hooks/rules-of-hooks */

import { Card } from "@/components/ui/card";
import { AuthContext } from "@/providers/AuthProviders";
import { useSingleUserByEmailQuery } from "@/redux/api/userApi";
import { useContext } from "react";
import EditProfileModal from "./EditProfileModal";

const UserProfileCard = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return <p>null</p>;
  }

  const { user } = context;
  const email = user?.email;

  const { data, isLoading } = useSingleUserByEmailQuery(email);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Card className="w-[350px] h-[650px] rounded-md bg-[#14274e] border-0 text-white">
      <div className="p-5 flex flex-col items-center">
        <div>
          <div>
            <img
              src={data?.photo}
              alt=""
              className="w-[200px] h-[200px] object-cover rounded-full"
            />
          </div>
          <h1 className=" text-xl font-bold mt-10">{data?.name}</h1>
          <h1 className="text-xl  mt-4">{data?.role}</h1>
          <h3 className=" text-base  mt-3">{data?.email}</h3>
          <div className="mt-4  w-full">
            <EditProfileModal _id={data?._id} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserProfileCard;
