import Container from "../layout/shared/Container";
import image1 from "../../assets/6.jpg";
import image2 from "../../assets/7.jpg";
import image3 from "../../assets/1.jpg";
import image4 from "../../assets/2.jpg";
import image5 from "../../assets/3.jpg";
import image6 from "../../assets/4.jpg";
import image7 from "../../assets/5.jpg";

const Gellary = () => {
  return (
    <div className="bg-gray-100 mt-40 lg:mt-3 pt-20">
      <Container>
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-center ">Explore Our Work</h1>
          <p className="w-[80%] mx-auto text-center text-xl mt-3">
            Our donation gallery isn't just a collection of images; it's a
            testament to the power of giving. Each picture tells a story of
            hope, compassion, and change.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="w-full h-[380px]  lg:col-span-4 col-span-12 rounded-lg relative">
            <img
              src={image1}
              alt=""
              className="bg-cover object-cover h-full rounded-lg"
            />
            <div className="absolute bottom-0 rounded-b-lg p-5 hover:p-[172px] hover:rounded-lg text-white bg-black/50 duration-500  w-full group">
              <h1 className="text-3xl group-hover:-translate-x-[50px]">
                Donation
              </h1>
            </div>
          </div>
          <div className="w-full h-[380px]  lg:col-span-8 col-span-12 rounded-lg relative">
            <img
              src={image2}
              alt=""
              className="bg-cover object-cover object-left-bottom h-full w-full rounded-lg"
            />
            <div className="absolute bottom-0 rounded-b-lg p-5 hover:p-[172px] hover:rounded-lg text-white bg-black/50 duration-500  w-full group">
              <h1 className="text-3xl group-hover:translate-x-[150px]">
                Donation
              </h1>
            </div>
          </div>
          <div className="w-full h-[380px]  lg:col-span-4 col-span-12 rounded-lg relative">
            <img
              src={image3}
              alt=""
              className="bg-cover object-cover object-center  h-full w-full rounded-lg"
            />
            <div className="absolute bottom-0 rounded-b-lg p-5 hover:p-[172px] hover:rounded-lg text-white bg-black/50 duration-500  w-full group">
              <h1 className="text-3xl group-hover:-translate-x-[50px]">
                Donation
              </h1>
            </div>
          </div>
          <div className="w-full h-[380px] border lg:col-span-4 col-span-12 rounded-lg relative">
            <img
              src={image4}
              alt=""
              className="bg-cover object-cover object-center h-full w-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-lg p-5 hover:p-[172px] hover:rounded-lg text-white bg-black/50 duration-500 w-full group overflow-hidden">
              <h1 className="text-3xl group-hover:-translate-x-[50px]">
                Donation
              </h1>
            </div>
          </div>
          <div className="w-full h-[380px] bg-red-500 lg:col-span-4 col-span-12 rounded-lg relative">
            <img
              src={image5}
              alt=""
              className="bg-cover object-cover object-center h-full w-full rounded-lg "
            />
            <div className="absolute bottom-0 rounded-b-lg p-5 hover:p-[172px] hover:rounded-lg text-white bg-black/50 duration-500  w-full group">
              <h1 className="text-3xl group-hover:-translate-x-[50px]">
                Donation
              </h1>
            </div>
          </div>
          <div className="w-full h-[380px] bg-red-500 lg:col-span-8 col-span-12 rounded-lg relative">
            <img
              src={image6}
              alt=""
              className="bg-cover object-cover object-bottom  h-full w-full rounded-lg "
            />
            <div className="absolute bottom-0 rounded-b-lg p-5 hover:p-[172px] hover:rounded-lg text-white bg-black/50 duration-500  w-full group">
              <h1 className="text-3xl group-hover:translate-x-[150px]">
                Donation
              </h1>
            </div>
          </div>
          <div className="w-full h-[380px] bg-red-500 lg:col-span-4 col-span-12 rounded-lg relative">
            <img
              src={image7}
              alt=""
              className="bg-cover object-cover object-center  h-full w-full rounded-lg "
            />
            <div className="absolute bottom-0 rounded-b-lg p-5 hover:p-[172px] hover:rounded-lg text-white bg-black/50 duration-500  w-full group">
              <h1 className="text-3xl group-hover:-translate-x-[50px]">
                Donation
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gellary;
