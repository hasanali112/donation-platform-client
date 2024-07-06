import FilterDropDown from "@/components/dashboardCompo/admin/FilterDropDown";
import UserManageTable from "@/components/dashboardCompo/admin/UserManageTable";
import DashboardContainer from "@/components/layout/shared/DashboardContainer";
import { useGetUserQuery } from "@/redux/api/userApi";
import { useState } from "react";

export type TUser = {
  _id: string;
  name: string;
  photo: string;
  userName: string;
  email: string;
  role: string;
};

const UserManagement = () => {
  const [role, setRole] = useState("");
  const { data } = useGetUserQuery(role);

  return (
    <div>
      <div className="  pt-7 pb-10">
        <DashboardContainer>
          <div className="bg-[#1a2c52]  rounded-md mx-5 p-2">
            <div className="flex justify-between mt-3 mb-4 px-4">
              <h1 className="text-2xl font-bold">User List</h1>
              <div>
                <FilterDropDown role={role} setRole={setRole} />
              </div>
            </div>
            <UserManageTable data={data} role={role} />
          </div>
        </DashboardContainer>
      </div>
    </div>
  );
};

export default UserManagement;
