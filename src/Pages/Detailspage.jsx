import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";

const Detailspage = () => {
  const {
    _id,
    title,
    location,
    rent,
    roomType,
    preferences,
    availability,
    description,
    contact,
    email,
    userName,
  } = useLoaderData();
  const { user } = use(FirebaseAuthContext);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
    fetch(`https://room-server.vercel.app/allroommate/${_id}`)
      .then((res) => res.json())
      .then((data) => setLikeCount(data.count))
      .catch((err) => console.error(err));
  }, [_id]);

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    fetch(`https://room-server.vercel.app/increment/${_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ like: newLiked }),
    })
      .then((res) => res.json())
      .then(({ count }) => {
        setLikeCount(count);
      });
  };

  return (
    <div className="w-11/12 mx-auto my-10 p-6 bg-white rounded-lg shadow-md max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold w-[40%]">{title}</h2>
        <h3>
          {" "}
          <span className="text-[#f80505f3] font-bold">{likeCount}</span> people
          interested in
        </h3>

        {user.email === email ? (
          <>
            <button
              // onClick={handleLike}

              className={`px-4 py-2 rounded-full text-sm font-medium transition  ${
                liked ? "bg-red-500 text-white " : "bg-gray-200 text-gray-800"
              }`}
            >
              {liked ? "Liked ❤️" : "Like 🤍"}
            </button>{" "}
          </>
        ) : (
          <>
            <button
              onClick={handleLike}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                liked ? "bg-red-500 text-white " : "bg-gray-200 text-gray-800 "
              }`}
            >
              {liked ? "Liked ❤️" : "Like 🤍"}
            </button>{" "}
          </>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Rent:</strong> ${rent}
        </p>
        <p>
          <strong>Room Type:</strong> {roomType}
        </p>
        <p>
          <strong>Preferences:</strong> {preferences}
        </p>
        <p>
          <strong>Availability:</strong> {availability}
        </p>
        <p>
          <strong>Contact: </strong>

          {liked ? contact : user.email === email ? contact : ""}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>User Name:</strong> {userName}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Detailspage;
