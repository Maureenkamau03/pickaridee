import "./App.css";
import React from "react";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/Topbar";
import Header from "./components/header/Header";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
     
          <TopBar />
         
            <Header />
            <Home />
          <Footer />
      
    

    </div>
  );
}

export default App;
