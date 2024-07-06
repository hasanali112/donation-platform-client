import LoadingPage from "@/components/cutomsLoading/LoadingPage";
import Container from "@/components/layout/shared/Container";
import NewsCard from "@/components/news/NewsCard";
import { useGetNewsByIdQuery } from "@/redux/api/newsApi";
import { Calendar } from "lucide-react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetNewsByIdQuery(id);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="bg-slate-200">
      <div className="relative">
        <img
          src={data?.image}
          alt=""
          className="object-cover h-[500px] w-full"
        />
        <div className="bg-black absolute top-0  h-[500px] w-full bg-opacity-75"></div>
        <Container>
          <div className="absolute top-[5%]">
            <div className="bg-white rounded-full w-24 p-1">
              <h1 className="text-blue-600 ml-1">
                {data.category.toUpperCase()}
              </h1>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-wider max-w-[40ch] mt-16">
              {data.title}
            </h1>
            <h1 className="text-lg inline-flex items-center gap-3 text-white mt-5">
              <Calendar />
              June 30, 2024
            </h1>
          </div>
        </Container>
        <Container>
          <div className="bg-white rounded-md p-10 -translate-y-[130px]">
            <p>{data?.header}</p>
            <p className="mt-10">{data?.body}</p>
            <p className="mt-10">{data?.conclution}</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Our Popular news</h1>
            <div className="grid grid-cols-3 gap-3 pt-10 pb-16">
              <NewsCard item={data} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewsDetail;
