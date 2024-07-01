import { Link } from "react-router-dom";
import DonateCard from "../alldonate/DonateCard";
import Container from "../layout/shared/Container";
import { useRef } from "react";
import { useGetDonationPostQuery } from "@/redux/api/baseApi";
import { TProps } from "@/type/type";

const DonationPost = () => {
  const boxContainerRef = useRef<HTMLDivElement>(null);
  const { data } = useGetDonationPostQuery(undefined);

  const handleNext = () => {
    if (boxContainerRef.current) {
      const width = boxContainerRef.current.clientWidth;
      boxContainerRef.current.scrollLeft += width;
    }
  };
  const handlePre = () => {
    if (boxContainerRef.current) {
      const width = boxContainerRef.current.clientWidth;
      boxContainerRef.current.scrollLeft -= width;
    }
  };

  return (
    <div>
      <Container className="pt-28 pb-28">
        <h1 className="text-4xl font-bold text-center">Help Rebuild Lives</h1>
        <p className="text-center text-xl w-4/5 mt-4 mx-auto">
          Together, we can rebuild homes, restore hope, and empower individuals
          and communities to overcome adversity and rebuild their lives with
          dignity and resilience
        </p>
        <div className="flex justify-end items-center mt-10 overflow-hidden">
          <Link to="/donations">
            <button className="p-6 text-blue-500 text-xl font-semibold  rounded-lg inline-flex items-center translate-x-[20px]">
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div>
          <div
            ref={boxContainerRef}
            className="flex gap-4  overflow-hidden duration-500"
          >
            {data?.slice(0, 6)?.map((item: TProps) => (
              <DonateCard
                key={item._id}
                className="lg:hover:scale-100 "
                {...item}
              />
            ))}
          </div>
          <div className="flex justify-between -translate-y-[650%] duration-500">
            <button
              onClick={handlePre}
              className="rounded-full bg-gray-200 w-10 h-10 -translate-x-[10px] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="rounded-full bg-gray-200 w-10 h-10 lg:translate-x-[10px] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DonationPost;
