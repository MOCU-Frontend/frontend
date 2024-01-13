import React, { useState } from 'react';
import styles from './Mission2.module.css';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';

import { useNavigate } from 'react-router-dom';
import { colors } from '../../styles/colors';

const Mission2 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapHeader}>
        <HeaderBackBtn
          backBtnSize={24}
          backBtnColor="white"
          headerTitle="미션"
          headerTitleColor="white"
          onClickBackBtn={() => navigate('/home')}
          backBtnbackgroundColor={colors.mapPurple}
        />
      </div>
    </div>
  );
};

export default Mission2;
