import React, { useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = ({ onAddUser }) => {
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
    if (userValue.username.trim() === '' || userValue.age.trim() === '') {
      setError({
        title: '유효하지 않은 입력 값입니다.',
        message: '입력값은 공백이 허용 되지 않습니다.',
      });
      return;
    }
    if (+userValue.age < 1) {
      setError({
        title: '유효하지 않은 나잇값입니다.',
        message: '나이의 입력값은 1이상으로 해주세요',
      });
      return;
    }
    onAddUser(userValue);
    setUserValue({
      username: '',
      age: '',
    });
  };

  //   에러 상태 관리
  const [error, setError] = useState(null);
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={()=>{setError(null)}}/>}
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
