import "./App.css";
import React from "react";
import Cars from "./components/cars/Cars";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TopBar from "./components/topbar/Topbar";
import Header from "./components/header/Header";
import Singlecar from "./components/singlecar/Singlecar";
import Sidebar from "./components/sidebar/Sidebar";
// import {  Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	const [fetchedCars, setFetchedCars] = React.useState([]);
	// const [Carselected, setCarselected] = React.useState(null);

	React.useEffect(() => {
		fetch("http://localhost:9292/cars")
			.then((res) => res.json())
			.then((data) => {
				setFetchedCars(data);
			});
	}, []);

	console.log(fetchedCars);
	return (
		<div className="App">
			<Router>
				<TopBar />
				<Header />
				<Routes>
					<Route exact="/" element={<Home />} />
					{fetchedCars.map((car) => (
						<Route
							path={`/cars/${car.id}`}
							element={
								<Singlecar
									id={car.id}
									milage={car.milage}
									description={car.car_description}
									images={car.images}
									registration={car.registration_no}
									is_hired={car.is_hired}
								/>
							}
						/>
					))}
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />\
					{/* <Route path="/" element={<Login />} /> */}
					{/* <Route path="/" element={<Register />} /> */}
					<Route path="/cars" element={<Cars fetchedCars={fetchedCars} />} />
				</Routes>
				<Sidebar />
				<Footer />
			</Router>
			/
		</div>
	);
}

export default App;
