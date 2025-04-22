import React, { useState } from 'react';
import { BarChart3, Info } from 'lucide-react';

const CarbonCalculator = () => {
  const [transport, setTransport] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [food, setFood] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  
  const handleCalculate = () => {
    // Simple calculation for demonstration
    const total = transport + energy + food + consumption;
    setCarbonFootprint(total);
    setShowResult(true);
  };

  const getFootprintCategory = (score: number) => {
    if (score < 6) return { text: 'Low Impact', color: 'text-green-600' };
    if (score < 10) return { text: 'Moderate Impact', color: 'text-yellow-600' };
    return { text: 'High Impact', color: 'text-red-600' };
  };

  const category = getFootprintCategory(carbonFootprint);

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Carbon Footprint Calculator</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Measure your impact on the planet and discover ways to reduce your carbon footprint.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-8">
                <label className="block text-gray-700 text-lg font-medium mb-3">
                  Transportation
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="transport-1" 
                      name="transport" 
                      value="1"
                      className="h-4 w-4 text-green-600"
                      onChange={() => setTransport(1)} 
                    />
                    <label htmlFor="transport-1" className="ml-2 text-gray-700">
                      I primarily walk, cycle, or use public transport
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="transport-2" 
                      name="transport" 
                      value="2" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setTransport(2)}
                    />
                    <label htmlFor="transport-2" className="ml-2 text-gray-700">
                      I use a mix of public transport and car
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="transport-3" 
                      name="transport" 
                      value="3" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setTransport(3)}
                    />
                    <label htmlFor="transport-3" className="ml-2 text-gray-700">
                      I primarily drive a car
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="transport-4" 
                      name="transport" 
                      value="4" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setTransport(4)}
                    />
                    <label htmlFor="transport-4" className="ml-2 text-gray-700">
                      I frequently fly and drive large vehicles
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 text-lg font-medium mb-3">
                  Home Energy Use
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="energy-1" 
                      name="energy" 
                      value="1" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setEnergy(1)}
                    />
                    <label htmlFor="energy-1" className="ml-2 text-gray-700">
                      I use renewable energy and am very energy efficient
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="energy-2" 
                      name="energy" 
                      value="2" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setEnergy(2)}
                    />
                    <label htmlFor="energy-2" className="ml-2 text-gray-700">
                      I'm conscious about energy use
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="energy-3" 
                      name="energy" 
                      value="3" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setEnergy(3)}
                    />
                    <label htmlFor="energy-3" className="ml-2 text-gray-700">
                      I use average amounts of electricity and heating
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="energy-4" 
                      name="energy" 
                      value="4" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setEnergy(4)}
                    />
                    <label htmlFor="energy-4" className="ml-2 text-gray-700">
                      I use a lot of energy without much thought
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-8">
                <label className="block text-gray-700 text-lg font-medium mb-3">
                  Food Choices
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="food-1" 
                      name="food" 
                      value="1" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setFood(1)}
                    />
                    <label htmlFor="food-1" className="ml-2 text-gray-700">
                      Plant-based/vegan diet
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="food-2" 
                      name="food" 
                      value="2" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setFood(2)}
                    />
                    <label htmlFor="food-2" className="ml-2 text-gray-700">
                      Vegetarian or pescatarian diet
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="food-3" 
                      name="food" 
                      value="3" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setFood(3)}
                    />
                    <label htmlFor="food-3" className="ml-2 text-gray-700">
                      Omnivore with moderate meat consumption
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="food-4" 
                      name="food" 
                      value="4" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setFood(4)}
                    />
                    <label htmlFor="food-4" className="ml-2 text-gray-700">
                      High meat consumption with lots of processed food
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 text-lg font-medium mb-3">
                  Consumption & Waste
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="consumption-1" 
                      name="consumption" 
                      value="1" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setConsumption(1)}
                    />
                    <label htmlFor="consumption-1" className="ml-2 text-gray-700">
                      Minimal consumer, excellent at recycling and composting
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="consumption-2" 
                      name="consumption" 
                      value="2" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setConsumption(2)}
                    />
                    <label htmlFor="consumption-2" className="ml-2 text-gray-700">
                      Conscious consumer who recycles
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="consumption-3" 
                      name="consumption" 
                      value="3" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setConsumption(3)}
                    />
                    <label htmlFor="consumption-3" className="ml-2 text-gray-700">
                      Average consumer, sometimes recycles
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="consumption-4" 
                      name="consumption" 
                      value="4" 
                      className="h-4 w-4 text-green-600"
                      onChange={() => setConsumption(4)}
                    />
                    <label htmlFor="consumption-4" className="ml-2 text-gray-700">
                      Heavy consumer with minimal recycling
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button 
              onClick={handleCalculate}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors duration-300 inline-flex items-center"
              disabled={!transport || !energy || !food || !consumption}
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Calculate My Footprint
            </button>
          </div>
          
          {showResult && (
            <div className="mt-8 p-6 border border-gray-200 rounded-xl bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                Your Results
                <Info className="ml-2 h-5 w-5 text-gray-500" />
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-600 mb-2">Your estimated carbon footprint score:</p>
                  <p className="text-3xl font-bold">{carbonFootprint} / 16</p>
                  <p className={`font-medium mt-1 ${category.color}`}>{category.text}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-800 mb-2">Recommendations:</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {transport > 2 && (
                      <li>Consider using public transportation or carpooling more often</li>
                    )}
                    {energy > 2 && (
                      <li>Reduce energy consumption by using energy-efficient appliances</li>
                    )}
                    {food > 2 && (
                      <li>Try incorporating more plant-based meals into your diet</li>
                    )}
                    {consumption > 2 && (
                      <li>Practice mindful consumption and improve recycling habits</li>
                    )}
                    {carbonFootprint < 6 && (
                      <li>Great job! Keep up your sustainable practices</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarbonCalculator;