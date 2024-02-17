import React from 'react';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalTwoBtns from '../atoms/Btn/TwoBtns/ModalTwoBtns';
import ModalHeader from '../atoms/Header/ModalHeader';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import ModalSubText from '../atoms/Text/SubText/ModalSubText';
import styles from './ModalRequest.module.css';
interface Props {
  headerTitle: string;
  bodyText: string;
  sub1Text: string;
  sub2Text: string;
  onClickYes: () => void;
  onClickNo: () => void;
  onClickX: () => void;
}

const ModalRequest: React.FC<Props> = ({
  headerTitle,
  bodyText,
  sub1Text,
  sub2Text,
  onClickYes = () => {},
  onClickNo = () => {},
  onClickX = () => {},
}: Props) => {
  return (
    <ModalBasic>
      <ModalHeader title={headerTitle} onClickXBtn={onClickX} />
      <section className={styles.bodySect}>
        <ModalBodyText text={bodyText} />
        <div className={styles.subSect}>
          <ModalSubText text={sub1Text} size='small' />
          <ModalSubText text={sub2Text} size='small' />
        </div>
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

export default ModalRequest;
