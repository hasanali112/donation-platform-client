import image1 from "@/assets/Donation/1.webp";
import image2 from "@/assets/Donation/2.webp";
import image3 from "@/assets/Donation/3.webp";
import image4 from "@/assets/Donation/4.webp";
import image5 from "@/assets/Donation/6.jpg";
import image6 from "@/assets/Donation/7.jpg";
import image7 from "@/assets/Donation/8.jpg";
import image8 from "@/assets/Donation/9.jpg";
import image9 from "@/assets/Donation/10.jpg";
import image10 from "@/assets/Donation/20.jpg";
import image11 from "@/assets/Donation/12.jpg";
import image12 from "@/assets/Donation/13.jpg";
import image13 from "@/assets/Donation/15.jpg";
import image14 from "@/assets/Donation/16.jpg";
import image15 from "@/assets/Donation/17.jpg";
import image16 from "@/assets/Donation/18.jpg";
import image17 from "@/assets/Donation/19.jpg";
import { motion } from "framer-motion";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
];

const GellaryLayout = () => {
  return (
    <div className="bg-white w-full ">
      <div className="flex gap-3 xl:overflow-x-hidden lg:overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-3"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image${index + 1}`}
              className="w-[450px] h-[400px] object-cover rounded-lg"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-3"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image${index + 1}`}
              className="w-[450px] h-[400px] object-cover rounded-lg"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GellaryLayout;
