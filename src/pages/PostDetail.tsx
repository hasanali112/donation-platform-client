import LoadingSinglePage from "@/components/cutomsLoading/LoadingSinglePage";
import TestimonialSvg from "@/components/Home/testimonial/TestimonialSvg";
import Container from "@/components/layout/shared/Container";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useGetDonationPostByIdQuery } from "@/redux/api/baseApi";
import { Hourglass, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PostDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDonationPostByIdQuery(id);

  if (isLoading) {
    return <LoadingSinglePage />;
  }

  if (isError) {
    console.log(isError);
  }

  const calculateValue = (100 / 2500) * Number(data.amount);

  const handleFavourite = () => {
    Swal.fire({
      title: "Added!",
      text: `${data.title} Campain is saved!`,
      icon: "success",
    });
  };

  return (
    <div className="bg-slate-100  pb-20">
      <Container className=" pt-10">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div>
            <img src={data.image} alt="" className="w-[650px] rounded-l-md" />
          </div>
          <div className="bg-white  w-[700px] h-[520px] rounded-lg shadow-md">
            <div className="p-10">
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <h1 className="text-2xl font-bold text-gray-600 mt-5">
                ${data.amount}.00
              </h1>
              <p className="mt-3 text-xl text-gray-600">
                donate of $30,000.00 goal
              </p>
              <div className="mt-4">
                <Progress
                  value={calculateValue}
                  className={
                    calculateValue > 60 ? `h-2 bg-[#3dbdb6]` : "bg-blue-600"
                  }
                />
              </div>
              <div className="mt-5">
                <h1 className="text-xl text-gray-600 inline-flex items-center gap-3">
                  <span>
                    <Users />
                  </span>
                  <span className="font-semibold">2</span> Donors
                </h1>
                <h1 className="text-xl text-gray-600 inline-flex items-center gap-2 ml-5">
                  <span>
                    <Hourglass />
                  </span>
                  <span className="font-semibold">484</span> Days Left
                </h1>
              </div>
            </div>
            <hr />
            <div className="px-10 pt-4">
              <p className="text-gray-500">{data.description.slice(0, 150)}</p>
              <Link to={`/donations/${data._id}/donation-checkout`}>
                <Button className="w-full bg-blue-700 mt-5">Donate</Button>
              </Link>
              <Button
                onClick={handleFavourite}
                variant="outline"
                className="w-full border border-gray-500 mt-2"
              >
                Favourite Campain
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p>{data.description}</p>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold">Our Donar Said</h1>
          <div className="mt-8">
            <div className="flex items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1666153658042-88ac77d56b92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-semibold">Carlos Smith</h1>
                <p className="text-gray-500">
                  Supporting Disaster" is a remarkable campaign dedicated to
                  providing timely and effective aid to communities affected by
                  disasters. This campaign stands out for its well-coordinated
                  efforts, transparency, and impactful results.
                </p>
                <div className="flex gap-2">
                  <TestimonialSvg />
                  <TestimonialSvg />
                  <TestimonialSvg />
                  <TestimonialSvg />
                  <TestimonialSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PostDetail;

{
  /* <div className="grid grid-cols-12 gap-10 bg-white rounded-lg shadow-sm">
<div className="lg:col-span-7 col-span-12 h-[500px] p-5">
  <img src={data.image} alt="" className="w-full h-full rounded-lg" />
</div>
<div className="lg:col-span-5 col-span-12 h-[500px] p-5 ">
  <h1 className="text-4xl font-bold ">{data.title}</h1>
  <h1 className="mt-3 text-xl">{data.category}</h1>
  <h1 className="mt-3 text-xl">${data.amount}</h1>
  <p className="mt-3 ">{data.description.slice(0, 500)}</p>
  <div className=" mt-5">
    <Link to="/donation-checkout">
      <button className="p-3 w-full text-white font-semibold bg-blue-600 rounded-lg">
        Donate
      </button>
    </Link>
  </div>
</div>
</div>
<div>
<p className="text-gray-600 mt-20 mb-20">{data.description}</p>
</div> */
}
