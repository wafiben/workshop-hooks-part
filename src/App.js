import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ email: "", name: "" });
  const handleChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handleChangeName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, user]);

  };
  const handleClear=()=>{
    setUser({ email: "", name: "" });
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" onChange={handleChangeEmail} value={user.email} />
        </div>
        <div>
          <input type="text" onChange={handleChangeName} value={user.name} />
        </div>
        <button type="submit">Submit</button>
        <button onClick={handleClear}>clear</button>
      </form>
      {users.map((elt, index) => (
        <div key={index}>
          <h1> {elt.name}</h1>
          <h1> {elt.email}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
