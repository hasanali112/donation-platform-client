import Container from "../layout/shared/Container";
import aboutImg from "../../assets/Donation/1.webp";
import aboutImg2 from "../../assets/ab2.png";
import "./../../style/about.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.5 1"],
  });

  const xValue = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const xRightValue = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const yLeftValue = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-[#f6f6fc]">
      <Container className="">
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between xl:justify-between items-center lg:gap-10 pt-28 pb-32">
          <div className="lg:w-[65%] ">
            <motion.div
              ref={containerRef}
              style={{
                x: xValue,
                opacity: opacityValue,
                transition: "1s ease",
              }}
              className="flex-shrink-0"
            >
              <h1 className="text-4xl font-bold ">About Us</h1>
              <p className="w-[90%] mt-2 text-lg text-gray-500 md:hidden lg:block">
                We believe in the power of collective generosity to drive
                positive change in the world. Our platform serves as a bridge
                between those who want to make a difference and organizations
                dedicated to making the world a better place. Whether you're
                passionate about environmental conservation, social justice,
                education, healthcare, or any other cause close to your heart,
                you'll find a diverse range of trusted charities and initiatives
                to support here. Transparency and accountability are at the core
                of what we do. We carefully vet each organiza cause featured on
                our platform to ensure that your donations are making a real and
                lasting impact. We believe in providing our donors with full
                visibility into where their contributions are going and the
                difference they're making in the lives of others.
              </p>
              <p className="w-[90%] mt-2 text-lg text-gray-500 md:block lg:hidden">
                We believe in the power of collective generosity to drive
                positive change in the world. Our platform serves as a bridge
                between those who want to make a difference and organizations
                dedicated to making the world a better place. Whether you're
                passionate about environmental conservation, social justice,
                education, healthcare, or any other cause close to your heart,
                you'll find a diverse range of trusted charities and initiatives
                to support here.
              </p>
              <div className="flex gap-4 mt-10">
                <Link to="/donation-checkout">
                  <button className="p-3 rounded-[3px] w-[120px] h-[50px] text-white font-semibold bg-blue-700 ">
                    Donate
                  </button>
                </Link>
                <button className="p-3 rounded-[3px] w-[120px] h-[50px] text-white font-semibold bg-gray-600 ">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-[35%] flex-shrink-0">
            <motion.div
              ref={containerRef}
              style={{
                x: xRightValue,
                transition: "2s ease",
              }}
              className="relative"
            >
              <img
                id="aboutImg"
                src={aboutImg}
                alt=""
                className="lg:w-[400px] w-[350px] h-[350px] lg:h-[400px]"
              />
              <motion.div
                ref={containerRef}
                style={{
                  y: yLeftValue,
                  opacity: opacityValue,
                  transition: "3s ease",
                }}
                className="-rotate-10 absolute -bottom-[30%] -left-[20%]"
              >
                <img src={aboutImg2} alt="" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
