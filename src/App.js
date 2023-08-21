import React, { useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Home from './components/SideEffect/Home';
import Login from './components/SideEffect/Login/Login';

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);
    setUserList((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };
  return (
    <>
      <MainHeader />
      <main>
        {/* <Home /> */}
        <Login/>
      </main>
    </>
  );
};

export default App;
