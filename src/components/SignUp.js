import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUp() {
   return (
      <div>
         <h3>Sign Up</h3>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
               <Form.Label>First Name</Form.Label>
               <Form.Control type="string" placeholder="Enter First Name" />
            </Form.Group>
				<Form.Group className="mb-3" controlId="formBasicLastName">
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="string" placeholder="Enter Last Name" />
            </Form.Group>
				<Form.Group className="mb-3" controlId="formBasicBirthday">
               <Form.Label>Birthday</Form.Label>
               <Form.Control type="string" placeholder="Enter Birthday" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
               <Form.Label>Username</Form.Label>
               <Form.Control type="string" placeholder="Choose username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
               <Form.Label>Phone Number</Form.Label>
               <Form.Control type="integer" placeholder="Enter Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Choose Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="info" type="submit">
               Submit
            </Button>
         </Form>
      </div>
   );
}

export default SignUp;
