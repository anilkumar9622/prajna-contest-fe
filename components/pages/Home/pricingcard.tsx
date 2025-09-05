"use client";

import Image from "next/image";
import { ArrowUpRight, CircleCheck } from "lucide-react";

export default function PricingCard() {
  return (
    <main>
      {/* --- Our Plans Section --- */}
      <section className="py-16">
        <div className="container mx-auto  ">
          {/* Heading */}
          <h2 className="text-5xl font-extrabold mb-2">
            Our{" "}
            <span className="text-green-600 italic font-normal font-mrs-saint text-[88px]">
              Plans
            </span>
          </h2>
          <p className=" mb-22">
            We Focus On Real-World Examples, Live Chart Analysis, And
            Strategy-Building Sessions To Help Learners Apply What They Study.
          </p>

          {/* Cards */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left Card */}
            <div className="relative rounded-2xl py-11 px-9 shadow-md hover:shadow-xl transition-all duration-300 bg-green-200 lg:w-[360px]">
              <div className="absolute top-0 right-0  overflow-hidden rounded-tr-2xl">
                <Image
                  src="/plans/1.png"
                  alt="Starter Plan"
                  width={121}
                  height={166}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl mb-3.5">Starter Plan</h3>
              <p className="text-gray-700 mb-3.5">
                For Beginners Ready To Take Their First Step
              </p>
              <p className="text-xl font-semibold mb-9">
                ₹999 / Month{" "}
                <span className="text-gray-500 text-sm line-through">
                  ₹1,999
                </span>
              </p>
              <button className="flex items-center justify-between bg-white px-4 py-1 text-xl mb-8 w-full rounded-full shadow hover:scale-105 transition">
                <span className="text-gray-800 ">Get Started</span>
                <img src="/plans/red-arrow.png" />
              </button>
              <p className="text-gray-700 mb-3">what’s Include :</p>
              <ul className="mt-6 space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Access To Beginner Forex Courses
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Weekly Live Sessions (Basic Level)
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Practice Quizzes & Assignments
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Community Support
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Limited Chat Support
                </li>
              </ul>
              <div className="absolute bottom-2 right-2 rounded-full shadow">
                <img src="/featured-courses/2.png" />
              </div>
            </div>

            {/* Middle Card (Bigger) */}
            <div className="relative rounded-2xl pt-11 pb-28 px-9 shadow-md hover:shadow-xl transition-all duration-300 bg-blue-200 lg:w-[431px] scale-105">
              <div className="absolute top-0 right-0 overflow-hidden rounded-tr-2xl">
                <Image
                  src="/plans/2.png"
                  alt="Pro Trader Plan"
                  width={146}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-extrabold mb-4">Pro Trader Plan</h3>
              <p className="text-gray-700 mb-4 pr-12">
                For Serious Traders Who Want An Edge
              </p>
              <p className="text-xl font-semibold mb-10">
                ₹3,999 / Month{" "}
                <span className="text-gray-500 text-sm line-through">
                  ₹6,999
                </span>
              </p>
              <button className="flex items-center justify-between bg-white px-4 py-1 text-xl mb-10 w-full rounded-full shadow hover:scale-105 transition">
                <span className="text-gray-800 ">Get Started</span>
                <img src="/plans/red-arrow.png" />
              </button>
              <p className="text-gray-700 mb-3">what’s Include :</p>
              <ul className="mt-6 space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  All Starter Features
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Intermediate + Advanced Courses
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Live Chart Analysis (3x/Week)
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Strategy Building Workshops
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Direct Mentor Support
                </li>
              </ul>
              <div className="absolute bottom-2 right-2 rounded-full shadow">
                <img src="/featured-courses/2.png" />
              </div>
            </div>

            {/* Right Card */}
            <div className="relative rounded-2xl py-11 px-9 shadow-md hover:shadow-xl transition-all duration-300 bg-orange-300 lg:w-[360px]">
              <div className="absolute top-0 right-0  overflow-hidden rounded-tr-2xl">
                <Image
                  src="/plans/3.png"
                  alt="Advance Plan"
                  width={121}
                  height={166}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl  mb-2">Advance Plan</h3>
              <p className="text-gray-700 mb-4">
                For Dedicated Learners Seeking Full Trading Growth
              </p>
              <p className="text-xl font-semibold mb-4">
                ₹9,999 / Month{" "}
                <span className="text-gray-500 text-sm line-through">
                  ₹14,999
                </span>
              </p>
              <button className="flex items-center justify-between bg-white px-4 py-1 text-xl mb-8 w-full rounded-full shadow hover:scale-105 transition">
                <span className="text-gray-800 ">Get Started</span>
                <img src="/plans/red-arrow.png" />
              </button>
              <p className="text-gray-700 mb-3">what’s Include :</p>
              <ul className="mt-6 space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  All Pro Trader Features
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  1-On-1 Mentorship (2 Sessions/Month)
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Trade Review & Feedback
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Access To Premium Webinars
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck size={28} className="fill-black text-white " />{" "}
                  Entry/Exit Strategy Templates
                </li>
              </ul>
              <div className="absolute bottom-2 right-2 rounded-full shadow">
                <img src="/featured-courses/2.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
