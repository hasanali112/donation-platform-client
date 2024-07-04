import Container from "@/components/layout/shared/Container";
import google from "../assets/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProviders";
import Swal from "sweetalert2";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserCredential } from "firebase/auth";
import { Lock, Mail } from "lucide-react";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const context = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm<Inputs>();

  if (!context) {
    return null; // or some fallback UI
  }

  const { googleLoggedUser, loginUser } = context;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then((result: UserCredential) => {
        result.user;
        Swal.fire({
          title: "Login!",
          text: "Login successfully!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div className="relative w-[80%] mx-auto mt-10">
          <div className="flex justify-between flex-col">
            <div className="rounded-full w-[100px] h-[100px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse translate-x-[250px]"></div>
            <div className="rounded-full w-[80px] h-[80px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-pulse translate-y-[200px]"></div>
          </div>
          <div className="bg-white bg-opacity-10 border border-gray-300 border-t-0 border-opacity-10 w-full rounded-lg backdrop-blur-md shadow-2xl backdrop-filter  absolute top-0 z-20 ">
            <div className="grid grid-cols-12">
              <div className="flex flex-col p-10 col-span-6">
                <h1 className="text-left text-4xl font-bold text-gray-300">
                  Login
                </h1>
                <p className="text-xl mt-3 mb-5">Please enter your details.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="relative">
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
                    Login
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
                  No registration yet?{" "}
                  <Link to="/register" className="text-violet-500">
                    Create an account
                  </Link>
                </p>
              </div>
              <div className="col-span-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-[630px] object-cover rounded-r-lg"
                  />
                  <div className="w-full h-[630px] object-cover rounded-r-lg bg-black bg-opacity-65 absolute top-0">
                    <h1 className="text-gray-300 text-3xl mt-40 ml-10 font-bold">
                      Welcome to Rebuild Rising
                    </h1>
                    <p className="ml-10 mt-5 text-gray-400">
                      We are fighting for a better, fairer, and brighter future
                      for every citizen. It’s time to do things the right way.
                    </p>
                    <p className="text-center mt-10 text-gray-400">
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

export default Login;
