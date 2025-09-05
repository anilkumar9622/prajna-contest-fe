import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
// import logo from "@/../public/logo 1.png";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div className="col-span-1 space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="https://kooqxit.com/wp-content/uploads/2025/08/logo-removebg-preview.png" alt="Educandle Logo" width={261} height={80} className="" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 text-xl text-black">
            <FaFacebook className="hover:text-green-600 cursor-pointer" />
            <FaInstagram className="hover:text-green-600 cursor-pointer" />
            <FaLinkedin className="hover:text-green-600 cursor-pointer" />
            <FaXTwitter className="hover:text-green-600 cursor-pointer" />
            <FaYoutube className="hover:text-green-600 cursor-pointer" />
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-xs">
            Get access to proven trading strategies, live market sessions, and
            mentorship that actually works — all inside EDUCANDLE.
          </p>
        </div>

        {/* Links Section */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-normal text-lg mb-3">More Than A Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Superchat</li>
            </ul>
            <h4 className="font-normal text-lg mt-6 mb-3">Calender</h4>
            <ul className="space-y-2 text-sm">
              <li>Economics</li>
              <li>Earnings</li>
              <li>Dividends</li>
            </ul>
          </div>

          <div>
            <h4 className="font-normal text-lg mb-3">Idea</h4>
            <ul className="space-y-2 text-sm">
              <li>Trading</li>
              <li>Education</li>
              <li>Editor Picks</li>
            </ul>
          </div>

          <div>
            <h4 className="font-normal text-lg mb-3">Heatmaps</h4>
            <ul className="space-y-2 text-sm">
              <li>Stocks</li>
              <li>ETF’s</li>
              <li>Crypto</li>
            </ul>
          </div>

          <div>
            <h4 className="font-normal text-lg mb-3">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>Social Network</li>
              <li>Wall of love</li>
              <li>Refer a friend</li>
              <li>Moderators</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © 2025 EDUCANDLE. All rights reserved.
      </div>
    </footer>
  );
}
