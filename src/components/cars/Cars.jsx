import React from "react";
import "./cars.css";
import Caritem from "../caritem/Caritem";
export default function Cars({ fetchedCars }) {
	return (
		<div className="cars">
			{fetchedCars.map((car) => (
				<Caritem
					milage={car.mileage}
					description={car.car_description}
					images={car.images}
					registration={car.registration_no}
					is_hired={car.is_hired}
				/>
			))}
		</div>
	);
}
