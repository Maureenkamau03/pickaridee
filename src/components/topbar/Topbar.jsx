import "./topbar.css";
import { Link } from "react-router-dom";
import React from "react";
export default function TopBar() {
	return (
		<div className="top">
			<div className="topLeft">
				<h1 className="topicon">PICKARIDE </h1>
				{/* <i className="topicon fa-brands fa-facebook"></i>
                <i className="topicon fa-brands fa-twitter"></i>
                <i className="topicon fa-brands fa-instagram"></i> */}
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							Home
						</Link>
					</li>

					<li className="topListItem">
						<Link className="link" to="/About">
							About
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="contact">
							Contact
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="Cars">
							Cars
						</Link>
					</li>
					<li className="topListItem"></li>
				</ul>
			</div>
			<div className="topRight">
				<img className="topImg" src="ava.jpeg" alt="icon" />

				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/Login">
							Login
						</Link>
					</li>

					<li className="topListItem">
						<Link className="link" to="/Register">
							Register
						</Link>
					</li>
				</ul>

				<i className="topsearch icon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
}
