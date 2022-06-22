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
import CreateWorkout from "./components/CreateWorkout";

function App() {
   const [userData, setUserData] = useState([]);

   const baseUrl = "http://localhost:9292/workout_plans/all/users/1";

   useEffect(() => {
      fetch(baseUrl)
         .then((resp) => resp.json())
         .then((data) => setUserData(data));
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
                     <Nav.Link as={Link} to="/myworkouts">
                        My Workouts
                     </Nav.Link>
                     <Nav.Link as={Link} to="/createworkout">
                        Create Workout
                     </Nav.Link>
                     <Nav.Link as={Link} to="/signup">
                        Sign Up
                     </Nav.Link>
                  </Nav>
                  <Button as={Link} to="/login" variant="outline-info">
                     Log In
                  </Button>{" "}
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route
               path="myworkouts"
               element={<MyWorkouts userData={userData} />}
            />
            <Route path="createworkout" element={<CreateWorkout />} />
         </Routes>
      </div>
   );
}

export default App;
