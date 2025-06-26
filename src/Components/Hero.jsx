import React, { use, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";

const Hero = () => {
  return (
    <div>
      <div className="w-12/12 mx-auto pt-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <h1 className="text-white text-xl md:text-2xl lg:text-5xl font-bold text-center">
          Largest Roommate Finder
        </h1>

        <div className="">
          <h1
            style={{
              paddingTop: "0rem",
              margin: "auto 0",
              fontWeight: "normal",
              fontSize: "50px",
              textAlign: "center",
            }}
          >
            Life is easier{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "Find a Match",
                  "Share a Home",
                  "Split the Rent",
                  "Live in Harmony",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>

        <h2 className="text-white text-xl md:text-2xl lg:text-3xl my-2 font-bold text-center">
          {" "}
          Free to list, search & communicate
        </h2>

        <div className="lg:flex gap-5 space-y-2 p-5 items-center justify-center">
          <div className="bg-white px-8 py-2 primary flex items-center justify-between rounded-2xl">
            <div>
              <h1 className="font-medium text-2xl text-black">
                Need a roommate ?
              </h1>
              <Link className="" to={"/addtofindroommate"}>
                {" "}
                <button className="bg-gradient-to-r flex items-center gap-2 justify-center  from-[#e0f2ff] via-[#e9e7fc] to-[#f1e7ff] text-black font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95">
                  List your room <FaArrowRight />
                </button>{" "}
              </Link>
            </div>
            <div className="w-23 h-25">
              <img src="/home-roomie.svg" alt="" />
            </div>
          </div>

          <div className="bg-white  px-8 py-2 rounded-2xl secondary flex justify-between">
            <div>
              <h1 className="font-medium text-2xl text-black">
                Looking for a place ?
              </h1>
              <Link className="" to={"/signup"}>
                {" "}
                <button className="bg-gradient-to-r flex items-center gap-2 justify-center  from-[#e0f2ff] via-[#e9e7fc] to-[#f1e7ff] text-black font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95">
                  Create your Profile <FaArrowRight />
                </button>{" "}
              </Link>
            </div>
            <div className="w-23 h-25">
              <img src="/home-homie.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
