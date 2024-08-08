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
    <header className="bg text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src="logo.png" alt="NGO Logo" className="h-6" />
        <nav className="relative">
          <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8">
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" className="hover:text-blue-300 flex items-center">
                <HomeIcon className="h-5 w-5 mr-1" />
                Home
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about" className="hover:text-blue-300 flex items-center">
                About Us
                <i className="fas fa-chevron-down ml-2"></i> {/* Dropdown icon */}
              </Link>
              {activeMenu === 'about' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg">
                  <li><Link to="/mission" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Our Mission</Link></li>
                  <li><Link to="/values" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Our Values</Link></li>
                  <li><Link to="/history" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Our History</Link></li>
                  <li><Link to="/team" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Our Team</Link></li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('impact')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/impact" className="hover:text-blue-300 flex items-center">
                Impact
                <i className="fas fa-chevron-down ml-2"></i> {/* Dropdown icon */}
              </Link>
              {activeMenu === 'impact' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg">
                  <li><Link to="/social-impact" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Community Outreach</Link></li>
                  <li><Link to="/success-stories" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Success Stories</Link></li>
                  <li><Link to="/global-impact" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Global Impact</Link></li>
                  <li><Link to="/get-involved" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Get Involved</Link></li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('get-involved')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/get-involved" className="hover:text-blue-300 flex items-center">
                Get Involved
                <i className="fas fa-chevron-down ml-2"></i> {/* Dropdown icon */}
              </Link>
              {activeMenu === 'get-involved' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg">
                  <li><Link to="/volunteer" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Volunteer With Us</Link></li>
                  <li><Link to="/donate" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Donate</Link></li>
                  <li><Link to="/partnerships" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Corporate Partnerships</Link></li>
                  <li><Link to="/stay-connected" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Stay Connected</Link></li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/projects" className="hover:text-blue-300 flex items-center">
                Projects
                <i className="fas fa-chevron-down ml-2"></i> {/* Dropdown icon */}
              </Link>
              {activeMenu === 'projects' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg">
                  <li><Link to="/ongoing-projects" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Ongoing Projects</Link></li>
                  <li><Link to="/past-projects" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Past Projects</Link></li>
                  <li><Link to="/featured-projects" className="block px-4 py-2 flex items-center hover:bg-blue-100"><FaArrowRight className="mr-2" /> Featured Projects</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#search" className="hover:text-blue-300"><i className="fas fa-search"></i></a>
          <a href="#facebook" className="hover:text-blue-300"><i className="fab fa-facebook"></i></a>
          <a href="#twitter" className="hover:text-blue-300"><i className="fab fa-twitter"></i></a>
          <a href="#instagram" className="hover:text-blue-300"><i className="fab fa-instagram"></i></a>
          <a href="#donate" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-300">Contribute</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
