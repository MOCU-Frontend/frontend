import React from 'react';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalTwoBtns from '../atoms/Btn/TwoBtns/ModalTwoBtns';
import ModalHeader from '../atoms/Header/ModalHeader';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import ModalDeleteInformText from '../atoms/Text/DeleteInform/ModalDeleteInformText';
import ModalDeleteNextText from '../atoms/Text/DeleteNext/ModalDeleteNextText';
import ModalDeleteSubText from '../atoms/Text/DeleteSub/ModalDeleteSubText';
import styles from './ModalDelete.module.css';
interface Props {
  headerTitle: string;
  bodyText: string;
  subText: string;
  nextText: string;
  informText: string;
  onClickYes: () => void;
  onClickNo: () => void;
  onClickX: () => void;
}

const ModalDelete: React.FC<Props> = ({
  headerTitle,
  bodyText,
  subText,
  nextText,
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
        <div className={styles.subSec}>
          <ModalDeleteSubText text={subText} />
          <ModalDeleteNextText text={nextText} />
        </div>
        <ModalDeleteInformText text={informText} />
        <div className={styles.modalTwoBtnsWrapper}>
          <ModalTwoBtns
            leftBtnLabel='아니요'
            onClickLeftBtn={onClickNo}
            rightBtnLabel='예'
            onClickRightBtn={onClickYes}
          />
        </div>
      </section>
    </ModalBasic>
  );
};

export default ModalDelete;
