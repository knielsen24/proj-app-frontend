import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import AddExerciseForm from "./AddExerciseForm";

function CreateWorkout({ user }) {
   const initialWorkoutData = {
      name: "",
      phase: "",
      user_id: "",
   };

   const [workoutData, setWorkoutData] = useState(initialWorkoutData);
   const [workoutForm, setWorkoutForm] = useState("default");

   const handleChange = (e) => {
      const { id, value } = e.target;
      setWorkoutData({ ...workoutData, [id]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newWorkout = {
         name: workoutData.name,
         phase: parseInt(workoutData.phase),
         user_id: user.id,
      };
      console.log(newWorkout);
      fetch("http://localhost:9292/workout_plans", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newWorkout),
      })
         .then((resp) => resp.json())
         .then((data) => {
            setWorkoutData(data);
            setWorkoutForm("exercise");
         });
   };

   return (
      <div>
         {" "}
         <h3>Create Workout</h3>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
               <Form.Label>Name Your workout</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={workoutData.name}
                  type="string"
                  placeholder="Enter Workout Name"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phase">
               <Form.Label>Select Your Phase</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={workoutData.phase}
                  type="integer"
                  placeholder="Enter Phase Number"
               />
            </Form.Group>
            {workoutForm === "exercise" ? null : (
               <Button variant="success" type="submit" size="sm">
                  Add Exercises
               </Button>
            )}
         </Form>
         {workoutForm === "exercise" ? <AddExerciseForm {...user} workoutData={workoutData} /> : null}
      </div>
   );
}

export default CreateWorkout;
