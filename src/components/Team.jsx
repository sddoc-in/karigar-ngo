import React from 'react'

const team = [
    {
      id: 1,
      title: "Rio",
      image: "img-1.jpeg"
    },
    {
      id: 2,
      title: "Denver",
      image: "img-2.jpeg"
    },
    {
      id: 3,
      title: "Denver",
      image: "img-3.jpeg"
    },
    {
      id: 4,
      title: "Denver",
      image: "img-5.jpg"
    },
    {
      id: 5,
      title: "Denver",
      image: "img-6.jpg"
    },
    {
      id: 6,
      title: "Denver",
      image: "img-1.jpeg"
    }
  ];
function Team() {
  return (
    <>
    <section className="bg-blue-100 py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Meet Our Team</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          
        </div>
      </section>
      <section className="container mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(team => (
            <div key={team.id} className='mt-14 bg-slate-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
              
              <img
                src={team.image}
                alt={team.title}
                className="w-72 h-72 object-cover rounded-full ml-14"
              />
              
              <h2 className="text-2xl font-bold mt-3 mr-10">{team.title}</h2>
            </div>
            
          ))}
        </div>
      </section>

    </>
  )
}

export default Team