import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import MyWorkouts from "./components/MyWorkouts";
import React, { useEffect, useState } from "react";

function App() {
	const [userData, setUserData] = useState([])

	const baseUrl = " http://localhost:9292/workout_plans/all/users/1";

	useEffect(() => {
		fetch(baseUrl)
			.then(r => r.json())
			.then(data => setUserData(data))
	}, []);

   return (
      <div>
         <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
               <Navbar.Brand as={Link} to="/">
                  ATP
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={Link} to="/">
                        Home
                     </Nav.Link>
                     <Nav.Link as={Link} to="/my-workouts">
                        My Workouts
                     </Nav.Link>
                     <Nav.Link as={Link} to="/sign-up">
                        Sign Up
                     </Nav.Link>
                  </Nav>
                  <Button as={Link} to="/log-in" variant="outline-info">
                     Log In
                  </Button>{" "}
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="my-workouts" element={<MyWorkouts userData={userData} />} />
         </Routes>
      </div>
   );
}

export default App;
