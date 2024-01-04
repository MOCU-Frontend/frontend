import React from 'react';
import { colors } from '../../../styles/colors';
import SnackBarBasic from '../atoms/Basic/SnackBarBasic';
import SnackBarBtn from '../atoms/Btn/SnackBarBtn';
import SnackBarBodyText from '../atoms/Text/BodyText/SnackBarBodyText';
import { ReactComponent as CheckCircle } from '../../../assets/icon/checkDefaultSolid.svg';
import styles from './CheckSnackBarWithBtn.module.css';
interface Props {
  bodyText: string;
  btnLabel: string;
  onClickBtn: () => void;
}

const CheckSnackBarWithBtn: React.FC<Props> = ({
  bodyText,
  btnLabel,
  onClickBtn,
}: Props) => {
  return (
    <SnackBarBasic backgroundColor={colors.mainPurple}>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <CheckCircle width={24} height={24} fill={colors.subPurpleLight} />
          <SnackBarBodyText text={bodyText} />
        </div>
        <SnackBarBtn label={btnLabel} onClick={onClickBtn} />
      </div>
    </SnackBarBasic>
  );
};

export default CheckSnackBarWithBtn;
