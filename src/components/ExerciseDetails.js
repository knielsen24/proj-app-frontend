import ListGroup from "react-bootstrap/ListGroup";

function Exercise({
   name,
   equipment,
   muscle_group,
   movement_type,
   exercise_sets,
}) {



	const renderSets = exercise_sets.map((set, index) => {
      let x = index + 1
		return (
         <ListGroup.Item as="li" key={set.id}>
            Set#{x}  Reps: {set.reps} Weight: {set.weight}
         </ListGroup.Item>
      );
   });

   return (
      <div>
         <ListGroup as="ul">
            <ListGroup.Item as="li" action variant="secondary">
               {name.toUpperCase()} --{" "}
               {equipment[0].toUpperCase() + equipment.slice(1)} --{" "}
               {movement_type[0].toUpperCase() + movement_type.slice(1)}
            </ListGroup.Item>
            {renderSets}
         </ListGroup>
      </div>
   );
}

export default Exercise;
