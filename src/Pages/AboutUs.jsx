import React from "react";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto py-5">
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#4fa3d1] mb-6">About Us</h2>
          <p className="text-gray-700 text-lg mb-8">
            Welcome to RoomMatch — your trusted platform to find compatible roommates
            effortlessly. We understand that finding the right roommate can be challenging,
            so we've built a community-driven space that prioritizes compatibility, safety,
            and convenience.
          </p>

          <p className="text-gray-700 text-lg mb-8">
            Our mission is to connect individuals based on location, budget, lifestyle preferences,
            and interests to foster harmonious living environments. Whether you're a student,
            professional, or just looking for a new living arrangement, RoomMatch is here to make
            your search easier and more enjoyable.
          </p>

          <p className="text-gray-700 text-lg">
            We value transparency, security, and community support — ensuring you have all the
            resources and information you need to make confident decisions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
