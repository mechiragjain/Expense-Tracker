import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initial_expenses = [
  {
    id:'1',
    title:'Health Insurance',
    amount: 4000,
    date: new Date(2021,2,14)
  },
  {
    id:'2',
    title:'Smartphone',
    amount: 44000,
    date: new Date(2021,2,15)
  },
  {
    id:'3',
    title:'Grocery Items',
    amount: 4000,
    date: new Date(2021,3,5)
  },
]

function App() {

    const [expenses, setExpenses] = React.useState(initial_expenses);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
          return [expense, ...prevExpenses];
        });
    };

    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses}/>
      </div>
  );
}

export default App;
