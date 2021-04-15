import React from 'react';
import Expenses from './components/Expenses/Expenses';

function App() {
    const date = new Date(2021, 4, 15);
    return (
      <div>
        <h2>Let's get started!</h2>
        <Expenses title="Car Insurance" amount="200" date={date}/>
    </div>
  );
}

export default App;
