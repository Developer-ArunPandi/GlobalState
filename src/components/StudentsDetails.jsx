
const StudentsDetails = () => {
  const students = [
    { id: "s1", name: "Arun", track: "React", score: 85 },
    { id: "s2", name: "Priya", track: "React", score: 92 },
    { id: "s3", name: "Kumar", track: "React", score: 76 },
  ];

  const sortedStudents = students.sort((a, b) => b.score - a.score);
  
  const StudentCard = ({ name, track, score }) => {

    return (
      <>
        <h3>Name : {name}</h3>
        <h3>Track : {track}</h3>
        <h3>Score : {score}</h3>
      </>
    );
  };

  return (
    <>
      {sortedStudents?.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          track={student.track}
          score={student.score}
        />
      ))}
    </>
  );
};

export default StudentsDetails;
