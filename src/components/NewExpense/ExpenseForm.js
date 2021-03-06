import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  /*
  let stateObject = {
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  };

  const [state, setState] = useState(stateObject);
*/
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //console.log(enteredTitle);
    /*
  setState({
    ...state,
    enteredTitle: event.target.value,
  });
    setState((prevState) => {
      return {...prevState, enteredTitle: event.target.value};
    });
    console.log(state);
     */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //console.log(enteredAmount);
    /*
   setState((prevState) => {
     return {...prevState, enteredAmount: event.target.value};
   });
   console.log(state);
    */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(enteredDate);

    /*

    setState((prevState) => {
      return {...prevState, enteredDate: event.target.value};
    });
    console.log(state);

     */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.length > 0 && enteredAmount.length > 0
        && enteredDate.length > 0) {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
      };

      props.onSaveExpenseData(expenseData);
    }

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  };

  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={enteredTitle}
                   onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' value={enteredAmount} min="0.01" step="0.01"
                   onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type='date' value={enteredDate} min="2019-01-01"
                   max="2022-12-31"
                   onChange={dateChangeHandler}/>
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancelled}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
  );

}

export default ExpenseForm;