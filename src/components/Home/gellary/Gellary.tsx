import Container from "@/components/layout/shared/Container";
import GellaryLayout from "./GellaryLayout";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Gellary = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.1 1"],
  });

  const xLeftValue = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const xRightValue = useTransform(scrollYProgress, [0, 1], [400, 0]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const yValue = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div className="lg:mt-3">
      <Container>
        <div className="md:mt-24 mt-10">
          <div className="flex flex-col md:flex-row justify-between">
            <motion.div
              ref={containerRef}
              style={{
                scale: scaleValue,
                x: xLeftValue,
                opacity: opacityValue,
                transition: "2s",
              }}
              className="md:w-[50%]"
            >
              <div className="w-[20px] h-[20px] bg-blue-700"></div>
              <h1 className="text-[#cf1a45] font-bold text-xl mt-2">
                Get involved
              </h1>
              <h1 className="md:text-[40px] lg:text-[40px] text-4xl font-bold mt-4 md:mt-0">
                Take Part in
              </h1>
              <h1 className="md:text-[40px] lg:text-[40px] text-4xl text-blue-600 font-bold md:-translate-y-2 mt-3 lg:mt-4 md:mt-0">
                Something Valuable
              </h1>
            </motion.div>
            <motion.div
              ref={containerRef}
              style={{
                scale: scaleValue,
                x: xRightValue,
                opacity: opacityValue,
                transition: "2s",
              }}
              className="md:w-[50%]"
            >
              <h1 className=" text-md lg:text-xl font-semibold mt-10  text-gray-600">
                Unity is strength! When there is teamwork and collaboration,
                wonderful things can be achieved. Efficiency is doing better
                that what is already being done.
              </h1>
              <Link to="/donations" className="group">
                <button className=" text-gray-600 group-hover:text-blue-900 text-md font-semibold mt-4 rounded-lg inline-flex items-center">
                  Why it is important?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
      <motion.div
        ref={containerRef}
        style={{
          y: yValue,
          opacity: opacityValue,
          transition: "2s",
        }}
        className="md:mt-20 mt-5"
      >
        <GellaryLayout />
      </motion.div>
    </div>
  );
};

export default Gellary;
