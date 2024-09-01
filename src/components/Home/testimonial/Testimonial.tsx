import Container from "../../layout/shared/Container";
import TestimonialCarousal from "./TestimonialCarousal";

const Testimonial = () => {
  return (
    <div className="pt-28 pb-28">
      <Container>
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">
            Donately makes <span className="text-blue-600">happy Doners</span>
          </h1>
          <div className="mb-10">
            <p className="text-gray-500 text-center md:w-[70%] mx-auto">
              The way a team plays as a whole determines its success. You may
              have the greatest bunch of individual stars in the world, but if
              they don’t play together, the club won’t be worth a dime
            </p>
          </div>
        </div>
        <TestimonialCarousal />
      </Container>
    </div>
  );
};

export default Testimonial;
