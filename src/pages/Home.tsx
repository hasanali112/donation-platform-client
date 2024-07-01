import About from "@/components/Home/About";
import DonationPost from "@/components/Home/DonationPost";
import HeroSection from "@/components/Home/HeroSection";
import Scroll from "@/components/Home/Scroll";
import Ammassador from "@/components/Home/ambassador/Ammassador";
import Gellary from "@/components/Home/gellary/Gellary";

import Testimonial from "@/components/Home/testimonial/Testimonial";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <DonationPost />
      <Testimonial />
      <Gellary />
      <Ammassador />
      <About />
      <Scroll />
    </div>
  );
};

export default Home;
