import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function AddExerciseForm({ workoutData, handleWorkoutList }) {
   const initialExerciseData = {
      name: "",
      equipment: "",
      workout_plan_id: "",
      muscle_group: "",
      movement_type: "",
      training_zone: "",
   };

	console.log(workoutData.id)
   const muscleGroup = [
      "legs",
      "arms",
      "back",
      "glutes",
      "bis",
      "tris",
      "calves",
      "obliques",
      "abdominals",
   ];
   const movementType = [
      "warm up",
      "static",
      "speed",
      "power",
      "strength",
      "endurance",
   ];
   const trainingZone = [
      "recovery / 55-65% HR max",
      "aerobic / 65-75% HR max",
      "tempo / 80-85% HR max",
      "lactate threshold / 85-89% HR max",
      "anaerobic 90% + HR max",
   ];

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
         muscle_group: exerciseData.muscle_group,
         movement_type: exerciseData.movement_type,
         training_zone: exerciseData.training_zone,
         workout_plan_id: workoutData.id,
      };
      fetch("http://localhost:9292/exercises", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newExcercise),
      })
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data);
         });
      setExerciseData(initialExerciseData);
   };

   const handleRedirect = (id) => {
      handleWorkoutList(id);
   };

   const renderMuscleGroups = muscleGroup.map((group) => {
      return <option value={`${group}`}>{group}</option>;
   });

   const renderMovementType = movementType.map((type) => {
      return <option value={`${type}`}>{type}</option>;
   });

   const rendertrainingZone = trainingZone.map((zone) => {
      return <option value={`${zone}`}>{zone}</option>;
   });

   const renderExercises = count.map((index) => {
      return (
         <div>
            <h5>Workout Name: {workoutData.name} </h5>
            <h6>Phase: {workoutData.phase} </h6>
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
            <Form.Group className="mb-3" controlId="muscle_group">
               <Form.Label>Muscle Group</Form.Label>
               <Form.Select
                  onChange={handleChange}
                  value={exerciseData.muscle_group}
                  aria-label="Default select example"
               >
                  <option>Select Muscle Group</option>
                  {renderMuscleGroups}
               </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="movement_type">
               <Form.Label>Movement Type</Form.Label>
               <Form.Select
                  onChange={handleChange}
                  name="movement_type"
                  value={exerciseData.movement_type}
                  aria-label="Default select example"
               >
                  <option>Select Type of Movement</option>
                  {renderMovementType}
               </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="training_zone">
               <Form.Label>Training zone</Form.Label>
               <Form.Select
                  onChange={handleChange}
                  name="training_zone"
                  value={exerciseData.training_zone}
                  aria-label="Default select example"
               >
                  <option>Select target Training Zone</option>
                  {rendertrainingZone}
               </Form.Select>
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
