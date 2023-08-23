import React from 'react';
import Header from './components/Food/Layout/Header';
import Meals from './components/Food/Meals/Meals';
import AvailableMeals from './components/Food/Meals/AvailableMeals';

const App = () => {
  return (
    <>
    <Header/>
  <div id='main'>
    <Meals/>
    <AvailableMeals/>
  </div>
    </>
  )

};

export default App;
