import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Browselisting = () => {
  useEffect(() => {
    document.title = "Browse Listing";
  }, []);

  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    fetch("https://room-server.vercel.app/allroommate")
      .then((res) => res.json())
      .then((data) => setRoommates(data))
      .catch((err) => console.error("Failed to fetch listings:", err));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🏠 Browse Roommate Listings
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="text-xs uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">Title</th>
              <th className="px-6 py-4 font-semibold">Location</th>
              <th className="px-6 py-4 font-semibold">Rent</th>
              <th className="px-6 py-4 font-semibold">Availability</th>
              <th className="px-6 py-4 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {roommates.length > 0 ? (
              roommates.map((roommate, index) => (
                <tr
                  key={roommate._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition duration-150`}
                >
                  <td className="px-6 py-4">{roommate.title}</td>
                  <td className="px-6 py-4">{roommate.location}</td>
                  <td className="px-6 py-4">${roommate.rent}</td>
                  <td className="px-6 py-4">{roommate.availability}</td>
                  <td className="px-6 py-4 text-center">
                    <Link to={`/roommate/${roommate._id}`}>
                      <button className="bg-gradient-to-r  from-[#e0f2ff] via-[#e9e7fc] to-[#f1e7ff] text-black font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95">
                        See More
                      </button>{" "}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  No roommate listings available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Browselisting;
