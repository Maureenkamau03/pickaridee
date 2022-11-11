import "./App.css";
import React from "react";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import TopBar from "./components/topbar/Topbar";
import Header from "./components/header/Header";
import {  Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    
    <Routes>
      <TopBar/>
      <Header/>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login/>} />
        <Route path="rigister" element={<Register/>} />
      </Route>
      <Footer/>
    </Routes>
  
  );
}

export default App;
