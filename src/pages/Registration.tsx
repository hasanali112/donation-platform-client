import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import google from "../assets/google.png";
import Container from "@/components/layout/shared/Container";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProviders";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserCredential } from "firebase/auth";
import { useCreateUserMutation } from "@/redux/api/userApi";
import Swal from "sweetalert2";
import { Image, Lock, Mail, User2 } from "lucide-react";

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
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [createUser] = useCreateUserMutation();

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProviders");
  }

  const { userCreate, updateUserProfile, googleLoggedUser } = authContext;

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

  const handleGoogleLogin = () => {
    googleLoggedUser()
      .then((result) => {
        const googleSignIn = result.user;
        console.log(googleSignIn);
        Swal.fire({
          title: "Sign In!",
          text: "Sign in successfully!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Sign in failed!",
          icon: "error",
        });
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#211e3d] to-[#561c3e] text-white h-[1100px]">
      <Container>
        <Link to="/" className="flex items-center gap-1 pt-6">
          <img src={logo} alt="" className="w-12" />
          <span className="text-3xl font-bold">
            Rebuild <span className="text-blue-600">Rising</span>
          </span>
        </Link>
        <div className="relative w-[90%] mx-auto mt-10">
          <div className="flex justify-between flex-col">
            <div className="rounded-full w-[100px] h-[100px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse translate-x-[250px]"></div>
            <div className="rounded-full w-[80px] h-[80px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-pulse translate-y-[550px]"></div>
          </div>
          <div className="bg-white bg-opacity-10 border border-gray-300 border-t-0 border-opacity-10 w-full rounded-lg backdrop-blur-md shadow-2xl backdrop-filter  absolute top-0 z-20 ">
            <div className="grid grid-cols-12">
              <div className="flex flex-col p-10 col-span-6">
                <h1 className="text-left text-4xl font-bold text-gray-300">
                  Sign up Here!
                </h1>
                <p className="text-xl mt-3 mb-5">Please enter your details.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Name"
                        {...register("name")}
                        className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                      />
                      <User2 className="absolute left-0 top-1/2 transform -translate-y-[55%] text-gray-400" />
                    </div>
                    <div className="relative mt-10">
                      <input
                        type="text"
                        placeholder="Photo url"
                        {...register("photo")}
                        className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                      />
                      <Image className="absolute left-0 top-1/2 transform -translate-y-[55%] text-gray-400" />
                    </div>
                    <div className="relative mt-10">
                      <input
                        type="text"
                        placeholder="User Name"
                        {...register("userName")}
                        className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                      />
                      <User2 className="absolute left-0 top-1/2 transform -translate-y-[55%] text-gray-400" />
                    </div>
                    <div className="relative mt-10">
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                        className="border-b bg-transparent focus:outline-none w-full  h-12 px-10"
                      />
                      <Mail className="absolute left-0 top-1/2 transform -translate-y-[55%] text-gray-400" />
                    </div>
                    <div className="relative mt-10">
                      <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                        className="border-b border-opacity-30 bg-transparent focus:outline-none w-full h-12 px-10"
                      />
                      <Lock className="absolute left-0 top-1/2 transform -translate-y-[60%] text-gray-400" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full h-14 border rounded-sm mt-10 text-white  text-xl  flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500"
                  >
                    Sign up
                  </button>
                </form>
                <p className="text-center text-gray-300 mt-6">or, Login with</p>
                <div className="mt-10">
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full h-14  border text-xl rounded-sm text-gray-300 flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500"
                  >
                    <img src={google} alt="" className="w-10" />
                    Login with Google
                  </button>
                </div>
                <p className="mt-10 text-gray-300">
                  Alread have a account?{" "}
                  <Link to="/login" className="text-violet-500">
                    login
                  </Link>
                </p>
              </div>
              <div className="col-span-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-[930px] object-cover rounded-r-lg"
                  />
                  <div className="w-full h-[930px] object-cover rounded-r-lg bg-black bg-opacity-65 absolute top-0">
                    <h1 className="text-gray-300 text-3xl mt-40 ml-10 font-bold text-center">
                      Welcome to Rebuild Rising
                    </h1>
                    <p className="ml-4 mt-5 text-gray-400 text-center">
                      We are fighting for a better, fairer, and brighter future
                      for every citizen. It’s time to do things the right way.
                    </p>
                    <p className="text-center mt-10 ml-3 text-gray-400">
                      Join us, be a part of future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
