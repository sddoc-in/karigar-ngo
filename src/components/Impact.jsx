import React from 'react';

function Impact() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Our Impact</h1>

      {/* Community Outreach Section */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Community Outreach</h2>
        <p className="text-gray-700 mb-4">
          Our outreach programs have transformed countless lives by providing essential resources and support to underserved communities. From food drives to educational initiatives, we strive to make a lasting impact.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Food and shelter for over 5,000 families</li>
          <li>Educational programs for 2,000 children</li>
          <li>Healthcare services for 1,500 individuals</li>
        </ul>
        <img src="https://mrida.co/cdn/shop/articles/Karigar_ki_kahaniya_copy_02.jpg?v=1722700296" alt="Community Outreach" className="w-full h-90 object-cover rounded-lg mb-4" />
        <a href="/community-outreach" className="inline-block text-blue-600 font-medium hover:text-blue-800 transition duration-300 underline">Learn More</a>
      </section>

      {/* Success Stories Section */}
      <section className="mb-8 bg-green-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Success Stories</h2>
        <p className="text-gray-700 mb-4">
          Discover the powerful stories of individuals who have experienced transformative changes through our programs. Their journeys highlight the positive impact of our initiatives.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src="https://www.agwo.org/wp-content/uploads/2022/04/one-of-the-best-NGOs-in-India-580x640.jpeg" alt="Maria's Journey" className="w-full h-50 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Maria's Journey</h3>
            <p className="text-gray-600">
              Maria, a single mother of three, found hope and support through our educational programs. She is now pursuing higher education and has secured a stable job.
            </p>
          </article>
          <article className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src="https://elysiumfoundation.org.in/wp-content/uploads/2021/08/Rural-Community-Development.jpg.webp" alt="John's Health Transformation" className="w-full h-50 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">John's Health Transformation</h3>
            <p className="text-gray-600">
              John received crucial healthcare services through our outreach program, which helped him recover from a chronic illness and improve his quality of life.
            </p>
          </article>
        </div>
        <a href="/success-stories" className="inline-block text-green-600 font-medium hover:text-green-800 transition duration-300 underline">Read More Success Stories</a>
      </section>

      {/* Global Impact Section */}
      <section className="mb-8 bg-yellow-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-yellow-700 mb-4">Global Impact</h2>
        <p className="text-gray-700 mb-4">
          Our initiatives extend across the globe, collaborating with international partners to address pressing global challenges such as poverty, disaster relief, and sustainable development.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Partnered in disaster relief efforts in Asia and Africa</li>
          <li>Supported sustainable development projects in Latin America</li>
          <li>Provided emergency aid in conflict zones</li>
        </ul>
        <img src="https://ngofeed.com/wp-content/uploads/2024/04/NGO-in-Consumer-Protection.jpg" alt="Global Impact" className="w-full h-80 object-cover rounded-lg mb-4" />
        <a href="/global-impact" className="inline-block text-yellow-600 font-medium hover:text-yellow-800 transition duration-300 underline">Explore Our Global Impact</a>
      </section>

      {/* Get Involved Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get Involved</h2>
        <p className="text-gray-700 mb-4">
          Want to make a difference? Join us in our mission and contribute to our impactful work. There are various ways you can get involved and support our cause.
        </p>
        <a href="/get-involved" className="inline-block text-gray-600 font-medium hover:text-gray-800 transition duration-300 underline">Learn How to Get Involved</a>
      </section>

      {/* Recent Achievements Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Recent Achievements</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full">
              <span className="text-xl font-bold">1K+</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Meals Distributed</h3>
              <p className="text-gray-600">We have distributed over 1,000 meals in the past month alone, providing much-needed sustenance to families in need.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full">
              <span className="text-xl font-bold">500+</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Volunteers Engaged</h3>
              <p className="text-gray-600">Our dedicated team of volunteers has grown to over 500 members, working tirelessly to support our various initiatives.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact;
