import React from 'react';
import { ExternalLink, BookOpen, Users, Leaf, Globe, FileText, Calendar } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: React.ReactNode;
}

const Resources = () => {
  const resources: Resource[] = [
    {
      id: 1,
      title: 'Earth Day Network',
      description: 'The official website for Earth Day with information on events, campaigns, and how to get involved.',
      url: 'https://www.earthday.org',
      category: 'Organizations',
      icon: <Globe className="h-5 w-5" />
    },
    {
      id: 2,
      title: 'NASA Climate',
      description: 'Scientific data and resources about climate change from NASA.',
      url: 'https://climate.nasa.gov',
      category: 'Science',
      icon: <Globe className="h-5 w-5" />
    },
    {
      id: 3,
      title: 'UN Environment Programme',
      description: 'Information on global environmental issues and solutions.',
      url: 'https://www.unep.org',
      category: 'Organizations',
      icon: <Users className="h-5 w-5" />
    },
    {
      id: 4,
      title: 'How to Start Composting',
      description: 'Comprehensive guide to starting your own compost system at home.',
      url: 'https://www.epa.gov/recycle/composting-home',
      category: 'Guides',
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 5,
      title: 'The Sixth Extinction',
      description: 'Award-winning book about the ongoing extinction crisis.',
      url: 'https://www.goodreads.com/book/show/17910054-the-sixth-extinction',
      category: 'Books',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: 6,
      title: 'Local Beach Cleanup',
      description: 'Find beach and waterway cleanup events in your area.',
      url: 'https://oceanconservancy.org/trash-free-seas/international-coastal-cleanup/',
      category: 'Events',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      id: 7,
      title: 'Sustainable Living Guide',
      description: 'Practical tips for reducing your environmental footprint.',
      url: 'https://www.worldwildlife.org/pages/green-tips',
      category: 'Guides',
      icon: <Leaf className="h-5 w-5" />
    },
    {
      id: 8,
      title: 'Climate Change: Facts and Figures',
      description: 'Data-driven information about climate change impacts.',
      url: 'https://www.ipcc.ch/',
      category: 'Science',
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 9,
      title: 'Conservation International',
      description: 'Organization protecting nature for the benefit of humanity.',
      url: 'https://www.conservation.org/',
      category: 'Organizations',
      icon: <Globe className="h-5 w-5" />
    }
  ];
  
  const categories = [
    'Organizations',
    'Science',
    'Guides',
    'Books',
    'Events'
  ];
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Organizations': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Science': return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'Guides': return 'bg-green-50 text-green-800 border-green-200';
      case 'Books': return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Events': return 'bg-red-50 text-red-800 border-red-200';
      default: return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };
  
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Learn More</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Environmental Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover tools, organizations, and information to deepen your understanding and take action.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div 
              key={resource.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-green-100">
                    {resource.icon}
                  </div>
                  <span 
                    className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(resource.category)}`}
                  >
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Visit Resource
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-green-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Missing something?</h3>
          <p className="mb-6 text-green-100 max-w-2xl mx-auto">
            We're always looking to expand our resource library. If you know of valuable environmental resources that should be included here, please let us know.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-white text-green-800 rounded-full font-medium hover:bg-green-100 transition-colors"
          >
            Suggest a Resource
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;