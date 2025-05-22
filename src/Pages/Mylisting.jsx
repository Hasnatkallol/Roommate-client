import React, { use, useEffect, useState } from "react";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import Roommate from "../Components/Roommate";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Mylisting = () => {
  useEffect(() => {
    document.title = "My Listing";
  }, []);

  const { user } = use(FirebaseAuthContext);
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const email = user.email;
      fetch(`https://room-server.vercel.app/allroommate?email=${email}`)
        .then((res) => res.json())
        .then((data) => setRoommates(data))
        .catch((err) => console.error("Failed to fetch listings:", err));
    }
  }, [user.email]);

  const handleDelete = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`https://room-server.vercel.app/allroommate/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully .",
                icon: "success",
              });

              const remainingRoom = roommates.filter((cof) => cof._id !== _id);
              setRoommates(remainingRoom);
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        My Roommate Listings
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Below are the roommate posts you’ve added. You can update or delete
        them.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-lg mb-5">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="text-xs uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">Title</th>
              <th className="px-6 py-4 font-semibold">Location</th>
              <th className="px-6 py-4 font-semibold">Rent</th>
              <th className="px-6 py-4 font-semibold">Availability</th>
              <th className="px-6 py-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roommates.map((roommate, index) => (
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
                <td className="px-6 py-4 text-center space-x-2">
                  <Link to={`/update/${roommate._id}`}>
                    <button className="bg-gradient-to-r from-[#d4e9ff] via-[#eae6fb] to-[#f5ebff] text-black font-semibold px-4 py-1 rounded-xl shadow-sm hover:scale-105 transition text-xs">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(roommate._id)}
                    className="bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold px-4 py-1 rounded-xl shadow-sm hover:scale-105 transition text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {roommates.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No roommate posts added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mylisting;
