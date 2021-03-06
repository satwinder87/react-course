import React, {useState} from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter(expense =>
    expense.date.getFullYear().toString() === filteredYear
  );

  if(filteredYear === "All"){
    return (
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear}
                         onChangeFilter={filterChangeHandler}/>
          <ExpensesChart expenses={props.items}/>
          <ExpensesList items={props.items}/>
        </Card>
    );
  }else {
    return (
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear}
                         onChangeFilter={filterChangeHandler}/>
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}/>
        </Card>
    );
  }

}

export default Expenses;