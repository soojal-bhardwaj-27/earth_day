import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="h-screen relative flex items-center justify-center text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url("https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Protect Our Planet
        </h1>
        <p className="text-xl sm:text-2xl mb-8 opacity-90">
          Join the global movement to preserve Earth's natural beauty and resources for future generations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#pledge" 
            className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full font-medium transition-colors duration-300 text-white"
          >
            Take the Pledge
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors duration-300 text-white"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="h-10 w-10 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;