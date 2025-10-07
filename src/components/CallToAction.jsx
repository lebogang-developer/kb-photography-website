import React from "react";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden py-6">
      <img
        src="images/call-to-action-image.jpg"
        alt="CTA background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl sm:text-3xl text-white font-semibold">
            Ready to capture your next corporate event?
          </h3>
          <p className="text-white/80 mt-2">
            Let’s create elegant visuals that move your brand forward.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-2xl bg-white text-neutral-900 px-5 py-2 text-sm font-medium hover:shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
