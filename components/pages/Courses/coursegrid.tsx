// app/courses/page.jsx
"use client";

import CourseCard from "./coursecard";






export default function CoursesGrid() {
  const courses = [
    {
      price: "₹ 25,000",
      title: "Currency Pairs & Pips",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/courses/1.png",
      bg: "bg-green-200",
    },
    {
      price: "₹ 19,000",
      title: "Technical Analysis Mastery",
      desc: "Master chart patterns, indicators, and price action strategies.",
      img: "/courses/2.png",
      bg: "bg-blue-200",
    },
    {
      price: "₹ 21,000",
      title: "Forex Strategy Blueprint",
      desc: "Build and test complete trading systems with defined rules.",
      img: "/courses/3.png",
      bg: "bg-orange-300",
    },
    {
      price: "₹ 25,000",
      title: "Currency Pairs & Pips",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/courses/1.png",
      bg: "bg-green-200",
    },
    {
      price: "₹ 19,000",
      title: "Technical Analysis Mastery",
      desc: "Master chart patterns, indicators, and price action strategies.",
      img: "/courses/2.png",
      bg: "bg-blue-200",
    },
    {
      price: "₹ 21,000",
      title: "Forex Strategy Blueprint",
      desc: "Build and test complete trading systems with defined rules.",
      img: "/courses/3.png",
      bg: "bg-orange-300",
    },
    {
      price: "₹ 25,000",
      title: "Currency Pairs & Pips",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/courses/1.png",
      bg: "bg-green-200",
    },
    {
      price: "₹ 19,000",
      title: "Technical Analysis Mastery",
      desc: "Master chart patterns, indicators, and price action strategies.",
      img: "/courses/2.png",
      bg: "bg-blue-200",
    },
    {
      price: "₹ 21,000",
      title: "Forex Strategy Blueprint",
      desc: "Build and test complete trading systems with defined rules.",
      img: "/courses/3.png",
      bg: "bg-orange-300",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto ">
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-13">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              price={course.price}
              title={course.title}
              desc={course.desc}
              img={course.img}
              bg={course.bg}
            />
          ))}
        </div>



        <div className="flex justify-center py-24 gap-2.5">
          <button className="flex items-center bg-red-500 text-white justify-between px-4 py-2 border-1 rounded-lg ">
            Back
          </button>

          <button className="flex items-center bg-red-500 text-white justify-between px-4 py-2 border-1 rounded-lg  ">
            Next
          </button>
        </div>



      </div>
    </section>
  );
}
