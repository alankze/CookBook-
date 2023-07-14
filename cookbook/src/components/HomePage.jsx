import React from "react";
import Navigation from "./Navigation";
import About from "./About"
import Footer from "./Footer";
import Hero from "./Hero";
import Card from "./Card";


const HomePage = () => {
  return (
    <div className="all">
      <Hero></Hero>
      
      <Card></Card>
      <About></About>
      
    </div>
  );
};

export default HomePage;
