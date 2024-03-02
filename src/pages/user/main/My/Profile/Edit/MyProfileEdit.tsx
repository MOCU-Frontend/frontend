import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './MyProfileEdit.module.css';

const MyProfileEdit = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='프로필 수정'
        onClickBackBtn={() => navigate(-1)}
      />
    </div>
  );
};

export { MyProfileEdit as Component };
