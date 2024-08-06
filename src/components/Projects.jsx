import React from 'react';

// Sample data for projects
const ongoingProjects = [
  {
    id: 1,
    title: "Project A",
    description: "A transformative initiative aimed at improving local infrastructure. This project includes community workshops, public space renovations, and collaborative efforts with local stakeholders.",
    imageUrl: "https://static.toiimg.com/thumb/msid-100123560,imgsize-1566557,width-400,height-225,resizemode-72/100123560.jpg"
  },
  {
    id: 2,
    title: "Project B",
    description: "An innovative project focused on environmental sustainability. Activities include tree planting campaigns, waste reduction programs, and educational outreach.",
    imageUrl: "https://c8.alamy.com/comp/CR57JW/construction-site-of-an-irrigation-canal-basti-lehar-walla-village-CR57JW.jpg"
  },
  {
    id: 3,
    title: "Project C",
    description: "A cutting-edge technology project designed to enhance digital literacy. This initiative provides training sessions, access to technology, and tech support for underserved communities.",
    imageUrl: "https://www.didpress.com/wp-content/uploads/2018/11/photo_2018-11-24_14-25-54.jpg"
  }
];

const pastProjects = [
  {
    id: 1,
    title: "Past Project X",
    description: "A successful initiative that provided essential resources to underprivileged communities. This project resulted in significant improvements in quality of life and community engagement.",
    imageUrl: "https://mcmscache.epapr.in/post_images/website_350/post_24419776/full.jpg"
  },
  {
    id: 2,
    title: "Past Project Y",
    description: "An impactful project that focused on healthcare outreach. Achievements include improved health outcomes and increased access to medical services in remote areas.",
    imageUrl: "https://img.etimg.com/thumb/msid-69887027,width-640,height-480,imgsize-237186,resizemode-4/project-funded-solely-by-the-state.jpg"
  },
  {
    id: 3,
    title: "Past Project Z",
    description: "A remarkable project that supported educational development. Key outcomes include the establishment of new learning centers and the distribution of educational materials.",
    imageUrl: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-k80teimmeasldbts3phl9bgdl4-20190807020323.Medi.jpeg"
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
            <div key={project.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105" />
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
            <div key={project.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105" />
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
          <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src="https://ec.europa.eu/regional_policy/images/news/smart_villages.jpg" alt="Highlight Project Alpha" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Highlight Project Alpha</h3>
            <p className="text-gray-600 mb-4">
              A special project that made a significant impact. Learn about its innovative approach and results.
            </p>
            <a href="/featured-project-alpha" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src="https://media.licdn.com/dms/image/C5112AQGSHGMbjwNo8g/article-cover_image-shrink_600_2000/0/1527949654194?e=2147483647&v=beta&t=6ldhTmYcPMmXPjCxLnq6JRbxYL326Bv8UBzroTNPF8g" alt="Highlight Project Beta" className="w-full h-40 object-cover rounded-md mb-4" />
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
