// components/CourseCard.js
"use client";

import Image from "next/image";

export default function CourseCard({ price, title, desc, img, bg }:any) {
  return (
    <div className={` rounded-3xl p-6 relative custom-shadow bg-[#F9F9F9]`}>
      {/* Arrow / icon button */}
      <button className="absolute top-4 left-4">
        <img src="/featured-courses/2.png" alt="icon" className="w-16 h-16" />
      </button>

      {/* Image */}
      <div className="flex justify-end ">
        <Image
          src={img}
          alt={title}
          width={192}
          height={80}
          className="rounded-xl object-cover"
        />
      </div>

      {/* price */}
      <span className="inline-block border border-black px-6 py-2 text-sm rounded-2xl mb-8">
        {price}
      </span>

      {/* Title */}
      <h3 className="text-2xl mb-4">{title}</h3>

      {/* Description */}
      <p className="text-sm">{desc}</p>
    </div>
  );
}
