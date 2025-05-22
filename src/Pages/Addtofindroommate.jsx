import React, { use, useEffect } from "react";
import Swal from "sweetalert2";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";

const AddToFindRoommate = () => {
  useEffect(() => {
    document.title = "Add Roommate";
  }, []);

  const { user } = use(FirebaseAuthContext);

  const handleAddListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newListing = Object.fromEntries(formData.entries());
    console.log(newListing);

    fetch("https://room-server.vercel.app/roommate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          {
            Swal.fire({
              title: "successfully added ",
              icon: "success",
              draggable: true,
            });
          }
        }
        form.reset();
      });
  };

  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl font-bold">Add a Roommate Listing</h1>
        <p className="text-lg">
          Connect with others looking for shared living spaces. Add your listing
          to find the perfect match for your lifestyle and preferences. Roommate
          life made simple.
        </p>
      </div>
      <form onSubmit={handleAddListing}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="e.g., Looking for a roommate in NYC"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="City or Neighborhood"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Rent Amount</label>
            <input
              type="number"
              name="rent"
              className="input w-full"
              placeholder="Monthly Rent in USD"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Room Type</label>
            <input
              type="text"
              name="roomType"
              className="input w-full"
              placeholder="e.g., Single, Shared"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Lifestyle Preferences</label>
            <input
              type="text"
              name="preferences"
              className="input w-full"
              placeholder="e.g., No Smoking, Pets OK, Night Owl"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Availability</label>
            <select name="availability" className="input w-full" required>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </fieldset>

          <fieldset className="md:col-span-2 bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Description</label>
            <textarea
              name="description"
              className="textarea w-full"
              placeholder="Add any additional info about the room or roommates..."
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Contact Info</label>
            <input
              type="text"
              name="contact"
              className="input w-full"
              placeholder="Phone or alternative contact method"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">User Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              value={user.email}
              readOnly
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">User Name</label>
            <input
              type="text"
              name="userName"
              className="input w-full"
              value={user.displayName}
              readOnly
            />
          </fieldset>
        </div>

        <input
          type="submit"
          className="bg-gradient-to-r from-[#e0f2ff] via-[#e9e7fc] to-[#f1e7ff] text-black font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95 w-full"
          value="Add Listing"
        />
      </form>
    </div>
  );
};

export default AddToFindRoommate;
