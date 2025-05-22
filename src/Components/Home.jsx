import React, { useEffect } from "react";
import Slider from "./Slider";
import Roommatepost from "./Roommatepost";
import Howworks from "./Howworks";
import Hero from "./Hero";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <Hero></Hero>

      <Slider></Slider>
      <Roommatepost></Roommatepost>
      <Howworks></Howworks>
    </div>
  );
};

export default Home;
