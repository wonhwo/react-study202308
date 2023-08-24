import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = { items: [] };

// 리듀서 함수 정의 : 여러가지 복잡한 상태관리를 중앙집중화
// stae:업데이트 이전상태
// action : 어떤 업데이트를 하는지에 대한 정보와 필요 값

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = [...state.items, action.item];
    return { items: updatedItems };
  } else if (action.type === 'REMOVE') {
    // 새로운 배열을 만들어서 상태변경(필수)
    const removeItems = state.items.filter(item => item.id !== action.id);
    return { items: removeItems };
  }

  return defaultState;
};

const CartProvider = ({ children }) => {
  // 리듀서 생성
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  // Provider의 value는 실제로 관리할 데이터 객체

  const cartContext = {
    items:cartState.items,
    addItem: item => {
      // 액션함수는 반드시 무슨액션을 하는지와 액션에 필요한 값을 전달
      dispatchCartAction({
        type: 'ADD',
        item: item,
      });
    },
    removeItem: (id) => {
      dispatchCartAction({
        type: 'REMOVE',
        id: id,
      });
    },
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
