import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../../UI/Card';
import styles from './Login.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';
import Input from '../../UI/Input/Input';

// 리듀서 함수
/*
  이 컴포넌트의 모든 상ㅇ태와 상태변경을 중앙제어하는 함수
  컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하므로
  컴포넌트 바깥쪽에 선언하는게 일반적입니다.

  첫번째 파라미터 state : 변경전의 상태 값
  두번째 파라미터 action : dispatch함수(상태변경 등의 행동)가 전달한 상태변경객체
  retrun : 관리할 상태값들을 반환
*/
const emailReducer = (state, action) => {
  // console.log('email reducer call!');
  // console.log(`state : `,state);
  // console.log(`action : `,action);

  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isVaild: state.value.includes('@'),
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      value: state.value,
      isVaild: state.value.includes('@'),
    };
  }

  return {
    value: '',
    isVaild: null,
  };
};
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isVaild: action.val.trim().length > 6,
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      value: state.value,
      isVaild: state.value.trim().length > 6,
    };
  }

  return {
    value: '',
    isVaild: null,
  };
};

const Login = () => {
  const { onLogin } = useContext(AuthContext);
  // email reducer 사용하깅
  /* 파라미터1 = reducer function : 위에서 만든 리듀서 함수
   파라미터2 = initial state : 초기 상태
   emailState :이메일 상태변수
   dispatchEmail: 변경하는 상태변수 */
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isVaild: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isVaild: null,
  });
  //   이메일, 패스워드가 둘다 동시에 정상적인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  // emailState의 isValid가 변경됐을 때만 useEffect를 실행하게 하려면
  // isValid를 디스트럭쳐링 한다.
  const { isVaild: emailIsValid } = emailState;
  const { isVaild: passwordIsValid } = passwordState;

  // 입력란을 모두 체크하여 form의 버튼 disabled를 해제하는 상태변수
  // formIsValid의 사이드 이펙트를 처리하는 영역

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('useEffect call in Login.js');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);

    // cleanup 함수 - 컴포넌트가 업데이트가 되거나 없어지기 전에 실행
    return () => {
      console.log('clean up!!');
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);
  //이 배열에 상태변수를 넣어주면 그 상태변수가 바뀔때마다 useEfect를 재실행 함
  const emailChangeHandler = (e) => {
    // reducer의 상태변경은 dispatch함수를 통해 처리
    /* param1 - action객체(리듀서 함수의 2번째 파라미터)*/
    dispatchEmail({
      type: 'USER_INPUT',
      val: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: 'USER_INPUT',
      val: e.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_VALIDATE',
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_VALIDATE',
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          type={'email'}
          id={'email'}
          label={'email'}
          value={emailState.value}
          invalid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          type={'password'}
          id={'password'}
          label={'password'}
          value={passwordState.value}
          invalid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
         <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
