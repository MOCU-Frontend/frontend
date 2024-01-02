import React from 'react';
import Modal from '../../components/Modal/Modal';
import styles from './Root.module.css';

const Root = () => {
  return (
    <div className={styles.wrapper}>
      root
      <Modal />
    </div>
  );
};

export default Root;
