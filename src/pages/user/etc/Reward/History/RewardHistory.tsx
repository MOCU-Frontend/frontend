import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import styles from './RewardHistory.module.css';

interface Props {}

const RewardHistory: React.FC<Props> = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HeaderBackBtn
        headerTitle='최근 혜택 사용 내역'
        onClickBackBtn={() => navigate(-1)}
      />
    </div>
  );
};

export { RewardHistory as Component };
