import { useForm, SubmitHandler } from "react-hook-form";
import { useAddDonationPostMutation } from "@/redux/api/baseApi";
import { Inputs } from "@/type/type";
import {
  ImageDown,
  Landmark,
  NetworkIcon,
  Newspaper,
  NotebookPen,
  SquareKanban,
} from "lucide-react";

const AddCampian = () => {
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
      <div className=" p-5">
        <div className="bg-[#1a2c52]  rounded-md  p-2">
          <div className=" bg-[#14274e]  p-4 rounded-md w-full ">
            <div className=" h-[470px] w-full rounded-lg">
              <div className="border-b h-[50px] ">
                <h1 className="text-3xl font-semibold">Create campain here</h1>
              </div>
              <div className="relative  mt-3 ">
                <div className="flex justify-between flex-col">
                  <div className="rounded-full w-[100px] h-[100px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse translate-x-[250px]"></div>
                  <div className="rounded-full w-[80px] h-[80px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-pulse translate-y-[200px]"></div>
                </div>
                <div className="bg-white bg-opacity-10 border border-gray-300 border-t-0 border-opacity-10 w-full rounded-lg backdrop-blur-md shadow-2xl backdrop-filter  absolute top-0 z-20 ">
                  <div className="p-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <div className="grid grid-cols-2 gap-10">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Tilte"
                              {...register("title", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                            <NotebookPen className="absolute left-0 top-1/2 transform -translate-y-[55%] text-gray-400" />
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Image"
                              {...register("image", { required: true })}
                              className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                            />
                            <ImageDown className="absolute left-0 top-1/2 transform -translate-y-[55%] text-gray-400" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                          <div className="relative mt-10">
                            <input
                              type="text"
                              placeholder="Category"
                              {...register("category", { required: true })}
                              className="border-b border-opacity-30 bg-transparent focus:outline-none w-full h-12 px-10"
                            />
                            <NetworkIcon className="absolute left-0 top-1/2 transform -translate-y-[60%] text-gray-400" />
                          </div>
                          <div className="relative mt-10">
                            <input
                              type="text"
                              placeholder="Amount"
                              {...register("amount", { required: true })}
                              className="border-b border-opacity-30 bg-transparent focus:outline-none w-full h-12 px-10"
                            />
                            <Landmark className="absolute left-0 top-1/2 transform -translate-y-[60%] text-gray-400" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                          <div className="relative mt-10">
                            <input
                              type="text"
                              placeholder="Overview"
                              {...register("overview", { required: true })}
                              className="border-b border-opacity-30 bg-transparent focus:outline-none w-full h-12 px-10"
                            />
                            <SquareKanban className="absolute left-0 top-1/2 transform -translate-y-[60%] text-gray-400" />
                          </div>
                          <div className="relative mt-10">
                            <input
                              type="text"
                              placeholder="Description"
                              {...register("description", { required: true })}
                              className="border-b border-opacity-30 bg-transparent focus:outline-none w-full h-12 px-10"
                            />
                            <Newspaper className="absolute left-0 top-1/2 transform -translate-y-[60%] text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full h-14 border rounded-sm mt-10 text-white  text-xl  flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500"
                      >
                        Create Donate
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCampian;
