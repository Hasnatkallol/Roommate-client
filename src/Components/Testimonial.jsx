import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah T.",
    quote: "I found my ideal roommate in just three days. Super easy and stress-free!",
    location: "New York, NY",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Daniel K.",
    quote: "This platform helped me connect with someone who shares my interests and habits.",
    location: "Austin, TX",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Priya R.",
    quote: "Way better than any Facebook group or app I tried before. Highly recommend!",
    location: "San Francisco, CA",
    image: "https://i.pravatar.cc/150?img=47",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  // Auto-switch every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#4FA3D1] mb-4">What Our Users Say</h2>
        <p className="text-gray-600 text-lg mb-10">
          Real stories from people who found great roommates through our platform.
        </p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl px-8 py-10 sm:px-12 sm:py-12 max-w-2xl mx-auto"
            >
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-100 shadow"
              />
              <p className="text-xl text-gray-700 italic mb-4">“{testimonials[current].quote}”</p>
              <div className="text-indigo-600 font-semibold">
                — {testimonials[current].name}, <span className="text-gray-500">{testimonials[current].location}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full transition shadow"
            >
              ← Prev
            </button>
            <button
              onClick={next}
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-full transition shadow"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
