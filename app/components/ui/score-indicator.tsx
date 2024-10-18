import React, { useEffect, useState } from "react";
import Score_indicator from "../statics/score_indicator";

const ScoreIndicator = ({ score }: { score: number }) => {
  const [rotation, setRotation] = useState(-90);

  useEffect(() => {
    const newRotation = (score / 100) * 180 - 90; // Map score to -90 to 90 degrees
    setRotation(newRotation);
  }, [score]);

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Gauge background */}
      {/* <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
        className="absolute top-0 left-0"
      >
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="red" />
            <stop offset="50%" stopColor="yellow" />
            <stop offset="100%" stopColor="green" />
          </linearGradient>
        </defs>
        <path
          d="M10,100 A90,90 0 0,1 190,100"
          stroke="url(#gaugeGradient)"
          strokeWidth="20"
          fill="none"
        />
      </svg> */}
      <Score_indicator/>
      {/* Arrow */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full transition-transform duration-700 ease-out"
        style={{ transform: `rotate(${rotation}deg) translateY(-40%)` }}
      >
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-b-black border-l-transparent border-r-transparent"></div>
      </div>

      {/* Score Text */}
      {/* <div className="absolute text-3xl text-zinc-800 font-bold mt-10">
        {score}%
      </div> */}
    </div>
  );
};

export default ScoreIndicator;
