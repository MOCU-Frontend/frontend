import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './Alarm.module.css';

const Alarm = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn headerTitle='알람' onClickBackBtn={() => navigate(-1)} />
    </div>
  );
};

export { Alarm as Component };
