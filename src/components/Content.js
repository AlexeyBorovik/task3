import { Button, ButtonGroup, Table } from "react-bootstrap";

export const Content = () => {


  return (
    <div>
      <ButtonGroup size="lg">
        <Button>Block</Button>
        <Button>UnBlock</Button>
        <Button>Delete</Button>
      </ButtonGroup>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="selectAll"
                ></input>
                <label className="form-check-label" for="selectAll">
                  {" "}
                  выделить все/снять выделение{" "}
                </label>
              </div>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Registration</th>
            <th>Last Visit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <th>
                  <div className="form-check">
                    <input
                      className="checkBox"
                      type="checkbox"
                      value=""
                      id="checkBox"
                    ></input>
                  </div>
                </th>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.password}</th>
                <th>{user.dateReg}</th>
                <th>{user.dateVisit}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const users = [
  {
    id: 1,
    name: "Alex",
    email: "alex@mail.ru",
    password: "1",
    dateReg: "",
    dateVisit: "",
    status: "",
    isBlocked: false,
    isAuth: false,
  },
  {
    id: 2,
    name: "Pavel",
    email: "pavel@gmail.com",
    password: "1",
    dateReg: "",
    dateVisit: "",
    status: "",
    isBlocked: false,
    isAuth: false,
  },
  {
    id: 3,
    name: "Igor",
    email: "igor@info.ru",
    password: "1",
    dateReg: "",
    dateVisit: "",
    status: "",
    isBlocked: false,
    isAuth: false,
  },
];
