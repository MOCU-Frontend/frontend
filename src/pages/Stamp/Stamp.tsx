import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Stamp.module.css';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';

const Stamp = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <HeaderBackBtn
        onClickBackBtn={() => navigate('/home')}
        headerTitle="적립 현황"
      />

      <div className={styles.wrapFilter}></div>
    </div>
  );
};

export default Stamp;
