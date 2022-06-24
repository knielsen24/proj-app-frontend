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
			// workout_plan_id: workoutData.id,
      };

      fetch(`http://localhost:9292/workout_plans/${????}`, {
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
			 <Form.Group className="mb-3" controlId="name">
               <Form.Label>Exercise Name</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={repsData.reps}
                  type="string"
                  placeholder="Enter Exercise Name"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="equipment">
               <Form.Label>Equipment</Form.Label>
               <Form.Control
                  onChange={handleChange}
                  value={repsData.weight}
                  type="string"
                  placeholder="Enter Equipment"
               />
            </Form.Group>
		</div>
	);;
}

export default AddRepsForm;
