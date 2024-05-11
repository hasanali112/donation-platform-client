import Container from "../layout/shared/Container";
import aboutImg from "../../assets/ab1.jpg";
import aboutImg2 from "../../assets/ab2.png";
import "./../../style/about.css";

const About = () => {
  return (
    <div>
      <Container className="lg:mt-20 mt-40 mb-5">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-10">
          <div className="flex-1 -translate-y-[19%]">
            <h1 className="text-4xl font-bold ">About Us</h1>
            <p className="w-[90%] mt-2 text-lg ">
              We believe in the power of collective generosity to drive positive
              change in the world. Our platform serves as a bridge between those
              who want to make a difference and organizations dedicated to
              making the world a better place. Whether you're passionate about
              environmental conservation, social justice, education, healthcare,
              or any other cause close to your heart, you'll find a diverse
              range of trusted charities and initiatives to support here.
              Transparency and accountability are at the core of what we do. We
              carefully vet each organiza cause featured on our platform to
              ensure that your donations are making a real and lasting impact.
              We believe in providing our donors with full visibility into where
              their contributions are going and the difference they're making in
              the lives of others.
            </p>
            <div className="flex gap-4 mt-10">
              <button className="p-3 w-36 text-white font-semibold bg-pink-600 rounded-lg">
                Donate
              </button>
              <button className="p-3 w-36 text-white font-semibold bg-gray-600 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-2 mt-4">
            <img
              id="aboutImg"
              src={aboutImg}
              alt=""
              className="w-[400px] h-[400px]"
            />
            <div className="-translate-y-[50%] -translate-x-[16%] -rotate-10">
              <img src={aboutImg2} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
