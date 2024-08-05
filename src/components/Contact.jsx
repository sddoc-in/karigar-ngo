import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 max-w-5xl border border-gray-200">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">Contact Us</h1>
      <p className="text-center mb-8 text-gray-600 leading-relaxed">
        We’d love to hear from you! If you have any questions, feedback, or just want to get in touch, please use the form below or reach out via the contact details provided. We're here to help!
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Get in Touch</h2>
          <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Contact Information</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-lg font-medium text-gray-800">Address</h3>
              <p className="text-gray-600">123 NGO Street, Suite 456, City, Country</p>
            </li>
            <li>
              <h3 className="text-lg font-medium text-gray-800">Phone</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </li>
            <li>
              <h3 className="text-lg font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">contact@ngo.org</p>
            </li>
            <li>
              <h3 className="text-lg font-medium text-gray-800">Social Media</h3>
              <p className="flex space-x-4">
                <a href="#facebook" className="text-blue-600 hover:underline">Facebook</a> |
                <a href="#twitter" className="text-blue-600 hover:underline">Twitter</a> |
                <a href="#instagram" className="text-blue-600 hover:underline">Instagram</a> |
                <a href="#linkedin" className="text-blue-600 hover:underline">LinkedIn</a>
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6">Find Us</h2>
        <div className="relative h-64">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.081919417824!2d-122.39720708414104!3d37.79219907975506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d0d0c12f1%3A0x8123b1c3b33d4b4d!2s123%20NGO%20Street%2C%20San%20Francisco%2C%20CA%2094140%2C%20USA!5e0!3m2!1sen!2sus!4v1614080420801!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Additional Call-to-Action Section */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Stay Connected</h2>
        <p className="text-gray-600 mb-4">
          For the latest updates and news, follow us on social media or sign up for our newsletter.
        </p>
        <a href="/newsletter-signup" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">Sign Up for Newsletter</a>
      </div>
    </div>
  );
}

export default Contact;
