import React from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {

    const [year, setYear] = React.useState('2021');

    const filterChangeHandler = (selectedYear) => {
      setYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === year;
    })

    return (
        <div>
          <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={year} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
          </Card>
        </div>
    );
}

export default Expenses;
