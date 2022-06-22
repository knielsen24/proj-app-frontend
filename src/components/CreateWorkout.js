import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function CreateWorkout() {

	const initialWorkoutData = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
   };

   const [workoutData, setWorkoutData] = useState(initialWorkoutData);

   const handleChange = (e) => {
      const { id, value } = e.target;
      setWorkoutData({ ...workoutData, [id]: value });
      console.log(workoutData);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = {
         first_name: workoutData.first_name,
         last_name: workoutData.last_name,
         username: workoutData.username,
         email: workoutData.email,
         phone: parseInt(workoutData.phone),
         password: workoutData.password,
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
         {" "}
         <h3>New Workout</h3>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="first_name">
               <Form.Label>First Name</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={workoutData.first_name}
                  type="string"
                  placeholder="Enter First Name"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="last_name">
               <Form.Label>Last Name</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={workoutData.last_name}
                  type="string"
                  placeholder="Enter Last Name"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
               <Form.Label>Username</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={workoutData.username}
                  type="string"
                  placeholder="Choose username"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={workoutData.email}
                  type="email"
                  placeholder="Enter email"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
               <Form.Label>Phone Number</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={workoutData.phone}
                  type="integer"
                  placeholder="Enter Phone Number"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={workoutData.password}
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

export default CreateWorkout;
