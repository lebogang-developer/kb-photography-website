export default function Hero() {
  return (
    <section className="relative h-[80vh]">
      <img
        src="/images/hero.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-3xl text-white">
          <h1 className="text-4xl sm:text-6xl font-light">
            Artistic. Elegant. Professional.
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Corporate events, executive portraits, and lifestyle stories crafted
            with a refined touch.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-black py-2 px-6 rounded-full font-medium shadow"
            >
              Book Your Session
            </a>
            <a
              href="#portfolio"
              className="border border-white text-white py-2 px-6 rounded-full"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
