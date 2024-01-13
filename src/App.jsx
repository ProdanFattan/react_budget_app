import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./Componenets/Budget";
import Remaining from "./Componenets/Remaining";
import ExpenseTotal from "./Componenets/ExpenseTotal";
import ExpenseList from "./Componenets/ExpenseList";
import AddExpenseFrom from "./Componenets/AddExpenseFrom";
import { AppProvider } from "./context/AppContext";
function App() {
  return (
    <>
      <AppProvider>
        <div className="container">
          <h1 className="mt-3">My Budget Planner</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          </div>
          <h3 className="mt-3">Expenses</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
          <h4 className="mt-3">Add Expense</h4>
          <div className="mt-3">
            <div className="col-sm">
              <AddExpenseFrom />
            </div>
          </div>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
