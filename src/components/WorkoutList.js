import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MyWorkouts({ userWorkoutList, handleViewWorkout }) {
   const renderWorkoutList = userWorkoutList.map((workout) => {
      return (
         <Card key={workout.id}>
            <Card.Body>
               <Card.Title
                  variant="primary"
                  onClick={() => handleViewWorkout(workout.id)}
               >
                  {workout.name}
               </Card.Title>
               <Card.Text>Workout Details</Card.Text>
               <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleViewWorkout(workout.id)}
               >
                  View Workout
               </Button>
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
