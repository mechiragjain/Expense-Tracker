import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const date = new Date(2021, 4, 15);

    const addExpenseHandler = (expense) => {
        console.log(expense);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses title="Car Insurance" amount="200" date={date}/>
    </div>
  );
}

export default App;
