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
		car_description:"",
        registration_no:"",
        pick_date: "",
        return_date:"",
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
		fetch("https://nameless-springs-18651.herokuapp.com/tasks/" + id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
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
						name="solution"
						value={formData.solution}
						onChange={inputChangeHandler}
						placeholder="Indicate the brand and car model"
					/>
					<label htmlFor="">Car registration No:</label>
					<input
						type="text"
						name="comments"
						id=""
						value={formData.comments}
						onChange={inputChangeHandler}
						placeholder="Registration Number"
					/>
                    <label htmlFor="">Pick Up Date:</label>
					<input
						type="text"
						name="comments"
						id=""
						value={formData.comments}
						onChange={inputChangeHandler}
						placeholder="Date you will pick your car"
					/>
                    <label htmlFor="">Return Date:</label>
					<input
						type="text"
						name="comments"
						id=""
						value={formData.comments}
						onChange={inputChangeHandler}
						placeholder="The date will return your car"
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

export default ShowTask;