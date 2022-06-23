import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function MyWorkouts({ userWorkoutData, handleViewWorkout }) {
   const renderWorkoutList = userWorkoutData.map((workout) => {
      return (
         <Card key={workout.id}>
            <Card.Body>
               <Card.Title onClick={() => handleViewWorkout(workout.id)}>
                  {workout.name}
               </Card.Title>
               <Card.Text>Workout Details</Card.Text>
            </Card.Body>
         </Card>
      );
   });

   return (
      <div>
         <h3>My Workouts</h3>
         {renderWorkoutList}
      </div>
   );
}

export default MyWorkouts;
