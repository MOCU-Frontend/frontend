import React from 'react';
import styles from './HomeHeader.module.css';
import { ReactComponent as LogoText } from '../../../../assets/icon/logoText.svg';
import { ReactComponent as AlarmIcon } from '../../../../assets/icon/alarm.svg';
import { ReactComponent as SettingIcon } from '../../../../assets/icon/setting.svg';
import { colors } from '../../../../styles/colors';
interface Props {
  onClickAlarmBtn: () => void;
  onClickSettingBtn: () => void;
  alarmNum: number;
}

const HomeHeader: React.FC<Props> = ({
  onClickAlarmBtn,
  onClickSettingBtn,
  alarmNum,
}: Props) => {
  return (
    <header className={styles.header}>
      <LogoText width={49} height={19} fill={colors.white} />
      <div className={styles.iconBtnsWrapper}>
        <button className={styles.iconBtn} onClick={onClickAlarmBtn}>
          <AlarmIcon width={24} height={24} fill={colors.white} />
          {alarmNum > 0 && <div className={styles.badge}>{alarmNum}</div>}
        </button>
        <button className={styles.iconBtn} onClick={onClickSettingBtn}>
          <SettingIcon width={24} height={24} fill={colors.white} />
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
