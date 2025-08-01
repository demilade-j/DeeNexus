const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="relative flex flex-col items-center">
        <div className="relative w-48 h-48 mb-10">
          <div className="absolute inset-0 border-4 border-neon-blue rounded-lg animate-spin-slow"></div>
          <div className="absolute inset-2 bg-neon-blue/20 rounded-lg shadow-xl shadow-neon-blue/50 transform rotate-45"></div>
          <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white animate-glow tracking-widest">
            DEENEXUS
          </span>
          <div className="absolute inset-0 bg-neon-blue/10 rounded-lg animate-pulse blur-md"></div>
        </div>
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