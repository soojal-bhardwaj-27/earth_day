import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Plus } from 'lucide-react';

interface Image {
  id: number;
  url: string;
  title: string;
  description: string;
  category: string;
}

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const images: Image[] = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mountain Sunset',
      description: 'Alpine mountain peaks with dramatic sunset lighting, showcasing the majesty of our planet\'s untouched wilderness.',
      category: 'mountains'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Rainforest Canopy',
      description: 'Lush rainforest canopy with rich biodiversity, home to thousands of species that depend on these ecosystems.',
      category: 'forests'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/3800419/pexels-photo-3800419.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Arctic Landscape',
      description: 'Pristine arctic landscape under northern lights, a region particularly vulnerable to climate change effects.',
      category: 'arctic'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Desert Scenery',
      description: 'Stunning desert landscapes with intricate geological formations shaped over millennia by natural forces.',
      category: 'deserts'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/2146109/pexels-photo-2146109.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ocean Reef',
      description: 'Vibrant coral reef ecosystem teeming with marine life, representing one of Earth\'s most diverse but threatened habitats.',
      category: 'oceans'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Waterfall Paradise',
      description: 'Majestic waterfall cascading through pristine forest, symbolizing the power and beauty of Earth\'s freshwater systems.',
      category: 'forests'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coastal Sunset',
      description: 'Beautiful coastal sunset revealing the meeting point of land and sea, areas that support rich biodiversity.',
      category: 'oceans'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mountain Lake',
      description: 'Crystal clear mountain lake reflecting surrounding peaks, showcasing the importance of freshwater ecosystems.',
      category: 'mountains'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ancient Forest',
      description: 'Sunlight filtering through ancient forest canopy, highlighting these crucial carbon sinks and biodiversity hotspots.',
      category: 'forests'
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'mountains', name: 'Mountains' },
    { id: 'forests', name: 'Forests' },
    { id: 'oceans', name: 'Oceans' },
    { id: 'arctic', name: 'Arctic' },
    { id: 'deserts', name: 'Deserts' }
  ];
  
  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);
  
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setCurrentImageIndex(-1);
    document.body.style.overflow = 'auto';
  };
  
  const navigate = (direction: number) => {
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setCurrentImageIndex(newIndex);
    }
  };
  
  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentImageIndex === -1) return;
      
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'Escape') closeModal();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex, filteredImages.length]);
  
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Visual Exploration</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Earth's Natural Beauty</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore breathtaking landscapes and ecosystems that remind us of what we're fighting to protect.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-xl shadow-md group relative cursor-pointer transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                <h3 className="font-bold text-lg">{image.title}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-sm opacity-80">View Details</span>
                  <Plus className="h-4 w-4 ml-1 opacity-80" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image Modal */}
        {currentImageIndex !== -1 && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-5xl max-h-screen px-4">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => navigate(-1)} 
                  disabled={currentImageIndex === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 transition-colors rounded-r-full text-white ${
                    currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                
                <img 
                  src={filteredImages[currentImageIndex].url} 
                  alt={filteredImages[currentImageIndex].title}
                  className="mx-auto max-h-[80vh] max-w-full object-contain"
                />
                
                <button 
                  onClick={() => navigate(1)} 
                  disabled={currentImageIndex === filteredImages.length - 1}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 transition-colors rounded-l-full text-white ${
                    currentImageIndex === filteredImages.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-b-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{filteredImages[currentImageIndex].title}</h3>
                <p className="text-gray-600">{filteredImages[currentImageIndex].description}</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                    {categories.find(cat => cat.id === filteredImages[currentImageIndex].category)?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;