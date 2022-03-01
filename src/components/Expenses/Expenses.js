import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  if(filteredYear === "All"){
    return (
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear}
                         onChangeFilter={filterChangeHandler}/>
          {props.items.map((expense) => (
              <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
              />))}
        </Card>
    );
  }else {
    return (
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear}
                         onChangeFilter={filterChangeHandler}/>
          {props.items.filter(expense => expense.date.getFullYear() === parseInt(filteredYear))
          .map((expense) => (
              <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
              />))}
        </Card>
    );
  }

}

export default Expenses;