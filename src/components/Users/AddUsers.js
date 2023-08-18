import React, { useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = ({onAddUser}) => {
  const [userValue, setUserValue] = useState({
    username: '',
    age: '',
  });
  const usernameChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      username: e.target.value,
    }));
  };
  const ageChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      age: e.target.value,
    }));
  };
  const userSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userValue);
    if (userValue.username.trim() === '' || userValue.age.trim()==='') {
      return;
    }
    if (+userValue.age < 1) return;
    onAddUser(userValue);
    setUserValue({
      username: '',
      age: '',
    });
  };
  return (
    <>
    <ErrorModal title={"아무제목"} message={"암냠냠"}/>
    <Card className={styles.input}>
      <form onSubmit={userSubmitHandler}>
        <label htmlFor="username">이름</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={userValue.username}
        />
        <label htmlFor="age">나이</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={userValue.age}
        />
        <Button type="submit">가입하기</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUsers;
