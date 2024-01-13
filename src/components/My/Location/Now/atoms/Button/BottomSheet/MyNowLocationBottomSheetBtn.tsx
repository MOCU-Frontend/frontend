import React from 'react';
import styles from './MyNowLocationBottomSheetBtn.module.css';
import { ReactComponent as ChangeIcon } from '../../../../../../../assets/icon/change.svg';
import { colors } from '../../../../../../../styles/colors';
import MyNowLocationBottomSheetButtonText from '../../Texts/BottomSheetBtn/MyNowLocationBottomSheetButtonText';
interface Props {
  btnText: string;
  onClick: () => void;
}

const MyNowLocationBottomSheetBtn: React.FC<Props> = ({
  btnText,
  onClick,
}: Props) => {
  return (
    <button onClick={onClick} className={styles.btnWrapper}>
      <ChangeIcon width={24} height={24} stroke={colors.grey} />
      <MyNowLocationBottomSheetButtonText text={btnText} />
    </button>
  );
};

export default MyNowLocationBottomSheetBtn;
