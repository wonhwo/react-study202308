import React from 'react'
import styles from './Header.module.scss';
import foodImage from '../../../assets/food.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = ({onShowCart}) => {
    const {header,'main-image':mainImage}=styles;
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={mainImage}>
        <img src={foodImage} alt='Looks very delicious meals' />
      </div>
    </>
  )
}

export default Header