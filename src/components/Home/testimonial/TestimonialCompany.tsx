import image1 from "./../../../assets/img1.png";
import image2 from "./../../../assets/img2.png";
import image3 from "./../../../assets/imag3.png";
import TestimonialSvg from "./TestimonialSvg";

const TestimonialCompany = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={image1} alt="" />
        <div className="flex">
          <TestimonialSvg />
          <TestimonialSvg />
          <TestimonialSvg />
          <TestimonialSvg />
          <TestimonialSvg />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={image2} alt="" />
        <div className="flex">
          <TestimonialSvg />
          <TestimonialSvg />
          <TestimonialSvg />
          <TestimonialSvg />
          <TestimonialSvg />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={image3} alt="" />
        <div className="flex">
          <TestimonialSvg />
          <TestimonialSvg />
          <TestimonialSvg />
          <TestimonialSvg />
          <TestimonialSvg />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCompany;
