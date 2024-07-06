import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../../assets/logo2.png";
import { Button } from "@/components/ui/button";
import facbook from "@/assets/fb.png";
import instagram from "@/assets/insta.png";
import link from "@/assets/link.png";

const Footer = () => {
  return (
    <div className=" text-white border-t-4 bg-gradient-to-r from-[#211e3d] to-[#561c3e]">
      <Container>
        <div className="grid grid-cols-12 gap-5  pb-4">
          <div className=" col-span-12 lg:col-span-3 ">
            <div className="mt-14">
              <Link to="/" className="flex items-center gap-1 ">
                <img src={logo} alt="" className="w-12" />
                <span className="text-3xl font-bold">
                  Rebuild <span className="text-blue-600">Rising</span>
                </span>
              </Link>
              <div className="mt-2 mb-3">
                <ul className="space-y-2">
                  <li>111 C Street</li>
                  <li>Encinitas, CA</li>
                  <li>92024</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-span-12 lg:col-span-5">
            <div className="flex lg:flex-row justify-between lg:justify-around mt-14">
              <div>
                <h1 className="text-2xl font-bold mb-2">COMPANY</h1>
                <ul className="space-y-5">
                  <li>About</li>
                  <li>Pricing</li>
                  <li>
                    <Link to="/news">Blog</Link>
                  </li>
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                </ul>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2">WHO IT'S FOR</h1>
                <ul className="space-y-5">
                  <li>For Non Profits</li>
                  <li>For Churches</li>
                  <li>For Schools</li>
                  <li>For Agencies</li>
                  <li>For Businesses</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-span-12 lg:col-span-4">
            <h1 className="text-2xl font-bold mt-14">
              Get Newsletter Every Weeks
            </h1>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[250px] h-[40px] mt-3 rounded-md bg-transparent border border-white pl-4"
            />
            <Button className="bg-blue-600 ml-1 h-[40px] rounded-md -translate-y-[2px]">
              Submit
            </Button>
            <div className="mt-6">
              <h3 className="ml-2">Follow us</h3>
              <div className="flex space-x-2 mt-3">
                <img src={facbook} alt="facebook" className="w-9" />
                <img src={instagram} alt="facebook" className="w-7" />
                <img src={link} alt="facebook" className="w-7" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <div className="p-5">
        <p className="text-center">&copy; Copyright 2024 Rebuild Rising</p>
      </div>
    </div>
  );
};

export default Footer;
