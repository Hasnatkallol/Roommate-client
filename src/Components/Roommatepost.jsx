import React, { use, useEffect } from "react";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import Roommate from "./Roommate";

const Roommatepost = () => {
  const { roommates, setRoommates } = use(FirebaseAuthContext);

  useEffect(() => {
    fetch(`https://room-server.vercel.app/roommate`)
      .then((res) => res.json())
      .then((data) => setRoommates(data));
  }, [setRoommates]);

  return (
    <div>
      <div>
        <h2 className="text-3xl text-[#4fa3d1] md:text-4xl font-bold  text-center">
          Featured Roommate Listings
        </h2>
        <p className="text-gray-400 text-center mx-auto w-[80%] mt-3 mb-8">
          Discover handpicked roommate posts currently marked as Available. Each
          listing highlights essential details like location, budget, lifestyle
          preferences, and more — helping you find the perfect match faster.
          Click "See more" to view complete profiles and start connecting.
        </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5  w-11/12 mx-auto">
        {roommates.map((roommate) => (
          <Roommate
            roommate={roommate}
            roommates={roommates}
            setRoommates={setRoommates}
            key={roommate._id}
          ></Roommate>
        ))}
      </div>
    </div>
  );
};

export default Roommatepost;
