import React, { useContext } from 'react'
import { StudentContext } from './StudentProvider.jsx';
const StudentSummary = () => {
    const state=useContext(StudentContext);

  return (
    <>
      <h3>Total Student : {state.length}</h3>
    </>
  )
}

export default StudentSummary
