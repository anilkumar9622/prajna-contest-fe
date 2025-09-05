// src/components/CounterSection.js
"use client";

import CountUp from "../Countup/countup";

// import CountUp from "../Countup/countup";

export default function CounterSection() {
  return (
    <section className="mb-55">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {/* Card 1 */}
        <div
          className="p-12  rounded-xl border  bg-white  transition"
          style={{ boxShadow: "1px 1px 20px 0px #E31E24" }}
        >
          <CountUp
            from={0}
            to={20}
            duration={2}
            className="text-6xl font-michroma bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent"
          />
          <span className="text-6xl bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">
            +
          </span>
          <p className="mt-4 text-lg font-medium">Hours of Expert Training</p>
        </div>

        {/* Card 2 */}
        <div
          className="p-12 rounded-xl border  bg-white transition"
          style={{ boxShadow: "1px 1px 20px 0px #E31E24" }}
        >
          <CountUp
            from={0}
            to={50}
            duration={2}
            className="text-6xl font-michroma bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent"
          />
          <span className="text-6xl bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">
            +
          </span>
          <p className="mt-4 text-lg font-medium">
            Lessons Covering Key Forex Topics
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="p-12 rounded-xl   bg-white transition"
          style={{ boxShadow: "1px 1px 20px 0px #E31E24" }}
        >
          <CountUp
            from={0}
            to={100}
            duration={2}
            className="text-6xl font-michroma bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent"
          />
          <span className="text-6xl bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">
            +
          </span>
          <p className="mt-4 text-lg font-medium">
            Practice Exercises & Live Market Examples
          </p>
        </div>
      </div>
    </section>
  );
}
