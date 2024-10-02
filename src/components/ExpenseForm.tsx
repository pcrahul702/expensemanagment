
import React, { useState } from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface Props {
  addExpense: (expense: Expense) => void;
  editingExpense?: Expense;
  editExpense: (expense: Expense) => void;
}

const ExpenseForm: React.FC<Props> = ({ addExpense, editingExpense, editExpense }) => {
  const [description, setDescription] = useState(editingExpense ? editingExpense.description : "");
  const [amount, setAmount] = useState(editingExpense ? editingExpense.amount : "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingExpense) {
      editExpense({ ...editingExpense, description, amount: Number(amount) });
    } else {
      addExpense({ id: Date.now(), description, amount: Number(amount) });
    }
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border rounded p-2 mr-2"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border rounded p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {editingExpense ? "Edit Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;
