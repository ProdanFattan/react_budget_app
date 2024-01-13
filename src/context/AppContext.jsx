import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
const initialState = {
  budget: 2000,
  expenses: [
    { id: 1231232, name: "Shopping", cost: 250 },
    { id: 1231233, name: "Holiday", cost: 300 },
    { id: 1231234, name: "Transportation", cost: 100 },
    { id: 1231235, name: "Fuel", cost: 50 },
    { id: 1231236, name: "Child Care", cost: 500 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
