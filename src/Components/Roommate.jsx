import React from "react";
import { Link } from "react-router";

const Roommate = ({ roommate }) => {
  return (
    <div>
      <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-center tracking-wide">
              {roommate.title}
            </h2>
            <h2 className="text-2xl font-semibold text-center tracking-wide">
              Location: {roommate.location}
            </h2>
            <h2 className="text-3xl text-[#7e7ed5] font-semibold text-center tracking-wide">
              Rent: {roommate.rent}
            </h2>
            <h2 className="text-3xl text-[#7e7ed5] font-semibold text-center tracking-wide">
              Rent: {roommate.availability}
            </h2>
          </div>
          <Link
            className="flex items-centers justify-center"
            to={`/roommate/${roommate._id}`}
          >
            {" "}
            <button className="bg-gradient-to-r  from-[#e0f2ff] via-[#e9e7fc] to-[#f1e7ff] text-black font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95">
              See More
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roommate;
