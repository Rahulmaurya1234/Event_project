import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">

        {/* Left Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 flex-1">

          {/* Remind */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Remind</h3>
            <ul className="space-y-2 text-sm">
              <li>Products</li>
              <li>Chat</li>
              <li>Hub</li>
              <li>Download the app</li>
              <li>iOS - Apple App Store</li>
              <li>Android - Google Play Store</li>
            </ul>
          </div>

          {/* Who it’s for */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Who it’s for</h3>
            <ul className="space-y-2 text-sm">
              <li>Teachers</li>
              <li>Administrators</li>
              <li>Higher Education</li>
              <li>Students</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Resources Library</li>
              <li>Help Center</li>
              <li>Remind Blog</li>
              <li>Contact Support</li>
              <li>Contact Sales</li>
              <li>System Status</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partners</li>
              <li>Terms and Policies</li>
              <li>Trust and Safety</li>
              <li>iKeep-safe</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>

      </div>
      {/* Bottom Border */}
      <div  className="text-xs md:text-xs  text-center ">
         protected @2025 Rahul
      </div>
    </footer>
  );
}
