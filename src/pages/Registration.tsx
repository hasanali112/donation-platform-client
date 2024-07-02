import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import google from "../assets/google.png";
import Container from "@/components/layout/shared/Container";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProviders";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserCredential } from "firebase/auth";
import { useCreateUserMutation } from "@/redux/api/userApi";
import Swal from "sweetalert2";

type Inputs = {
  name: string;
  photo: string;
  userName: string;
  email: string;
  password: string;
};

const Registration = () => {
  const authContext = useContext(AuthContext);
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProviders");
  }

  const { userCreate, updateUserProfile } = authContext;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const email = data.email;
    const password = data.password;
    const userName = data.userName;
    const photo = data.photo;
    const userData = { ...data, role: "user" };
    userCreate(email, password)
      .then((result: UserCredential) => {
        result.user;
        updateUserProfile(userName, photo)
          .then()
          .catch((error) => {
            console.log(error);
          });
        createUser(userData);
        Swal.fire({
          title: "Sign up!",
          text: "Sign up successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/login");
  };

  return (
    <div>
      <Container>
        <Link to="/" className="flex items-center gap-1 pt-6">
          <img src={logo} alt="" className="w-12" />
          <span className="text-3xl font-bold">
            Rebuild <span className="text-cyan-400">Rising</span>
          </span>
        </Link>
        <div className="lg:w-[70%] mx-auto  h-[500px] mt-20 p-5">
          <div className="flex flex-col lg:ml-40">
            <h1 className="text-left text-4xl font-bold">Registration Here</h1>
            <p className="text-xl mt-3 mb-5">
              Please enter you details for registration.{" "}
            </p>
            <div>
              <button className="w-[70%] h-14 rounded-lg border  text-xl font-semibold flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500">
                <img src={google} alt="" className="w-10" />
                Login with Google
              </button>
            </div>
            <p className="lg:ml-32 mb-3 mt-4">or Registration with Email</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="border w-[70%] mb-3 h-12 rounded-lg"
                />
                <label htmlFor="photo" className="block">
                  Photo
                </label>
                <input
                  id="photo"
                  type="text"
                  {...register("photo")}
                  className="border w-[70%] mb-3 h-12 rounded-lg"
                />
                <label htmlFor="username" className="block">
                  User Name
                </label>
                <input
                  id="username"
                  type="text"
                  {...register("userName")}
                  className="border w-[70%] mb-3 h-12 rounded-lg"
                />
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  type="text"
                  className="border w-[70%] mb-3 h-12 rounded-lg"
                />
                <label htmlFor="password" className="block">
                  Password
                </label>
                <input
                  id="password"
                  {...register("password")}
                  type="text"
                  className="border w-[70%] mb-3 h-12 rounded-lg"
                />
              </div>
              <button className="w-[70%] h-14 rounded-lg bg-violet-600 text-white mt-3 text-xl font-semibold flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500">
                Sign Up
              </button>
            </form>
            <p className="mt-3 mb-10">
              Already have an acount!{" "}
              <Link to="/login" className="text-violet-500">
                Click here
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
