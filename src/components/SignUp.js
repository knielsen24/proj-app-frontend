import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function SignUp() {
   const initialSignUpData = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
   };

   const [signUpData, setSignUpData] = useState(initialSignUpData);

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
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser)
		})
			.then(resp => resp.json())
			.then(data => {
				console.log(data)
			})
   };

   return (
      <div>
         <h3>Sign Up</h3>
         <Form onSubmit={handleSubmit}>
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
            <Form.Group className="mb-3" controlId="terms">
               <Form.Check
                  type="checkbox"
                  label="Acknowledge Terms and Agreement"
               />
            </Form.Group>
            <Button variant="info" type="submit">
               Submit
            </Button>
         </Form>
      </div>
   );
}

export default SignUp;
