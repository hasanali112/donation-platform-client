import Container from "@/components/layout/shared/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const bronzePackage = "bronze";
const silverPackage = "silver";
const goldPackage = "gold";

const Package = () => {
  const bronzePrice = 9.99;
  const silverPrice = 50.99;
  const goldPrice = 150.99;

  return (
    <div className="bg-slate-200 pt-20">
      <Container>
        <h1 className="text-center text-2xl text-[#cf1a45] font-semibold">
          Time to make a difference
        </h1>
        <h1 className="text-center text-4xl  font-bold mt-5">
          Become an ambassador
        </h1>
        <p className="text-center text-gray-600 mt-5 w-[50%] mx-auto">
          Remember, teamwork begins by building trust. And the only way to do
          that is to overcome our need for invulnerability.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10 pb-20">
          <div className="w-[380px] h-[400px] bg-gray-800 rounded-sm text-white text-center hover:-translate-y-2 duration-700 cursor-pointer">
            <h1 className="mt-8 text-3xl font-bold">Bronze</h1>
            <h1 className="mt-5 text-3xl font-bold">$ {bronzePrice} /Year</h1>
            <p className="w-[95%] mx-auto mt-8">
              As a Bronze Ambassador, you'll enjoy exclusive benefits designed
              to enhance your experience and amplify your impact.
            </p>
            <Button className="bg-blue-600 mt-16 text-lg font-semibold h-[60px] rounded-sm">
              <Link to={`/package-form/${bronzePackage}`}>
                Become ambassador
              </Link>
            </Button>
          </div>
          <div className="w-[380px] h-[400px] bg-[#235ad2] rounded-sm text-white text-center hover:-translate-y-2 duration-700 cursor-pointer">
            <h1 className="mt-8 text-3xl font-bold">Silver</h1>
            <h1 className="mt-5 text-3xl font-bold">$ {silverPrice} /Year</h1>
            <p className="w-[95%] mx-auto mt-8">
              As a Silver Ambassador, you'll gain access to even more exclusive
              benefits, allowing you to make an even greater impact.
            </p>
            <Button className="bg-white text-blue-600 hover:text-white mt-16 text-lg font-semibold h-[60px] rounded-sm">
              <Link to={`/package-form/${silverPackage}`}>
                Become ambassador
              </Link>
            </Button>
          </div>
          <div className="w-[380px] h-[400px] bg-[#cf1a45] rounded-sm text-white text-center hover:-translate-y-2 duration-700 cursor-pointer">
            <h1 className="mt-8 text-3xl font-bold">Gold</h1>
            <h1 className="mt-5 text-3xl font-bold">$ {goldPrice} /Year</h1>
            <p className="w-[95%] mx-auto mt-8">
              As a Gold Ambassador, you'll receive premium benefits designed to
              maximize your impact and engagement with Rebuild Rising.
            </p>
            <Button className="bg-white text-red-600 hover:text-white mt-10 text-lg font-semibold h-[60px] rounded-sm">
              <Link to={`/package-form/${goldPackage}`}>Become ambassador</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Package;
