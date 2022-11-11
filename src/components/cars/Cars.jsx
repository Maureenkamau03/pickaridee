import React from "react";
import Singlecar from "../singlecar/Singlecar";
import "./cars.css";

export default function Cars({ fetchedCars }) {
  return (
    <div className="cars">
      
      {fetchedCars.map((car) => (
				<CarItem
        milage={car.milage}
        description={car.car_description}
        images={car.images}
        registration={car.registration_no}
        is_hired={car.is_hired}
				/>
			))}


      
        </div>
    
  );
}
