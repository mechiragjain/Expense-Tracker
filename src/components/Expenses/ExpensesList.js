import React from 'react';
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css'


function ExpensesList(props){

    if(props.filteredExpenses.length === 0){
      return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }

    return (<ul className="expenses-list">
      {props.filteredExpenses.map((item)=>{
        return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
      })}
    </ul>);
}

export default ExpensesList;
