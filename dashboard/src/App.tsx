import { useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { jwt } from "loginApp/loginService";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const userObj = JSON.parse(userInfo);
      jwt.next(userObj.token);
      // navigate(-1);
    }
  }, []);
  return <Dashboard />;
}

export default App;
