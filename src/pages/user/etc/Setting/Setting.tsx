import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './Setting.module.css';

const Setting = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn headerTitle='설정' onClickBackBtn={() => navigate(-1)} />
    </div>
  );
};

export { Setting as Component };
