import React, { useEffect } from "react";
import Slider from "./Slider";
import Roommatepost from "./Roommatepost";
import Howworks from "./Howworks";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import RoommateTips from "./RoommateTips";
import BrowseByLocation from "./BrowseByLocation";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <Hero></Hero>
      <Slider></Slider>
      <Roommatepost></Roommatepost>
      <BrowseByLocation></BrowseByLocation>
      <Howworks></Howworks>
      <Testimonial></Testimonial>
      <RoommateTips></RoommateTips>
    </div>
  );
};

export default Home;
