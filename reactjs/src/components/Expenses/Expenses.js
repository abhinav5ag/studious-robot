import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import "./ExpenseList";

import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [newYear, setNewYear] = useState("2020");
  const handleYearChange = (changedYear) => {
    setNewYear(changedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === newYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter defaultYear={newYear} onYearChange={handleYearChange} />
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
