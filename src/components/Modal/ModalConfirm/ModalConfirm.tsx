import React from 'react';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalTwoBtns from '../atoms/Btn/TwoBtns/ModalTwoBtns';
import ModalHeader from '../atoms/Header/ModalHeader';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import ModalInformDiv from '../atoms/Text/InformDiv/ModalInformDiv';
import styles from './ModalConfirm.module.css';
interface Props {
  headerTitle: string;
  bodyText?: string;
  subText?: string;
  informText?: string;
  onClickYes?: () => void;
  onClickNo?: () => void;
}

const ModalConfirm: React.FC<Props> = ({
  headerTitle,
  bodyText,
  subText,
  informText,
  onClickYes = () => {},
  onClickNo = () => {},
}: Props) => {
  return (
    <ModalBasic>
      <ModalHeader title={headerTitle} onClickXBtn={() => {}} />
      <section className={styles.bodySect}>
        {bodyText && <ModalBodyText text={bodyText} />}
        {subText && informText && (
          <ModalInformDiv
            subText={subText}
            informText={informText}
            size={'medium'}
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