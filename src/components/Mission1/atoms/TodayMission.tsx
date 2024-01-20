import React from 'react';
import styles from './TodayMission.module.css';
import Button from '../../Button/Button';

interface Props {
  title: string;
}

const TodayMission: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.todayMissionText}>{title}</div>
      <Button label="미션 수행하기" size="small" borderRadius="large" />
    </div>
  );
};

export default TodayMission;
