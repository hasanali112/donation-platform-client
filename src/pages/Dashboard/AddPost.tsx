import TopNav from "@/components/layout/DashboardLayout/TopNav";
import { useForm, SubmitHandler } from "react-hook-form";
import dash from "../../assets/dash.jpg";
import avatar from "../../assets/avatar.png";
import { useAddDonationPostMutation } from "@/redux/api/baseApi";
import { Inputs } from "@/type/type";

const AddPost = () => {
  const [addDonationPost, { isLoading, isError }] =
    useAddDonationPostMutation();

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addDonationPost(data);
    reset();
  };

  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <div>
      <TopNav />

      <div className="bg-gray-100">
        <div className="h-[200px]">
          <img src={dash} alt="" className="h-[150px] w-full object-cover" />
        </div>
        <div className="grid grid-cols-12 gap-4 ml-3 p-2 lg:ml-16 -translate-y-24">
          <div className="bg-white h-[400px] w-full rounded-lg col-span-12 lg:col-span-3">
            <div className="flex flex-col justify-center items-center">
              <img src={avatar} alt="" className="w-[200px] -translate-y-9" />
              <div className="-translate-y-[71px]">
                <h1>JOHN STOCKDELL</h1>
                <p>Deputy Director</p>
              </div>
            </div>
            <div className="-translate-y-[55px] px-2 ">
              <h1 className="p-3 bg-gray-50 mb-1 rounded-md shadow-sm border hover:-translate-y-2 duration-500">
                Totol Donation: $0
              </h1>
              <h1 className="p-3 bg-gray-50 mb-1 rounded-md shadow-sm border hover:-translate-y-2 duration-500">
                Totol Post: 0
              </h1>
              <h1 className="p-3 bg-gray-50 mb-1 rounded-md shadow-sm border hover:-translate-y-2 duration-500">
                Totol Contribution: 0
              </h1>
            </div>
          </div>
          <div className="bg-white h-[400px] w-full rounded-lg col-span-12 lg:col-span-7">
            <div className="border-b h-[50px] "></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-col-12 gap-3 p-3">
                <div className="  col-span-12 p-2">
                  <label htmlFor="title" className="block text-lg">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...register("title")}
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="  col-span-12   lg:col-span-6 p-2">
                  <label htmlFor="image" className="block text-lg">
                    Image
                  </label>
                  <input
                    type="text"
                    {...register("image")}
                    id="image"
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="  col-span-12   lg:col-span-6 p-2">
                  <label htmlFor="category" className="block text-lg">
                    Category
                  </label>
                  <input
                    type="text"
                    {...register("category")}
                    id="category"
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="  col-span-12 lg:col-span-6 p-2">
                  <label htmlFor="amount" className="block text-lg">
                    Amount
                  </label>
                  <input
                    type="text"
                    {...register("amount")}
                    id="amount"
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="   col-span-12 lg:col-span-6 p-2">
                  <label htmlFor="description" className="block text-lg">
                    Description
                  </label>
                  <input
                    type="text"
                    {...register("description")}
                    id="description"
                    className="rounded-lg w-full h-[80%] border px-3"
                  />
                </div>
                <div className="   col-span-12 lg:col-span-6 p-2">
                  <button
                    className="bg-purple-500 p-2 rounded-lg text-white text-xl font-base"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
