import React from "react";
import { FaCity, FaUniversity } from "react-icons/fa";

const locations = [
  {
    type: "City",
    name: "New York",
    icon: <FaCity className="text-3xl text-primary" />,
  },
  {
    type: "City",
    name: "Los Angeles",
    icon: <FaCity className="text-3xl text-primary" />,
  },
  {
    type: "City",
    name: "Chicago",
    icon: <FaCity className="text-3xl text-primary" />,
  },
  {
    type: "University",
    name: "Harvard University",
    icon: <FaUniversity className="text-3xl text-primary" />,
  },
  {
    type: "University",
    name: "UCLA",
    icon: <FaUniversity className="text-3xl text-primary" />,
  },
  {
    type: "University",
    name: "Stanford University",
    icon: <FaUniversity className="text-3xl text-primary" />,
  },
];

const BrowseByLocation = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl text-[#4fa3d1] md:text-4xl font-bold mb-10">
            Browse by City or University
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">{loc.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{loc.name}</h3>
                <p className="text-sm text-gray-500">{loc.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseByLocation;
