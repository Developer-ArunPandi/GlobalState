import { createContext, useReducer } from "react";

const initialStudentData = [
  { id: 1, name: "Arun", score: 85 },
  { id: 2, name: "Yuvi", score: 85 },
  { id: 3, name: "Santhosh", score: 85 },
];

export const StudentContext = createContext(initialStudentData);

const studentReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_SCORE":
      return state.map((student) =>
        student.id === action.payload.id
          ? { ...student, score: student.score + 1 }
          : student
      );
    case "DECREMENT_SCORE":
      return state.map((student) =>
        student.id === action.payload.id
          ? { ...student, score: student.score - 1 }
          : student
      );
      default:
      return state;
  }
};

const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialStudentData)  ;

    return (
        <StudentContext.Provider value={{ state, dispatch }}>
            {children}
        </StudentContext.Provider>
    );
};

export default StudentProvider;