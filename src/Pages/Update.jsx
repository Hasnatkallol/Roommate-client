import React from "react";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  console.log(data);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newListing = Object.fromEntries(formData.entries());
    console.log(newListing);

    fetch(`https://room-server.vercel.app/allroommate/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: " updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="p-24">
          <div className="p-12 text-center space-y-4">
            <h1 className="text-6xl font-bold">Update Roommate Listing</h1>
            <p className="text-lg"></p>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={data.title}
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
                  defaultValue={data.location}
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
                  defaultValue={data.rent}
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
                  defaultValue={data.preferences}
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
                  defaultValue={data.preferences}
                  className="input w-full"
                  placeholder="e.g., No Smoking, Pets OK, Night Owl"
                  required
                />
              </fieldset>

              <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
                <label className="label">Availability</label>
                <select
                  defaultValue={data.availability}
                  name="availability"
                  className="input w-full"
                  required
                >
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </fieldset>

              <fieldset className="md:col-span-2 bg-base-200 border border-base-300 rounded-box p-4">
                <label className="label">Description</label>
                <textarea
                  name="description"
                  defaultValue={data.description}
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
                  defaultValue={data.contact}
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
                  defaultValue={data.email}
                  className="input w-full"
                  readOnly
                />
              </fieldset>

              <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
                <label className="label">User Name</label>
                <input
                  type="text"
                  name="userName"
                  defaultValue={data.userName}
                  className="input w-full"
                  readOnly
                />
              </fieldset>
            </div>

            <input
              type="submit"
              className="bg-gradient-to-r from-[#e0f2ff] via-[#e9e7fc] to-[#f1e7ff] text-black font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95 w-full"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
