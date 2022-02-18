import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";

export const SignUp = () => {
  const { loading, request } = useHttp();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    dateReg: "",
    dateVisit: "",
    status: "",
    isBlocked: false,
    isAuth: false,
  });

  const onChangeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const setDate = () => {
        const dateReg = new Date().toDateString();
        const lastVisit = new Date().toDateString();
        setUser({ ...user, dateReg: dateReg, dateVisit: lastVisit });
      };

      setDate();

      const data = await request("/api/auth/register", "POST", { ...user });
      console.log(data.message);
    } catch (e) {}
  };

  return (
    <div>
      <Form className="form">
        <Form.Text>Регистрация</Form.Text>
        <Form.Group className="group">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={onChangeHandler}
            name="email"
            type="email"
            placeholder="Enter e-mail"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={onChangeHandler}
            type="name"
            name="name"
            placeholder="Type your Name"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={onChangeHandler}
            type="password"
            name="password"
            placeholder="Password"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={registerHandler}
            disabled={loading}
          >
            Зарегистрироваться
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
