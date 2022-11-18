import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Bible from "../components/Bible";
import News from "../components/News";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Bible />
      <News />
      <Contact />
    </div>
  );
};

export default Home;
