import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

interface PledgeAction {
  id: string;
  text: string;
  impact: string;
  category: 'energy' | 'waste' | 'water' | 'food' | 'transportation';
}

const Pledge = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedPledges, setSelectedPledges] = useState<string[]>([]);
  
  const pledgeActions: PledgeAction[] = [
    { 
      id: '1', 
      text: 'Switch to renewable energy sources', 
      impact: 'Reduces carbon emissions by up to 1.5 tons per year', 
      category: 'energy' 
    },
    { 
      id: '2', 
      text: 'Reduce single-use plastic consumption', 
      impact: 'Prevents hundreds of plastic items from entering oceans', 
      category: 'waste' 
    },
    { 
      id: '3', 
      text: 'Install water-saving fixtures', 
      impact: 'Saves thousands of gallons of water annually', 
      category: 'water' 
    },
    { 
      id: '4', 
      text: 'Eat a plant-based diet one day per week', 
      impact: 'Reduces carbon footprint by about 0.3 tons per year', 
      category: 'food' 
    },
    { 
      id: '5', 
      text: 'Use public transportation more frequently', 
      impact: 'Reduces carbon emissions by up to 2.2 tons per year', 
      category: 'transportation' 
    },
    { 
      id: '6', 
      text: 'Start a compost bin', 
      impact: 'Diverts food waste from landfills and reduces methane emissions', 
      category: 'waste' 
    },
    { 
      id: '7', 
      text: 'Plant native trees or garden', 
      impact: 'Enhances biodiversity and carbon sequestration', 
      category: 'food' 
    },
    { 
      id: '8', 
      text: 'Use energy-efficient appliances and lighting', 
      impact: 'Reduces electricity consumption by 10-50%', 
      category: 'energy' 
    },
  ];

  const handlePledgeToggle = (id: string) => {
    if (selectedPledges.includes(id)) {
      setSelectedPledges(selectedPledges.filter(pledgeId => pledgeId !== id));
    } else {
      setSelectedPledges([...selectedPledges, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this data to a server
    console.log({
      name,
      email,
      pledges: selectedPledges.map(id => 
        pledgeActions.find(action => action.id === id)?.text
      )
    });
    setSubmitted(true);
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'energy': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'waste': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'water': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'food': return 'bg-green-100 text-green-800 border-green-200';
      case 'transportation': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="pledge" className="py-20 bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Take Action</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Make Your Pledge for the Planet</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of others in committing to actions that help protect our environment.
            Every small step makes a difference.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        
        {!submitted ? (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Select Your Pledges:</h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {pledgeActions.map((action) => (
                  <div 
                    key={action.id}
                    className={`border ${
                      selectedPledges.includes(action.id) 
                        ? 'border-green-500 ring-2 ring-green-500' 
                        : 'border-gray-200'
                    } rounded-lg p-4 transition-all cursor-pointer hover:border-green-400`}
                    onClick={() => handlePledgeToggle(action.id)}
                  >
                    <div className="flex justify-between mb-3">
                      <span 
                        className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(action.category)}`}
                      >
                        {action.category.charAt(0).toUpperCase() + action.category.slice(1)}
                      </span>
                      
                      <div className={selectedPledges.includes(action.id) ? 'text-green-500' : 'text-gray-300'}>
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <p className="font-medium text-gray-800 mb-2">{action.text}</p>
                    <p className="text-sm text-gray-500">{action.impact}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors duration-300 inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={selectedPledges.length === 0 || !name || !email}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Submit My Pledge
                </button>
                {selectedPledges.length === 0 && (
                  <p className="text-sm text-gray-500 mt-2">Please select at least one pledge</p>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Pledge!</h3>
            <p className="text-lg text-gray-600 mb-6">
              Your commitment to making these changes will help create a better, more sustainable future for our planet.
            </p>
            <div className="bg-green-50 rounded-lg p-6 max-w-md mx-auto">
              <h4 className="font-semibold text-gray-800 mb-3">You've pledged to:</h4>
              <ul className="text-left text-gray-600 space-y-2">
                {selectedPledges.map(id => {
                  const pledge = pledgeActions.find(action => action.id === id);
                  return (
                    <li key={id} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{pledge?.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-8">
              <a 
                href="#resources" 
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors duration-300"
              >
                Explore Resources
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pledge;