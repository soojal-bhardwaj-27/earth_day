import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Pledge from './components/Pledge';
import Quiz from './components/Quiz';
import Gallery from './components/Gallery';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Quiz />
      <Pledge />
      <Gallery />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;