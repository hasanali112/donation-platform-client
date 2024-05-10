import TableSection from "@/components/dashboardCompo/table/TableSection";
import TopNav from "@/components/layout/DashboardLayout/TopNav";
import dash from "../../assets/dash.jpg";

const AllPost = () => {
  return (
    <div className="bg-gray-100 h-[100vh]">
      <TopNav />
      <div className="h-[200px]">
        <img
          src={dash}
          alt=""
          className="lg:h-[150px] h-[100px] w-full object-cover"
        />
      </div>
      <div className="lg:-translate-y-[108px] -translate-y-36">
        <TableSection />
      </div>
    </div>
  );
};

export default AllPost;
