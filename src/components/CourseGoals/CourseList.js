import React from 'react'
import './CourseList.css';
import CourceItem from './CourceItem';
const CourseList = ({items,onDelete}) => {
  return (
    <ul className='goal-list'>
      {items.map((item)=>{
        return <CourceItem  item={item} key={item.id} onDelete={onDelete}/>
      })}
    </ul>
  );
};

export default CourseList