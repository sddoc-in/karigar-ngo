import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Body() {
  return (
    <main className="relative bg-gray-100 pt-1">
    {/* Full-Screen Fixed Background Image */}

    <section className="container mx-auto py-1 px-4 relative z-10">
      

      {/* Carousel Section */}
      <div className="mb-12">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Project+1"
              alt="Project 1"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Project+2"
              alt="Project 2"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Project+3"
              alt="Project 3"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Project+4"
              alt="Project 4"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </Carousel>
        <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Our NGO</h1>
        <p className="text-lg text-red-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          mauris quam. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 1"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4">Project 1</h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 2"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4">Project 2</h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4">Project 3</h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 4"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4">Project 4</h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 5"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4">Project 5</h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 6"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4">Project 6</h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white py-12 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          mauris quam. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <a
          href="#donate"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
        >
          Donate Now
        </a>
      </div>
    </section>
    <div className="relative w-full h-screen overflow-hidden px-0.5">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/path_to_your_image.jpg')" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50 p-4">
        <h1 className="text-3xl font-bold mb-4">Awards and Recognitions</h1>
        <p className="text-lg text-center max-w-2xl mb-8">
          Over the span of almost 2 decades, Goonj has won both National and International attention and recognition for its extensive work on non-issues and sustainable innovation.
        </p>
        <button className="bg-white text-black px-4 py-2 rounded shadow">
          Read More
        </button>
      </div>
    </div>
  </main>
  )
}

export default Body
