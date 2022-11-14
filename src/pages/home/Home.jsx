import React from "react";
import "./home.css";
import Cars from "../../components/cars/Cars";
// import SideBar from "../../components/sidebar/Sidebar";
export default function Home() {
	return (
		<>
			<div className="home">
				<Cars />
				{/* <SideBar /> */}
			</div>
		</>
	);
}
