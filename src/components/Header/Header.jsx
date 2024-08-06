import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="bg-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-102">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src="Karigar_ngo.PNG" alt="NGO Logo" className="h-8 transition-transform duration-300 ease-in-out transform hover:scale-105" />
        <nav className="relative">
          <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8">
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" className="hover:text-blue-300 flex items-center transition-colors duration-300 ease-in-out">
                <HomeIcon className="h-5 w-5 mr-1 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                Home
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about" className="hover:text-blue-300 flex items-center transition-colors duration-300 ease-in-out">
                About Us
                <i className="fas fa-chevron-down ml-2 transition-transform duration-300 ease-in-out transform group-hover:rotate-180"></i>
              </Link>
              {activeMenu === 'about' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
                  <li><Link to="/mission" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Our Mission</Link></li>
                  <li><Link to="/values" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Our Values</Link></li>
                  <li><Link to="/history" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Our History</Link></li>
                  <li><Link to="/team" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Our Team</Link></li>
                </ul>
              )}
            </li>
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter('impact')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/impact" className="hover:text-blue-300 flex items-center transition-colors duration-300 ease-in-out">
                Impact
                <i className="fas fa-chevron-down ml-2 transition-transform duration-300 ease-in-out transform group-hover:rotate-180"></i>
              </Link>
              {activeMenu === 'impact' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
                  <li><Link to="/social-impact" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Community Outreach</Link></li>
                  <li><Link to="/success-stories" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Success Stories</Link></li>
                  <li><Link to="/global-impact" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Global Impact</Link></li>
                  <li><Link to="/get-involved" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Get Involved</Link></li>
                </ul>
              )}
            </li>
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter('get-involved')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/get-involved" className="hover:text-blue-300 flex items-center transition-colors duration-300 ease-in-out">
                Get Involved
                <i className="fas fa-chevron-down ml-2 transition-transform duration-300 ease-in-out transform group-hover:rotate-180"></i>
              </Link>
              {activeMenu === 'get-involved' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
                  <li><Link to="/volunteer" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Volunteer With Us</Link></li>
                  <li><Link to="/donate" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Donate</Link></li>
                  <li><Link to="/partnerships" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Corporate Partnerships</Link></li>
                  <li><Link to="/stay-connected" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Stay Connected</Link></li>
                </ul>
              )}
            </li>
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/projects" className="hover:text-blue-300 flex items-center transition-colors duration-300 ease-in-out">
                Projects
                <i className="fas fa-chevron-down ml-2 transition-transform duration-300 ease-in-out transform group-hover:rotate-180"></i>
              </Link>
              {activeMenu === 'projects' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
                  <li><Link to="/ongoing-projects" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Ongoing Projects</Link></li>
                  <li><Link to="/past-projects" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Past Projects</Link></li>
                  <li><Link to="/featured-projects" className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"><FaArrowRight className="mr-2" /> Featured Projects</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contact" className="hover:text-blue-300 transition-colors duration-300 ease-in-out">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#search" className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><i className="fas fa-search"></i></a>
          <a href="#facebook" className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><i className="fab fa-facebook"></i></a>
          <a href="#twitter" className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><i className="fab fa-twitter"></i></a>
          <a href="#instagram" className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><i className="fab fa-instagram"></i></a>
          <a href="#donate" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-300 transition-colors duration-300 ease-in-out">Contribute</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
