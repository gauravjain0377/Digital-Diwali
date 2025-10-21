import { useEffect, useState } from "react";

const Diyas = () => {
  const diyaCount = 8;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const revealTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // small delay after initial load so the animation completes

    return () => clearTimeout(revealTimeout);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex justify-around items-end px-4 pb-8 pointer-events-none z-40 transition-all duration-700"
      style={{ opacity: isVisible ? 1 : 0, transform: `translateY(${isVisible ? "0" : "20px"})` }}
    >
      {Array.from({ length: diyaCount }).map((_, index) => (
        <div key={index} className="relative flex flex-col items-center">
          {/* Flame */}
          <div
            className="relative w-4 h-6 mb-1"
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <div className="absolute inset-0 animate-flicker">
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-5 rounded-full"
                style={{
                  background: "radial-gradient(ellipse at bottom, hsl(35 100% 60%), hsl(45 100% 50%), transparent)",
                  filter: "blur(1px)",
                }}
              />
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 rounded-full"
                style={{
                  background: "radial-gradient(ellipse at bottom, hsl(45 100% 70%), hsl(35 90% 60%))",
                }}
              />
            </div>
            {/* Glow effect */}
            <div
              className="absolute -inset-4 rounded-full opacity-60 animate-flicker"
              style={{
                background: "radial-gradient(circle, hsl(35 100% 50% / 0.4), transparent 70%)",
                animationDelay: `${index * 0.3}s`,
              }}
            />
          </div>

          {/* Diya Base */}
          <div className="relative w-8 h-3">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(to bottom, hsl(25 80% 50%), hsl(25 70% 35%))",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 200, 100, 0.3)",
              }}
            />
            {/* Diya rim highlight */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-1.5 rounded-full"
              style={{
                background: "linear-gradient(to bottom, hsl(45 90% 60%), transparent)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diyas;
