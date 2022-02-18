import { useContext, useState } from "react";
import "./LogIn.css";
import { Button, Form } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "./context/AuthContext";
import { NavLink } from "react-router-dom";

export const LogIn = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    dateVisit: "",
    status: "",
    isBlocked: false,
    isAuth: false,
  });

  const onChangeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const lastVisit = new Date().toDateString();
      setUser({ ...user, dateVisit: lastVisit });
      const data = await request("/api/auth/login", "POST", { ...user });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div>
      <Form className="form">
        <Form.Text>Вход</Form.Text>
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
            onClick={loginHandler}
            disabled={loading}
          >
            Войти
          </Button>
          <NavLink to={"/reg"}>Создать аккаунт</NavLink>
        </Form.Group>
      </Form>
    </div>
  );
};
