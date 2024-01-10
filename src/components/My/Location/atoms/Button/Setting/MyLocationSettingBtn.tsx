import React from 'react';
import styles from './MyLocationSettingBtn.module.css';
import { ReactComponent as TargetIcon } from '../../../../../../assets/icon/now.svg';
import { colors } from '../../../../../../styles/colors';
import MyLocationSettingText from '../../Text/Setting/MyLocationSettingText';
interface Props {
  onClick: () => void;
}

const MyLocationSettingBtn: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <TargetIcon width={24} height={24} fill={colors.mainPurple} />
      <MyLocationSettingText text='현재 위치 재설정' />
    </button>
  );
};

export default MyLocationSettingBtn;
