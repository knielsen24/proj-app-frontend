import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import AddRepsForm from "./AddRepsForm";

function AddExerciseForm({ workoutData, workoutForm, setWorkoutForm }) {
   const initialExerciseData = {
      name: "",
      equipment: "",
      workout_plan_id: "",
      // muscle_group: "",
      // movement_type: "",
      // training_zone: "",
   };

   const [exerciseData, setExerciseData] = useState(initialExerciseData);
   const [count, setCount] = useState([1]);

   const handleChange = (e) => {
      const { id, value } = e.target;
      setExerciseData({ ...exerciseData, [id]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newExcercise = {
         name: exerciseData.name,
         equipment: exerciseData.equipment,
         workout_plan_id: workoutData.id,
      };
      console.log(newExcercise);
      fetch(`http://localhost:9292/workout_plans/${workoutData.id}`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newExcercise),
      })
         .then((resp) => resp.json())
         .then((data) => {
            setExerciseData(data)
				// setWorkoutForm("sets")
         });
   };

   const handleAddExercise = () => {
      count.length < 1 ? setCount([...count, 1]) : setCount(count);
   };

   const handleRemoveExercise = () => {
      count.length > 1 ? setCount(count.slice(1)) : setCount(count);
   };

   const renderExercises = count.map((index) => {
      return (
         <div>
            <Form.Group className="mb-3" controlId="name">
               <Form.Label>Exercise Name</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={exerciseData.name}
                  type="string"
                  placeholder="Enter Exercise Name"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="equipment">
               <Form.Label>Equipment</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={exerciseData.equipment}
                  type="string"
                  placeholder="Enter Equipment"
               />
            </Form.Group>
         </div>
      );
   });

   return (
      <div>
         <Form onSubmit={handleSubmit}>
            {renderExercises}
            <Button variant="danger" size="sm" onClick={handleRemoveExercise}>
               -
            </Button>
            <Button variant="secondary" size="sm" onClick={handleAddExercise}>
               +
            </Button>
            <div>
               <Button variant="info" type="submit" size="sm">
                  Submit
               </Button>
            </div>
         </Form>
			{workoutForm === "sets" ? (
            <AddRepsForm
               {...user}
               workoutData={workoutData}
               workoutForm={workoutForm}
					setWorkoutForm={setWorkoutForm}
            />
         ) : null}
      </div>
   );
}

export default AddExerciseForm;
