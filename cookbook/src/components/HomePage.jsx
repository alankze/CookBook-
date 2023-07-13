import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Hero from "./Hero";
import Card from "./Card";

const HomePage = () => {
  return (
    <div className="all">
      <Navigation></Navigation>
      <Hero></Hero>
      <Card></Card>
      <Footer />
    </div>
  );
};

export default HomePage;