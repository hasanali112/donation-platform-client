import AllBlogsTable from "@/components/dashboardCompo/admin/AllBlogsTable";
import TopNav from "@/components/layout/DashboardLayout/TopNav";

const ContentManage = () => {
  return (
    <div>
      <TopNav />
      <div className="bg-slate-200 h-screen p-10">
        <div className="bg-white p-2 rounded-md border-b-4 border-blue-500">
          <AllBlogsTable />
        </div>
      </div>
    </div>
  );
};

export default ContentManage;
