// import React from "react";

// export default function Loader() {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 animate-gradientMove">
//       {/* 3D Cube */}
//       <div className="relative w-24 h-24 animate-spinSlow">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute w-full h-full bg-white bg-opacity-10 border border-purple-500 rounded transform 
//             ${getCubeFaceClass(i)}`}
//           />
//         ))}
//       </div>

//       {/* Glowing Text */}
//       <div className="absolute bottom-12 text-white text-2xl md:text-4xl font-extrabold animate-pulse tracking-widest drop-shadow-lg glow-text">
//         LOADING MADNESS...
//       </div>
//     </div>
//   );
// }

// // Cube face transform styles
// function getCubeFaceClass(face) {
//   const base = "origin-center";
//   switch (face) {
//     case 0: return `${base} rotate-y-0 translate-z-12`;    // front
//     case 1: return `${base} rotate-y-90 translate-z-12`;   // right
//     case 2: return `${base} rotate-y-180 translate-z-12`;  // back
//     case 3: return `${base} -rotate-y-90 translate-z-12`;  // left
//     case 4: return `${base} rotate-x-90 translate-z-12`;   // top
//     case 5: return `${base} -rotate-x-90 translate-z-12`;  // bottom
//     default: return "";
//   }
// }

import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="relative flex flex-col items-center">
        {/* Rotating 3D DEENEXUS Logo */}
        <div className="relative w-48 h-48 mb-10">
          <div className="absolute inset-0 border-4 border-neon-blue rounded-lg animate-spin-slow"></div>
          <div className="absolute inset-2 bg-neon-blue/20 rounded-lg shadow-xl shadow-neon-blue/50 transform rotate-45"></div>
          <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white animate-glow tracking-widest">
            DEENEXUS
          </span>
          {/* Neon Glow Effect */}
          <div className="absolute inset-0 bg-neon-blue/10 rounded-lg animate-pulse blur-md"></div>
        </div>

        {/* Neon Particle Effects */}
        <div className="absolute w-80 h-80">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neon-pink rounded-full animate-particle"
              style={{
                transform: `rotate(${i * 30}deg)`,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <div className="w-2 h-2 bg-neon-pink rounded-full blur-sm"></div>
            </div>
          ))}
        </div>

        {/* Waveform Progress Indicator */}
        <div className="w-80 h-4 bg-gray-900 rounded-full overflow-hidden mt-12 relative">
          <div
            className="h-full bg-gradient-to-r from-neon-blue to-neon-pink transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-4 bg-neon-blue/50 mx-0.5 animate-wave"
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Cyberpunk Loading Text */}
        <p className="mt-8 text-neon-pink text-xl font-mono animate-glitch2 tracking-wider">
          CONNECTING TO DEENEXUS SERVER...
        </p>
      </div>
      <style jsx>{`
        .bg-neon-blue { background-color: #00f6ff; }
        .text-neon-blue { color: #00f6ff; }
        .bg-neon-pink { background-color: #ff007a; }
        .text-neon-pink { color: #ff007a; }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px #00f6ff, 0 0 20px #00f6ff, 0 0 30px #00f6ff; }
          50% { text-shadow: 0 0 20px #00f6ff, 0 0 30px #00f6ff, 0 0 40px #00f6ff; }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        @keyframes particle {
          0% {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
            opacity: 0.9;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
            opacity: 0.9;
          }
        }
        .animate-particle {
          animation: particle 5s linear infinite;
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(0.2); }
          50% { transform: scaleY(1); }
        }
        .animate-wave {
          animation: wave 0.8s ease-in-out infinite;
        }
        @keyframes glitch2 {
          0% { transform: translate(0); opacity: 1; }
          10% { transform: translate(-3px, 3px); opacity: 0.8; }
          20% { transform: translate(3px, -3px); opacity: 0.9; }
          30% { transform: translate(-2px, 2px); opacity: 0.7; }
          40% { transform: translate(2px, -2px); opacity: 0.9; }
          50% { transform: translate(0); opacity: 1; }
          100% { transform: translate(0); opacity: 1; }
        }
        .animate-glitch2 {
          animation: glitch2 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;