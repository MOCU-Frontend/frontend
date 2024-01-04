import React from 'react';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import ModalSubText from '../atoms/Text/SubText/ModalSubText';
import styles from './ModalDone.module.css';
import { ReactComponent as Check } from '../../../assets/icon/checkDefaultSolid.svg';
import ModalInformDiv from '../atoms/Text/InformDiv/ModalInformDiv';
import { colors } from '../../../styles/colors';
import ModalTwoBtns from '../atoms/Btn/TwoBtns/ModalTwoBtns';

interface Props {
  bodyText: string;
  bodySubText: string;
  subText: string;
  informText: string;
  leftBtnLabel: string;
  rightBtnLabel: string;
  onClickLeftBtn: () => void;
  onClickRightBtn: () => void;
}

const ModalDone: React.FC<Props> = ({
  bodyText,
  bodySubText,
  subText,
  informText,
  leftBtnLabel,
  rightBtnLabel,
  onClickLeftBtn,
  onClickRightBtn,
}: Props) => {
  return (
    <ModalBasic>
      <div className={styles.wholeWrapper}>
        <ModalBodyText text={bodyText} />
        <ModalSubText text={bodySubText} size='medium' />
        <Check width={48} height={48} fill={colors.subPurpleLight} />
        <ModalInformDiv
          subText={subText}
          informText={informText}
          size='small'
        />
        <ModalTwoBtns
          leftBtnLabel={leftBtnLabel}
          onClickLeftBtn={onClickLeftBtn}
          rightBtnLabel={rightBtnLabel}
          onClickRightBtn={onClickRightBtn}
        />
      </div>
    </ModalBasic>
  );
};

export default ModalDone;
