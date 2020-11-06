import React, { FunctionComponent } from 'react';
import { Student } from '../models/Student';

export interface StudentComponentProps {
  student: Student;
  isStudying?: Boolean;
}

const StudentComponent: FunctionComponent<StudentComponentProps> = (props) => {

  return <tr><td>{props.student.name}</td><td>{props.student.location}</td><td>{props.student.courseId}</td></tr>;
}

StudentComponent.defaultProps = {
  isStudying: true
};

export default StudentComponent;