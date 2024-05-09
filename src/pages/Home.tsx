import About from "@/components/Home/About";
import DonationPost from "@/components/Home/DonationPost";
import Gellary from "@/components/Home/Gellary";
import HeroSection from "@/components/Home/HeroSection";
import Testimonial from "@/components/Home/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DonationPost />
      <Testimonial />
      <Gellary />
      <About />
    </div>
  );
};

export default Home;
