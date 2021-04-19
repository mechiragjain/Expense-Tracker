import React from 'react';
import './NewExpense.css'

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isForm, setIsForm] = React.useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsForm(false);
    }

    const isFormHandler = () =>{
      setIsForm(true);
    }

    const stopIsForm = () =>{
      setIsForm(false);
    }

    return <div className="new-expense">
        {!isForm ? <button onClick={isFormHandler}>Add New Expense</button> :
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopIsForm} />}
    </div>
}

export default NewExpense;
