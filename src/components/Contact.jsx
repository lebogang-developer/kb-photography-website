export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: info */}
        <div className="bg-neutral-50 p-6 rounded-xl">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <p className="mt-3 text-neutral-600">
            We respond within 24 hours. For bookings and quotes, use the form.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div>
              <strong>Phone:</strong> +27 71 234 5678
            </div>
            <div>
              <strong>Email:</strong> hello@kbphotography.co.za
            </div>
            <div>
              <strong>Address:</strong> 123 Studio Street, Bloemfontein
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium mb-2">Follow Me</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-2xl font-semibold">Send a message</h3>
          <form className="mt-4 grid gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="border rounded p-2"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              className="border rounded p-2"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="border rounded p-2"
            />
            <select className="border rounded p-2">
              <option>Service type</option>
              <option>Corporate Event</option>
              <option>Executive Portrait</option>
              <option>Brand / Product</option>
            </select>
            <textarea
              rows="5"
              placeholder="Message / details"
              className="border rounded p-2"
            />
            <button className="bg-orange-600 text-white py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
