import React from "react";
import "./styles.css";

const profile = {
  name: "Aarush",
  age: 13
};

export default function App() {
  const [person, setPerson] = React.useState(profile);
  const sendName = () => {
    var newName = document.getElementById("name");
    setPerson({ ...person, name: newName.value });
    newName.value = "";
  };
  const sendAge = () => {
    var newAge = document.getElementById("age");
    setPerson({ ...person, age: newAge.value });
    newAge = "";
  };
  return (
    <div className="App">
      <h1>{person.name}</h1>
      <input id="name" placeholder="enter new name" />
      <button onClick={sendName}>Submit Name</button>
      <h2>{person.age}</h2>
      <input id="age" placeholder="enter new age" />
      <button onClick={sendAge}>Submit Age</button>
    </div>
  );
}
