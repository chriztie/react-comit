import React from 'react';
import { Student } from "./models/Student";
import './App.css';

function App() {
  const students: Student[] = [
    { id: 1, name: "Melo", location: "Winnipeg", courseId: 1 },
    { id: 2, name: "Carlos", location: "Winnipeg", courseId: 2 },
    { id: 3, name: "Rohan", location: "Winnipeg", courseId: 3 },
    { id: 4, name: "Christopher", location: "Winnipeg", courseId: 4 },
    { id: 5, name: "Ilya", location: "Winnipeg", courseId: 5 },
    { id: 6, name: "Marcelo", location: "Winnipeg", courseId: 6 },
    { id: 7, name: "Olena", location: "Winnipeg", courseId: 7 },
    { id: 8, name: "Amrita", location: "Winnipeg", courseId: 8 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Course Id</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => { return <tr key={student.id}><td>{student.name}</td><td>{student.location}</td><td>{student.courseId}</td></tr> })}
      </tbody>
    </table>
  );
}

export default App;
