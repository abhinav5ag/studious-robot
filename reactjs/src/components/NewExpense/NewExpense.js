import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const handleExpenseData = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random(),
    };

    props.onReceiveData(expenseData);
  };

  const returnForm = () => {
    setIsEditing(true);
  };

  const onCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={returnForm}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSubmitForm={handleExpenseData}
          onClickCancel={onCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
