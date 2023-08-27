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
        <div className="grid grid-cols-4 gap-4 mb-8">
          {universities.map((university, index) => (
            <TeamCard key={index} university={university} />
          ))}
          <p className='absolute -bottom-64 right-40 mb-4 mr-4 text-3xl font-semibold text-gray-500'>And many more ...</p>
        </div>
        
<div>
  <Tracks/>
</div>
</div>
</div>
);
};

export default App;