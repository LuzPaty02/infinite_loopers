import React from 'react';

const AdvancedMarker = ({ position, onClick, children }) => {
  return (
    <div
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -100%)', // Adjust according to your marker design
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Pin = ({ background, borderColor, glyphColor }) => {
  return (
    <div
      className={`w-6 h-6 rounded-full flex justify-center items-center border-2 border-${borderColor} bg-${background} text-${glyphColor}`}
    >
      <span>Pin</span>
    </div>
  );
};

// Usage
const ExampleComponent = () => {
  const position = { x: 100, y: 100 }; // Example position

  const handleMarkerClick = () => {
    // Handle marker click event
    console.log('Marker clicked');
  };

  return (
    <div className="relative">
      <AdvancedMarker position={position} onClick={handleMarkerClick}>
        <Pin background="gray" borderColor="green" glyphColor="purple" />
      </AdvancedMarker>
    </div>
  );
};

export default ExampleComponent;
