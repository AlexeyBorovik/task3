import { useState } from "react";

import './Auth.css';
import { Button, Form } from "react-bootstrap";

export const Auth = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    dateReg: "",
    dateVisit: "",
    status: "",
    isBlocked: false,
    isAuth: false,
  });

  const onChangeHandler = () => {}
  const handleSubmit = () => {};

  return (
    <div>
      <Form className="form">
          <Form.Text>Регистрация</Form.Text>
        <Form.Group className="group">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter e-mail"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control type="name" placeholder="Type your Name"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
