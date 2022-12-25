import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((exp) => (
        <li key={exp.id}>
          <ExpenseItem
            key={exp.id}
            expenseDate={exp.date}
            expenseTitle={exp.title}
            expenseAmount={exp.amount}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
