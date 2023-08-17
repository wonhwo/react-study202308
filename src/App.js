import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기'
  },
  {
    id: 'g2',
    text: 'UI프로그래밍 고수되깅'
  },
];
const App = () => {

  const [goals,setGoals]=useState(DUMMY_DATA);

  const deleteGoalHandler = id=>{
    setGoals((prevGoals)=>prevGoals.filter(goal=>goal.id!==id));
  };

  // courselist 조건부 렌더링
  let listContent = <p style={{
    color:'red',
    fontSize: '2em',
    textAlign:'center',
  }}>목표를 등록해주세요!!</p>

  if(goals.length>0){
    listContent = <CourseList items={goals} onDelete={deleteGoalHandler}/>;
  }

  // Input에게 전달할 함수
  const addGoalHander = text=>{
    console.log('전달 받은 텍스트',text);
    const newGoal = {
      id:Math.random().toString(),
      text:text,
    };
    // 상태변수(배열 수정)
    setGoals(prevGoals=>[...prevGoals,newGoal]);
  };
  // 삭제 이벤트 핸들러를 courseitem까지 내려보내야 함

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHander}/>
      </section>
      <section id="goals">
        {listContent}
      </section>
    </div>
  );
};

export default App;
