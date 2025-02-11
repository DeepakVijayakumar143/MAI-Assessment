import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../css/Homepage.css";
import LiveProject from "../components/LiveProject";
import RecentProject from "../components/RecentProject";
import AvailableIntern from "../components/AvailableIntern";
import Project from "../components/Project";
import Blog from "../components/Blog";
import Form from "../components/Form";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar></Navbar>
      <Hero></Hero>
      <LiveProject></LiveProject>
      <RecentProject></RecentProject>
      <AvailableIntern></AvailableIntern>
      <Project></Project>
      <Blog></Blog>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
