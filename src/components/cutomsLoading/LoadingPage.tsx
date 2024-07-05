import pageLoading from "./customsloading.json";
import Lottie from "lottie-react";

const LoadingPage = () => {
  return (
    <div className="w-full  bg-[#081939]">
      <Lottie
        animationData={pageLoading}
        loop={true}
        className="w-[700px] h-[700px] mx-auto"
      />
    </div>
  );
};

export default LoadingPage;
