import React from 'react';
import { colors } from '../../../styles/colors';
import SnackBarBasic from '../atoms/Basic/SnackBarBasic';
import SnackBarBodyText from '../atoms/Text/BodyText/SnackBarBodyText';
import { ReactComponent as CheckCircle } from '../../../assets/icon/checkDefaultSolid.svg';
import styles from './CheckSnackBar.module.css';
interface Props {
  bodyText: string;
}

const CheckSnackBar: React.FC<Props> = ({ bodyText }: Props) => {
  return (
    <SnackBarBasic backgroundColor={colors.mainPurple}>
      <div className={styles.wrapper}>
        <CheckCircle width={24} height={24} fill={colors.subPurpleLight} />
        <SnackBarBodyText text={bodyText} />
      </div>
    </SnackBarBasic>
  );
};

export default CheckSnackBar;
