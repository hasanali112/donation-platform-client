import { useEffect, useState } from "react";
import Container from "../layout/shared/Container";

const Scroll = () => {
  const [isVisible, setIsVisibel] = useState(false);
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleVisible = () => {
      if (window.scrollY > 800) {
        setIsVisibel(true);
      } else {
        setIsVisibel(false);
      }
    };

    window.addEventListener("scroll", handleVisible);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Container className="">
        {isVisible && (
          <div
            onClick={handleScroll}
            className="flex justify-end fixed bottom-0 right-28 animate-bounce cursor-pointer"
          >
            <span className="bg-indigo-500  shadow-2xl  rounded-full p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up text-white "
              >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
            </span>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Scroll;
