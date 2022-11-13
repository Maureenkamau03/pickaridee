import React from "react";

function Singlecar({
	id,
	images,
	description,
	mileage,
	registration_no,
	is_hired,
}) {
	const [formData, setFormData] = React.useState({
		car_id: "",
		car_description: "",
		registration_no: "",
		licence: "",
		name: "",
		phone_no: "",
		is_hired: false,
	});
	const [hire, setHire] = React.useState(is_hired);
	const inputChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		//patch
		const toSubmit = { ...formData, is_hired: true };

		fetch("http://localhost:9292/rentals", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(toSubmit),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
				setHire(true);
			});

		e.target.reset();
	};
	return (
		<div className="caritem">
			<div className="cartitle_name">
				<img src={images} alt="" />
			</div>
			<div className="desc">
				<span>Car Description: </span>
				{description}
			</div>
			<div className="desc">
				<span>Mileage: </span>
				{mileage}
			</div>
			<div className="desc">
				<span>Registration No: </span>
				{registration_no}
			</div>
			{!hire ? (
				<form action="" onSubmit={submitHandler}>
					<label htmlFor="solution">Car Description: </label>
					<input
						type="text"
						name="car_description"
						value={formData.car_description}
						onChange={inputChangeHandler}
						placeholder="Indicate the brand and car model"
					/>
					<label htmlFor="">Car registration No:</label>
					<input
						type="text"
						name="registration_no"
						id=""
						value={formData.registration_no}
						onChange={inputChangeHandler}
						placeholder="Registration Number"
					/>
					<label htmlFor="">Name:</label>
					<input
						type="text"
						name="name"
						id=""
						value={formData.name}
						onChange={inputChangeHandler}
						placeholder="full name"
					/>
					<label htmlFor="">Phone Number</label>
					<input
						type="text"
						name="phone_no"
						id=""
						value={formData.phone_no}
						onChange={inputChangeHandler}
						placeholder="Phone number"
					/>
					<label htmlFor="">Driving Licence</label>
					<input
						type="text"
						name="licence"
						id=""
						value={formData.licence}
						onChange={inputChangeHandler}
						placeholder="Driving licence number"
					/>
					<input type="submit" value="Submit" />
				</form>
			) : (
				<div>
					<p>Hired</p>
				</div>
			)}
		</div>
	);
}

export default Singlecar;
