import React from 'react';
import styles from './TodayMission.module.css';
import Button from '../../Button/Button';
import { missionBtnResponse } from '../../../store/Type/Mission/missionBtnResponse';

interface Props {
  content: string;
  status: string;
  missionCompleteClick: () => void;
  patchData: missionBtnResponse | undefined;
}

const TodayMission: React.FC<Props> = ({
  content,
  status,
  missionCompleteClick,
  patchData,
}: Props) => {
  const isButtonDisabled =
    patchData?.result.content === '이미 2개의 버튼을 완료하였습니다';
  const buttonLabel = isButtonDisabled ? '미션 완료하기' : '적립 완료';

  return (
    <div className={styles.wrapper}>
      <div className={styles.todayMissionText}>{content}</div>
      {status === 'done' && (
        <Button
          label={buttonLabel}
          size="small"
          borderRadius="large"
          disabled={isButtonDisabled}
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
