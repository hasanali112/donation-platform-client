import { Card, CardContent } from "../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import TestimonialCompany from "./TestimonialCompany";

const testimonials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sarah Thompson",
    message:
      "Supporting this platform has been a rewarding experience. Knowing that my contributions are making a real difference gives me immense satisfaction.",
    rating: <TestimonialCompany />,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "James Carter",
    message:
      "This platform makes it easy to connect with causes I care about. The transparency and regular updates keep me informed on how my donations are used.",
    rating: <TestimonialCompany />,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Emily Johnson",
    message:
      "I've always wanted to help, but finding trustworthy platforms was challenging. This donation platform stands out with its commitment to integrity and impact.",
    rating: <TestimonialCompany />,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1479685894911-37e888d38f0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Michael Brown",
    message:
      "The user-friendly interface and variety of causes available make donating simple and fulfilling. It's great to be part of something bigger.",
    rating: <TestimonialCompany />,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Olivia Martinez",
    message:
      "I love how this platform not only enables donations but also fosters a community of like-minded individuals dedicated to positive change.",
    rating: <TestimonialCompany />,
  },
];

const TestimonialCarousel = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {testimonials.map((data, index) => (
            <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3`}>
              <div className="p-1">
                <Card className={data.id ? "border shadow-md" : "border-0"}>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 border-0">
                    <span className="text-2xl font-semibold">
                      <img
                        src={data.image}
                        alt="image"
                        className="w-[100px] h-[100px] rounded-full object-cover mb-4"
                      />
                    </span>
                    <span className="text-2xl font-semibold">{data.title}</span>
                    <span className="text-lg text-gray-600 text-center mt-4">
                      {data.message.slice(0, 100)}
                    </span>
                    <span className="text-lg text-gray-600 text-center mt-4">
                      {data.rating}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
