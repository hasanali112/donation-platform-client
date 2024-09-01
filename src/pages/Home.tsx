import About from "@/components/Home/About";
import DonationPost from "@/components/Home/DonationPost";
import HeroSection from "@/components/Home/HeroSection";
import Scroll from "@/components/Home/Scroll";
import Ammassador from "@/components/Home/ambassador/Ammassador";
import EventBanner from "@/components/Home/event/EventBanner";
import Gellary from "@/components/Home/gellary/Gellary";
import Team from "@/components/Home/team/Team";

import Testimonial from "@/components/Home/testimonial/Testimonial";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <DonationPost />
      <Gellary />
      <div className="md:block hidden">
        <Ammassador />
      </div>
      <Team />
      <EventBanner />
      <div className="md:block hidden">
        <About />
      </div>
      <Testimonial />
      <Scroll />
    </div>
  );
};

export default Home;
