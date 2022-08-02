import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [students, setStudents] = useState(["souheil"]);
  const [student, setStudent] = useState("");
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecremt = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleChange = (event) => {
    setStudent(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, student]);
    setStudent("");
  };
  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecremt}>-</button>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={student} />
        <button type="submit">Submit</button>
      </form>
      {students.map((elt, index) => (
        <h1 key={index}>{elt}</h1>
      ))}
    </div>
  );
}

export default App;
