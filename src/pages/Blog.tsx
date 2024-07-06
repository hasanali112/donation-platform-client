import LoadingPage from "@/components/cutomsLoading/LoadingPage";
import { TNews } from "@/components/dashboardCompo/admin/AllBlogsTable";
import Container from "@/components/layout/shared/Container";
import NewsCard from "@/components/news/NewsCard";
import { useGetAllNewsQuery } from "@/redux/api/newsApi";

const Blog = () => {
  const { data, isLoading } = useGetAllNewsQuery(undefined);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-[250px] object-cover w-full"
        />
        <div className="bg-black bg-opacity-70 h-[250px] w-full absolute top-0 text-white ">
          <h1 className="text-center text-3xl font-bold mt-20">News</h1>
          <p className="text-center text-xl font-semibold mt-4">
            Our popular news
          </p>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 mb-10">
          {data?.map((item: TNews) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
