import { Link } from "react-router-dom";
import Container from "../layout/shared/Container";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import CampainMotion from "./runningCampain/CampainMotion";

const DonationPost = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.2 1"],
  });

  const xLeftValue = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const xRightValue = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // const springConfig = {
  //   stiffness: 10,
  //   damping: 10,
  // };

  // const xSpring = useSpring(xLeftValue, springConfig);
  // const ySpring = useSpring(xRightValue, springConfig);

  return (
    <div>
      <Container className="md:pt-28 pb-28 pt-5">
        <motion.div className="flex flex-col md:flex-row md:justify-between">
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
              A plan for the people
            </h1>
            <h1 className="text-[40px] font-bold ">It’s time to take</h1>
            <h1 className="text-[40px] font-bold -translate-y-2">
              control of <span className="text-blue-600">our life</span>
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
            <h1 className=" text-xl font-bold mt-10  text-gray-600">
              We are fighting for a better, fairer, and brighter future for
              every citizen. It’s time to do things the right way.
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
        </motion.div>
        <div>
          <CampainMotion />
        </div>
      </Container>
    </div>
  );
};

export default DonationPost;
