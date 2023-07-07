import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import AirportSection from "../components/AirportSection";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  
  return (
    <div>
      <Navbar />
      <Landing        id="home" />
      <About          id="about"/>
      <AirportSection id="schedule" />
      <Reviews        id="reviews"/>
      <Footer />
    </div>
  );
}

export default Home;
