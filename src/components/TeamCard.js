import React from 'react';

import cambridgeImage from '../images/cambridge.png';
import harvardImage from '../images/harvard.png';
import uclaImage from '../images/ucla.jpg';
import ethzurich from '../images/ethzurich.png';
import maxplank from '../images/maxplank.png';
import edinberg from '../images/edinberg.png';
import hopkins from '../images/hopkins.png';
import michigan from '../images/michigan.png';
import illinois from '../images/illinois.jpg';
import humboldt from '../images/humboldt.jpg';
import alld from "../images/edinberg.png"

const universityImages = {
  "Cambridge University": cambridgeImage,
  "Harvard University": harvardImage,
  "University of California": uclaImage,
  "ETH Zurich": ethzurich,
  "Max Plank": maxplank,
  "University of Edinberg": edinberg,
  "John's Hopkins": hopkins,
  "Michigan State": michigan,
  "University of Illinois": illinois,
  "Humboldt University": humboldt,
  "Allahabad University": alld
};

const TeamCard = ({ university }) => {
  const imageUrl = universityImages[university];

  const cardStyle = {
    width: '100%', // Card takes full width on all screens
    maxWidth: '300px', // Limit card width
    margin: '0 auto', // Center the card horizontally
    marginBottom: '20px', // Add spacing between cards
    transition: 'transform 0.3s, box-shadow 0.3s',
  };

  const imageStyle = {
    height: '160px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '0.5rem',
  };

  const handleCardHover = (event) => {
    event.currentTarget.style.transform = 'translateY(-10px)';
    event.currentTarget.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.2)';
  };

  const handleCardLeave = (event) => {
    event.currentTarget.style.transform = 'translateY(0)';
    event.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div
      className="group relative p-4"
      style={cardStyle}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
    >
      <div className="bg-blue-400 shadow-md p-6 rounded-lg">
        <img src={imageUrl} alt={university} style={imageStyle} />
        <p className="text-center text-lg font-semibold">{university}</p>
      </div>
    </div>
  );
};

export default TeamCard;
 