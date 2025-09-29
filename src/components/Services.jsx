const PACKAGES = [
  {
    title: "Basic Package",
    price: "R1,500",
    list: ["1 hour session", "10 edited images", "Online gallery"],
  },
  {
    title: "Standard Package",
    price: "R3,000",
    list: [
      "3 hour session",
      "30 edited images",
      "Online gallery",
      "1 printed album",
    ],
  },
  {
    title: "Premium Package",
    price: "R5,000",
    list: [
      "Full day coverage",
      "60 edited images",
      "Online gallery",
      "2 printed albums",
      "Drone shots",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold">Services & Packages</h2>
        <p className="text-neutral-600 mt-2">
          Corporate-first packages with flexible add-ons.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border p-6 hover:shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <div className="text-orange-600 font-bold text-2xl my-3">
                {p.price}
              </div>
              <ul className="text-sm space-y-1 mb-4">
                {p.list.map((it) => (
                  <li key={it} className="capitalize">
                    • {it}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block rounded-full border px-4 py-2 text-sm"
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
