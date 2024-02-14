import React from 'react';
import styles from './TodayMission.module.css';
import Button from '../../Button/Button';

interface Props {
  content: string;
  status: string;
}

const TodayMission: React.FC<Props> = ({ content, status }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.todayMissionText}>{content}</div>
      <Button
        label="미션 수행하기"
        size="small"
        borderRadius="large"
        disabled={status === 'done'}
        disabledBackgroundColor="sub-purple-light"
      />
    </div>
  );
};

export default TodayMission;
