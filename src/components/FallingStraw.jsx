import React, { useEffect, useState } from 'react';

const FallingStraw = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset animation when component mounts (when home page is visited)
    setKey(prev => prev + 1);
  }, []);

  return (
    <img 
      key={key} // This forces React to recreate the element and restart animation
      src="/straw.png" 
      alt="Falling straw" 
      className="falling-straw"
      loading="lazy"
    />
  );
};

export default FallingStraw;