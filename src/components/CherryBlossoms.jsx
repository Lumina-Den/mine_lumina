import React, { useEffect, useState } from 'react';

const CherryBlossoms = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Create more falling petals that will settle at bottom
    const fallingPetals = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationClass: `cherry-fall-${(i % 6) + 1}`,
      delay: Math.random() * 12,
    }));
    setPetals(fallingPetals);
  }, []);

  return (
    <>
      {/* Falling Cherry Blossoms that settle at bottom */}
      {petals.map((petal) => (
        <div
          key={`falling-${petal.id}`}
          className={`cherry-blossom ${petal.animationClass}`}
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
    </>
  );
};

export default CherryBlossoms;