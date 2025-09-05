"use client";

import { CourseForm } from "./courseform";

export default function CourseDetails() {
  return (
    <div className="container mx-auto py-24  grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Side - Course Info */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl md:text-3xl font-michroma">
          Currency Pairs & Pips{" "}
          <span className="text-red-600 font-montserrat text-2xl font-semibold">
            Forex Trading
          </span>
        </h1>

        {/* Course Image */}
        <div className="relative mt-8">
          <img
            src="/courses/6.png"
            alt="Course Banner"
            className="rounded-xl shadow-md w-full object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-md">
            ▶
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-between">
          <div className="flex gap-4">
            <div className=" p-4 border rounded-xl shadow-sm flex items-center justify-between">
              <span className="font-semibold">Number of Learner</span>
              <span className="font-bold">568</span>
            </div>
            <div className=" p-4 border rounded-xl shadow-sm flex items-center justify-between">
              <span className="font-semibold">Average Course Rating</span>
              <span className="font-bold">4.5 ⭐</span>
            </div>
          </div>
          {/* Price */}
          <p className="text-2xl font-michroma mt-6">₹ 21,000</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-4 leading-relaxed">
          Forex, also known as the foreign exchange or FX market, is the largest
          and most liquid financial market in the world. Every day, trillions of
          dollars are traded as individuals, institutions, and governments buy
          and sell currencies. Unlike stock markets, Forex operates 24 hours a
          day, five days a week, allowing traders to respond to global events
          and market movements in real time. For beginners and experts alike,
          Forex trading offers opportunities to profit from fluctuations in
          currency prices through careful analysis, strategy, and risk
          management.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          The Forex market is where the world’s currencies are exchanged. It’s
          an open, global network that runs around the clock, connecting traders
          who buy and sell currencies to take advantage of price changes.
          Whether you’re looking to hedge risks, speculate, or diversify your
          investments, Forex gives you the tools to participate in the global
          economy and trade major currency pairs like the USD, EUR, GBP, and
          JPY.{" "}
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-16">
          <button className=" bg-[#92DD84] py-3 px-22 rounded-lg font-semibold shadow hover:bg-green-500 transition">
            Add To Cart
          </button>
          <button className=" bg-[#92DD84] py-3 px-22 rounded-lg font-semibold shadow hover:bg-green-500 transition">
            Buy Now
          </button>
        </div>
        

        <h1 className="lg:text-[140px] sm:text-2xl font-michroma mt-30">
          DOMINATE
        </h1>
         <h2 className="lg:text-5xl text-gray-400 font-extrabold sm:text-2xl  mt-3">
          From Start to Victory
        </h2>
      </div>

      {/* Right Side - Form */}
      <div>
        <CourseForm />
      </div>
    </div>
  );
}
