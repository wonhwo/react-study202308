import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({ items }) => {
  const onsendHandler=(selectedYear)=>{
    console.log("왜 안대");
    console.log(selectedYear);
  }
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter onsendHandler={onsendHandler}/>
        <ExpenseItem
          title={items[0].title}
          price={items[0].price}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          price={items[1].price}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          price={items[2].price}
          date={items[2].date}
        />
      </Card>
    </>
  );
};

export default ExpenseList;
