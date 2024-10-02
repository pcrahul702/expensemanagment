// src/App.tsx
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

interface Expense {
  id: number;
  description: string;
  amount: number;
}

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingExpense, setEditingExpense] = useState<Expense | any>(null);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (expense: Expense) => {
    setEditingExpense(expense); 
  };

  const updateExpense = (updatedExpense: Expense) => {
    setExpenses(
      expenses.map((expense) => (expense.id === updatedExpense.id ? updatedExpense : expense))
    );
    setEditingExpense(null); 
  };

  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Expense Management</h1>
      <ExpenseForm
        addExpense={addExpense}
        editingExpense={editingExpense}
        editExpense={updateExpense}
      />
    
      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense} 
      />
       <h2 className="text-xl mt-4">Total Expenses: ${totalAmount}</h2>
    </div>
  );
};

export default App;
