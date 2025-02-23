import { Container, Form, Button } from "react-bootstrap";
import "../assets/CustomStyles.css";

const Login = () => {
  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
