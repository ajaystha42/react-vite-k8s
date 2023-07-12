import { useEffect } from "react";
import { jwt } from "./services/login";
import Login from "./components/Login/Login";

function App() {
  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const obj = JSON.parse(userInfo);
      jwt.next(obj?.token);
    }
  }, []);
  return <Login />;
}

export default App;
