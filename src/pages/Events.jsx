import { useState, useEffect } from "react";

const SLIDES = [
  { src: "/event2.png", alt: "Event 2" },
  { src: "/event.png", alt: "Event" },
];

function Events() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  // auto-advance every 5 seconds (restarts whenever you click, so it doesn't jump straight after)
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative mt-4 overflow-hidden rounded-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Events & Classes</h1>

      {/* ...your four event cards stay exactly as they are... */}

      <div className="relative mt-4 overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className="w-full flex-shrink-0 object-contain"
            />
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full"
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;