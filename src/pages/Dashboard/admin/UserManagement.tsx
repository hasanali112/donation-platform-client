import UserManageTable from "@/components/dashboardCompo/admin/UserManageTable";
import TopNav from "@/components/layout/DashboardLayout/TopNav";

const UserManagement = () => {
  return (
    <div>
      <TopNav />
      <div className="bg-slate-200 h-screen p-10">
        <div className="bg-white p-2 rounded-md border-b-4 border-blue-500">
          <UserManageTable />
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
