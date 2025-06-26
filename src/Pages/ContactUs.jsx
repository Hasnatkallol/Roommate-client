import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-11/12 mx-auto pt-5">
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4fa3d1] mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-12">
            Have questions, feedback, or need help finding a roommate? Reach out to us!
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <form className="bg-base-200 rounded-xl shadow-xl p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>
              <button className="btn btn-primary w-full">Send Message</button>
            </form>

            {/* Contact Info */}
            <div className="text-left space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-primary text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">support@roommatch.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-primary text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">123 Roomie St, Apartment City, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
