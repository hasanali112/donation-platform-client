import { useGetDonationPostQuery } from "@/redux/api/baseApi";
import { TProps } from "@/type/type";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import CampainCard from "./CampainCard";
import LoadingCard from "@/components/cutomsLoading/LoadingCard";

const CampainMotion = () => {
  const { data, isLoading } = useGetDonationPostQuery(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.5 1"],
  });

  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yValue = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <div>
      <motion.div
        ref={containerRef}
        style={{ y: yValue, opacity: opacityValue, transition: "2s" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-4 duration-500 "
      >
        {data
          ?.slice(0, 6)
          ?.map((item: TProps) => (
            <CampainCard
              key={item._id}
              className="lg:hover:scale-100 md:w-full"
              {...item}
            />
          )) ||
          (isLoading && <LoadingCard />)}
      </motion.div>
    </div>
  );
};

export default CampainMotion;
