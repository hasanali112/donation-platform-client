import Container from "@/components/layout/shared/Container";
import AmmassadorCard from "./AmmassadorCard";
import AllStaticCard from "./AllStaticCard";
import AllStaticSeceond from "./AllStaticSeceond";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Ammassador = () => {
  const containRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containRef,
    offset: ["0 1", "0.3 1"],
  });

  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yValue = useTransform(scrollYProgress, [0, 1], [800, 0]);

  return (
    <>
      <div
        style={{ clipPath: "polygon(0 10%, 100% 70%, 100% 53%, 0 100%)" }}
        className="bg-[#252b3f]  w-full h-[150px] lg:translate-y-[135px] md:translate-y-[155px]"
      ></div>
      <div
        style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)" }}
        className="bg-[#cf1a45] text-white  pt-40 pb-40"
      >
        <Container>
          <motion.div
            ref={containRef}
            style={{
              scale: scaleValue,
              opacity: opacityValue,
              transition: "2s ease",
            }}
          >
            <h1 className="lg:text-[40px] md:text-4xl  font-bold text-center">
              Join us
            </h1>
            <h1 className="lg:text-[40px] md:text-4xl font-bold text-center">
              & beacome an abasssador
            </h1>
          </motion.div>
          <motion.div
            style={{
              y: yValue,
              opacity: opacityValue,
              scale: scaleValue,
              transition: "2s",
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-10 pt-28 lg:pt-20"
          >
            <AmmassadorCard
              image="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="Smith"
            />
            <AmmassadorCard
              image="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="Taylor"
            />
            <AmmassadorCard
              image="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="Ava"
            />
          </motion.div>
          <div className=" pt-20 pb-20">
            <AllStaticCard />
            <AllStaticSeceond />
          </div>
        </Container>
      </div>
      <div
        style={{ clipPath: "polygon(0 8%, 100% 90%, 100% 100%, 0 100%)" }}
        className="bg-[#252b3f]  w-full md:h-[170px] lg:h-[150px] lg:-translate-y-[150px] md:-translate-y-[170px]"
      ></div>
    </>
  );
};

export default Ammassador;
