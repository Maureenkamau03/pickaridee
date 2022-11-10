import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartittle">ABOUT PICKARIDE</span>
        <img className="sidebarimg" src="car5.jpeg" alt=""></img>
        <p className="sidebarpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. c nulla iure!
          Laudantium vitae iure unde minus nihil dolore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. c nulla iure!
          Laudantium vitae iure unde minus nihil dolore?
        </p>
      </div>

      <div className="sidebaritem">
        <span className="sidebartittle">FOLLOW US</span>
        <i className="sidebaricon fa-brands fa-facebook"></i>
        <i className="sidebaricon fa-brands fa-twitter"></i>
        <i className="sidebaricon fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}
