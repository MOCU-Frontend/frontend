import React from 'react';
import styles from './TodayMission.module.css';
import Button from '../../Button/Button';

interface Props {
  content: string;
  status: string;
  missionCompleteClick: () => void;
}

const TodayMission: React.FC<Props> = ({
  content,
  status,
  missionCompleteClick,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.todayMissionText}>{content}</div>
      {status === 'done' && (
        <Button
          label="미션 완료하기"
          size="small"
          borderRadius="large"
          disabledBackgroundColor="sub-purple-light"
          onClick={missionCompleteClick}
        />
      )}

      {status === 'not-done' && (
        <Button
          label="미션 수행하기"
          size="small"
          borderRadius="large"
          disabledBackgroundColor="sub-purple-light"
        />
      )}
    </div>
  );
};

export default TodayMission;
