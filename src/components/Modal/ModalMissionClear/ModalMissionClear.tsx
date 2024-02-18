import React, { useEffect, useState } from 'react';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import styles from './ModalMissionClear.module.css';
import { ReactComponent as Rocket } from '../../../assets/icon/rocketGradationUnion.svg';
import ModalMissionSubText from '../atoms/Text/MissionSubText/ModalMissionSubText';
import ModalTimerText from '../atoms/Text/TimerText/ModalTimerText';
interface Props {
  bodyText: string;
  subText: string;
  time?: number;
  onEndTimer: () => void;
}

const ModalMissionClear: React.FC<Props> = ({
  bodyText,
  subText,
  time = 2,
  onEndTimer,
}: Props) => {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    let localCnt = 0;
    const timer = setInterval(() => {
      localCnt++;
      if (localCnt >= time) {
        onEndTimer();
        clearInterval(timer);
      }
      setCnt(localCnt);
    }, 1000);
  }, []);

  return (
    <ModalBasic>
      <div className={styles.wholeWrapper}>
        <ModalBodyText text={bodyText} />
        <ModalMissionSubText text={subText} />
        <Rocket width={80} height={80} />
      </div>
      <div className={styles.timerWrapper}>
        <ModalTimerText text={`${time - cnt}초 후 알림창이 사라집니다.`} />
      </div>
    </ModalBasic>
  );
};

export default ModalMissionClear;
