import Container from "@/components/layout/shared/Container";
import { useGetDonationPostByIdQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDonationPostByIdQuery(id);
  console.log(data);

  if (isLoading) {
    return <p>Loading........</p>;
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <div className="bg-gray-100 pb-5">
      <Container className="lg:h-screen pt-10">
        <div className="grid grid-cols-12 gap-10 bg-white rounded-lg shadow-sm">
          <div className="lg:col-span-7 col-span-12 h-[500px] p-5">
            <img src={data.image} alt="" className="w-full h-full rounded-lg" />
          </div>
          <div className="lg:col-span-5 col-span-12 h-[500px] p-5 ">
            <h1 className="text-4xl font-bold ">{data.title}</h1>
            <h1 className="mt-3 text-xl">{data.category}</h1>
            <h1 className="mt-3 text-xl">${data.amount}</h1>
            <p className="mt-3 ">{data.description.slice(0, 500)}</p>
            <div className=" mt-5">
              <button className="p-3 w-full text-white font-semibold bg-pink-600 rounded-lg">
                Donate
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PostDetail;
