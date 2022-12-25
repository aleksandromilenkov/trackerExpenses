import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (exp) => exp.date.getFullYear() === +filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
