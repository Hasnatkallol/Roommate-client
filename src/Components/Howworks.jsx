import React from "react";
import { FaUserPlus, FaSlidersH, FaSearch, FaComments } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-3xl text-primary" />,
    title: "Create Profile",
    description:
      "Sign up and build a profile with your budget, preferences, and interests.",
  },
  {
    icon: <FaSlidersH className="text-3xl text-primary" />,
    title: "Set Preferences",
    description:
      "Choose your preferred location, budget range, and lifestyle compatibility.",
  },
  {
    icon: <FaSearch className="text-3xl text-primary" />,
    title: "Browse Matches",
    description:
      "Explore roommate profiles that match your preferences and interests.",
  },
  {
    icon: <FaComments className="text-3xl text-primary" />,
    title: "Connect & Chat",
    description: "Start chatting to find the right living arrangement for you.",
  },
];

const Howworks = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl text-[#4fa3d1] md:text-4xl font-bold mb-10">
            How It Works
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Howworks;
