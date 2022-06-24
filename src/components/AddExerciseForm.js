import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function AddExerciseForm({
   workoutData,
   workoutForm,
   setWorkoutForm,
   handleWorkoutList,
}) {

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
      fetch(`http://localhost:9292/workout_plans/${workoutData.id}`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newExcercise),
      })
         .then((resp) => resp.json())
         .then(() => setExerciseData(initialExerciseData));
   };

   const handleRedirect = (id) => {
      handleWorkoutList(id);
   };

   const renderExercises = count.map((index) => {
      return (
         <div>
            <h5>Workout Name: {workoutData.name} </h5>
            <p>Phase: {workoutData.phase} </p>
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
            <div>
               <Button variant="success" type="submit" size="sm">
                  Add Exercise
               </Button>
            </div>
         </Form>
         <div>
            <Button
               variant="info"
               size="sm"
               onClick={() => handleRedirect(workoutData.user_id)}
            >
               Finalize Exercises
            </Button>
         </div>
      </div>
   );
}

export default AddExerciseForm;

// const handleAddExercise = () => {
// 	count.length < 5 ? setCount([...count, 1]) : setCount(count);
// };

// const handleRemoveExercise = () => {
// 	count.length > 1 ? setCount(count.slice(1)) : setCount(count);
// };

// <Button variant="danger" size="sm" onClick={handleRemoveExercise}>
//             -
//          </Button>
//          <Button variant="secondary" size="sm" onClick={handleAddExercise}>
//             +
//          </Button>
