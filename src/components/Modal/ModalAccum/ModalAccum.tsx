import React from 'react';
import ModalBasic from '../atoms/Basic/ModalBasic';
import ModalCounterBtn from '../atoms/Btn/Counter/ModalCounterBtn';
import ModalTwoBtns from '../atoms/Btn/TwoBtns/ModalTwoBtns';
import ModalHeader from '../atoms/Header/ModalHeader';
import ModalBodyText from '../atoms/Text/BodyText/ModalBodyText';
import ModalCounterNumText from '../atoms/Text/CounterNum/ModalCounterNumText';
import styles from './ModalAccum.module.css';
interface Props {
  headerTitle: string;
  bodyText: string;
  onClickYes: () => void;
  onClickNo: () => void;
  onClickX: () => void;
  accumNum: number;
  handlePlusAccumNum: () => void;
  handleMinusAccumNum: () => void;
}

const ModalAccum: React.FC<Props> = ({
  headerTitle,
  bodyText,
  accumNum,
  handleMinusAccumNum,
  handlePlusAccumNum,
  onClickYes = () => {},
  onClickNo = () => {},
  onClickX = () => {},
}: Props) => {
  return (
    <ModalBasic>
      <ModalHeader title={headerTitle} onClickXBtn={onClickX} />
      <section className={styles.bodySect}>
        <ModalBodyText text={bodyText} />
        <div className={styles.counterSect}>
          <ModalCounterBtn onClick={handleMinusAccumNum} label='-' />
          <div className={styles.counterNumCircle}>
            <ModalCounterNumText text={`${accumNum}개`} />
          </div>
          <ModalCounterBtn onClick={handlePlusAccumNum} label='+' />
        </div>
      </section>
      <div className={styles.modalTwoBtnsWrapper}>
        <ModalTwoBtns
          leftBtnLabel='취소'
          onClickLeftBtn={onClickNo}
          rightBtnLabel='적립'
          onClickRightBtn={onClickYes}
        />
      </div>
    </ModalBasic>
  );
};

export default ModalAccum;
