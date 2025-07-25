'use client';

import { useState, useEffect } from 'react';

export const Header = () => {
  const [shattered, setShattered] = useState(false);
  const [pieces, setPieces] = useState(generatePieces());
  const [key, setKey] = useState(0); // Used to force re-render to get new random positions

  useEffect(() => {
    const interval = setInterval(() => {
      // Regenerate random values for every cycle
      setPieces(generatePieces());
      setShattered(true);

      const restoreTimeout = setTimeout(() => {
        setShattered(false);
      }, 1500); // Rejoin after 1.5s

      return () => clearTimeout(restoreTimeout);
    }, 4000); // Loop every 4s

    return () => clearInterval(interval);
  }, [key]);

  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4 group relative">
        {/* Triangle Icon */}
        <div className="bg-gradient-to-r from-green-400 to-green-800 p-3 rounded-full mr-3 shadow-lg overflow-hidden w-12 h-12 relative">
          {pieces.map((piece, idx) => (
            <div
              key={piece.id}
              className="absolute top-2 left-2"
              style={{
                transform: shattered
                  ? `translate(${piece.x}px, ${piece.y}px) rotate(${piece.r}deg) scale(0.2)`
                  : `translate(0, 0) rotate(0deg) scale(1)`,
                opacity: shattered ? 0 : 1,
                transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 25 25">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Logo Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {'CLYPSE'.split('').map((letter, idx) => {
            const randX = getRandom(-60, 60);
            const randY = getRandom(-60, 60);
            const randR = getRandom(-360, 360);

            return (
              <span
                key={idx}
                className={`inline-block ${
                  idx >= 3
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700'
                    : ''
                }`}
                style={{
                  transform: shattered
                    ? `translate(${randX}px, ${randY}px) rotate(${randR}deg) scale(0.3)`
                    : 'translate(0, 0) rotate(0deg) scale(1)',
                  opacity: shattered ? 0 : 1,
                  transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out',
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {letter}
              </span>
            );
          })}
        </h1>
      </div>

      <p className="text-gray-300 text-lg">Professional News Debate Platform</p>
    </div>
  );
};

// ✅ Generate triangle pieces with new random values
function generatePieces() {
  return Array.from({ length: 3 }, (_, i) => ({
    id: i,
    x: getRandom(-50, 50),
    y: getRandom(-50, 50),
    r: getRandom(-720, 720),
  }));
}

// ✅ Random helper
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
