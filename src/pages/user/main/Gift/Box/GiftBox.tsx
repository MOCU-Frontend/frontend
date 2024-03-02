import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './GiftBox.module.css';

const GiftBox = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn headerTitle='선물함' onClickBackBtn={() => navigate(-1)} />
    </div>
  );
};

export { GiftBox as Component };
