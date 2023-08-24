import React from 'react';
import styles from './CartModal.module.scss';
import Portal from '../Portal/Portal';
const Backdrop = ({onHideCart}) => {
  return <div className={styles.backdrop} onClick={onHideCart}/>;
};
const ModalOverlay=({children})=>{
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}
const CartModal = ({children,onHideCart}) => {
  return (
    <>
    <Portal destId={'backdrop-root'}>
      <Backdrop onHideCart={onHideCart}/>
    </Portal>
    <Portal destId={'overlay-root'}>
      <ModalOverlay>{children}</ModalOverlay>
    </Portal>
    </>
  );
};

export default CartModal;
