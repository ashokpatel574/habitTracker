import React, { createContext, useContext, useReducer, useState } from "react";
import { initialState, DataReducer } from "../reducer/DataReducer";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [modalOpen, setModalOpen] = useState(false);

  const [habitInputName, setHabitInputName] = useState("");
  const [habitPlan, setHabitPlan] = useState({
    repeat: "",
    goal: "",
    workoutTime: "",
    startDate: "",
  });
  const [edithabit, setEditHabit] = useState({
    id: "",
    editModal: false,
  });

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        modalOpen,
        setModalOpen,
        habitInputName,
        setHabitInputName,
        habitPlan,
        setHabitPlan,
        edithabit,
        setEditHabit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);
