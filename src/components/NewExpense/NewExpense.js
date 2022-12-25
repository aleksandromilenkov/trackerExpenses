import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";
import { useState } from "react";
const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const closeAddNewExpense = () => {
    setAddNewExpense(false);
  };
  const openAddNewExpense = () => {
    setAddNewExpense(true);
  };
  return (
    <div className="new-expense">
      {addNewExpense === true ? (
        <AddNewExpense addNewExpenseHandler={closeAddNewExpense} />
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          addNewExpenseHandler={closeAddNewExpense}
          openAddNewExpense={openAddNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
