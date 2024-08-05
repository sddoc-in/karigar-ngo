import React from 'react';

const GetInvolved = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Get Involved</h1>

      {/* Volunteer Section */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Volunteer With Us</h2>
        <p className="text-gray-600 mb-4">
          Join our team of dedicated volunteers to make a meaningful impact in the community. We offer various volunteer opportunities, from event coordination to direct outreach programs.
        </p>
        <a href="/volunteer" className="inline-block text-blue-600 font-medium hover:text-blue-800 transition duration-300 underline">
          Learn More
        </a>
      </section>

      {/* Donate Section */}
      <section className="mb-8 bg-green-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Donate</h2>
        <p className="text-gray-600 mb-4">
          Your generous contributions help us continue our vital work. Donate online to support our ongoing projects and initiatives. Every contribution, big or small, makes a difference.
        </p>
        <a href="/donate" className="inline-block text-green-600 font-medium hover:text-green-800 transition duration-300 underline">
          Donate Now
        </a>
      </section>

      {/* Corporate Partnerships Section */}
      <section className="mb-8 bg-yellow-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-yellow-700 mb-4">Corporate Partnerships</h2>
        <p className="text-gray-600 mb-4">
          Partner with us to make a larger impact. We welcome collaborations with businesses and organizations to advance our mission through sponsorships and joint initiatives.
        </p>
        <a href="/partnerships" className="inline-block text-yellow-600 font-medium hover:text-yellow-800 transition duration-300 underline">
          Explore Partnership Opportunities
        </a>
      </section>

      {/* Stay Connected Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Stay Connected</h2>
        <p className="text-gray-600 mb-4">
          Follow us on social media and stay updated on our latest news and events. Engage with us and share our mission with your network.
        </p>
        <a href="/contact" className="inline-block text-gray-600 font-medium hover:text-gray-800 transition duration-300 underline">
          Contact Us
        </a>
      </section>

      {/* Testimonials Section */}
      <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Our Volunteers Say</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-700 italic">
              "Volunteering with this NGO has been a life-changing experience. The impact we make together is truly inspiring."
            </p>
            <footer className="mt-2 text-gray-600">- Alex Johnson, Volunteer</footer>
          </blockquote>
          <blockquote className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700 italic">
              "The organization’s commitment to its mission is unparalleled. I’m proud to support and contribute to their incredible work."
            </p>
            <footer className="mt-2 text-gray-600">- Jessica Lee, Donor</footer>
          </blockquote>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          <li className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">Community Clean-Up Drive</h3>
            <p className="text-gray-600">Date: August 15, 2024</p>
            <p className="text-gray-600">Join us for a day of cleaning and beautifying our local parks. Volunteers will receive a free t-shirt and refreshments.</p>
          </li>
          <li className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">Annual Charity Gala</h3>
            <p className="text-gray-600">Date: September 25, 2024</p>
            <p className="text-gray-600">A night of celebration and fundraising to support our projects. Enjoy dinner, live music, and a silent auction.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-800">Volunteer Training Workshop</h3>
            <p className="text-gray-600">Date: October 10, 2024</p>
            <p className="text-gray-600">A comprehensive workshop for new volunteers. Learn about our programs and how you can make an impact.</p>
          </li>
        </ul>
      </section>

      {/* Impact Stories Section */}
      <section className="mb-8 p-6 bg-blue-50 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Impact Stories</h2>
        <div className="space-y-4">
          <article>
            <h3 className="text-xl font-semibold text-blue-800">Empowering Education in Rural Areas</h3>
            <p className="text-gray-600">
              Our education program has reached over 500 children in rural communities, providing them with the resources and support they need to succeed academically.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-semibold text-blue-800">Healthcare Outreach Success</h3>
            <p className="text-gray-600">
              Through our healthcare outreach initiatives, we have provided medical services and education to underserved populations, improving health outcomes and quality of life.
            </p>
          </article>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">How can I become a volunteer?</h3>
            <p className="text-gray-600">
              You can apply to become a volunteer by filling out our online application form on the Volunteer page. We will get in touch with you with further details.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">What types of donations are accepted?</h3>
            <p className="text-gray-600">
              We accept monetary donations, as well as in-kind donations such as clothing, food, and educational materials. For more information, visit our Donate page.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">How can businesses partner with your NGO?</h3>
            <p className="text-gray-600">
              Businesses can partner with us through sponsorships, corporate donations, or by organizing joint initiatives. Please reach out to us via the Partnerships page for more information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetInvolved;
