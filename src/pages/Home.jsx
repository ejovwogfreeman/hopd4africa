import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Bible from "../components/Bible";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Bible />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
