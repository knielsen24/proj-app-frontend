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
import Profile from "./components/Profile";

function App() {
   const [workoutData, setWorkoutData] = useState([]);
   const [userWorkoutList, setUserWorkoutList] = useState([]);
   const [user, setUser] = useState([]);
   const [userLogin, setUserLogin] = useState(false);

   let { workoutId } = useParams();
   let navigate = useNavigate();

   const handleUser = (activeUser) => {
      setUser(activeUser);
      handleWorkoutList(activeUser.id);
      if (activeUser.loggedin) return setUserLogin(true);
   };

   const handleProfileUpdate = (activeUser) => {
      setUser(activeUser);
      navigate("myprofile");
   };

   const handleLogout = (user) => {
      if (userLogin === true) return handleUpdateLogin(user);
   };

   const handleUpdateLogin = (data) => {
      let checkLogin;
      !userLogin
         ? (checkLogin = { loggedin: true })
         : (checkLogin = { loggedin: false });

      fetch(`http://localhost:9292/login/users/${data.id}`, {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(checkLogin),
      })
         .then((resp) => resp.json())
         .then((data) => {
            data.loggedin ? handleUser(data) : setUserLogin(false);
         });
   };

   const handleWorkoutList = (id) => {
      fetch(`http://localhost:9292/workout_plans/all/users/${id}`)
         .then((resp) => resp.json())
         .then((data) => setUserWorkoutList(data))
         .then(navigate("myworkouts"));
   };

   const handleViewWorkout = (id) => {
      fetch(`http://localhost:9292/workout_plans/${id}`)
         .then((resp) => resp.json())
         .then((data) => setWorkoutData(data))
         .then(navigate(`/myworkouts/${id}`));
   };

   const handleDeleteWorkout = (id) => {
      fetch(`http://localhost:9292/workout_plans/${id}`, {
         method: "DELETE",
      })
         .then((resp) => resp.json())
         .then(() => {
            const deleteWorkout = userWorkoutList.filter(
               (workout) => workout.id !== id
            );
            setUserWorkoutList(deleteWorkout);
         })
         .then(navigate("myworkouts"));
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
                     {userLogin ? (
                        <Nav.Link as={Link} to="/myworkouts">
                           My Workouts
                        </Nav.Link>
                     ) : null}
                     {userLogin ? (
                        <Nav.Link as={Link} to="/createworkout">
                           Create Workout
                        </Nav.Link>
                     ) : null}
                     {userLogin ? (
                        <Nav.Link as={Link} to="/myprofile">
                           Profile
                        </Nav.Link>
                     ) : null}
                     {userLogin ? null : (
                        <Nav.Link as={Link} to="/signup">
                           Sign Up
                        </Nav.Link>
                     )}
                  </Nav>
                  <Button
                     size="sm"
                     as={Link}
                     to="/login"
                     variant="outline-info"
                     onClick={user ? handleLogout : null}
                  >
                     {userLogin ? "Log Out" : "Log In"}
                  </Button>{" "}
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="login"
               element={
                  <LogIn
                     handleUser={handleUser}
                     handleUpdateLogin={handleUpdateLogin}
                  />
               }
            />
            <Route
               path="signup"
               element={
                  <SignUp
                     userLogin={userLogin}
                     user={user}
                     handleUpdateLogin={handleUpdateLogin}
                     navigate={navigate}
                     handleProfileUpdate={handleProfileUpdate}
                  />
               }
            />
            <Route
               path="myworkouts"
               element={
                  <WorkoutList
                     userWorkoutList={userWorkoutList}
                     handleViewWorkout={handleViewWorkout}
                  />
               }
            />
            <Route
               path="myworkouts/:workoutId"
               element={
                  <MyWorkout
                     workoutData={workoutData}
                     handleDeleteWorkout={handleDeleteWorkout}
                  />
               }
            />
            <Route path="createworkout" element={<CreateWorkout />} />
            <Route
               path="myprofile"
               element={
                  <Profile user={user} navigate={navigate} />
               }
            />
         </Routes>
      </div>
   );
}

export default App;
