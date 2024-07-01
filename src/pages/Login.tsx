import Container from "@/components/layout/shared/Container";
import google from "../assets/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const context = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (!context) {
    return null; // or some fallback UI
  }

  const { googleLoggedUser } = context;

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
    <Container>
      <Link to="/" className="flex items-center gap-1 pt-6">
        <img src={logo} alt="" className="w-12" />
        <span className="text-3xl font-bold">
          Rebuild <span className="text-cyan-400">Rising</span>
        </span>
      </Link>
      <div className="lg:w-[70%] mx-auto h-[500px] mt-20 p-5">
        <div className="flex flex-col lg:ml-40">
          <h1 className="text-left text-4xl font-bold">Login</h1>
          <p className="text-xl mt-3 mb-5">
            Welcome back! Please enter your details.
          </p>
          <div>
            <button
              onClick={handleGoogleLogin}
              className="w-[70%] h-14 rounded-lg border text-xl font-semibold flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500"
            >
              <img src={google} alt="" className="w-10" />
              Login with Google
            </button>
          </div>
          <p className="lg:ml-32 mb-3 mt-4">or Login with Email</p>
          <div>
            <label htmlFor="Email" className="block">
              Email
            </label>
            <input
              type="text"
              className="border w-[70%] mb-3 h-12 rounded-lg"
            />
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password" // Changed to password for better security
              className="border w-[70%] mb-3 h-12 rounded-lg"
            />
          </div>
          <button className="w-[70%] h-14 rounded-lg bg-violet-600 text-white mt-3 text-xl font-semibold flex justify-center items-center gap-2 shadow-sm hover:-translate-y-2 duration-500">
            Login
          </button>
          <p className="mt-3 mb-10">
            No registration yet?{" "}
            <Link to="/register" className="text-violet-500">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
