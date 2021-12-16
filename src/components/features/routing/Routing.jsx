import React from "react";
import { Route , Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import NavBar from "../navBar/NavBar";
import About from "../../pages/about/About";
import SingleUser from "../singleUser/SingleUser";
import Footer from "../footer/Footer"

const Routing = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/user-list" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/single-user/:id" element={<SingleUser/>} />

      </Routes>
      <Footer/>
    </>
  );
};

export default Routing;
