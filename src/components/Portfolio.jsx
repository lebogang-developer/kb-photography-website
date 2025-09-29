const IMAGES = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/p5.jpg",
  "/images/p6.jpg",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Featured Portfolio</h2>
            <p className="text-neutral-600 mt-2">
              Selected work across corporate, portrait and lifestyle.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((src, i) => (
            <figure
              key={i}
              className="overflow-hidden rounded-xl bg-white border"
            >
              <img
                src={src}
                alt={`portfolio-${i}`}
                className="w-full h-64 object-cover transition-transform hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
