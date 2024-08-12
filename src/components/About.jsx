import React from 'react';

function About() {
  return (
    <>
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">About Us</h1>


        <section id="mission" className="mb-8">
          <img src='img-1.jpg' alt='blank' className='m-auto' />
          <p className="text-gray-700 leading-relaxed m-10 font-bold px-14">
            Our mission is to provide support and resources to communities in need, fostering sustainable development and empowerment. We strive to create opportunities for growth and well-being through various initiatives and programs.
          </p>
        </section>

      </div>
      <section className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 border border-gray-200">
        <h3 className='text-2xl font-bold'>Learn more about Orgainzation</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, officiis inventore. Perferendis alias quas ea incidunt officiis autem, accusamus recusandae consequuntur commodi! Molestiae nam assumenda suscipit voluptatem
           obcaecati praesentium quas! </p>
             
             
             
      </section>
    </>
  );
}

export default About;
