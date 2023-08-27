import React from "react";
import TrackCard from "./TrackCard";
import { trackData } from "../constants/trackData"; // Import the trackData constants

const Tracks = () => {
  return (
    <div className="text-black">
      <div className="text-center">
        <div className="text-3xl font-bold font-roboto text-blue-700 mb-10
        ">Meet your mentors</div>
        <div className="grid grid-cols-4 gap-10 justify-evenly flex-wrap group space-y-10 lg:space-y-0">
          {trackData.map((track, index) => (
            <TrackCard key={index} heading={track.heading} description={track.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
