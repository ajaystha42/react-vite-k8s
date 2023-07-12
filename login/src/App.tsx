import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { jwt } from "./services/login";

function App() {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const obj = JSON.parse(userInfo);
      jwt.next(obj?.token);
      setUser(obj);
    }
  }, []);
  return <Login user={user} />;
}

export default App;
