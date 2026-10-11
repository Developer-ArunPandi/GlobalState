import React, { useContext } from 'react';
import { StudentContext } from './StudentProvider';

const ScoreControls = ({ id }) => {
  const { dispatch } = useContext(StudentContext);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT_SCORE", payload: { id } });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT_SCORE", payload: { id } });
  };

  return (
    <>
      <button onClick={handleIncrement} style={{ margin: "3px" }}>Increment Score</button>
      <button onClick={handleDecrement} style={{ margin: "3px" }}>Decrement Score</button>
    </>
  );
};

export default ScoreControls;