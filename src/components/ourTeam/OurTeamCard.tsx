import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const OurTeamCard = () => {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
        <h1 className="text-center text-xl font-semibold">Connie Lerner</h1>
        <p className="text-center mt-3">Political Member</p>
        <div className="flex gap-3 items-center justify-center mt-3">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
