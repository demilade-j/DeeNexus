import { useEffect, useRef, useState } from "react";

const slides = ["red", "orange", "red"]; // Tailwind colors

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const scrollTo = (i) => {
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({ left: i * width, behavior: "smooth" });
    setIndex(i);
  };

  useEffect(() => {
    const timer = setInterval(() => scrollTo((index + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div>
      <div ref={containerRef} className="flex overflow-hidden scroll-smooth w-180 bg-amber-700 h-48">
        {slides.map((color, i) => (
          <div key={i} className={`w-80 flex-shrink-0 h-48 bg-${color}-500 flex items-center justify-center text-white text-xl`}>
            Slide {i + 1}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-black" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
