import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Earth Day</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Planet Needs Our Help</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Earth Day is an annual event celebrated around the world on April 22 to demonstrate support for environmental protection. 
              First celebrated in 1970, it now includes events coordinated globally by the Earth Day Network in more than 193 countries.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Earth Day 2025 focuses on urgent action to combat climate change, preserve biodiversity, reduce pollution, and create a sustainable future for all. 
              This year's theme emphasizes individual and collective action to make meaningful change.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-green-50 rounded-lg p-4 flex-1 min-w-[200px]">
                <h4 className="font-bold text-green-800 mb-2">Climate Action</h4>
                <p className="text-sm text-gray-600">Working to reduce carbon emissions and mitigate climate change impacts.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 flex-1 min-w-[200px]">
                <h4 className="font-bold text-blue-800 mb-2">Ocean Conservation</h4>
                <p className="text-sm text-gray-600">Protecting marine ecosystems and reducing plastic pollution.</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 flex-1 min-w-[200px]">
                <h4 className="font-bold text-amber-800 mb-2">Forest Preservation</h4>
                <p className="text-sm text-gray-600">Stopping deforestation and promoting reforestation efforts.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <img 
                src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Rainforest" 
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 mt-8">
              <img 
                src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Ocean sunset" 
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <img 
                src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Forest" 
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 mt-8">
              <img 
                src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Mountain lake" 
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;