import React from 'react';
import OwnerInformEditCounterBtnText from '../../Texts/CounterBtn/OwnerInformEditCounterBtnText';
import styles from './OwnerInformEditCounterBtn.module.css';

interface Props {
  label: string;
  onClick: () => void;
}

const OwnerInformEditCounterBtn: React.FC<Props> = ({
  label,
  onClick,
}: Props) => {
  return (
    <button className={styles.wholeWrapper} onClick={onClick}>
      <OwnerInformEditCounterBtnText text={label} />
    </button>
  );
};

export default OwnerInformEditCounterBtn;
