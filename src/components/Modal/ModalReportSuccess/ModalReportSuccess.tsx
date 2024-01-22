import React from 'react';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import ModalSubText from '../atoms/Text/SubText/ModalSubText';
import styles from './ModalReportSuccess.module.css';
import { ReactComponent as CheckIcon } from '../../../assets/icon/checkDefaultSolid.svg';
import { colors } from '../../../styles/colors';
interface Props {
  bodyText: string;
  subText1: string;
  subText2: string;
}

const ModalReportSuccess: React.FC<Props> = ({
  bodyText,
  subText1,
  subText2,
}: Props) => {
  return (
    <ModalBasic>
      <div className={styles.wholeWrapper}>
        <ModalBodyText text={bodyText} />
        <CheckIcon width={48} height={48} fill={colors.subPurpleLight} />
        <div className={styles.subWrapper}>
          <ModalSubText text={subText1} size='medium' />
          <ModalSubText text={subText2} size='medium' />
        </div>
      </div>
    </ModalBasic>
  );
};

export default ModalReportSuccess;
