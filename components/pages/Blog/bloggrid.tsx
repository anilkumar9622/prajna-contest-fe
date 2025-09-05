// app/courses/page.jsx
"use client";

import BlogCard from "./blogcards";

export default function BlogsGrid() {
  const blogs = [
    {
      category: "Blogs",
      title: "Currency Pairs & Pips",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/blogs/2.png",
      bg: "bg-green-200",
    },
    {
      category: "Blogs",
      title: "Technical Analysis Mastery",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/blogs/3.png",
      bg: "bg-blue-200",
    },
    {
      category: "Blogs",
      title: "Forex Strategy Blueprint",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/blogs/4.png",
      bg: "bg-orange-300",
    },
    {
      category: "Blogs",
      title: "Currency Pairs & Pips",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/blogs/2.png",
      bg: "bg-green-200",
    },
    {
      category: "Blogs",
      title: "Technical Analysis Mastery",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/blogs/3.png",
      bg: "bg-blue-200",
    },
    {
      category: "Blogs",
      title: "Forex Strategy Blueprint",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/blogs/4.png",
      bg: "bg-orange-300",
    },
    {
      category: "Blogs",
      title: "Currency Pairs & Pips",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/blogs/2.png",
      bg: "bg-green-200",
    },
    {
      category: "Blogs",
      title: "Technical Analysis Mastery",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/blogs/3.png",
      bg: "bg-blue-200",
    },
    {
      category: "Blogs",
      title: "Forex Strategy Blueprint",
      desc: "Learn the basics of forex markets, key terms, and how trading works.",
      img: "/blogs/4.png",
      bg: "bg-orange-300",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto ">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-2">
          Latest{" "}
          <span className="text-green-600 italic font-normal font-mrs-saint text-[88px]">
            Blogs
          </span>
        </h2>
        <p className="text-gray-600 mb-10  max-w-2xl ">
          Explore curated news, trading tips, and deep dives into currency
          markets. Empower your trading journey with knowledge that keeps you
          ahead.
        </p>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-3 gap-13">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              category={blog.category}
              title={blog.title}
              desc={blog.desc}
              img={blog.img}
              bg={blog.bg}
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
