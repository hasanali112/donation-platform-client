import { AuthContext } from "@/providers/AuthProviders";
import { useContext } from "react";
import UserDropDown from "./UserDropDown";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import MailDropDown from "./TopnavDrop/MailDropDown";
import Notification from "./TopnavDrop/Notification";
import { Link } from "react-router-dom";
import DashboardContainer from "../shared/DashboardContainer";

const TopNav = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return <p>user is null</p>;
  }

  const { user } = context;

  return (
    <div className="h-[59px] w-full bg-[#112143] shadow-2xl sticky top-0 z-10 border-b border-[#59647c] pt-3">
      <DashboardContainer>
        <div className="flex justify-between items-center ">
          <div className="ml-5">
            <Link to="/">
              {" "}
              <Button className="bg-blue-600">Got to Home</Button>
            </Link>
          </div>
          <div>
            <div className="flex items-center  space-x-10">
              <div>
                <Search />
                <span></span>
              </div>
              <Notification />

              <MailDropDown />

              <div className="flex items-center">
                <h1>{user ? user.displayName : "User"}</h1>
                <UserDropDown />
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default TopNav;
