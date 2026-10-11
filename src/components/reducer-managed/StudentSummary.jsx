import React, { useContext } from 'react';
import { StudentContext } from './StudentProvider.jsx';
import StudentList from './StudentList.jsx';

const StudentSummary = () => {
  const { students } = useContext(StudentContext);
  const totalStudent = students.length;

  let totalStudentScore = 0;
  for (const student of students) {
    totalStudentScore += student.score;
  }

  const averageScore = totalStudent > 0 ? (totalStudentScore / totalStudent).toFixed(2) : 0;

  let topScore = 0;
  for (const student of students) {
    if (student.score > topScore) {
      topScore = student.score;
    }
  }
  const topPerformers = students.find(student => student.score === topScore);

  return (
    <>
      <h3>Total Student : {totalStudent}</h3>
      <h3>Average Score : {averageScore}</h3>
      <h3>Top Performer Name : {topPerformers?.name} <br />
          Score : {topPerformers?.score}</h3>
          <StudentList/>
    </>
  );
};

export default StudentSummary;