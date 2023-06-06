import React, { useState } from 'react';

const LoveAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleButtonClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000); // Change the duration as needed
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Love Animation</button>
      {showAnimation && (
        <div className="love-animation">
          <span role="img" aria-label="heart">❤️</span>
        </div>
      )}
    </div>
  );
};

export default LoveAnimation;
