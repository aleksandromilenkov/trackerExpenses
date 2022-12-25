import "./ExpenseDate.css";

function ExpenseDate(props) {
  const { expenseDate } = props;
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const year = expenseDate.getFullYear();
  const date = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__date">{date}</div>
    </div>
  );
}

export default ExpenseDate;
