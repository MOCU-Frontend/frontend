import React from 'react';
import ModalLeftBtn from '../ModalLeftBtn';
import ModalRightBtn from '../ModalRightBtn';
import styles from './ModalTwoBtns.module.css';

interface Props {
  leftBtnLabel: string;
  onClickLeftBtn: () => void;
  rightBtnLabel: string;
  onClickRightBtn: () => void;
}

const ModalTwoBtns: React.FC<Props> = ({
  leftBtnLabel,
  onClickLeftBtn,
  rightBtnLabel,
  onClickRightBtn,
}: Props) => {
  return (
    <div className={styles.btnDiv}>
      <ModalLeftBtn label={leftBtnLabel} onClick={onClickLeftBtn} />
      <ModalRightBtn label={rightBtnLabel} onClick={onClickRightBtn} />
    </div>
  );
};

export default ModalTwoBtns;
