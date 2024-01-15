import React from 'react';
import { colors } from '../../../../../../../styles/colors';
import MyLocationEditLocSetBtnText from '../../Texts/LocSetBtn/MyLocationEditLocSetBtnText';
import styles from './MyLocationEditLocSetBtn.module.css';
type LocSetData = {
  name: '집' | '회사' | '학교' | '기타';
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isChecked: boolean;
  etcName?: string;
};

interface Props {
  locSetData: LocSetData;
  onClick: () => void;
}

const MyLocationEditLocSetBtn: React.FC<Props> = ({
  locSetData: { name, Icon, isChecked },
  onClick,
}: Props) => {
  return (
    <button
      className={isChecked ? styles.checkedBtn : styles.notCheckedBtn}
      onClick={onClick}
    >
      <Icon
        width={24}
        height={24}
        fill={isChecked ? colors.white : colors.grey}
      />
      <MyLocationEditLocSetBtnText
        text={name}
        color={isChecked ? colors.white : colors.grey}
      />
    </button>
  );
};

export default MyLocationEditLocSetBtn;
