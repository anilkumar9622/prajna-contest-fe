"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Professional Life Coach Certification & Guide (Accredited)",
      description:
        "Become a certified life coach & grow your life coaching business! Done-for-you forms, tools, processes & best practices",
      hours: 37,
      price: 21000,
      tags: ["Bestseller", "Premium"],
      image: "/cart/1.png",
    },
    {
      id: 2,
      title: "Professional Life Coach Certification & Guide (Accredited)",
      description:
        "Become a certified life coach & grow your life coaching business! Done-for-you forms, tools, processes & best practices",
      hours: 37,
      price: 22000,
      tags: ["Bestseller", "Premium"],
      image: "/cart/2.png",
    },
  ]);

  const handleRemove = (id:any) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="py-12  container mx-auto">
      <h1 className="text-3xl font-michroma mb-16">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">
        {/* Cart Items */}
        <div className="col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap gap-4 p-5 border rounded-2xl shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-wull  rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-2xl ">{item.title}</h2>
                <p className="text-gray-500 text-lg">{item.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-lg">🕒 {item.hours} Total Hours</span>
                  <span className="text-white text-sm bg-[#E31E24] px-2.5 py-1.5 rounded">
                    {item.tags[0]}
                  </span>
                  <span className=" text-sm bg-[#62C76F] px-2.5 py-1.5 rounded">
                    {item.tags[1]}
                  </span>
                </div>
                <p className="text-lg font-michroma mt-2">
                  ₹ {item.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-black hover:text-red-500"
              >
                <Trash2 size={22} />
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="col-span-1 p-6 border rounded-2xl shadow-sm ">
          <h2 className="text-xl font-bold mb-2 font-michroma">Total</h2>
          <p className="text-lg font-semibold mb-4 font-michroma">
            ₹ {total.toLocaleString()}
          </p>
          <button className="w-full bg-[#92DD84] text-black py-3 text-lg rounded-xl font-semibold  shadow hover:bg-green-500 transition">
            Proceed to Checkout
          </button>
          <button className="w-full bg-gray-200 mt-3 py-3 rounded-xl text-lg font-semibold shadow hover:bg-gray-300 transition">
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
}
