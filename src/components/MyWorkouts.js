import Accordion from "react-bootstrap/Accordion";

function MyWorkouts({ userData }) {
   console.log(userData);

   // const renderExercises = workout.map(exercise => <li>{exercise.name}</li>)
   const renderWorkouts = userData.map((workout, index) => {
      return (
         <Accordion.Item key={workout.id} eventKey={workout}>
            <Accordion.Header>
               {workout.phase} - {workout.name}
            </Accordion.Header>
            <Accordion.Body></Accordion.Body>
         </Accordion.Item>
      );
   });

   return (
      <div>
         <h3>My Workouts</h3>
         <Accordion>{renderWorkouts}</Accordion>
      </div>
   );
}

export default MyWorkouts;
