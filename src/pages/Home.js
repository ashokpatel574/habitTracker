import React, { useState } from "react";
import { useData } from "../context/DataContext";
import HabitModal from "../components/HabitModal";
import DisplayHabitModal from "../components/DisplayHabitModal";

const Home = () => {
  const {
    state: { habitData },
    dispatch,
    modalOpen,
    setModalOpen,
    setEditHabit,
    setHabitInputName,
    setHabitPlan,
    displayHabitData,
    setDisplayHabitData,
  } = useData();

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteHabit",
      payload: id,
    });
  };

  const editHandler = (id) => {
    const getEditdata = habitData.find((item) => item.id === id);
    const { name, repeat, goal, workoutTime, startDate } = getEditdata;
    setHabitInputName(name);
    setHabitPlan({
      repeat: repeat,
      goal: goal,
      workoutTime: workoutTime,
      startDate: startDate,
    });

    setEditHabit({ id: id, editModal: true });
    setModalOpen(!modalOpen);
  };

  const archiveHandler = (id) => {
    dispatch({
      type: "archiveHabit",
      payload: id,
    });
  };

  const habitdataDisplayHandler = (id) => {
    const getdata = habitData.find((item) => item.id === id);
    setDisplayHabitData({
      status: true,
      data: { ...getdata },
    });
  };

  const modalhandler = () => {
    setModalOpen(!modalOpen);
    setHabitInputName("");
    setHabitPlan({
      repeat: "",
      goal: "",
      workoutTime: "",
      startDate: "",
    });
  };

  return (
    <section className="home_container">
      <div className="habitBtn-container">
        <button onClick={modalhandler} className="addHabitBtn">
          Add Habit
        </button>
      </div>

      {modalOpen && <HabitModal />}

      <div>
        <ul className="habitList">
          {habitData.map((item) => {
            const { id, name, goal, archive } = item;
            return (
              <li key={id} className="habitListItem">
                <p className="name" onClick={() => habitdataDisplayHandler(id)}>
                  {name}
                </p>
                <p className="goal" onClick={() => habitdataDisplayHandler(id)}>
                  {goal}
                </p>
                <p className="habitListItem-btn">
                  <span onClick={() => editHandler(id)}>Edit</span>
                  <span onClick={() => deleteHandler(id)}>Delete</span>
                  <span onClick={() => archiveHandler(id)}>
                    {!archive ? "Archive" : "UnArchive"}
                  </span>
                </p>
              </li>
            );
          })}
        </ul>

        {displayHabitData.status && <DisplayHabitModal />}
      </div>
    </section>
  );
};

export default Home;
