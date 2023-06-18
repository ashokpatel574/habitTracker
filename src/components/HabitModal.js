import React, { useState } from "react";
import {
  repeatState,
  goalState,
  workoutTimeState,
  startDateState,
} from "../constant";
import { useData } from "../context/DataContext";

const HabitModal = () => {
  const {
    dispatch,
    habitInputName,
    setHabitInputName,
    habitPlan,
    setHabitPlan,
    modalOpen,
    setModalOpen,
    edithabit,
    setEditHabit,
  } = useData();

  const inputHandler = (e) => {
    setHabitInputName(e.target.value);
  };

  const habitPlanHandler = (e) => {
    const { name, value } = e.target;
    setHabitPlan(() => ({
      ...habitPlan,
      [name]: value,
    }));
  };

  const habitModalClosehandler = () => {
    setHabitPlan({
      repeat: "",
      goal: "",
      workoutTime: "",
      startDate: "",
    });

    setModalOpen(!modalOpen);
    setEditHabit({
      id: "",
      editModal: false,
    });
  };

  const habitAddHandler = () => {
    edithabit.editModal
      ? dispatch({
          type: "editHabit",
          payload: {
            name: habitInputName,
            habitplan: habitPlan,
            id: edithabit.id,
          },
        })
      : dispatch({
          type: "addHabit",
          payload: {
            name: habitInputName,
            habitplan: habitPlan,
          },
        });

    setModalOpen(!modalOpen);
    setEditHabit({
      id: "",
      editModal: false,
    });
  };

  return (
    <div className="modal_container">
      <h3>New Habit</h3>
      <div className="modal_input-container">
        <label>Habit Name</label>
        <input
          type="text"
          className="habitName"
          placeholder="Enter here"
          value={habitInputName}
          onChange={inputHandler}
        />
      </div>
      <div className="modal_drop-container">
        <div>
          <label htmlFor="repeat">Repeat</label>
          <select
            id="repeat"
            name="repeat"
            onChange={habitPlanHandler}
            value={habitPlan.repeat}
          >
            <option value="" disabled="disabled">
              Choose habit repeat
            </option>
            {repeatState.map((item) => (
              <React.Fragment key={item}>
                <option value={item}>{item}</option>
              </React.Fragment>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="goal">Goal</label>
          <select
            id="goal"
            name="goal"
            onChange={habitPlanHandler}
            value={habitPlan.goal}
          >
            <option value="" disabled="disabled">
              Choose goal
            </option>
            {goalState.map((item) => (
              <React.Fragment key={item}>
                <option value={item}>{item}</option>
              </React.Fragment>
            ))}
          </select>
        </div>
      </div>

      <div className="modal_drop-container">
        <div>
          <label htmlFor="workoutTime">Times of Day</label>
          <select
            id="workoutTime"
            name="workoutTime"
            onChange={habitPlanHandler}
            value={habitPlan.workoutTime}
          >
            <option value="" disabled="disabled">
              Choose time of day
            </option>
            {workoutTimeState.map((item) => (
              <React.Fragment key={item}>
                <option value={item}>{item}</option>
              </React.Fragment>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <select
            id="startDate"
            name="startDate"
            onChange={habitPlanHandler}
            value={habitPlan.startDate}
          >
            <option value="" disabled="disabled">
              Choose Start date
            </option>
            {startDateState.map((item) => (
              <React.Fragment key={item}>
                <option value={item}>{item}</option>
              </React.Fragment>
            ))}
          </select>
        </div>
      </div>
      <div className="modal-btnContainer">
        <button className="delete" onClick={habitModalClosehandler}>
          Cancel
        </button>
        <button onClick={habitAddHandler}>Add</button>
      </div>
    </div>
  );
};

export default HabitModal;
