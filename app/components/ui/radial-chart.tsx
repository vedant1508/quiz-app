import React from 'react';

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  const size = 200; // Decreased size of the SVG
  const strokeWidth = 15; // Stroke width of the circle
  const radius = (size - strokeWidth) / 2; // Calculate radius
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Offset for the progress

  return (
    <div className="flex justify-center items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <circle
          className="text-gray-300"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ stroke: '#f5f5f5' }} // Set to off-white color
        />
        {/* Foreground Circle (Progress) */}
        <circle
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transition: 'stroke-dashoffset 0.5s ease',
            stroke: '#44B77B', // Radial color remains #AF9CF3
            transform: 'rotate(-90deg)', // Rotate to start from the top
            transformOrigin: 'center', // Set the rotation origin to the center
          }}
        />
        
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="font-bold"
          style={{ fontSize: '36px', fill: 'black' }} // Adjusted font size
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
