import React, { useEffect, useState } from 'react';

const DynamicCursor = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    left: position.x - 16,
    top: position.y - 16,
    width: '32px',
    height: '32px',
    backgroundImage: `url('${isClicking ? '/cursor1.png' : '/cursor.png'}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    pointerEvents: 'none',
    zIndex: 999999,
    transform: 'translate3d(0, 0, 0)',
    willChange: 'transform',
  };

  return <div style={cursorStyle} className="dynamic-cursor-react" />;
};

export default DynamicCursor;