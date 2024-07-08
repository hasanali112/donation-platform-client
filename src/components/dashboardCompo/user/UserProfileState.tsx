import UserProfileCard from "./UserProfileCard";

const UserProfileState = () => {
  return (
    <div className="p-5">
      <div className="flex gap-5">
        <div>
          <UserProfileCard />
        </div>
        <div className="bg-[#14274e] rounded-md w-full p-10">
          <h1 className="text-4xl font-bold">About me</h1>
          <p className="mt-4 text-gray-400">
            Satya Nadella is an Indian-American business executive who currently
            serves as the Chief Executive Officer (CEO) of Microsoft, a position
            he has held since February 2014. Born on August 19, 1967, in
            Hyderabad, India, Nadella grew up in a well-educated family; his
            father was a civil servant and his mother a Sanskrit lecturer.
          </p>
          <p className="mt-4 text-gray-400">
            Education: Nadella pursued a Bachelor's degree in Electrical
            Engineering from the Manipal Institute of Technology in India. He
            then moved to the United States to further his education, earning a
            Master’s degree in Computer Science from the University of
            Wisconsin–Milwaukee and later, a Master’s degree in Business
            Administration (MBA) from the University of Chicago Booth School of
            Business.
          </p>
          <p className="mt-4 text-gray-400">
            As CEO: Since taking over as CEO, Nadella has focused on
            transforming Microsoft’s corporate culture and strategic direction.
            Key initiatives and achievements during his tenure include: Cloud
            Computing: Nadella shifted Microsoft’s focus towards cloud
            computing, making Azure a significant competitor to Amazon Web
            Services (AWS). This move has been instrumental in Microsoft’s
            financial success and relevance in the modern tech landscape.
            Acquisitions: Under his leadership, Microsoft acquired several
            companies to bolster its position in key markets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileState;
