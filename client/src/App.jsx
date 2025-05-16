import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("http://localhost:3000/users/list");
      const data = await response.json();
      setUsers(data?.data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h3>Users List</h3>
      <div>
        <ul>
          {users.length > 0 &&
            users.map((user) => <li key={user._id}> {user.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
