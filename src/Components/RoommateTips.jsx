import React from "react";
import { FaShieldAlt, FaQuestionCircle, FaFileContract, FaUserCheck, FaPhoneAlt } from "react-icons/fa";

const safetyTips = [
  {
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    title: "Meet in Safe Locations",
    description:
      "Always meet potential roommates in public places before deciding anything.",
  },
  {
    icon: <FaQuestionCircle className="text-3xl text-primary" />,
    title: "Ask Important Questions",
    description:
      "Discuss habits, guests, cleaning routines, and schedules to avoid surprises.",
  },
  {
    icon: <FaPhoneAlt className="text-3xl text-primary" />,
    title: "Check References",
    description:
      "Request references from previous roommates or landlords for added trust.",
  },
  {
    icon: <FaFileContract className="text-3xl text-primary" />,
    title: "Have a Written Agreement",
    description:
      "Outline responsibilities, rent, and house rules in writing to avoid conflicts.",
  },
  {
    icon: <FaUserCheck className="text-3xl text-primary" />,
    title: "Trust Your Instincts",
    description:
      "If something feels off, don’t ignore it—your comfort and safety matter most.",
  },
];

const RoommateTips = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl text-[#4fa3d1] md:text-4xl font-bold mb-10">
            Roommate Tips & Safety Guidelines
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safetyTips.map((tip, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="mb-4 flex justify-center">{tip.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-500">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoommateTips;
