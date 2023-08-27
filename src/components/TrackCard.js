import React from 'react';
import mentor from '../images/elonmusk.png';

const TrackCard = ({ heading, description }) => {
    const cardStyle = {
      background: 'linear-gradient(to bottom, #F5F5F5, #1E90FF, #000000)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)'
      };
    
  return (
    <div className="duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85]
     hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity max-w-xs" style={cardStyle}>
      <div className="flex justify-center">
        <div className="w-20 h-20">
          <img
            src={mentor}
            width={100}
            height={100}
            alt="image"
            className="mx-auto w-full h-full rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div className="uppercase text-xl font-bold">{heading}</div>
      <p className="text-md leading-7 my-3 font-semibold  text-gray-300">
        {description}
      </p>
      <button className="bg-blue-950 py-2.5 px-8 rounded-full hover:bg-blue-800 text-white">
        Message now!
      </button>
    </div>
  );
};

export default TrackCard;
