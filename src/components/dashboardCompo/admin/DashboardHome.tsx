type TProps = {
  title: string;
  totalUser?: number;
  totalCampain?: number;
  totalBlog?: number;
};

const DashboardHome = ({
  title,
  totalUser,
  totalCampain,
  totalBlog,
}: TProps) => {
  return (
    <div className="w-[287px] h-[120px] bg-[#112143] border-t border-[#0d99ff]">
      <div>
        <h1 className="text-center mt-3">{title}</h1>
        <h1 className="text-center mt-3">
          {totalUser || totalCampain || totalBlog || totalBlog}
        </h1>
        <p className="text-center mt-3 text-blue-400">
          Increase rate{" "}
          {(totalUser && 12.06) ||
            (totalCampain && 8.5) ||
            (totalBlog && 9.7) ||
            (totalBlog && 20.88)}
          %
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
