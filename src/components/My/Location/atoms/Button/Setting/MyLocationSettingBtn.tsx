import React from 'react';
import styles from './MyLocationSettingBtn.module.css';
import { ReactComponent as TargetIcon } from '../../../../../../assets/icon/now.svg';
import MyLocationSettingText from '../../Text/Setting/MyLocationSettingText';
interface Props {
  onClick: () => void;
  text: string;
  color: string;
}

const MyLocationSettingBtn: React.FC<Props> = ({
  onClick,
  text,
  color,
}: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <TargetIcon width={24} height={24} fill={color} />
      <MyLocationSettingText text={text} color={color} />
    </button>
  );
};

export default MyLocationSettingBtn;
