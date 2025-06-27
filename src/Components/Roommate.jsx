import React from "react";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { Link } from "react-router";

const Roommate = ({ roommate }) => {
  return (
    <div>
      <div className=" rounded-md border-1 p-2 shadow-md dark:bg-gray-50 dark:text-gray-800  h-auto md:h-[450px] lg:h-[390px]">
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl lg:text-3xl font-semibold text-[#4fa3d1] tracking-wide">
              {roommate.title}
            </h2>
            <h2 className="text-2xl items-center ml-2 flex font-semibold  tracking-wide  gap-2">
              <IoLocationOutline
                className="text-blue-800 font-bold"
                size={20}
              />{" "}
              {roommate.location}
            </h2>
            <h2 className="text-2xl items-center ml-2 flex font-semibold  tracking-wide  gap-2">
              <FaMoneyBillWaveAlt
                size={20}
                className="text-blue-800 font-bold"
              />{" "}
              {roommate.rent}
            </h2>
            <h2 className="text-2xl items-center  ml-2 flex font-semibold  tracking-wide  gap-2">
              <MdOutlineEventAvailable
                size={20}
                className="text-blue-800 font-bold"
              />{" "}
              {roommate.availability}
            </h2>
          </div>
          <Link
            className="flex items-centers "
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
