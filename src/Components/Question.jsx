import React from "react";
import Lottie from "lottie-react";
import matchAnimation from "./match.json"; // Your Lottie animation file
import searchingAnimation from "./searching.json"; // Optional: For loading state

const Question = ({ isMatched, loading = false }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-72 h-72">
        <Lottie
          animationData={
            loading ? searchingAnimation : isMatched ? matchAnimation : null
          }
          loop={!isMatched}
          autoplay
        />
      </div>

      <h2 className="text-xl font-semibold mt-4">
        {loading
          ? "Searching for compatible roommates..."
          : isMatched
          ? "🎉 Roommate Matched!"
          : "🔍 Ready to find your roommate?"}
      </h2>
    </div>
  );
};

export default Question;
