import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [expenseToggle,setExpenseToggle] = useState(false);
  const stopInsertModeHandler = ()=>{
    setExpenseToggle(false);
  };

  let newExpenseContent = <button onClick={()=>setExpenseToggle(true)}>새로운 지출 추가하기</button>

  if(expenseToggle){
    newExpenseContent = <ExpenseForm onSaveExpense={onAddExpense} onToggle={stopInsertModeHandler}></ExpenseForm>
  }
  return (
    <div className="new-expense">
      {newExpenseContent}
    </div>
  );
};

export default NewExpense;
