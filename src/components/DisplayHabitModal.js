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
      <section className="displaydataModal">
        <div className="displayhabitdata">
          <span onClick={closeDisplayData}>X</span>
          <div className="displayhabitdata_container">
            <p className="name">Activity: {name}</p>
            <p>Activity repeat: {repeat} time Activity time</p>
            <p>Goal: {goal}</p>
            <p>Activity time: {workoutTime}</p>
          </div>
        </div>
      </section>
    );
  }
};

export default DisplayHabitModal;
