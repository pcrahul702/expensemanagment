
import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface Props {
  expenses: Expense[];
  deleteExpense: (id: number) => void;
  editExpense: (expense: Expense) => void;
}

const ExpenseList: React.FC<Props> = ({ expenses, deleteExpense, editExpense }) => {
  return (
    <ul className="w-1/2 mt-10">
      {expenses.map((expense) => (
        <li key={expense.id} className="flex justify-between mb-2 border-2 py-2 px-5">
          <span>
            {expense.description} - ${expense.amount}
          </span>
          <div>
            <button onClick={() => editExpense(expense)} className="bg-yellow-500 text-white p-1 rounded mr-2">
              Edit
            </button>
            <button onClick={() => deleteExpense(expense.id)} className="bg-red-500 text-white p-1 rounded">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
