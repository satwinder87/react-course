import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowExpenseForm('false');

  };

  const cancelledExpenseDataHandler = () => {
    setShowExpenseForm(false);
  }

  const buttonClickedHandler = () => {
    setShowExpenseForm(true);
  };

  if (showExpenseForm === true) {
    return <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelled={cancelledExpenseDataHandler}/>
    </div>

  } else {
    return <div className="new-expense">
      <button onClick={buttonClickedHandler}>Add New Expense</button>
    </div>

  }

}

export default NewExpense;