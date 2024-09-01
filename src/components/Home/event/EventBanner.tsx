import Container from "@/components/layout/shared/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EventBanner = () => {
  return (
    <div className="bg-slate-200 md:mt-10 lg:mt-20">
      <motion.div className="bg-black relative overflow-y-hidden overflow-x-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.5 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-[300px] w-full overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="h-[300px]  w-full  bg-[#0c1c3a]  absolute top-0 opacity-[.90]">
          <Container className="flex flex-col md:flex-row lg:flex-row justify-between md:gap-10 lg:gap-4 items-center pt-16 md:pt-24 lg:pt-10 lg:mt-16">
            <div>
              <h3 className="  text-[#c61942]  text-xl font-bold ">
                Our Next Event
              </h3>
              <h1 className=" text-white mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
                Together we can do so much.
              </h1>
            </div>
            <div className="">
              <Link to="/events">
                <Button className="bg-blue-600 text-lg w-[380px] md:w-[200px] h-[60px] mt-4 rounded-sm">
                  View next events
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </motion.div>
    </div>
  );
};

export default EventBanner;
