// rafce
import React from 'react';
import Card from './components/UI/Card';

const Hello = (props) => {
  console.log("hello componenet");
  console.log(props);
  return (
    <Card>
  <div>
    
    {props.children}
    Hello React
  </div>
  </Card>
  );
};

export default Hello;
