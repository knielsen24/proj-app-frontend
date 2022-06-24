import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function AddRepsForm() {
   const initialData = {
      reps: "",
      weight: "",
		exercise_id: "",
      workout_plan_id: "",
      // muscle_group: "",
      // movement_type: "",
      // training_zone: "",
   };

   const [repsData, setRepsData] = useState(initialData);

   const handleChange = (e) => {
      const { id, value } = e.target;
      setRepsData({ ...repsData, [id]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newSet = {
         reps: repsData.reps,
         weight: repsData.weight,
         exercise_id: repsData.exercise_id,
			workout_plan_id: workoutData.id,
      };
      console.log(newSet);
      fetch(`http://localhost:9292/workout_plans/${workoutData.id}`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newSet),
      })
         .then((resp) => resp.json())
         .then((data) => {
            setRepsData(data)

         });
   };

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
		</div>
	);;
}

export default AddRepsForm;
