import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function LogIn({ handleUpdateLogin }) {
   const initialLoginData = { email: "", password: "" };

   const [loginData, setloginData] = useState(initialLoginData);

   const handleChange = (e) => {
      const { id, value } = e.target;
      setloginData((loginData) => ({ ...loginData, [id]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:9292/users/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(loginData),
      })
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data);
            data.email === loginData.email &&
            data.password === loginData.password &&
            data.loggedin === false
               ? handleUpdateLogin(data)
               : alert("Error - Please Enter Correct Login credentials");
         });
   };

   return (
      <div>
         <h3>Log In</h3>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={loginData.email}
                  type="email"
                  placeholder="Enter email"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={loginData.password}
                  type="password"
                  placeholder="Password"
               />
            </Form.Group>
            <Button variant="info" type="submit">
               Submit
            </Button>
         </Form>
      </div>
   );
}

export default LogIn;
