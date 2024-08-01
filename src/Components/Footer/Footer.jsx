import React from "react";
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer p-10 bg-blueColor rounded-2xl gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 m-auto items-start justify-center">
      <div className="mb-6 lg:mb-0">
        <div className="logoDiv">
          <h1 className="logo text-white text-2xl p-2 rounded-lg pb-6">
            <strong>Get</strong>Job
          </h1>
        </div>
        <p className="text-white opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and employees find the best candidates.
        </p>
      </div>

      <div className="mb-6 lg:mb-0">
        <span className="divTitle text-lg font-semibold pb-6 text-white">Company</span>
        <ul className="space-y-3">
          <li className="text-white opacity-70 hover:opacity-100">About Us</li>
          <li className="text-white opacity-70 hover:opacity-100">Feature</li>
          <li className="text-white opacity-70 hover:opacity-100">News</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </ul>
      </div>

      <div className="mb-6 lg:mb-0">
        <span className="divTitle text-lg font-semibold pb-6 text-white">Resources</span>
        <ul className="space-y-3">
          <li className="text-white opacity-70 hover:opacity-100">Account</li>
          <li className="text-white opacity-70 hover:opacity-100">Support Center</li>
          <li className="text-white opacity-70 hover:opacity-100">Feedback</li>
          <li className="text-white opacity-70 hover:opacity-100">Contact Us</li>
        </ul>
      </div>

      <div className="mb-6 lg:mb-0">
        <span className="divTitle text-lg font-semibold pb-6 text-white">Support</span>
        <ul className="space-y-3">
          <li className="text-white opacity-70 hover:opacity-100">Events</li>
          <li className="text-white opacity-70 hover:opacity-100">Promo</li>
          <li className="text-white opacity-70 hover:opacity-100">Req Demo</li>
          <li className="text-white opacity-70 hover:opacity-100">Careers</li>
        </ul>
      </div>

      <div>
        <span className="divTitle text-lg font-semibold pb-6 text-white">Contact Info</span>
        <div>
          <small className="text-sm text-white">ranganathanj1730@gmail.com</small>
          <div className="icons flex gap-4 py-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-900 p-3 rounded-full hover:bg-gray-700">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-900 p-3 rounded-full hover:bg-gray-700">
              <FaTwitter size={20} />
            </a>
            <a href="https://github.com/Ranganathan-J" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-900 p-3 rounded-full hover:bg-gray-700">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
