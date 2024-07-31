import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { HomeIcon } from '@heroicons/react/24/outline';




function Header() {
  return (
    
   <header className="bg-blue-500 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src="logo.png" alt="NGO Logo" className="h-6" />
        <nav className="relative">
          <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8 justify-center">
          <li className="group relative">
              <a href="#home" className="hover:text-blue-300 flex items-center">
                <HomeIcon className="h-5 w-5 mr-1" />
              </a>
            </li>
            <li className="group relative">
              <a href="#about" className="hover:text-blue-300">About Us</a>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-blue-600 shadow-lg">
                <li><a href="#mission" className="block w-40 px-4 py-2 hover:bg-blue-100">Our Mission</a></li>
                <li><a href="#team" className="block w-40 px-4 py-2 hover:bg-blue-100">Our Team</a></li>
              </ul>
            </li>
            <li className="group relative">
              <a href="#projects" className="hover:text-blue-300">Impact</a>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-blue-600 shadow-lg">
                <li><a href="#current" className="block w-40 px-4 py-2 hover:bg-blue-100">Socal Impact</a></li>
                <li><a href="#past" className="block w-40 px-4 py-2 hover:bg-blue-100">Global Impact</a></li>
              </ul>
            </li>
            <li className="group relative">
              <a href="#projects" className="hover:text-blue-300">Get Inolved</a>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-blue-600 shadow-lg">
                <li><a href="#current" className="block w-40 px-4 py-2 hover:bg-blue-100">People</a></li>
                <li><a href="#past" className="block w-40 px-4 py-2 hover:bg-blue-100">Government</a></li>
              </ul>
            </li>
            <li className="group relative">
              <a href="#projects" className="hover:text-blue-300">Projects</a>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-blue-600 shadow-lg">
                <li><a href="#current" className="block w-40 px-4 py-2 hover:bg-blue-100">Current Projects</a></li>
                <li><a href="#past" className="block w-40 px-4 py-2 hover:bg-blue-100">Past Projects</a></li>
              </ul>
            </li>
            
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
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
 
   
  )
}

export default Header
