import { useContext } from "react";
import { StudentContext } from "./StudentProvider";
import ScoreControls from "./ScoreControls";

const StudentList = () => {
  const { students } = useContext(StudentContext);

  return (
    <>
      <ul>
        {students.map((student) => (
          <li key={student.id} style={{ margin: "3px" }}>
            Name : {student.name} <br /> Score : {student.score}
            <ScoreControls id={student.id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default StudentList;
