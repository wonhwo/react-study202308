import React from 'react';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      title:'바나나',
      price: 2000,
      date: new Date(2023, 3-1, 23)
    },
    {
      title:"버거킹",
      price:20000,
      date: new Date(2023, 7-1, 23)
    },
    {
      title:"딸기",
      price:2000,
      date: new Date(2023, 5-1, 23)
    }
  ]
  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </>
  );
};

export default App;
