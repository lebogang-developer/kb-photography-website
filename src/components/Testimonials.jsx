import { useEffect, useState } from "react";

const DATA = [
  {
    image: "/images/testimonial1.jpg",
    text: "KB Photography captured our corporate event beautifully. Exceptional quality and professionalism.",
    name: "Jane Doe",
    business: "XYZ Corp",
  },
  {
    image: "/images/testimonial2.jpg",
    text: "Professional and creative. Our family photoshoot was a lovely experience.",
    name: "John Smith",
    business: "Smith & Co",
  },
  {
    image: "/images/testimonial3.jpg",
    text: "Highly recommended — amazing attention to detail and artistic vision.",
    name: "Emily Johnson",
    business: "Creative Solutions",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % DATA.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
        <div className="relative mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {DATA.map((t, i) => (
              <div key={i} className="min-w-full px-4">
                <div className="bg-white rounded-xl p-6 shadow">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                  />
                  <p className="italic mt-4">"{t.text}"</p>
                  <h4 className="font-bold mt-4">{t.name}</h4>
                  <div className="text-sm text-neutral-600">{t.business}</div>
                </div>
              </div>
            ))}
          </div>

          {/* arrows */}
          <div className="absolute inset-y-0 left-2 flex items-center">
            <button
              className="bg-white/90 p-2 rounded-md shadow"
              onClick={() => setIdx((i) => (i - 1 + DATA.length) % DATA.length)}
              aria-label="Previous"
            >
              ‹
            </button>
          </div>
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button
              className="bg-white/90 p-2 rounded-md shadow"
              onClick={() => setIdx((i) => (i + 1) % DATA.length)}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
