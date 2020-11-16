import React, { useState } from 'react';
import './App.css';

function App() {

  const [newStudent, setNewStudent] = useState({ name: '', location: '', courseId: 0 });

  const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    setNewStudent({ ...newStudent, [currentTarget.name]: currentTarget.value })
  }

  return (
    <form>
      <table>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td><input name="name" type="text" onChange={handleChange} value={newStudent.name}></input></td>
        </tr>
        <tr>
          <td>Location</td>
          <td>:</td>
          <td><input name="location" type="text" onChange={handleChange} value={newStudent.location}></input></td>
        </tr>
        <tr>
          <td>Course Id</td>
          <td>:</td>
          <td><input name="courseId" type="number" onChange={handleChange} value={newStudent.courseId}></input></td>
        </tr>
      </table>
      <input type="submit" />
    </form>
  );
}

export default App;
