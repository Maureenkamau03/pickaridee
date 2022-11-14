import React from "react";
import "./contact.css";

function Contact() {
	return (
	  <div>
	  <section className="color_sec py-4">
	  <div className="contact-container">
		<div className="content">
		  <h2>Contact Us</h2>
		  <hr className="t_border my-4 ml-0 text-left" />
		  <br></br>
  
		  <p>
			Do you have a question about our cars..Reach out to us!!!
		  </p>
		</div>
  
		
		  <div className="contactInfo">
			<br></br>
			<div className="box">
			  <div className="icon"></div>
			  <div className="text">
				<h3>Email</h3>
				<p> pickaride@gmail.com</p>
			  </div>
			</div>
			  <br></br>
			  <div className="text">
				<h3>Phone</h3>
				<p> (+254) 0000000000</p>
			</div>
		  </div>
		  <br></br>
		  
  
		  <div className="contactForm">
			<form>
			  <h2>Send Message</h2>
			  <br></br>
			  <div className="inputBox">
			  <label className="label" htmlFor="fullname">
				  Full Name
				</label>
				<input
				  type="text"
				  name=""
				  required="required"
			
			   
				/>
				
			  </div>
  
			  <div className="inputBox">
			  <label className="label" htmlFor="email">
				  Email
				</label>
				<input
				  type="text"
				  name=""
				  required="required"
			 
				/>
			   
			  </div>
  
			  <div className="inputBox">
			  <label className="label" htmlFor="message">
				  Feedback
				</label>
				<textarea
				  required="required"
				
				></textarea>
			   
			  </div>
  
			  <div className="inputBox">
				
			  <button className="btn ac_btn" type="submit"> 
					Send
				</button>
			  </div>
			</form>
		  </div>
		</div>
	  
	  </section>
	  </div>
	)
  }
  export default Contact;
