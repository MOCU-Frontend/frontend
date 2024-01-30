import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './MyProfileEdit.module.css';

interface Props {}

const MyProfileEdit: React.FC<Props> = ({}: Props) => {
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

export default MyProfileEdit;
