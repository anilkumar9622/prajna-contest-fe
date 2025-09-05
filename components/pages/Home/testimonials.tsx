"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      img: "/testimonials/1.png",
      text: "EduCandle helped me start from scratch. Now I analyze charts with confidence!",
    },
    {
      id: 2,
      name: "Mike Ross",
      img: "/testimonials/2.png",
      text: "Started as a beginner, EduCandle made complex topics easy to understand!",
    },
    {
      id: 3,
      name: "Alex Tan",
      img: "/testimonials/3.png",
      text: "The best learning experience I’ve had. Practical and simple!",
    },
    {
      id: 4,
      name: "David Li",
      img: "/testimonials/4.png",
      text: "Finally, a platform that explains trading in a clear way.",
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center py-16">
      {/* Fixed Mockup in Middle */}
      <div className="absolute top-1/2 -translate-y-1/2 z-20">
        <div className="relative ">
          <img
            src="/testimonials/5.png" // phone mockup
            alt="Phone Mockup"
            className="w-full h-full object-contain bg-white"
          />
          {/* Screen Content */}
          <div className="absolute top-[120px] left-[40px]  flex flex-col items-center text-center">
          

            {/* Text Content with bg */}
            <div className="bg-[#B5D2F0] rounded-xl p-4 shadow-md">
              <p className="text-lg font-medium text-gray-700">
                {testimonials[activeIndex % testimonials.length]?.text}
              </p>
              {/* <p className="mt-4 font-semibold text-gray-900">
                {testimonials[activeIndex % testimonials.length]?.name}
              </p> */}
            </div>


              {/* User Image stays outside */}
            <img
              src={testimonials[activeIndex % testimonials.length]?.img}
              alt="User"
              className="w-2xs  object-cover mb-4  z-10"
            />
          </div>
        </div>
      </div>

      {/* Swiper Carousel - slides moving behind mockup */}
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full max-w-6xl"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={t.id}>
            <div
              className={`transition-all duration-500 rounded-2xl overflow-hidden shadow-lg ${
                activeIndex === index ? "scale-110" : "scale-90 opacity-50"
              }`}
            >
              <div className=" flex items-center justify-center bg-gray-100">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-auto object-fit"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
