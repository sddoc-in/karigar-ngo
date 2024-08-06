import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://www.hrw.org/sites/default/files/styles/16x9_large/public/multimedia_images_2015/india0814_coverimage.jpg?itok=uWo9ZHca"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://images.pexels.com/photos/860577/pexels-photo-860577.jpeg?cs=srgb&dl=pexels-jodaarba-860577.jpg&fm=jpg"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://st3.depositphotos.com/3279155/16919/i/450/depositphotos_169192510-stock-photo-children-in-semien-mountains-ethiopia.jpg"
  },
  {
    id: 4,
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://thumbs.dreamstime.com/b/manandoana-madagascar-april-group-unknown-malagasy-kids-running-road-next-to-rice-field-small-hills-background-people-192296448.jpg"
  },
  {
    id: 5,
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://thumbs.dreamstime.com/b/woman-bucket-water-her-head-foothills-andringitra-national-park-madagascar-woman-bucket-water-269580239.jpg"
  },
  {
    id: 6,
    title: "Project 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    image: "https://orphansunlimited.org/wp-content/uploads/2013/04/IMG_0049-African-Village-Morning.jpg"
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
      src="https://www.indiaspend.com/h-upload/2022/08/26/781338-women-at-work-30-2-1500.jpg"
      alt="Project 1"
      className="w-full object-cover rounded-lg shadow-lg"
    />
  </div>
  <div>
    <img
      src="https://lagatar24.com/wp-content/uploads/2022/09/The-main-works-under-MGNREGA-in-the-Sundarbans-are-the-construction-of-kutcha-dams-and-ponds-and-the-planting-of-mangroves-Photo-sourced-by-Rahul-Singh.jpg"
      alt="Project 2"
      className="w-full object-cover rounded-lg shadow-lg"
    />
  </div>
  <div>
    <img
      src="https://images.indianexpress.com/2023/07/punjab-mgnrega-workers.jpg"
      alt="Project 3"
      className="w-full object-cover rounded-lg shadow-lg"
    />
  </div>
  <div>
    <img
      src="https://live.staticflickr.com/8307/7996074563_fe7790627a_b.jpg"
      alt="Project 4"
      className="w-full object-cover rounded-lg shadow-lg"
    />
  </div>
</Carousel>

          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4 text-black">Welcome to Our NGO</h1>
            <p className="text-lg text-gray-700 mx-auto max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-12">
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
    style={{ backgroundImage: "url('https://static.toiimg.com/thumb/msid-103995000,width-1280,height-720,resizemode-72/103995000.jpg')" }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
  </div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-6 md:p-12 text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 md:mb-8">
      Awards and Recognitions
    </h1>
    <p className="text-lg md:text-xl max-w-4xl mb-8">
      Over the span of almost 2 decades, Goonj has won both National and International attention and recognition for its extensive work on non-issues and sustainable innovation. Our efforts have been acknowledged through numerous awards and accolades, reflecting our commitment to making a positive impact.
    </p>
    <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300">
      Read More
    </button>
  </div>
</section>

    </main>
  );
}

export default Home;
