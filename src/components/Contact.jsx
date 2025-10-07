import { useState } from "react";
import {
  FaEnvelope,
  FaAddressCard,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const Validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required!";
    if (!form.email) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address!";
    }
    if (!form.message.trim()) newErrors.message = "Message is required!";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      console.log("Form is submitted:", form);
      setErrors({});
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left: info */}
        <div className="bg-neutral-50 p-6 rounded-xl">
          <h3 className="text-3xl font-bold mb-6">Get in touch</h3>
          <p className="text-gray-600 mb-4">
            Reach out to us for bookings, inquiries, or collaborations. We’ll
            respond as soon as possible.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              +27 71 234 5678
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              hello@kbphotography.co.za
            </div>
            <div className="flex items-center">
              <FaAddressCard className="mr-2" />
              123 Studio Street, Bloemfontein
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
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-2xl font-semibold mb-4">Send a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Enter your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* Phone (optional, no validation for now) */}
            <input
              type="tel"
              placeholder="Phone number"
              value={form.phone || ""}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-3 border rounded"
            />

            {/* Service type dropdown */}
            <select
              value={form.service || ""}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full p-3 border rounded"
            >
              <option value="">Select a Service</option>
              <option value="corporate">Corporate Event</option>
              <option value="portrait">Executive Portrait</option>
              <option value="brand">Brand / Product</option>
            </select>

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border rounded"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
