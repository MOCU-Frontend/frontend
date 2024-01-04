import React from 'react';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalTwoBtns from '../atoms/Btn/TwoBtns/ModalTwoBtns';
import ModalHeader from '../atoms/Header/ModalHeader';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import ModalInformDiv from '../atoms/Text/InformDiv/ModalInformDiv';
import ModalSubText from '../atoms/Text/SubText/ModalSubText';
import styles from './ModalConfirm.module.css';
interface Props {
  headerTitle: string;
  bodyText: string;
  subText?: string;
  informText?: string;
  onClickYes: () => void;
  onClickNo: () => void;
  onClickX: () => void;
}

const ModalConfirm: React.FC<Props> = ({
  headerTitle,
  bodyText,
  subText,
  informText,
  onClickYes = () => {},
  onClickNo = () => {},
  onClickX = () => {},
}: Props) => {
  return (
    <ModalBasic>
      <ModalHeader title={headerTitle} onClickXBtn={onClickX} />
      <section className={styles.bodySect}>
        <ModalBodyText text={bodyText} />
        {subText && !informText && <ModalSubText text={subText} size='small' />}
        {subText && informText && (
          <ModalInformDiv
            subText={subText}
            informText={informText}
            size='medium'
          />
        )}
      </section>
      <div className={styles.modalTwoBtnsWrapper}>
        <ModalTwoBtns
          leftBtnLabel='아니요'
          onClickLeftBtn={onClickNo}
          rightBtnLabel='예'
          onClickRightBtn={onClickYes}
        />
      </div>
    </ModalBasic>
  );
};

export default ModalConfirm;
