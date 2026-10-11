import StudentCard from "./StudentCard";

const StudentList = () => {
  const studentInformation = [
    { id: 1, title: "art", children: "artChild" },
    { id: 2, title: "art_2", children: "artChild_2" },
    { id: 3, title: "art_3", children: "artChild_3" },
  ];

  return (
    <>
      {studentInformation?.map((student) => (
        <StudentCard title={student.title} children={student.children} />
      ))}
    </>
  );
};

export default StudentList;
