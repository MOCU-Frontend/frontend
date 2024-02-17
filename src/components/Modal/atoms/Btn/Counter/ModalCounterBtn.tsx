import React from 'react';
import ModalCounterText from '../../Text/Counter/ModalCounterText';
import styles from './ModalCounterBtn.module.css';

interface Props {
  label: string;
  onClick: () => void;
}

const ModalCounterBtn: React.FC<Props> = ({ label, onClick }: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <ModalCounterText text={label} />
    </button>
  );
};

export default ModalCounterBtn;
