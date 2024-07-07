import Container from "@/components/layout/shared/Container";
import { AuthContext } from "@/providers/AuthProviders";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export type Inputs = {
  name: string;
  email: string;
  amount: string;
  address: string;
  postCode: string;
  country: string;
  phoneNumber: string;
};

const PackageForm = () => {
  const context = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { id } = useParams();
  const [createPayment] = useCreatePaymentMutation();

  let price;

  if (id === "bronze") {
    price = 9.99;
  } else if (id === "silver") {
    price = 50.99;
  } else if (id === "gold") {
    price = 150.99;
  } else {
    price = 0;
  }

  if (!context) {
    return null;
  }

  const { user } = context;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      createPayment(data);

      Swal.fire({
        title: "Donate!",
        text: "Congratualtion to join  our community!",
        icon: "success",
      });

      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="bg-slate-200 pt-20 pb-20">
      <Container>
        <div className="bg-white border shadow-md rounded-md p-10 w-[60%] mx-auto">
          <h1 className="text-xl font-bold mb-3">
            Detail: Provide detail and donate
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 p-10 rounded-md"
          >
            <div>
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="border w-full mb-3 h-12 rounded-md focus:outline-gray-400 pl-3"
              />
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                defaultValue={user?.email || ""}
                readOnly
                type="text"
                id="email"
                {...register("email")}
                className="border mb-3 w-full h-12 rounded-sm px-4 focus:outline-none"
              />
              <label htmlFor="amount" className="block">
                Amount
              </label>
              <input
                defaultValue={price || ""}
                readOnly
                type="text"
                id="amount"
                {...register("amount", { required: true })}
                className="border w-full mb-3 h-12 rounded-sm  pl-3 focus:outline-none"
              />
              <label htmlFor="address" className="block">
                Address
              </label>
              <input
                type="text"
                id="address"
                {...register("address", { required: true })}
                className="border w-full mb-3 h-12 rounded-sm focus:outline-gray-400 pl-3"
              />
              <label htmlFor="postcode" className="block">
                Post Code
              </label>
              <input
                type="text"
                id="postcode"
                {...register("postCode", { required: true })}
                className="border w-full mb-3 h-12 rounded-sm focus:outline-gray-400 pl-3"
              />
              <label htmlFor="country" className="block">
                Country
              </label>
              <input
                type="text"
                id="country"
                {...register("country", { required: true })}
                className="border w-full mb-3 h-12 rounded-sm focus:outline-gray-400 pl-3"
              />
              <label htmlFor="phone" className="block">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                {...register("phoneNumber", { required: true })}
                className="border w-full mb-3 h-12 rounded-sm focus:outline-gray-400 pl-3"
              />
            </div>
            <button
              type="submit"
              className="w-full h-14 rounded-lg bg-violet-600 text-white mt-3 text-xl font-semibold flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default PackageForm;
