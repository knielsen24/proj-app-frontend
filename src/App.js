import "./App.css";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import WorkoutList from "./components/WorkoutList";
import React, { useEffect, useState } from "react";
import CreateWorkout from "./components/CreateWorkout";
import MyWorkout from "./components/MyWorkout";

function App() {
   const [workoutData, setWorkoutData] = useState([]);
   const [userWorkoutData, setUserWorkoutData] = useState([]);
   const [user, setUser] = useState([]);
   const [error, setError] = useState("");
   const [userLogin, setUserLogin] = useState(false);

	let { workoutId } = useParams();
   let navigate = useNavigate();

	const handleLogin = (activeUser) => {
      setUser(activeUser);
      activeUser.loggedin ? setUserLogin(true) : setUserLogin(false);
		handleWorkoutList(activeUser.id)
		navigate('myworkouts')
   };

	const handleLogout = () =>{
		if (userLogin === true) {
			
		}
	}

   const baseUrl = "http://localhost:9292/workout_plans/all/users/1";

   const handleWorkoutList = (id) => {
      fetch(baseUrl)
         .then((resp) => resp.json())
         .then((data) => setUserWorkoutData(data));
   };

   const handleViewWorkout = (id) => {
      fetch(`http://localhost:9292/workout_plans/${id}`)
         .then((resp) => resp.json())
         .then((data) => setWorkoutData(data))
         .then(navigate(`myworkouts/${id}`));
   };

   return (
      <div>
         <Navbar fixed="sticky" bg="dark" variant="dark" expand="sm">
            <Container fluid>
               <Navbar.Brand as={Link} to="/">
                  ATP
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: "75px" }}
                     navbarScroll
                  >
                     <Nav.Link
                        as={Link}
                        to="/myworkouts"
                        onClick={handleWorkoutList}
                     >
                        My Workouts
                     </Nav.Link>
                     <Nav.Link as={Link} to="/createworkout">
                        Create Workout
                     </Nav.Link>
                     {userLogin ? null : (
                        <Nav.Link as={Link} to="/signup">
                           Sign Up
                        </Nav.Link>
                     )}
                  </Nav>
                  <Button as={Link} to="/login" variant="outline-info" onClick={handleLogout}>
                     {userLogin ? "Log Out" : "Log In"}
                  </Button>{" "}
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LogIn handleLogin={handleLogin} />} />
            <Route path="signup" element={<SignUp />} />
            <Route
               path="myworkouts"
               element={
                  <WorkoutList
                     userWorkoutData={userWorkoutData}
                     handleViewWorkout={handleViewWorkout}
                  />
               }
            />
            <Route
               path="myworkouts/:workoutId"
               element={<MyWorkout workoutData={workoutData} />}
            />
            <Route path="createworkout" element={<CreateWorkout />} />
         </Routes>
      </div>
   );
}

export default App;
