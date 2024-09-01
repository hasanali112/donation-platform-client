import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const AllStaticCard = () => {
  const containRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (containRef.current) {
        const rect = containRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containRef,
    offset: ["0 1", "0.3 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row">
      <div className="bg-black bg-opacity-35 text-white md:w-[200px]  lg:w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">
            {" "}
            {scrolled ? <CountUp start={0} end={5295} duration={3} /> : 0}+
          </h1>
          <p className="text-center text-xl">VOLUNTEERS</p>
        </div>
      </div>
      <div ref={containRef}>
        <motion.img
          style={{
            scale: scaleValue,
            opacity: opacityValue,
            transition: "2s ease",
          }}
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="lg:w-[258px] md:w-[200px] w-full h-[258px] object-cover"
        />
      </div>
      <div className="bg-black bg-opacity-35 text-white md:w-[200px]  lg:w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">
            {" "}
            {scrolled ? <CountUp start={0} end={75} duration={3} /> : 0}
          </h1>
          <p className="text-center text-xl">LEGAL PLANS</p>
        </div>
      </div>
      <div ref={containRef}>
        <motion.img
          style={{
            scale: scaleValue,
            opacity: opacityValue,
            transition: "2s ease",
          }}
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="lg:w-[258px] md:w-[200px] w-full h-[258px] object-cover"
        />
      </div>
      <div className="bg-black bg-opacity-35 text-white  md:w-[200px] lg:w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">
            {" "}
            {scrolled ? <CountUp start={0} end={276} duration={3} /> : 0}+
          </h1>
          <p className="text-center text-xl">EVENTS</p>
        </div>
      </div>
    </div>
  );
};

export default AllStaticCard;
