import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const AllStaticSeceond = () => {
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
    <div ref={containRef} className="flex flex-col md:flex-row lg:flex-row">
      <div>
        <motion.img
          style={{
            scale: scaleValue,
            opacity: opacityValue,
            transition: "2s ease",
          }}
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="lg:w-[258px] md:w-[200px] w-full h-[258px] object-cover"
        />
      </div>
      <div className="bg-black bg-opacity-35 text-white md:w-[200px]  lg:w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">
            {" "}
            {scrolled ? <CountUp start={0} end={58} duration={3} /> : 0}+
          </h1>
          <p className="text-center text-xl">SPONSORS</p>
        </div>
      </div>
      <div>
        <motion.img
          style={{
            scale: scaleValue,
            opacity: opacityValue,
            transition: "2s ease",
          }}
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="lg:w-[258px] md:w-[200px] w-full h-[258px] object-cover"
        />
      </div>

      <div className="bg-black bg-opacity-30 text-white md:w-[200px]  lg:w-[258px] h-[258px]">
        <div className="flex flex-col mt-20">
          <h1 className="text-center text-3xl font-semibold">
            {" "}
            {scrolled ? <CountUp start={0} end={18562} duration={3} /> : 0}+
          </h1>
          <p className="text-center text-xl">DONATIONS</p>
        </div>
      </div>

      <div className="bg-[#252b3f] cursor-pointer   text-white md:w-[200px]  lg:w-[258px] h-[258px]">
        <Link to="/package">
          <div className="flex flex-col mt-20">
            <h1 className="w-1/2 mx-auto font-semibold">
              <ArrowRight className="ml-10" />
            </h1>
            <p className="text-center text-xl">Be a part of future</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AllStaticSeceond;
