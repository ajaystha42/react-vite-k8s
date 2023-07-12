import { useEffect, useState } from "react";
import Login from "./components/Login/Login";

function App() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);
  return <Login user={user} />;
}

export default App;
