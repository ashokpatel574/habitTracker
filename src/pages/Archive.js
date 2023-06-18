import React from "react";
import { useData } from "../context/DataContext";

const Archive = () => {
  const {
    state: { habitData },
  } = useData();

  return (
    <div className="archive-container">
      <h3>Archive </h3>
      <ul>
        {habitData
          .filter((item) => item.archive)
          .map((item) => {
            const { id, name, repeat, goal, workoutTime } = item;
            return (
              <li key={id}>
                <p>Activity: {name}</p>
                <p>
                  {repeat} - {goal}
                </p>
                <p>Workout Time: {workoutTime}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Archive;
