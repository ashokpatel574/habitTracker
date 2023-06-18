import React from "react";
import { useData } from "../context/DataContext";

const DisplayHabitModal = ({ state }) => {
  const {
    state: { displayHabitData },
  } = useData();

  const { displayModalData, setDisplayModalData } = state;

  console.log(state);

  if (displayHabitData) {
    const { name, goal, repeat, workoutTime } = displayHabitData;

    return (
      <div className="displayhabitdata">
        <span onClick={setDisplayModalData(!displayModalData)}>X</span>
        <div className="displayhabitdata_container">
          <p className="name">Activity: {name}</p>
          <p>Activity repeat: {repeat} time Activity time</p>
          <p>Goal: {goal}</p>
          <p>Activity time: {workoutTime}</p>
        </div>
      </div>
    );
  }
};

export default DisplayHabitModal;
