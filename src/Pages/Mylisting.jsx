import React, { use, useEffect, useState } from "react";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import Roommate from "../Components/Roommate";

const Mylisting = () => {
  const { user } = use(FirebaseAuthContext);
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const email = user.email;
      fetch(`http://localhost:4000/allroommate?email=${email}`)
        .then((res) => res.json())
        .then((data) => setRoommates(data))
        .catch((err) => console.error("Failed to fetch listings:", err));
    }
  }, [user.email]);
  return (
    <div>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-bold text-center">
          Featured Roommate Listings
        </h1>
        <p className="text-gray-400 text-center mx-auto w-[80%] my-3">
          Discover handpicked roommate posts currently marked as Available. Each
          listing highlights essential details like location, budget, lifestyle
          preferences, and more — helping you find the perfect match faster.
          Click "See more" to view complete profiles and start connecting.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-1 w-11/12 mx-auto">
        {roommates.map((roommate) => (
          <Roommate roommate={roommate} key={roommate._id}></Roommate>
        ))}
      </div>
    </div>
  );
};

export default Mylisting;
