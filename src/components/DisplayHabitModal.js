import React from "react";
import { useData } from "../context/DataContext";

const DisplayHabitModal = () => {
  const { displayHabitData, setDisplayHabitData } = useData();

  const closeDisplayData = () => {
    setDisplayHabitData({
      status: false,
      data: {},
    });
  };

  if (displayHabitData) {
    const { name, goal, repeat, workoutTime } = displayHabitData.data;

    return (
      <div
        className={`displaydataModal-container ${
          displayHabitData.status && "active"
        }`}
      >
        <div className="displaydataModal">
          <div className="displayhabitdata">
            <span onClick={closeDisplayData}>X</span>
            <div className="displayhabitdata_container">
              <p className="name">Activity: {name}</p>
              <p>Activity repeat: {repeat} </p>
              <p>Goal: {goal}</p>
              <p>Activity time: {workoutTime}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DisplayHabitModal;
