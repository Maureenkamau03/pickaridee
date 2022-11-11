

import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

export const Register = (props) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setphone] = useState('');
   const [pass, setPass] = useState('');
   const [adress, setAdress] = useState('');
   const [licence, setLicence] = useState('');
   
   const handleSubmit = (e) => {
       e.preventDefault();
       console.log(email);
   }

   return (
       <div className="auth-form-container">
           <h2>Register</h2>

       <form className="register-form" onSubmit={handleSubmit}>

           <label htmlFor="name">Full Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}type="email" placeholder="Fullname" id="name" name="name" />
           <label htmlFor="email">email</label>
           <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

           <label htmlFor="phone">Phone number</label>
           <input value={phone} onChange={(e) =>setphone(e.target.value)}type="phone" placeholder="Phone Number" id="phone" name="phone"/>

           <label htmlFor="adress">address</label>
           <input value={adress} onChange={(e) =>setAdress(e.target.value)}type="adress" placeholder="Your adress" id="adress" name="adress"/>

           <label htmlFor="licence">Driving licence</label>
           <input value={licence} onChange={(e) => setLicence(e.target.value)} type="licence" placeholder="Driving licence" id="licence" name="licence" />

           <label htmlFor="password">password</label>
           <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            
           <button type="submit">Log In</button>
       </form>
       <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here!.</button>
       {/* <NavLink to='/components/Login'>Login</NavLink> */}

       
   </div>
   )
}
export default Register