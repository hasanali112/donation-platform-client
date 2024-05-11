import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../../assets/logo2.png";

const Footer = () => {
  return (
    <div className="bg-[#151422] text-white">
      <Container>
        <div className="grid grid-cols-12 gap-5  pb-4">
          <div className=" col-span-12 lg:col-span-3 ">
            <div className="mt-14">
              <Link to="/" className="flex items-center gap-1 ">
                <img src={logo} alt="" className="w-12" />
                <span className="text-3xl font-bold">
                  Rebuild <span className="text-cyan-400">Rising</span>
                </span>
              </Link>
              <div className="mt-2 mb-3">
                <ul>
                  <li>111 C Street</li>
                  <li>Encinitas, CA</li>
                  <li>92024</li>
                </ul>
              </div>
              <p>&copy; Copyright 2024 Rebuild Rising</p>
            </div>
          </div>
          <div className=" col-span-12 lg:col-span-5">
            <div className="flex lg:flex-row justify-between lg:justify-around mt-14">
              <div>
                <h1 className="text-2xl font-bold mb-2">COMPANY</h1>
                <ul>
                  <li>About</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                </ul>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2">WHO IT'S FOR</h1>
                <ul>
                  <li>For Non Profits</li>
                  <li>For Churches</li>
                  <li>For Schools</li>
                  <li>For Agencies</li>
                  <li>For Businesses</li>
                  <li>For Influencers</li>
                  <li>For Individuals</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-span-12 lg:col-span-4  p-1">
            <h1 className="text-2xl font-bold mt-14">
              Get Newsletter Every Weeks
            </h1>
            <input
              type="text"
              className="w-[350px] h-[50px] mt-3 rounded-lg bg-transparent border border-white"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
