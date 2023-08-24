import React from 'react';
import styles from './Cart.module.scss';
import CartModal from '../../UI/Modal/CartModal';

const DUMMY_CART = [
    {
      id: 'c1',
      name: '스시',
      amount: 2,
      price: 46000,
    },
    {
      id: 'c2',
      name: '띠드버거',
      amount: 1,
      price: 12000,
    },
  ];
  
const Cart = ({onHideCart}) => {
  const {'cart-tems':cartItemStyle, total, actions, 'button--alt': btnAlt, button } = styles;
  return (
    <CartModal onHideCart={onHideCart}>
      {/*주문 내역 */}
      <ul className={cartItemStyle}></ul>
      {DUMMY_CART.map(cartItem=>(<li key={cartItem.id}>{cartItem.name}</li>))}
      <div className={total}>
        <span>주문 총액</span>
        <span>50,000원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={onHideCart}>닫기</button>
        <button className={button}>주문</button>
      </div>
    </CartModal>
  );
};

export default Cart;
