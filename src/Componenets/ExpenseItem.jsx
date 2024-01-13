import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };
  return (
    <>
      <li className="d-flex list-group-item justify-content-between aligm-items-center">
        {name}
        <div>
          <span className="mr-3">${cost}</span>
          <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
        </div>
      </li>
    </>
  );
};

export default ExpenseItem;
