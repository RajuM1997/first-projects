import React from "react";
import Banner from "../Banner/Banner";
import Navigation from "../Shard/Navaigation";
import Tesing from "../Testing/Tesing";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../Shard/Footer/Footer";

const Home = () => {
  return (
    <ParallaxProvider translateY={[-20, 20]}>
      <Navigation />
      <Banner />
      <Tesing />
      <Footer />
    </ParallaxProvider>
  );
};

export default Home;
