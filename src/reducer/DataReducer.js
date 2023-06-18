import { v4 as uuid } from "uuid";

export const initialState = {
  habitData: [
    {
      id: uuid(),
      name: "Running",
      repeat: "Daily",
      goal: "5 times in week",
      workoutTime: "morning",
      startDate: "Today",
      archive: false,
    },
    {
      id: uuid(),
      name: "Swimming",
      repeat: "Daily",
      goal: "2 times in week",
      workoutTime: "morning",
      startDate: "Tommorrow",
      archive: false,
    },
  ],

  displayHabitData: {},
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "addHabit": {
      const newhabitObj = {
        id: uuid(),
        name: action.payload.name,
        repeat: action.payload.habitplan?.repeat,
        goal: action.payload.habitplan?.goal,
        workoutTime: action.payload.habitplan?.workoutTime,
        startDate: action.payload.habitplan?.startDate,
        archive: false,
      };
      return {
        ...state,
        habitData: [...state.habitData, newhabitObj],
      };
    }

    case "editHabit": {
      const edithabitObj = {
        name: action.payload.name,
        repeat: action.payload.habitplan?.repeat,
        goal: action.payload.habitplan?.goal,
        workoutTime: action.payload.habitplan?.workoutTime,
        startDate: action.payload.habitplan?.startDate,
      };
      return {
        ...state,
        habitData: [
          ...state.habitData.map((item) => {
            return item.id === action.payload.id
              ? { ...item, ...edithabitObj }
              : item;
          }),
        ],
      };
    }

    case "deleteHabit": {
      return {
        ...state,
        habitData: [
          ...state.habitData.filter((item) => item.id !== action.payload),
        ],
      };
    }

    case "archiveHabit": {
      return {
        ...state,
        habitData: [
          ...state.habitData.map((item) =>
            item.id === action.payload
              ? { ...item, archive: !item.archive }
              : item
          ),
        ],
      };
    }

    case "showhabitData": {
      const getdata = state.habitData.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        displayHabitData: getdata,
      };
    }

    default:
      return state.habitData;
  }
};
