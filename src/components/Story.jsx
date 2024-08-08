import React from 'react'
const Successtory = [
    {
      id: 1,
      title: "Create a pastive impact",
      description: "Youth supporters of Habitat Young Leaders Build share what motivates them to take meaningful action",
      imageUrl: "img-1.jpg"
    },
    {
      id: 2,
      title: "Life time achivment",
      description: "Youth supporters of Habitat Young Leaders Build share what motivates them to take meaningful action",
      imageUrl: "img-1.jpg"
    },
    {
      id: 3,
      title: "Create a pastive impact",
      description: "Youth supporters of Habitat Young Leaders Build share what motivates them to take meaningful action",
      imageUrl: "img-1.jpg"
    },
    {
        id: 4,
        title: "Create a pastive impact",
        description: "Youth supporters of Habitat Young Leaders Build share what motivates them to take meaningful action",
        imageUrl: "img-1.jpg"
      },
      {
        id: 5,
        title: "Life time achivment",
        description: "Youth supporters of Habitat Young Leaders Build share what motivates them to take meaningful action",
        imageUrl: "img-1.jpg"
      },
      {
        id: 6,
        title: "Create a pastive impact",
        description: "Youth supporters of Habitat Young Leaders Build share what motivates them to take meaningful action",
        imageUrl: "img-1.jpg"
      }
  ];
function Story() {
  return (
    <>
    <section className="bg-blue-100 py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 ">Our Sucess Story</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </section>
      <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Successtory.map(Story => (
            <div key={Story.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={Story.imageUrl} alt={Story.title} className="w-full h-full object-cover rounded-md mb-4" />
              <h3 className=" font-semibold text-gray-800 mb-2 text-2xl hover:underline">{Story.title}</h3>
              <p className="text-gray-600 mb-4 text-lg">{Story.description}</p>
              <a href={`/ongoing-projects/${Story.id}`} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 text-lg font-semibold">Read More</a>
            </div>
          ))}
        </div>
        <button className='mt-11'>
        <a
            href="#donate"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 text-lg font-semibold"
          >
            Load More
          </a>   </button>     
      </section>

    </>
  )
}

export default Story