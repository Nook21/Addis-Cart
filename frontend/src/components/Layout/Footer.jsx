import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("⚠️ Please enter your email first!");
      return;
    }
    alert(`🎉 You subscribed successfully with: ${email}`);
    setEmail(""); // ✅ Reset input
  };

  return (
    <div className="bg-[#fffdfd] text-black">
      {/* Subscribe Section */}
      <div className="md:flex md:justify-between md:items-center sm:px-10 px-4 py-7 bg-gradient-to-r from-[#b240b4] to-[#671462]"
>
        <h1 className="lg:text-3xl text-2xl md:mb-0 mb-4 font-semibold md:w-2/5 leading-snug">
          <span className="text-[#4bdae4]">Subscribe</span> <br />
          <span className="text-white">to get news, events and offers</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center w-full md:w-auto">
          <input
            type="email"
            required
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-gray-800 sm:w-64 w-full sm:mr-3 mb-3 sm:mb-0 py-2 rounded px-3 focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-[#56cbd8] hover:bg-teal-500 duration-300 px-5 py-2 rounded-md text-white"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:px-10 px-5 py-8 sm:text-center">
        {/* Logo + Social */}
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <Link to="/">
            <img
              src="/AddisCart.png"
              alt="Addis Cart Logo"
              style={{
                width: "180px",
                height: "90px",
                margin: "10px 0",
                borderRadius: "10px",
              }}
            />
          </Link>
          <p className="text-sm text-gray-700 mt-2">
            Your go-to marketplace for modern and quality products.
          </p>
          <div className="flex items-center mt-3">
            <AiFillFacebook size={22} className="cursor-pointer" />
            <AiOutlineTwitter size={22} className="ml-3 cursor-pointer" />
            <AiFillInstagram size={22} className="ml-3 cursor-pointer" />
            <AiFillYoutube size={22} className="ml-3 cursor-pointer" />
          </div>
        </ul>

        {/* Company Links */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-2 font-semibold text-lg">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-700 hover:text-teal-500 duration-300 text-sm leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Shop Links */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-2 font-semibold text-lg">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-700 hover:text-teal-500 duration-300 text-sm leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Support Links */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-2 font-semibold text-lg">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-700 hover:text-teal-500 duration-300 text-sm leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 text-center text-sm text-gray-500 py-4">
        <span>© 2025 Addis Cart Ethiopia — All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
