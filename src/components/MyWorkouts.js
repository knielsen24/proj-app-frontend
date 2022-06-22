import Card from "react-bootstrap/Card";

function MyWorkouts({ userData }) {
   console.log(userData);

   // const renderExercises = workout.map(exercise => <li>{exercise.name}</li>)
   const renderWorkouts = userData.map((workout, index) => {
      return (
         <Card>
            {/* <Card.Header as="h5">{workout.phase}</Card.Header> */}
            <Card.Body>
               <Card.Title>{workout.name}</Card.Title>
               <Card.Text>Workout Details</Card.Text>
            </Card.Body>
         </Card>
      );
   });

   return (
      <div>
         <h3>My Workouts</h3>
         {renderWorkouts}
      </div>
   );
}

export default MyWorkouts;
