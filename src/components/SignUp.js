import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function SignUp({ userLogin, user }) {

	console.log(user.id)
	let initialUserData;

   if (userLogin) {
      initialUserData = {
         first_name: user.first_name,
         last_name: user.last_name,
         username: user.username,
         email: user.email,
         phone: user.phone,
         password: user.password,
			id: user.id
      };
   } else {
      initialUserData = {
         first_name: "",
         last_name: "",
         username: "",
         email: "",
         phone: "",
         password: "",
      };
   }

   const [signUpData, setSignUpData] = useState(initialUserData);

   const handleChange = (e) => {
      const { id, value } = e.target;
      setSignUpData({ ...signUpData, [id]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = {
         first_name: signUpData.first_name,
         last_name: signUpData.last_name,
         username: signUpData.username,
         email: signUpData.email,
         phone: parseInt(signUpData.phone),
         password: signUpData.password,
      };
      fetch("http://localhost:9292/users", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newUser),
      })
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data);
         });
   };

	const handleUpdate = (e) => {
      e.preventDefault();
      const updateUser = {
         first_name: signUpData.first_name,
         last_name: signUpData.last_name,
         username: signUpData.username,
         email: signUpData.email,
         phone: parseInt(signUpData.phone),
         password: signUpData.password,
      };
		fetch(`http://localhost:9292/users${user.id}`, {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updateUser),
      })
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data);
         });
   };

   return (
      <div>
         <h3>{userLogin ? "Edit Profile" : "Sign Up"}</h3>
         <Form onSubmit={userLogin ? handleUpdate : handleSubmit}>
            <Form.Group className="mb-3" controlId="first_name">
               <Form.Label>First Name</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={signUpData.first_name}
                  type="string"
                  placeholder="Enter First Name"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="last_name">
               <Form.Label>Last Name</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={signUpData.last_name}
                  type="string"
                  placeholder="Enter Last Name"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
               <Form.Label>Username</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={signUpData.username}
                  type="string"
                  placeholder="Choose username"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={signUpData.email}
                  type="email"
                  placeholder="Enter email"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
               <Form.Label>Phone Number</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={signUpData.phone}
                  type="integer"
                  placeholder="Enter Phone Number"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={signUpData.password}
                  type="password"
                  placeholder="Choose Password"
               />
            </Form.Group>
            {userLogin ? null : (
               <Form.Group className="mb-3" controlId="terms">
                  <Form.Check
                     type="checkbox"
                     label="Acknowledge Terms and Agreement"
                  />
               </Form.Group>
            )}
            <Button variant="info" type="submit">
               {userLogin ? "Update Profile" : "Sign Up"}
            </Button>
         </Form>
      </div>
   );
}

export default SignUp;
