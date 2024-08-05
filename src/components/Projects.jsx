import React from 'react';

// Sample data for projects
const ongoingProjects = [
  {
    id: 1,
    title: "Project A",
    description: "Description of Project A, including goals, activities, and current status.",
    imageUrl: "/path/to/imageA.jpg"
  },
  {
    id: 2,
    title: "Project B",
    description: "Description of Project B, including goals, activities, and current status.",
    imageUrl: "/path/to/imageB.jpg"
  },
  {
    id: 3,
    title: "Project C",
    description: "Description of Project C, including goals, activities, and current status.",
    imageUrl: "/path/to/imageC.jpg"
  }
];

const pastProjects = [
  {
    id: 1,
    title: "Past Project X",
    description: "Summary of Past Project X, including achievements and outcomes.",
    imageUrl: "/path/to/imageX.jpg"
  },
  {
    id: 2,
    title: "Past Project Y",
    description: "Summary of Past Project Y, including achievements and outcomes.",
    imageUrl: "/path/to/imageY.jpg"
  },
  {
    id: 3,
    title: "Past Project Z",
    description: "Summary of Past Project Z, including achievements and outcomes.",
    imageUrl: "/path/to/imageZ.jpg"
  }
];

function Projects() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Our Projects</h1>

      {/* Ongoing Projects Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Ongoing Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ongoingProjects.map(project => (
            <div key={project.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={`/ongoing-projects/${project.id}`} className="text-blue-500 hover:underline">Read More</a>
            </div>
          ))}
        </div>
        <a href="/ongoing-projects" className="text-blue-500 hover:underline mt-4 block text-center">View All Ongoing Projects</a>
      </section>

      {/* Past Projects Section */}
      <section>
        <h2 className="text-3xl font-semibold text-green-700 mb-6">Past Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pastProjects.map(project => (
            <div key={project.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={`/past-projects/${project.id}`} className="text-blue-500 hover:underline">Read More</a>
            </div>
          ))}
        </div>
        <a href="/past-projects" className="text-blue-500 hover:underline mt-4 block text-center">View All Past Projects</a>
      </section>
      
      {/* Featured Projects Section */}
      <section className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Highlight Project Alpha</h3>
            <p className="text-gray-600 mb-4">
              A special project that made a significant impact. Learn about its innovative approach and results.
            </p>
            <a href="/featured-project-alpha" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Highlight Project Beta</h3>
            <p className="text-gray-600 mb-4">
              This project showcases our commitment to excellence and community engagement. Explore its key outcomes.
            </p>
            <a href="/featured-project-beta" className="text-blue-500 hover:underline">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
