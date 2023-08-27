import React from 'react';
import TeamCard from './components/TeamCard';
import universities from './constants/universities';
import Tracks from './components/Tracks';

const App = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center font-roboto font-semibold mb-5 bg-gradient-to-b from-light-purple to-dark-purple bg-clip-text text-transparent">Team Page</h1>
        <p className="text-blue-800 font-semibold text-center text-xl mb-6">Learn from scientists, research scholars from the top institute in the world</p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {universities.map((university, index) => (
            <TeamCard key={index} university={university} />
          ))}
        </div>
        <p className= "text-xl lg:text-3xl font-semibold text-gray-500 text-center mb-4">and many more ...</p>
        <div>
          <Tracks />
        </div>
      </div>
    </div>
  );
};

export default App;