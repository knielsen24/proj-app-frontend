import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ExerciseDetails from "./ExerciseDetails";

function MyWorkout({ workoutData, handleDeleteWorkout }) {
   const { id, name, phase, exercises } = workoutData;

	let renderExercises;

   if (exercises) {
      renderExercises = exercises.map((movement) => {
         return <ExerciseDetails key={movement.id} {...movement} />;
      });
   }

   return (
      <Card className="text-center">
         <Card.Header>PHASE: {phase}</Card.Header>
         <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{renderExercises}</Card.Text>
            <Button variant="secondary" size="sm">
               Edit Workout
            </Button>
				<Button variant="danger" size="sm" onClick={()=> handleDeleteWorkout(id)}>
               Delete Workout
            </Button>
         </Card.Body>
         <Card.Footer className="text-muted">
            <Button variant="info" size="sm">
               Finished!
            </Button>
         </Card.Footer>
      </Card>
   );
}

export default MyWorkout;


  // let nameCapFirstLetter;
   // if (name) {
   //    nameCapFirstLetter = name.split(" ").map((word) => word[0].toUpperCase());
   // }

	// phase[0].toUpperCase() + phase.slice(1)
