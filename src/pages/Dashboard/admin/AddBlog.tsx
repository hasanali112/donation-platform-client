import { useForm, SubmitHandler } from "react-hook-form";
import { useAddDonationPostMutation } from "@/redux/api/baseApi";
import { Inputs } from "@/type/type";
import TopNav from "@/components/layout/DashboardLayout/TopNav";

const AddBlog = () => {
  const [addDonationPost, { isError }] = useAddDonationPostMutation();

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addDonationPost(data);
    reset();
  };

  if (isError) {
    console.log(isError);
  }

  return (
    <div>
      <TopNav />
      <div className="bg-slate-200 h-screen p-5">
        <div className="bg-white p-2 w-[80%] mx-auto rounded-lg">
          <div className=" bg-gray-100 p-10 rounded-lg">
            <div className=" h-[400px] w-full rounded-lg">
              <div className="border-b h-[50px] ">
                <h1 className="text-3xl font-semibold">Create Blog here</h1>
              </div>
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
                      Create Blog
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
