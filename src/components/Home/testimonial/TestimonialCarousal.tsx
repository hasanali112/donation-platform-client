import { Card, CardContent } from "../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

const TestimonialCarousal = () => {
  return (
    <Carousel className="w-full max-w-sm lg:max-w-[1100px] mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className=" h-[400px] border-0">
                <CardContent className="flex  items-center justify-center p-6 ">
                  <span className="lg:text-2xl md:text-2xl text-xl  text-center lg:mt-20 mt-6 lg:w-[80%] w-[90%] mx-auto">
                    {index == 0 && (
                      <div>
                        <div className="translate-x-[50%] mb-10">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-8 h-8 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                              />
                            </svg>
                          </span>
                        </div>
                        <h1 className="font-semibold">
                          Donately has been a great site that continues to
                          become even more user friendly. I would recommend
                          Donately to anyone who runs a non-profit and is in
                          need of a way for people to donate online.
                        </h1>
                        <p className="mt-8 text-lg font-semibold tracking-tighter">
                          JOHN STOCKDELL
                        </p>
                        <p className="text-lg  tracking-tighter">
                          Deputy Director, Fields & Futures Foundation
                        </p>
                      </div>
                    )}
                    {index == 1 && (
                      <div>
                        <div className="translate-x-[50%] mb-10">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-8 h-8 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                              />
                            </svg>
                          </span>
                        </div>
                        <h1 className="font-semibold">
                          For someone that is not very "techy" like me, Donately
                          made my job easy. It is extremely user and donor
                          friendly.
                        </h1>
                        <p className="mt-8 text-lg font-semibold tracking-tighter">
                          JOHN STOCKDELL
                        </p>
                        <p className="text-lg tracking-tighter">
                          Deputy Director, Fields & Futures Foundation
                        </p>
                      </div>
                    )}
                    {index == 2 && (
                      <div>
                        <div className="translate-x-[50%] mb-10">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-8 h-8 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                              />
                            </svg>
                          </span>
                        </div>
                        <h1 className="font-semibold">
                          I love the fact we can create our donation form and in
                          minutes embed it into our website. No other product
                          offers this level of seamless integration.
                        </h1>
                        <p className="mt-8 text-lg font-semibold tracking-tighter">
                          JENNIFER BARCELLOS{" "}
                        </p>
                        <p className="text-lg tracking-tighter">
                          President, Jardin de Amor
                        </p>
                      </div>
                    )}
                    {index == 3 && (
                      <div>
                        <div className="translate-x-[50%] mb-10">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-8 h-8 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                              />
                            </svg>
                          </span>
                        </div>
                        <h1 className="font-semibold">
                          Donately has been a great site that continues to
                          become even more user friendly. I would recommend
                          Donately to anyone who runs a non-profit and is in
                          need of a way for people to donate online.
                        </h1>
                        <p className="mt-8 text-lg font-semibold tracking-tighter">
                          HANNAH HUGHES
                        </p>
                        <p className="text-lg tracking-tighter">
                          Director of Communications, The David's Harp
                          Foundation, Inc.
                        </p>
                      </div>
                    )}
                    {index == 4 && (
                      <div>
                        <div className="translate-x-[50%] mb-10">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-8 h-8 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                              />
                            </svg>
                          </span>
                        </div>
                        <h1 className="font-semibold">
                          The application has many features to suit our needs
                          and their support response time has been less than 24
                          hours; often within a couple of hours. Combination of
                          setup ease, overall feel of the application, and
                          helpful support make this a no brainer.
                        </h1>
                        <p className="mt-8 text-lg font-semibold tracking-tighter">
                          TIM LYONS
                        </p>
                        <p className="text-lg tracking-tighter">
                          The Lyons Family
                        </p>
                      </div>
                    )}
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
  );
};

export default TestimonialCarousal;
