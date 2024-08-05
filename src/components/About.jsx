import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">About Us</h1>

      {/* Mission Section */}
      <section id="mission" className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide support and resources to communities in need, fostering sustainable development and empowerment. We strive to create opportunities for growth and well-being through various initiatives and programs.
        </p>
      </section>

      {/* History Section */}
      <section id="history" className="mb-8">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Our History</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2000, our NGO has been at the forefront of addressing critical issues in our community. Over the years, we have expanded our programs and outreach to make a positive impact globally. Our journey has been marked by milestones that reflect our dedication and commitment to social change.
        </p>
      </section>

      {/* Team Section */}
      <section id="team" className="mb-8">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">Our Team</h2>
        <p className="text-gray-700 leading-relaxed">
          Our dedicated team of professionals and volunteers work tirelessly to advance our mission. With diverse backgrounds and expertise, we are united in our commitment to making a difference. Each member brings unique skills and experiences to our organization, contributing to our collective success.
        </p>
        <div className="mt-4">
          <a href="/team" className="text-blue-500 hover:underline">Meet Our Team</a>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="mb-8">
        <h2 className="text-3xl font-semibold text-red-700 mb-4">Our Values</h2>
        <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
          <li>Integrity: We operate with transparency and honesty in all our endeavors.</li>
          <li>Compassion: We are driven by empathy and a genuine desire to help others.</li>
          <li>Collaboration: We believe in working together to achieve common goals.</li>
          <li>Sustainability: We are committed to creating lasting and positive change.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get Involved</h2>
        <p className="text-gray-600 mb-4">
          Want to make a difference? There are many ways to support our mission and contribute to our impactful work. Join us in our efforts to create a better world and be a part of our community.
        </p>
        <a href="/get-involved" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Learn How to Get Involved</a>
      </section>
    </div>
  );
}

export default About;
