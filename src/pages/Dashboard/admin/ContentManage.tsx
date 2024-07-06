import AllBlogsTable from "@/components/dashboardCompo/admin/AllBlogsTable";

const ContentManage = () => {
  return (
    <div>
      <div className="p-5">
        <div className="bg-[#1a2c52]  rounded-md  p-2">
          <AllBlogsTable />
        </div>
      </div>
    </div>
  );
};

export default ContentManage;
