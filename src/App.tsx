import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Quiz from './components/Quiz';
import Gallery from './components/Gallery';
import Resources from './components/Resources';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Quiz />
      <Gallery />
      <Resources />
    </div>
  );
}

export default App;