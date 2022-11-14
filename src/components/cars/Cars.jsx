import React from "react";
import "./cars.css";
import Caritem from "../caritem/Caritem";
export default function Cars({ fetchedCars }) {
	return (
		<div className="cars">
			{fetchedCars.map((car) => (
				<Caritem
					id={car.id}
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
// added car hire logic
// something went wrong
