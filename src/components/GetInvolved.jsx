import React from 'react';

const GetInvolved = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Get Involved</h1>

      {/* Volunteer Section */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
        <img 
          src="https://thumbs.dreamstime.com/b/volunteer-word-cloud-heart-concept-58067008.jpg" 
          alt="Volunteer" 
          className="w-32 h-32 rounded-full object-cover mr-6 shadow-lg transition-transform transform hover:scale-105" 
        />
        <div>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Volunteer With Us</h2>
          <p className="text-gray-600 mb-4">
            Join our team of dedicated volunteers to make a meaningful impact in the community. We offer various volunteer opportunities, from event coordination to direct outreach programs. Your involvement helps us create positive change and fosters community spirit.
          </p>
          <a 
            href="/volunteer" 
            className="inline-block text-blue-600 font-medium hover:text-blue-800 transition duration-300 underline"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Donate Section */}
      <section className="mb-8 bg-green-50 p-6 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
        <img 
          src="https://ekhumfoundation.com/wp-content/uploads/2022/02/Donate.jpeg" 
          alt="Donate" 
          className="w-32 h-32 rounded-full object-cover mr-6 shadow-lg transition-transform transform hover:scale-105"
        />
        <div>
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Donate</h2>
          <p className="text-gray-600 mb-4">
            Your generous contributions help us continue our vital work. Donate online to support our ongoing projects and initiatives. Every contribution, big or small, makes a difference. Your support directly impacts the lives of those in need.
          </p>
          <a 
            href="/donate" 
            className="inline-block text-green-600 font-medium hover:text-green-800 transition duration-300 underline"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Corporate Partnerships Section */}
      <section className="mb-8 bg-yellow-50 p-6 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
        <img 
          src="https://www.shutterstock.com/image-photo/business-man-handshake-effect-global-260nw-1310240776.jpg" 
          alt="Corporate Partnerships" 
          className="w-32 h-32 rounded-full object-cover mr-6 shadow-lg transition-transform transform hover:scale-105"
        />
        <div>
          <h2 className="text-3xl font-semibold text-yellow-700 mb-4">Corporate Partnerships</h2>
          <p className="text-gray-600 mb-4">
            Partner with us to make a larger impact. We welcome collaborations with businesses and organizations to advance our mission through sponsorships and joint initiatives. Together, we can drive positive change and achieve greater goals.
          </p>
          <a 
            href="/partnerships" 
            className="inline-block text-yellow-600 font-medium hover:text-yellow-800 transition duration-300 underline"
          >
            Explore Partnership Opportunities
          </a>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-8 flex items-center transition-transform transform hover:scale-105 hover:shadow-xl">
        <img 
          src="https://www.shutterstock.com/image-photo/finger-touching-tablet-social-media-260nw-1890742162.jpg" 
          alt="Stay Connected" 
          className="w-32 h-32 rounded-full object-cover mr-6 shadow-lg transition-transform transform hover:scale-105"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-4">
            Follow us on social media and stay updated on our latest news and events. Engage with us and share our mission with your network. Your engagement helps amplify our message and broaden our reach.
          </p>
          <a 
            href="/contact" 
            className="inline-block text-gray-600 font-medium hover:text-gray-800 transition duration-300 underline"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Our Volunteers Say</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-gray-700 italic">
              "Volunteering with this NGO has been a life-changing experience. The impact we make together is truly inspiring. I have grown so much personally and professionally."
            </p>
            <footer className="mt-2 text-gray-600">- Alex Johnson, Volunteer</footer>
          </blockquote>
          <blockquote className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-gray-700 italic">
              "The organization’s commitment to its mission is unparalleled. I’m proud to support and contribute to their incredible work. It’s rewarding to see the positive change we create."
            </p>
            <footer className="mt-2 text-gray-600">- Jessica Lee, Donor</footer>
          </blockquote>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
        <ul className="space-y-6">
          <li className="border-b border-gray-200 pb-4 flex flex-col md:flex-row items-center">
            <img 
              src="https://www.lhasocialwork.org/wp-content/uploads/2018/08/cleanup.png" 
              alt="Community Clean-Up Drive" 
              className="w-full md:w-1/3 h-40 object-cover rounded-md mb-4 md:mb-0 md:mr-6 shadow-lg transition-transform transform hover:scale-105"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Clean-Up Drive</h3>
              <p className="text-gray-600 mb-2">Date: August 15, 2024</p>
              <p className="text-gray-600">
                Join us for a day of cleaning and beautifying our local parks. Volunteers will receive a free t-shirt and refreshments. Together, we can make our community a cleaner, greener place.
              </p>
            </div>
          </li>
          <li className="border-b border-gray-200 pb-4 flex flex-col md:flex-row items-center">
            <img 
              src="https://c8.alamy.com/comp/AXN9KX/indian-boy-in-field-with-umbrella-AXN9KX.jpg" 
              alt="Annual Charity Gala" 
              className="w-full md:w-1/3 h-40 object-cover rounded-md mb-4 md:mb-0 md:mr-6 shadow-lg transition-transform transform hover:scale-105"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Charity Gala</h3>
              <p className="text-gray-600 mb-2">Date: September 25, 2024</p>
              <p className="text-gray-600">
                A night of celebration and fundraising to support our projects. Enjoy a gourmet dinner, live music, and a silent auction. Your attendance supports our mission and helps fund our programs.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row items-center">
            <img 
              src="https://www.shutterstock.com/image-photo/man-organizing-litter-picking-volunteers-260nw-2129267570.jpg" 
              alt="Volunteer Training Workshop" 
              className="w-full md:w-1/3 h-40 object-cover rounded-md mb-4 md:mb-0 md:mr-6 shadow-lg transition-transform transform hover:scale-105"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Volunteer Training Workshop</h3>
              <p className="text-gray-600 mb-2">Date: October 10, 2024</p>
              <p className="text-gray-600">
                A workshop designed to equip volunteers with the skills and knowledge needed to excel in their roles. Gain insights into effective volunteering and network with fellow volunteers.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default GetInvolved;
