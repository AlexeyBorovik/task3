import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Content } from "./components/Content";
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";

function App() {
  const isAuth = false;

  if (isAuth) {
    return <Content />;
  }
  return (
    <div>
      <Routes>
        <Route path="*" element={<LogIn />} />
        <Route path="/reg" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
