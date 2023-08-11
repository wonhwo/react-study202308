import React from 'react';
import './ExpenseItem.css';
import ExpensDate from './ExpenseDate';
import Card from './UI/Card';
import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';


const ExpenseItem = ({ title, price: prosPrice, date }) => {

  // let itemTitle = title;

  // 값이 변경되어 화면에 반영되어야 하는 값들은
  // useState훅을 통해 상태변수로 관리한다.

  // useState는 배열을 리턴한다 첫번째 요소는 관리할 상태값
  // 두번째 요소는 상태값을 변경하는 setter함수
  let [itemTitle,setItemTitle] = useState(title);
  // console.log(stateItem);
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  //날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  //숫자를 원화 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(prosPrice);

  const clickHandler = (e) => {
    // itemTitle='안녕';
    // console.log(itemTitle);
    //메롱이 새로운 값이 되며 기존 스냅샷과 다를경우 화면을 리렌더링하고 같으면 하지않음
    // setItemTitle((sanpshot)=>{
    //   console.log(`${sanpshot}`);
    //   return '메롱'; 
    // });
    setItemTitle('메렁');
  };

  return (
    <Card className="expense-item">
      <ExpensDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button id="btn" onClick={clickHandler}>
        수정
      </button>
      <button
        id="btn"
        onClick={(e) => {
          console.log('삭제!');
        }}
      >
        삭제
      </button>
    </Card>
  );
};

export default ExpenseItem;