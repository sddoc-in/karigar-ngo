import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 4,
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 5,
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 6,
    title: "Project 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://via.placeholder.com/400x300"
  }
];

function Home() {
  return (
    <main className="relative bg-gray-100 pt-1">
      {/* Hero Section */}
      <section className="container mx-auto py-1 px-4 relative z-10">
        <div className="mb-12">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={5000}>
            <div>
              <img
                src="https://via.placeholder.com/800x400?text=Project+1"
                alt="Project 1"
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/800x400?text=Project+2"
                alt="Project 2"
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/800x400?text=Project+3"
                alt="Project 3"
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/800x400?text=Project+4"
                alt="Project 4"
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </Carousel>
          <div className="text-center mb-3 bg-slate-50 mt-5 py-10">
            <h1 className="text-5xl font-extrabold mb-4 text-black">Welcome to Our NGO</h1>
            <p className="text-lg text-gray-700 mx-auto max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 pb-14">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-100 py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Join Us in Making a Difference</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <a
            href="#donate"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 text-lg font-semibold"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Awards Section */}
      <section className="relative w-full h-screen overflow-hidden px-0.5">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://via.placeholder.com/1500x1000?text=Awards+Background')" }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50 p-6 md:p-12">
          <h1 className="text-4xl font-bold mb-4">Awards and Recognitions</h1>
          <p className="text-lg text-center max-w-3xl mb-8">
            Over the span of almost 2 decades, Goonj has won both National and International attention and recognition for its extensive work on non-issues and sustainable innovation.
          </p>
          <button className="bg-transparent text-black px-20 py-4 rounded-full shadow-md border-4 border-slate-100 hover:bg-orange-300">
            Read More
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
