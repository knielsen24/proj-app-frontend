import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Profile({ user }) {
   console.log(user);
   const { username, email, first_name, last_name, password, phone } = user;
   return (
      <div>
         <h3>Profile</h3>
         <Card className="text-center">
            <Card.Header>
               {" "}
               <Button variant="info" size="sm">
                  Edit Profile
               </Button>
            </Card.Header>
            <Card.Body>
               <Card.Title>Username: {username}</Card.Title>
               <Card.Text>Email: {email}</Card.Text>
					<Card.Text>First Name: {first_name[0].toUpperCase() + first_name.slice(1)}</Card.Text>
					<Card.Text>Last Name: {last_name[0].toUpperCase() + last_name.slice(1)}</Card.Text>
					<Card.Text>Phone: {phone}</Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">
               <Button
                  variant="danger"
                  size="sm"
                  // onClick={()=> handleDeleteWorkout(id)}
               >
                  Delete Profile
               </Button>
            </Card.Footer>
         </Card>
      </div>
   );
}

export default Profile;
