import Container from "../../layout/shared/Container";
import TestimonialCarousal from "./TestimonialCarousal";
import TestimonialCompany from "./TestimonialCompany";

const Testimonial = () => {
  return (
    <div className="pt-28 bg-slate-100 pb-28">
      <Container>
        <div>
          <h1 className="text-4xl font-bold text-center mb-14">
            Donately makes happy Doners
          </h1>
          <div className="mb-5">
            <TestimonialCompany />
          </div>
        </div>
        <TestimonialCarousal />
      </Container>
    </div>
  );
};

export default Testimonial;
