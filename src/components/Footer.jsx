import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-200">
            Our NGO is dedicated to improving the lives of those in need through various initiatives and projects. We focus on education, healthcare, and sustainable development to create lasting change in communities around the world.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-200 space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#donate" className="hover:underline">Donate</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Latest News</h3>
          <ul className="text-gray-200 space-y-2">
            <li><a href="#news1" className="hover:underline">Project A launched successfully</a></li>
            <li><a href="#news2" className="hover:underline">Our impact in 2023</a></li>
            <li><a href="#news3" className="hover:underline">Volunteer stories</a></li>
            <li><a href="#news4" className="hover:underline">Upcoming events</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="text-gray-200 space-y-2">
            <li><span className="font-semibold">Address:</span> 123 Charity St, Helping City, Country</li>
            <li><span className="font-semibold">Phone:</span> +123 456 7890</li>
            <li><span className="font-semibold">Email:</span> info@ngo.org</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#facebook" className="hover:text-blue-300"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#twitter" className="hover:text-blue-300"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#instagram" className="hover:text-blue-300"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#linkedin" className="hover:text-blue-300"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-500 mt-8 pt-4 text-center">
        <p>&copy; 2024 NGO Name. All rights reserved.</p>
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#privacy" className="hover:text-blue-300">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-300">Terms of Service</a>
          <a href="#contact" className="hover:text-blue-300">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
