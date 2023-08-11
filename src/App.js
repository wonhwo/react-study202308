import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import Hello from './Hello';
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
  ];

  console.log('App 실행');
  return (
    <>
    <ExpenseList items={expenses}/>
    <Hello>
      <ul>
        <li>사과</li>
        <li>포도</li>
        <li>복숭아</li>
      </ul>
    </Hello>
    </>
  );
};

export default App;
