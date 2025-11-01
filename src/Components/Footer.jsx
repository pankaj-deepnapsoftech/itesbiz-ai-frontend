import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const digitalMarketingLinks = [
    { title: "Meta  Ads", link: "/digitalMarketing?title=Meta%20Ads" },
    { title: "Google Ads", link: "/digitalMarketing?title=Google%20Ads" },
    {
      title: "Email Marketing",
      link: "/digitalMarketing?title=Email%20Marketing",
    },
    {
      title: "Content Marketing",
      link: "/digitalMarketing?title=Content%20Marketing",
    },
    { title: "SEO & SEM", link: "/digitalMarketing?title=SEO%20SEM" },
    { title: "PPC", link: "/digitalMarketing?title=PPC" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-sky-800 to-sky-900 text-white py-10 px-6 max-w-[2480px] mx-auto">
      <div className="max-w-[2480px] mx-auto flex flex-col md:flex-row justify-between">
        {/* Left - Social Links */}
        <div className="flex flex-col md:items-start items-center space-y-4 md:space-y-0">
          <h2 className="text-lg font-bold pb-3">Follow Us</h2>
          <div className="flex space-x-4">
          <a
  href="https://www.facebook.com/deepnapsoftech"
  className="p-2 bg-white rounded-full text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition"
>
  <FaFacebookF size={20} />
</a>

<a
  href="https://x.com/deepnapsoftech"
  className="p-2 bg-white rounded-full text-black hover:bg-black hover:text-white transition"
>
  <FaTwitter size={20} />
</a>

<a
  href="https://www.youtube.com/@deepnap_softech"
  className="p-2 bg-white rounded-full text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition"
>
  <FaYoutube size={20} />
</a>

<a
  href="https://www.instagram.com/deepnapsoftech/"
  className="p-2 bg-white rounded-full text-[#E1306C] hover:bg-gradient-to-bl from-[#BD08B2] to-[#FCC425] hover:text-white transition"
>
  <FaInstagram size={20} />
</a>

          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-10 text-center md:text-left mt-8 md:mt-0">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link to="/about-us" className="hover:text-gray-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="portfolio" className="hover:text-gray-300 transition">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-gray-300 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-gray-300 transition"
                >
                  Blogs
                </Link>
              </li>
                <li>
                <Link
                  to="/faq"
                  className="hover:text-gray-300 transition"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div>
            <h2 className="text-lg font-bold">DIGITAL MARKETING</h2>
            <ul className="mt-2 space-y-1 text-sm">
              {digitalMarketingLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className="hover:text-gray-300 transition"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-lg font-bold">LEGAL</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link to="/career" className="hover:text-gray-300 transition">
                  Career
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300 transition" to="/policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gray-300 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t mt-10 border-white pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} ITSYBIZZ AI Private Limited. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
