import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import React from "react";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Music Book",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const newExpenseDataHandler = (expense) => {
    return setExpenses((prevState) => [expense, ...prevState]);
  };
  return (
    <div>
      <React.StrictMode>
        <NewExpense onGetNewExpense={newExpenseDataHandler} />
        <Expenses item={expenses} />
      </React.StrictMode>
    </div>
  );
}

export default App;
