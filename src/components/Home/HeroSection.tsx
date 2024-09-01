import { Link } from "react-router-dom";
import Container from "../layout/shared/Container";
import hero from "./../../assets/hero-earl-1.png";
import grid from "@/assets/grid.svg";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const parent = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    x: 600,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delay: 0.8,
      delayChildren: 0.5,
    },
  },
};

const parentLeft = {
  hidden: {
    y: 500,
    scale: 0.5,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      duration: 2,
      delay: 0.9,
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2.2,
    },
  },
};

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        style={{ backgroundImage: `url(${grid})` }}
        className="bg-[#f3f3fb] "
      >
        <Container className="overflow-hidden">
          <div className="flex md:flex-row flex-col  md:justify-between  items-center pt-20 md:pt-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={parentLeft}
              className=""
            >
              <h1 className="font-bold text-xl text-[#cf1a45] mx-3 md:mx-0">
                This is our dream{" "}
              </h1>
              <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold mt-6 mx-3 md:mx-0">
                We can only
              </h1>
              <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold mt-4 mx-3 md:mx-0">
                make it <span className="text-blue-600">together</span>
              </h1>
              <p className="mt-6 lg:max-w-[65ch] md:max-w-[55ch] text-base text-gray-500 mx-3 md:mx-0">
                Directly support those who need it most with your donations.
                Your donation empowers families in poverty to choose how best to
                improve their lives.
              </p>
              <div className="mt-7 space-x-4 flex">
                <Link to="/donations">
                  <button className="p-3 ml-3 md:ml-0  text-white font-semibold bg-blue-700 rounded-[3px] w-[160px] md:w-[120px] h-[50px]">
                    Donate
                  </button>
                </Link>
                <Link to="/about">
                  <button className="p-3  mr-3 md:mr-0 text-white font-semibold bg-gray-600 rounded-[3px] w-[160px] md:w-[120px] h-[50px]">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
            <div className=" mt-10 lg:mt-0 overflow-hidden">
              <motion.img
                initial="hidden"
                animate="visible"
                variants={parent}
                src={hero}
                alt=""
                className="lg:ml-8 lg:h-[660px] md:h-[460px]"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container className="-translate-y-[50px]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={children}
          className="flex justify-end relative"
        >
          <div className="bg-[#cf1a45] w-[100%]  lg:w-[800px] h-[120px] rounded-md ">
            <div className="text-white flex  justify-center md:items-center gap-2 md:gap-40 ml-10 md:-ml-5 lg:ml-20 mt-4 lg:mt-10 z-50">
              <div className="flex flex-col">
                <span
                  className="inline-flex font-bold text-xl md:text-[40px]"
                  style={{ width: "100px" }}
                >
                  {scrolled ? (
                    <CountUp start={0} end={85000} duration={3} />
                  ) : (
                    0
                  )}
                  +
                </span>
                <h1 className="md:text-xl text-md  md:ml-4">Collection</h1>
              </div>
              <div className="flex flex-col">
                <span
                  className="inline-flex font-bold text-xl md:text-[40px]"
                  style={{ width: "120px" }}
                >
                  {scrolled ? <CountUp start={0} end={8000} duration={3} /> : 0}
                  +
                </span>
                <h1 className="md:text-xl text-md text-center -ml-10 md:ml-0">
                  Donation
                </h1>
              </div>
              <div className="flex flex-col z-50">
                <span
                  className="inline-flex font-bold text-xl md:text-[40px]"
                  style={{ width: "120px" }}
                >
                  {scrolled ? <CountUp start={0} end={500} duration={3} /> : 0}+
                </span>
                <h1 className="md:text-xl text-md ">Volunterier</h1>
              </div>
            </div>
          </div>
          <div
            style={{
              clipPath: "polygon(55% 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
            className="bg-[#b8173d] w-[200px] h-[120px] absolute top-0 rounded-md"
          ></div>
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
